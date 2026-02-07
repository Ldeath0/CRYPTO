 -- EXTENSIONES NECESARIAS
create extension if not exists "uuid-ossp";

-- 1. TABLA DE NIVELES VIP (Configuración del Sistema)
create table public.vip_levels (
    id serial primary key,
    name text not null,
    commission_rate numeric(10, 4) not null, -- Ejemplo: 0.0250 para 2.5%
    daily_order_limit int not null default 10,
    min_balance_required numeric(12, 2) not null default 0,
    image_url text
);

-- Insertar niveles de ejemplo
insert into public.vip_levels (name, commission_rate, daily_order_limit, min_balance_required) values
('VIP 1', 0.015, 10, 0),
('VIP 2', 0.020, 20, 500),
('VIP 3', 0.025, 30, 2000);

-- 2. TABLA DE PERFILES DE USUARIO (Extiende auth.users)
create table public.profiles (
    id uuid references auth.users not null primary key,
    username text,
    vip_level_id int references public.vip_levels(id) default 1,
    balance numeric(12, 2) default 0.00 check (balance >= 0),
    frozen_balance numeric(12, 2) default 0.00,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Habilitar RLS
alter table public.profiles enable row level security;

-- Políticas RLS
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);

-- NOTA: No permitimos UPDATE directo al balance desde el cliente.
-- Se usará RPC (Remote Procedure Calls) para seguridad.

-- 3. TABLA DE ORDENES/TAREAS
create type order_status as enum ('pending', 'completed', 'frozen', 'cancelled');

create table public.orders (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) not null,
    product_name text not null,
    product_image text,
    product_price numeric(12, 2) not null,
    commission numeric(12, 2) not null,
    status order_status default 'pending',
    created_at timestamptz default now()
);

-- Habilitar RLS
alter table public.orders enable row level security;

create policy "Users can view own orders" on public.orders
  for select using (auth.uid() = user_id);

-- 4. FUNCIÓN SEGURA PARA COMPLETAR TAREA (Transaction)
-- Esta función se llama desde el cliente: supabase.rpc('complete_order', { order_id: '...' })
create or replace function complete_order(order_identifier uuid)
returns void as $$
declare
  v_order record;
  v_user_balance numeric;
begin
  -- Obtener la orden y bloquear fila
  select * from public.orders where id = order_identifier and user_id = auth.uid() for update into v_order;
  
  if v_order is null then
    raise exception 'Orden no encontrada o no pertenece al usuario';
  end if;

  if v_order.status != 'pending' then
    raise exception 'La orden ya ha sido procesada';
  end if;

  -- Actualizar estado de orden
  update public.orders set status = 'completed' where id = order_identifier;

  -- Actualizar saldo del usuario (Atomic Update)
  update public.profiles 
  set balance = balance + v_order.commission + v_order.product_price, -- Asumiendo que el principal retorna + comisión
      frozen_balance = frozen_balance - v_order.product_price -- Si se congeló previamente
  where id = auth.uid();
  
end;
$$ language plpgsql security definer;
-- 'security definer' permite que la función corra con permisos de admin, 
-- bypasseando RLS solo para esta lógica controlada.

-- 5. REALTIME
-- Supabase habilita Realtime por tabla desde el dashboard o SQL replication.
-- Ejecutar en SQL Editor de Supabase:
alter publication supabase_realtime add table public.profiles;
alter publication supabase_realtime add table public.orders;

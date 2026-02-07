import React, { useState, useEffect } from 'react';
import { Bell, CreditCard, Share2, Crown, Zap, Home, List, User } from 'lucide-react';
// import { useUserStore } from '../store/userStore'; // Assuming global state

/**
 * Dashboard Component - USU789 Clone style
 * Mobile-first design, Dark/Neon aesthetic
 */
const Dashboard = () => {
    // Mock data simulating Supabase Realtime subscription
    const [balance, setBalance] = useState(1250.50);
    const [vipLevel, setVipLevel] = useState('VIP 1');
    const [loadingTask, setLoadingTask] = useState(false);

    // Handlers
    const handleStartGrabbing = () => {
        setLoadingTask(true);
        // Simulate API/RPC call latency
        setTimeout(() => {
            setLoadingTask(false);
            setBalance(prev => prev + 2.50); // Optimistic update
            alert("¡Tarea completada! Comisión recibida: $2.50");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans pb-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-900 via-slate-900 to-slate-900 opacity-50 z-0"></div>
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-pink-500 rounded-full blur-[80px] opacity-20"></div>

            {/* Header Section */}
            <header className="relative z-10 p-5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-black border-2 border-white/20">
                        U
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Bienvenido, User789</span>
                        <span className="font-bold text-yellow-400 text-sm flex items-center gap-1">
                            <Crown size={12} fill="currentColor" /> {vipLevel}
                        </span>
                    </div>
                </div>
                <button className="relative p-2 bg-slate-800/50 rounded-full backdrop-blur-sm hover:bg-slate-700 transition">
                    <Bell size={20} className="text-gray-300" />
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-gray-900"></span>
                </button>
            </header>

            {/* Balance Card */}
            <section className="relative z-10 px-5 mt-2">
                <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-6 shadow-lg shadow-purple-900/30 border border-white/10 transform transition active:scale-95">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                            <span className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">Saldo Total</span>
                            <h1 className="text-4xl font-extrabold text-white mt-1">
                                ${balance.toFixed(2)}
                            </h1>
                        </div>
                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                            <CreditCard size={24} className="text-white" />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between gap-4">
                        <ActionButton icon={<CreditCard size={18} />} label="Recargar" variant="primary" />
                        <ActionButton icon={<Share2 size={18} />} label="Invitar" variant="secondary" />
                    </div>
                </div>
            </section>

            {/* Notification Ticker */}
            <div className="px-5 mt-6 mb-2">
                <div className="bg-slate-800/60 rounded-full py-2 px-4 flex items-center gap-3 backdrop-blur-sm border border-white/5">
                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded font-bold">LIVE</span>
                    <p className="text-xs text-gray-300 truncate">
                        Usuario **9283 acaba de retirar $500.00 con éxito.
                    </p>
                </div>
            </div>

            {/* Main Action Area (The "Grab" Button) */}
            <section className="px-5 mt-8 flex flex-col items-center justify-center">
                <div className="relative group cursor-pointer" onClick={handleStartGrabbing}>
                    {/* Animated Glow Rings */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${loadingTask ? 'animate-pulse' : ''}`}></div>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-purple-500/30 rounded-full ${loadingTask ? 'animate-spin-slow' : ''}`}></div>

                    {/* Central Button */}
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-b from-slate-800 to-black border-4 border-slate-700 shadow-[0_0_30px_rgba(168,85,247,0.4)] flex flex-col items-center justify-center z-10 active:scale-95 transition-transform duration-200">
                        {loadingTask ? (
                            <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <>
                                <Zap size={32} className="text-yellow-400 mb-1 drop-shadow-md" fill="currentColor" />
                                <span className="font-bold text-white text-sm uppercase tracking-wide">Iniciar</span>
                            </>
                        )}
                    </div>
                </div>
                <p className="mt-6 text-center text-gray-400 text-sm max-w-[200px] leading-relaxed">
                    Toca para obtener tareas y ganar comisiones <span className="text-yellow-400">VIP</span>
                </p>
            </section>

            {/* Stats Grid */}
            <section className="px-5 mt-10 grid grid-cols-2 gap-4">
                <StatItem label="Ganancia Hoy" value="$12.50" color="text-green-400" />
                <StatItem label="Tareas/Día" value="5/10" color="text-blue-400" />
                <StatItem label="Equipo" value="24" color="text-purple-400" />
                <StatItem label="Congelado" value="$0.00" color="text-gray-400" />
            </section>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur-lg border-t border-white/5 py-2 px-6 flex justify-between items-center z-50 safe-area-bottom">
                <NavItem icon={<Home size={24} />} label="Inicio" active />
                <NavItem icon={<Zap size={24} />} label="Tareas" />
                <NavItem icon={<List size={24} />} label="Historial" />
                <NavItem icon={<User size={24} />} label="Perfil" />
            </nav>
        </div>
    );
};

// Sub-components
const ActionButton = ({ icon, label, variant }) => {
    const bgClass = variant === 'primary'
        ? 'bg-white text-indigo-900 hover:bg-gray-100'
        : 'bg-indigo-800/50 text-white border border-indigo-500/30 hover:bg-indigo-800/70';

    return (
        <button className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all ${bgClass}`}>
            {icon}
            {label}
        </button>
    );
};

const StatItem = ({ label, value, color }) => (
    <div className="bg-slate-800/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <p className={`font-mono font-bold text-lg ${color}`}>{value}</p>
    </div>
);

const NavItem = ({ icon, label, active }) => (
    <button className={`flex flex-col items-center gap-1 p-2 ${active ? 'text-purple-400' : 'text-gray-500 hover:text-gray-300'}`}>
        {icon}
        <span className="text-[10px] font-medium">{label}</span>
    </button>
);

export default Dashboard;

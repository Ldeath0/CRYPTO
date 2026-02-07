import React from 'react';
import StatsCard from '../components/dashboard/StatsCard';
import MiningChart from '../components/dashboard/MiningChart';
import RecentActivity from '../components/dashboard/RecentActivity';
import { Wallet, Activity, Zap, TrendingUp } from 'lucide-react';
import '../components/dashboard/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="container dashboard-container">
            <div className="dashboard-header">
                <div className="dashboard-greeting">
                    <h1>Hola, Minero</h1>
                    <p>Aquí tienes el resumen de tu rendimiento hoy.</p>
                </div>
                <div className="dashboard-actions">
                    {/* Actions like "Deposit" or "Withdraw" could go here */}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mb-8">
                <StatsCard
                    title="Balance Total"
                    value="0.2458"
                    unit="BTC"
                    icon={Wallet}
                    change="+12.5%"
                    changeType="positive"
                    subtext="≈ $11,450.20 USD"
                />
                <StatsCard
                    title="Ganancias Hoy"
                    value="0.0012"
                    unit="BTC"
                    icon={Activity}
                    change="+2.4%"
                    changeType="positive"
                    subtext="≈ $55.80 USD"
                />
                <StatsCard
                    title="Hash Rate Actual"
                    value="145.2"
                    unit="TH/s"
                    icon={Zap}
                    change="+5.0%"
                    changeType="positive"
                    subtext="Estable"
                />
                <StatsCard
                    title="ROI Estimado"
                    value="156"
                    unit="%"
                    icon={TrendingUp}
                    subtext="Anualizado"
                />
            </div>

            {/* Charts & Activity Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
                <div className="lg:col-span-2">
                    <MiningChart />
                </div>
                <div className="lg:col-span-1">
                    <RecentActivity />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';
import './Dashboard.css';

const data = [
    { time: '00:00', hashrate: 40, earnings: 24 },
    { time: '04:00', hashrate: 45, earnings: 28 },
    { time: '08:00', hashrate: 42, earnings: 35 },
    { time: '12:00', hashrate: 55, earnings: 45 },
    { time: '16:00', hashrate: 52, earnings: 42 },
    { time: '20:00', hashrate: 58, earnings: 50 },
    { time: '23:59', hashrate: 65, earnings: 55 },
];

const MiningChart = () => {
    return (
        <Card className="chart-card">
            <div className="chart-header">
                <h3 className="chart-title">Rendimiento de Minería</h3>
                <div className="chart-actions">
                    {/* Simulated time range toggles could go here */}
                    <span className="badge active">24h</span>
                    <span className="badge">1w</span>
                    <span className="badge">1m</span>
                </div>
            </div>

            <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorHashrate" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                        <XAxis
                            dataKey="time"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 12 }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#151A21',
                                border: '1px solid #2D3748',
                                borderRadius: '8px'
                            }}
                            itemStyle={{ color: '#E0E6ED' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="hashrate"
                            stroke="#00E5FF"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorHashrate)"
                            name="Hashrate (TH/s)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default MiningChart;

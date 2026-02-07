import React from 'react';
import Card from '../ui/Card';
import { ArrowUpRight, ArrowDownLeft, Pickaxe, Wallet } from 'lucide-react';
import './Dashboard.css';

const activities = [
    {
        type: 'mining',
        title: 'Mining Payout',
        date: 'Hoy, 08:30 AM',
        amount: '+0.0012 BTC',
        status: 'completed'
    },
    {
        type: 'deposit',
        title: 'Deposit Received',
        date: 'Ayer, 14:20 PM',
        amount: '+0.05 BTC',
        status: 'completed'
    },
    {
        type: 'withdrawal',
        title: 'Withdrawal to External Wallet',
        date: '05 Feb, 10:15 AM',
        amount: '-0.015 BTC',
        status: 'completed'
    },
    {
        type: 'mining',
        title: 'Mining Payout',
        date: '04 Feb, 08:30 AM',
        amount: '+0.0011 BTC',
        status: 'completed'
    }
];

const RecentActivity = () => {
    const getIcon = (type) => {
        switch (type) {
            case 'mining': return <Pickaxe size={20} />;
            case 'deposit': return <ArrowDownLeft size={20} />;
            case 'withdrawal': return <ArrowUpRight size={20} />;
            default: return <Wallet size={20} />;
        }
    };

    const getAmountClass = (amount) => {
        return amount.startsWith('+') ? 'positive' : 'negative';
    };

    return (
        <Card className="activity-card">
            <div className="stats-header">
                <span className="stats-title">Actividad Reciente</span>
            </div>

            <div className="activity-list">
                {activities.map((item, index) => (
                    <div key={index} className="activity-item">
                        <div className="flex items-center">
                            <div className="activity-icon-wrapper">
                                {getIcon(item.type)}
                            </div>
                            <div className="activity-info">
                                <span className="activity-title">{item.title}</span>
                                <span className="activity-date">{item.date}</span>
                            </div>
                        </div>
                        <div className={`activity-amount ${getAmountClass(item.amount)}`}>
                            {item.amount}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default RecentActivity;

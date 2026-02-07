import React from 'react';
import Card from '../ui/Card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import './Dashboard.css';

const StatsCard = ({ title, value, unit, icon: Icon, change, changeType = 'positive', subtext }) => {
    return (
        <Card className="stats-card">
            <div className="stats-header">
                <span className="stats-title">{title}</span>
                {Icon && <Icon size={20} className="stats-icon" />}
            </div>

            <div className="stats-body">
                <div className="stats-value-wrapper">
                    <span className="stats-value">{value}</span>
                    {unit && <span className="stats-unit">{unit}</span>}
                </div>

                <div className="stats-footer">
                    {change && (
                        <div className={`stats-change ${changeType}`}>
                            {changeType === 'positive' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                            <span>{change}</span>
                        </div>
                    )}
                    {subtext && <span className="stats-subtext">{subtext}</span>}
                </div>
            </div>
        </Card>
    );
};

export default StatsCard;

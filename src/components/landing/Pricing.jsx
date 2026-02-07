import React from 'react';
import { Check, X } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import './Pricing.css';

const plans = [
    {
        name: 'Básico',
        price: '29',
        period: '/mes',
        hashrate: '10 TH/s',
        features: [
            'Minería 24/7',
            'Soporte por Email',
            'Retiros semanales',
            'Estadísticas básicas',
            'Sin comisión de mantenimiento'
        ],
        notIncluded: ['Asesor personal', 'API Access'],
        recommended: false
    },
    {
        name: 'Pro',
        price: '99',
        period: '/mes',
        hashrate: '45 TH/s',
        features: [
            'Minería 24/7',
            'Soporte Prioritario 24/7',
            'Retiros diarios',
            'Dashboard avanzado',
            'Sin comisión de mantenimiento',
            'API Access'
        ],
        notIncluded: ['Asesor personal'],
        recommended: true
    },
    {
        name: 'Elite',
        price: '299',
        period: '/mes',
        hashrate: '150 TH/s',
        features: [
            'Minería 24/7',
            'Soporte VIP dedicado',
            'Retiros instantáneos',
            'Dashboard avanzado',
            'Sin comisión de mantenimiento',
            'API Access',
            'Asesor personal de inversión'
        ],
        notIncluded: [],
        recommended: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="section pricing">
            <div className="pricing-bg-element"></div>
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Nuestros Planes</h2>
                    <p className="section-subtitle">Potencia de minado flexible para cada necesidad</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
                        >
                            {plan.recommended && <div className="recommended-badge">Más Popular</div>}

                            <div className="plan-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                <div className="plan-price">
                                    <span className="currency">$</span>
                                    <span className="amount">{plan.price}</span>
                                    <span className="period">{plan.period}</span>
                                </div>
                                <div className="plan-hashrate">
                                    Potencia: <span className="text-primary">{plan.hashrate}</span>
                                </div>
                            </div>

                            <div className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="feature-item">
                                        <Check size={18} className="feature-icon check" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map((feature, i) => (
                                    <div key={i} className="feature-item muted">
                                        <X size={18} className="feature-icon cross" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="plan-action">
                                <Button
                                    variant={plan.recommended ? 'primary' : 'outline'}
                                    className="w-full"
                                >
                                    Elegir Plan
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

import React from 'react';
import { UserPlus, Cpu, BarChart3, ArrowRight } from 'lucide-react';
import './HowItWorks.css';

const steps = [
    {
        icon: <UserPlus size={32} />,
        title: '1. Crea tu Cuenta',
        description: 'Regístrate en segundos y verifica tu identidad. Acceso inmediato a tu panel de control seguro.',
        color: '#00E5FF'
    },
    {
        icon: <Cpu size={32} />,
        title: '2. Elige un Plan',
        description: 'Selecciona la potencia de minado que se ajuste a tus objetivos. Desde iniciantes hasta inversores expertos.',
        color: '#7B61FF'
    },
    {
        icon: <BarChart3 size={32} />,
        title: '3. Recibe Ganancias',
        description: 'El sistema minará automáticamente. Retira tus ganancias diarias a tu billetera preferida.',
        color: '#10B981'
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="section how-it-works">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">¿Cómo Funciona?</h2>
                    <p className="section-subtitle">Empieza a minar en 3 simples pasos</p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-icon-wrapper" style={{ borderColor: step.color, boxShadow: `0 0 20px ${step.color}40` }}>
                                <div className="step-icon" style={{ color: step.color }}>
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.description}</p>

                            {index < steps.length - 1 && (
                                <div className="step-arrow desktop-only">
                                    <ArrowRight size={24} color="var(--color-text-muted)" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

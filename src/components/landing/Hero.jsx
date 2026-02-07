import React from 'react';
import { ArrowRight, Play, Zap } from 'lucide-react';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-glow"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <Zap size={16} className="hero-badge-icon" />
                        <span>Nueva tecnología de minería V2.0</span>
                    </div>

                    <h1 className="hero-title">
                        Minería de Cripto <br />
                        <span className="text-gradient">Inteligente y Rentable</span>
                    </h1>

                    <p className="hero-subtitle">
                        Maximiza tus ganancias con nuestra plataforma de minería en la nube impulsada por IA.
                        Sin hardware costoso, sin ruido, solo resultados diarios.
                    </p>

                    <div className="hero-actions">
                        <Button variant="primary" size="lg" className="hero-btn">
                            Comenzar Ahora <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </Button>
                        <Button variant="outline" size="lg" className="hero-btn">
                            <Play size={20} style={{ marginRight: '0.5rem' }} /> Ver Demo
                        </Button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-value">50k+</span>
                            <span className="stat-label">Usuarios Activos</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-value">$12M+</span>
                            <span className="stat-label">Pagados</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-value">99.9%</span>
                            <span className="stat-label">Uptime</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-card-wrapper">
                        <div className="visual-card">
                            <div className="card-header">
                                <div className="coin-icon btc">₿</div>
                                <div className="coin-info">
                                    <span className="coin-name">Bitcoin</span>
                                    <span className="coin-price text-success">+5.24%</span>
                                </div>
                            </div>
                            <div className="card-graph">
                                {/* Simulated graph lines */}
                                <svg viewBox="0 0 200 60" className="graph-svg">
                                    <path d="M0,50 C20,40 40,55 60,30 S100,20 120,40 S160,10 200,20" fill="none" stroke="var(--color-primary)" strokeWidth="3" />
                                    <path d="M0,50 C20,40 40,55 60,30 S100,20 120,40 S160,10 200,20 V60 H0 Z" fill="url(#gradient)" opacity="0.2" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="var(--color-primary)" />
                                            <stop offset="100%" stopColor="transparent" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="card-footer">
                                <span>Mining Speed</span>
                                <span className="text-secondary">145.2 TH/s</span>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="float-card float-1">
                            <span>Ganancia Diaria</span>
                            <span className="text-success">+$124.50</span>
                        </div>
                        <div className="float-card float-2">
                            <Zap size={20} color="#FFD700" fill="#FFD700" />
                            <span>Auto-Withdraw</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

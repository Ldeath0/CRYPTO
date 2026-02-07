import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Hexagon, Github, Chrome } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Auth.css';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <div className="auth-container">
            <div className="auth-bg-glow"></div>

            <div className="auth-header">
                <Link to="/" className="logo">
                    <Hexagon className="logo-icon" size={40} />
                    <span className="logo-text text-2xl">MetaMiner</span>
                </Link>
            </div>

            <Card className="auth-card">
                <div className="text-center mb-8">
                    <h1 className="auth-title">Crear Cuenta</h1>
                    <p className="auth-subtitle">Empieza a minar hoy mismo</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre Completo</label>
                        <div className="input-has-icon">
                            <User size={18} className="input-icon" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Juan Pérez"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-has-icon">
                            <Mail size={18} className="input-icon" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="nombre@ejemplo.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <div className="input-has-icon">
                            <Lock size={18} className="input-icon" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Crear una contraseña segura"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <div className="input-has-icon">
                            <Lock size={18} className="input-icon" />
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Repite tu contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="checkbox" id="terms" required style={{ width: 'auto' }} />
                        <label htmlFor="terms" style={{ fontSize: '0.85rem' }}>
                            Acepto los <a href="#" className="text-primary">Términos y Condiciones</a>
                        </label>
                    </div>

                    <Button
                        variant="primary"
                        className="w-full mt-2"
                        disabled={loading}
                    >
                        {loading ? 'Creando cuenta...' : 'Registrarse'}
                    </Button>
                </form>

                <div className="auth-divider">
                    <span>O regístrate con</span>
                </div>

                <div className="social-auth">
                    <Button variant="outline" className="w-full">
                        <Chrome size={18} style={{ marginRight: '0.5rem' }} /> Google
                    </Button>
                    <Button variant="outline" className="w-full">
                        <Github size={18} style={{ marginRight: '0.5rem' }} /> GitHub
                    </Button>
                </div>

                <div className="auth-footer text-center mt-6">
                    <p>
                        ¿Ya tienes una cuenta?{' '}
                        <Link to="/login" className="text-primary font-bold">
                            Inicia Sesión
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Register;

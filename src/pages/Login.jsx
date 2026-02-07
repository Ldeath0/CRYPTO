import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Hexagon, Github, Chrome } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Auth.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
                    <h1 className="auth-title">Bienvenido de nuevo</h1>
                    <p className="auth-subtitle">Ingresa a tu panel de control</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
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
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="password" style={{ marginBottom: 0 }}>Contraseña</label>
                            <Link to="/forgot-password" style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                        <div className="input-has-icon">
                            <Lock size={18} className="input-icon" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <Button
                        variant="primary"
                        className="w-full mt-4"
                        disabled={loading}
                    >
                        {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                    </Button>
                </form>

                <div className="auth-divider">
                    <span>O continúa con</span>
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
                        ¿No tienes una cuenta?{' '}
                        <Link to="/register" className="text-primary font-bold">
                            Regístrate
                        </Link>
                    </p>
                </div>
            </Card>

            <p className="copyright mt-8 text-muted text-sm">
                &copy; {new Date().getFullYear()} MetaMiner. Todos los derechos reservados.
            </p>
        </div>
    );
};

export default Login;

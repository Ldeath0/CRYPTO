import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Hexagon } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <Hexagon className="logo-icon" size={24} />
                            <span>MetaMiner</span>
                        </div>
                        <p className="footer-desc">
                            Plataforma líder en minería de criptomonedas e inversión inteligente.
                            Rentabilidad asegurada y tecnología de punta.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h3>Plataforma</h3>
                        <a href="#">Cómo Funciona</a>
                        <a href="#">Precios</a>
                        <a href="#">Estadísticas</a>
                        <a href="#">Seguridad</a>
                    </div>

                    <div className="footer-links-group">
                        <h3>Empresa</h3>
                        <a href="#">Sobre Nosotros</a>
                        <a href="#">Blog</a>
                        <a href="#">Carreras</a>
                        <a href="#">Contacto</a>
                    </div>

                    <div className="footer-links-group">
                        <h3>Legal</h3>
                        <a href="#">Términos de Servicio</a>
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Cookies</a>
                        <a href="#">Exención de Responsabilidad</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} MetaMiner. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

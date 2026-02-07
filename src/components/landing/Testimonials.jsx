import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import Card from '../ui/Card';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Carlos R.',
        role: 'Inversionista Crypto',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
        content: 'La mejor plataforma de minería que he probado. Los pagos son puntuales y el soporte es increíblemente rápido.',
        rating: 5
    },
    {
        name: 'Sarah M.',
        role: 'Freelancer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        content: 'Empecé con el plan básico y en 3 meses ya he recuperado mi inversión. La transparencia es lo que más valoro.',
        rating: 5
    },
    {
        name: 'David K.',
        role: 'Entusiasta Tech',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
        content: 'La interfaz es super intuitiva y los gráficos de rendimiento en tiempo real me ayudan a tomar mejores decisiones.',
        rating: 4
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Lo que dicen nuestros usuarios</h2>
                    <p className="section-subtitle">Únete a miles de inversores satisfechos en todo el mundo</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                    {testimonials.map((item, index) => (
                        <Card key={index} className="testimonial-card">
                            <div className="quote-icon">
                                <MessageSquareQuote size={40} color="var(--color-primary)" strokeWidth={1} />
                            </div>
                            <p className="testimonial-content">"{item.content}"</p>

                            <div className="testimonial-footer">
                                <div className="testimonial-author">
                                    <img src={item.avatar} alt={item.name} className="author-avatar" />
                                    <div className="author-info">
                                        <h4 className="author-name">{item.name}</h4>
                                        <span className="author-role">{item.role}</span>
                                    </div>
                                </div>
                                <div className="testimonial-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill={i < item.rating ? "#FFD700" : "none"}
                                            color={i < item.rating ? "#FFD700" : "var(--color-text-muted)"}
                                        />
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

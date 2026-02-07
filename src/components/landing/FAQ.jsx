import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqData = [
    {
        question: '¿Qué es MetaMiner?',
        answer: 'MetaMiner es una plataforma de minería en la nube que permite a los usuarios alquilar potencia de cómputo para minar criptomonedas sin necesidad de gestionar hardware físico.'
    },
    {
        question: '¿Cuándo puedo retirar mis ganancias?',
        answer: 'Las ganancias se acreditan diariamente en tu cuenta. Puedes solicitar un retiro en cualquier momento una vez alcances el monto mínimo de 0.001 BTC.'
    },
    {
        question: '¿Es seguro invertir aquí?',
        answer: 'Absolutamente. Utilizamos protocolos de seguridad de nivel bancario, autenticación de dos factores (2FA) y almacenamos la mayoría de los fondos en billeteras frías para máxima protección.'
    },
    {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos inmensa variedad de criptomonedas (BTC, ETH, USDT) y también tarjetas de crédito/débito a través de nuestros procesadores de pago asociados.'
    },
    {
        question: '¿Ofrecen programa de referidos?',
        answer: 'Sí, ofrecemos un generoso programa de afiliados donde puedes ganar hasta el 10% de las compras de potencia de minado que realicen tus referidos.'
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={onClick}>
                <span>{question}</span>
                {isOpen ? <Minus size={20} color="var(--color-primary)" /> : <Plus size={20} />}
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <div className="faq-answer-content">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="section faq">
            <div className="container">
                <div className="faq-container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Preguntas Frecuentes</h2>
                        <p className="section-subtitle">Resolvemos tus dudas sobre la plataforma</p>
                    </div>

                    <div className="faq-list">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

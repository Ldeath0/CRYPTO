import React from 'react';
import Hero from '../components/landing/Hero';
import HowItWorks from '../components/landing/HowItWorks';
import Pricing from '../components/landing/Pricing';
import Testimonials from '../components/landing/Testimonials';
import FAQ from '../components/landing/FAQ';

const Home = () => {
    return (
        <main>
            <Hero />
            <div id="platform">
                {/* Platform specific features could go here, or just be part of hero/how-it-works */}
            </div>
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <FAQ />
        </main>
    );
};

export default Home;

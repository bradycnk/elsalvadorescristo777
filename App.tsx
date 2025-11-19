
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import JoinUs from './components/JoinUs';
import Reflections from './components/Reflections';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ScrollReveal from './components/ScrollReveal';

const App: React.FC = () => {
    return (
        <div className="bg-slate-50 text-gray-800">
            <Header />
            <main>
                {/* Hero suele ser visible de inmediato, pero el reveal le da una entrada suave al cargar */}
                <ScrollReveal>
                    <Hero />
                </ScrollReveal>
                
                <ScrollReveal>
                    <About />
                </ScrollReveal>
                
                <ScrollReveal>
                    <Programs />
                </ScrollReveal>
                
                <ScrollReveal>
                    <Reflections />
                </ScrollReveal>

                <ScrollReveal>
                    <Testimonials />
                </ScrollReveal>
                
                <ScrollReveal>
                    <JoinUs />
                </ScrollReveal>
                
                <ScrollReveal>
                    <Contact />
                </ScrollReveal>
                
                <ScrollReveal>
                    <Newsletter />
                </ScrollReveal>
            </main>
            <Footer />
        </div>
    );
};

export default App;

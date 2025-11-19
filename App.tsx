
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import JoinUs from './components/JoinUs';
import Reflections from './components/Reflections';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-slate-50 text-gray-800">
            <Header />
            <main>
                <Hero />
                <About />
                <Programs />
                <Reflections />
                <JoinUs />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;


import React from 'react';

const JoinUs: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="unirse" className="py-20 bg-[#1a3a63] text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold mb-4">
                    ¿Cómo Puedes Ser Parte de Esta Alianza?
                </h2>
                <p className="text-xl font-light mb-10 text-gray-300">
                    Tu aporte, sea grande o pequeño, hace la diferencia. Elige la forma en que deseas extender la esperanza.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Columna 1: Iglesias y Organizaciones */}
                    <div className="p-8 bg-white/90 rounded-xl shadow-2xl text-[#1a3a63] border-t-4 border-[#f8c000] transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-3">Para Iglesias y Ministerios</h3>
                        <p className="text-gray-700 mb-6">
                            Integra tu congregación a nuestra red global de apoyo. Colabora en misiones, intercambia recursos y amplía tu impacto.
                        </p>
                        <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="bg-[#1a3a63] text-white font-bold py-3 px-6 rounded-full hover:bg-blue-800 transition duration-300 shadow-lg">
                            Unir Mi Iglesia
                        </a>
                    </div>

                    {/* Columna 2: Individuales y Donantes */}
                    <div id="donar" className="p-8 bg-white/90 rounded-xl shadow-2xl text-[#1a3a63] border-t-4 border-[#f8c000] transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-3">Para Personas y Donantes</h3>
                        <p className="text-gray-700 mb-6">
                            Aporta tu "granito de arena" con una donación única o mensual. Ayuda a financiar una beca, una comida o un kit de primeros auxilios.
                        </p>
                        <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="bg-[#f8c000] text-[#1a3a63] font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300 shadow-lg animate-heartbeat">
                            Hacer una Donación
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
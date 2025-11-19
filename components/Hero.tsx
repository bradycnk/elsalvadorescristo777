
import React from 'react';

const Hero: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="inicio" className="relative bg-[#1a3a63] text-white pt-24 pb-20 md:py-32 overflow-hidden">
             {/* Capa oscura para mejorar la legibilidad del texto sobre la imagen */}
             <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
             
             {/* Imagen de fondo */}
             {/* NOTA: Para usar tu imagen específica de "Jesús repartiendo pan", sube tu imagen a un host y pega la URL aquí abajo */}
             <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
             ></div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-shadow-lg">
                    Una Sola Fe, Una Sola Misión: <span className="text-[#f8c000]">Transformar Vidas</span>
                </h1>
                <p className="text-xl sm:text-2xl mb-8 font-light max-w-3xl mx-auto text-gray-100">
                    Unimos la fuerza de <strong>Iglesias Nacionales e Internacionales</strong> y la voluntad de miles de personas para llevar <strong>ayuda tangible</strong> a las comunidades más necesitadas del mundo.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a href="#programas" onClick={(e) => handleNavClick(e, '#programas')} className="bg-[#f8c000] text-[#1a3a63] font-bold py-3 px-8 rounded-full shadow-xl hover:bg-yellow-500 transition duration-300 text-lg transform hover:scale-105">
                        Ver Nuestros Programas
                    </a>
                    <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#1a3a63] transition duration-300 text-lg transform hover:scale-105">
                        Conoce el Impacto
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
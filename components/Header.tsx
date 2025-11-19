
import React, { useState } from 'react';
import { TwoHandsIcon } from './icons/TwoHandsIcon';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#quienes-somos', label: 'Quiénes Somos' },
        { href: '#programas', label: 'Programas' },
        { href: '#reflexiones', label: 'Reflexiones' },
        { href: '#unirse', label: 'Unirse' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Cierra el menú móvil si está abierto
    };

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logotipo/Nombre de la Organización */}
                    <a href="#inicio" className="flex items-center space-x-2" onClick={(e) => handleNavClick(e, '#inicio')}>
                        <TwoHandsIcon className="w-10 h-10 text-[#1a3a63]" />
                        <span className="text-lg font-extrabold text-[#1a3a63] leading-tight">El Salvador es Cristo</span>
                    </a>

                    {/* Navegación (Oculta en móvil, mostrada en escritorio) */}
                    <nav className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="hover:text-[#f8c000] transition duration-150">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Botón de Donación (CTA principal) - ANIMADO */}
                    <a href="#donar" onClick={(e) => handleNavClick(e, '#donar')} className="hidden md:block bg-[#f8c000] text-[#1a3a63] font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 shadow-lg transform hover:scale-105 animate-heartbeat">
                        ¡Dona Ahora!
                    </a>

                    {/* Botón de Menú para Móvil (Hamburguesa) */}
                    <button onClick={toggleMenu} className="md:hidden text-[#1a3a63] focus:outline-none z-50">
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Menú Móvil Desplegable */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#1a3a63] flex flex-col items-center justify-center space-y-6 z-40">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block py-2 px-4 text-white text-2xl font-bold hover:text-[#f8c000] transition duration-150">
                            {link.label}
                        </a>
                    ))}
                    <a href="#donar" onClick={(e) => handleNavClick(e, '#donar')} className="mt-8 bg-[#f8c000] text-[#1a3a63] font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 animate-heartbeat">
                        ¡Dona Ahora!
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
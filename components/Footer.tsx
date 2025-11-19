
import React from 'react';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';

const Footer: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-[#1a3a63] pt-12 pb-6 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-blue-800 pb-10">
                    {/* Columna 1: Contacto */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#f8c000]">Contacto</h3>
                        <p className="text-sm text-gray-300">Email: info@alianzaglobal.org</p>
                        <p className="text-sm text-gray-300">Teléfono: +58 412 XXX-XXXX</p>
                        <p className="text-sm mt-2 text-gray-300">Sede Principal: Caracas, Venezuela</p>
                    </div>

                    {/* Columna 2: Navegación Rápida */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#f8c000]">Enlaces</h3>
                        <ul className="space-y-2">
                            <li><a href="#quienes-somos" onClick={(e) => handleNavClick(e, '#quienes-somos')} className="text-sm text-gray-300 hover:text-white">Nuestra Historia</a></li>
                            <li><a href="#programas" onClick={(e) => handleNavClick(e, '#programas')} className="text-sm text-gray-300 hover:text-white">Áreas de Ayuda</a></li>
                            <li><a href="#unirse" onClick={(e) => handleNavClick(e, '#unirse')} className="text-sm text-gray-300 hover:text-white">Colaborar</a></li>
                            <li><a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="text-sm text-gray-300 hover:text-white">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Legal y Transparencia */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#f8c000]">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-gray-300 hover:text-white">Política de Privacidad</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-gray-300 hover:text-white">Términos de Uso</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-gray-300 hover:text-white">Informe de Impacto</a></li>
                        </ul>
                    </div>

                    {/* Columna 4: Redes Sociales */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#f8c000]">Síguenos</h3>
                        <div className="flex space-x-4">
                            <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook" className="text-white hover:text-[#f8c000] transition duration-150">
                                <FacebookIcon className="w-6 h-6" />
                            </a>
                            <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram" className="text-white hover:text-[#f8c000] transition duration-150">
                                <InstagramIcon className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Derecho de Autor */}
                <div className="mt-6 text-center text-sm text-blue-300">
                    &copy; {new Date().getFullYear()} Alianza Global Solidaria. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

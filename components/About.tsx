
import React from 'react';
import { LocationIcon } from './icons/LocationIcon';
import { ActionIcon } from './icons/ActionIcon';
import { TransparencyIcon } from './icons/TransparencyIcon';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-[#f8c000] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1a3a63]">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-[#1a3a63] mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="quienes-somos" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-[#1a3a63] mb-4">
                        Nuestra Misión Global: Uniendo Fe y Acción Solidaria
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Somos un puente de esperanza que conecta iglesias, voluntarios y donantes para transformar realidades y llevar ayuda tangible a quienes más lo necesitan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <InfoCard icon={<LocationIcon className="w-8 h-8"/>} title="Red de Fe">
                        Somos la plataforma que unifica a docenas de iglesias con una visión común: extender la mano donde más se necesita, optimizando recursos y alcance.
                    </InfoCard>
                    <InfoCard icon={<ActionIcon className="w-8 h-8" />} title="Acción Individual">
                        Facilitamos que cualquier persona, desde cualquier lugar, pueda aportar su "granito de arena" mediante donaciones seguras o voluntariado virtual y presencial.
                    </InfoCard>
                    <InfoCard icon={<TransparencyIcon className="w-8 h-8" />} title="Transparencia Total">
                        Nuestro compromiso es con la rendición de cuentas. Cada aporte es rastreado para que nuestros socios vean el impacto directo de su ayuda en las comunidades.
                    </InfoCard>
                </div>
            </div>
        </section>
    );
};

export default About;

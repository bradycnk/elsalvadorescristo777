

import React from 'react';
import { FoodIcon } from './icons/FoodIcon';
import { EducationIcon } from './icons/EducationIcon';
import { HealthIcon } from './icons/HealthIcon';

interface ProgramCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    imageUrl: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ icon, title, description, imageUrl }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <div className="relative h-48">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="p-6">
            <div className="flex items-center mb-4">
                <div className="text-[#f8c000] mr-4">{icon}</div>
                <h3 className="text-2xl font-bold text-[#1a3a63]">{title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);

const Programs: React.FC = () => {
    const programsData = [
        {
            icon: <FoodIcon className="w-10 h-10" />,
            title: "Seguridad Alimentaria",
            description: "Distribución de alimentos nutritivos y creación de comedores comunitarios, llevando nutrición y un plato de esperanza a cada mesa.",
            imageUrl: "https://picsum.photos/400/300?image=431"
        },
        {
            icon: <EducationIcon className="w-10 h-10" />,
            title: "Becas y Educación",
            description: "Provisión de útiles escolares, becas para estudios, y desarrollo de centros de refuerzo educativo en zonas vulnerables.",
            imageUrl: "https://picsum.photos/400/300?image=24"
        },
        {
            icon: <HealthIcon className="w-10 h-10" />,
            title: "Acceso a Salud",
            description: "Jornadas médicas gratuitas, entrega de medicinas esenciales y apoyo psicológico a familias que enfrentan crisis de salud sin recursos.",
            imageUrl: "https://picsum.photos/400/300?image=355"
        }
    ];

    return (
        <section id="programas" className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-[#1a3a63] text-center mb-12">
                    Nuestras Áreas de Impacto
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programsData.map((program, index) => (
                        <ProgramCard key={index} {...program} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
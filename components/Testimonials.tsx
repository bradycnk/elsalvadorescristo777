
import React from 'react';

interface TestimonialProps {
    quote: string;
    name: string;
    role: string;
    image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, image }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#f8c000] hover:shadow-2xl transition-all duration-300 relative group">
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 text-gray-100 group-hover:text-yellow-100 transition-colors">
             <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
            </svg>
        </div>
        
        <p className="text-gray-600 italic mb-6 relative z-10">"{quote}"</p>
        
        <div className="flex items-center mt-auto">
            <img 
                src={image} 
                alt={name} 
                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#1a3a63]"
            />
            <div>
                <h4 className="font-bold text-[#1a3a63]">{name}</h4>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            quote: "Gracias al programa de alimentos, mis hijos ahora van a la escuela con el estómago lleno y pueden concentrarse. Es una bendición que cambió nuestra realidad diaria.",
            name: "María González",
            role: "Beneficiaria, Comedor Comunitario",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" // Placeholder
        },
        {
            quote: "Ver cómo una pequeña donación se transforma en útiles escolares y sonrisas es lo que me motiva a seguir apoyando mes a mes a esta alianza.",
            name: "Carlos Méndez",
            role: "Donante Recurrente",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80" // Placeholder
        },
        {
            quote: "Unir nuestra iglesia a esta red global nos permitió extender nuestro ministerio más allá de las cuatro paredes. Juntos somos más fuertes.",
            name: "Pastor David Ruiz",
            role: "Iglesia 'Luz de Vida'",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80" // Placeholder
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-[#1a3a63] mb-4">
                        Voces de Impacto
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Historias reales de personas cuyas vidas han sido tocadas por la fe y la solidaridad de nuestra comunidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

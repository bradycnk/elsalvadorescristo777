
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // Simulación de lógica de suscripción
            setIsSubscribed(true);
            setEmail('');
            // Restablecer el estado después de unos segundos para permitir nuevas suscripciones si es necesario
            setTimeout(() => setIsSubscribed(false), 5000);
        }
    };

    return (
        <section className="bg-gray-100 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#1a3a63] rounded-3xl p-8 md:p-16 shadow-2xl text-center relative overflow-hidden">
                    {/* Elementos decorativos de fondo */}
                    <div className="absolute top-0 left-0 -mt-10 -ml-10 w-40 h-40 bg-[#f8c000] rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-40 h-40 bg-[#f8c000] rounded-full opacity-20 blur-3xl"></div>
                    
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Mantente Informado
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Suscríbete a nuestro boletín para recibir historias conmovedoras, actualizaciones de proyectos y oportunidades para marcar la diferencia.
                        </p>
                        
                        {!isSubscribed ? (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Tu correo electrónico"
                                    className="w-full sm:w-auto flex-grow px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-400/50 transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-[#f8c000] text-[#1a3a63] font-bold py-4 px-8 rounded-full hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
                                >
                                    Suscribirme
                                </button>
                            </form>
                        ) : (
                            <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 inline-block animate-fade-in">
                                <p className="text-green-100 font-semibold text-lg">
                                    ¡Gracias por unirte a nuestra comunidad! 📩
                                </p>
                            </div>
                        )}
                        
                        <p className="text-blue-300/60 text-xs mt-6">
                            Respetamos tu privacidad. No enviamos spam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

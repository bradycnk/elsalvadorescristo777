
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
            <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-6 md:p-10 shadow-2xl text-center relative overflow-hidden border-2 border-transparent" style={{
                    boxShadow: '0 0 30px rgba(239, 68, 68, 0.3), 0 0 60px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.5)',
                    borderImage: 'linear-gradient(135deg, #ef4444, #3b82f6, #ef4444) 1'
                }}>
                    {/* Elementos decorativos de fondo estilo gamer */}
                    <div className="absolute top-0 left-0 -mt-8 -ml-8 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 -mb-8 -mr-8 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-wider" style={{
                            textShadow: '0 0 10px rgba(239, 68, 68, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)',
                            background: 'linear-gradient(135deg, #ef4444, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Mantente Informado
                        </h2>
                        <p className="text-gray-300 text-base mb-6 leading-relaxed">
                            Suscríbete a nuestro boletín para recibir historias conmovedoras, actualizaciones de proyectos y oportunidades para marcar la diferencia.
                        </p>

                        {!isSubscribed ? (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Tu correo electrónico"
                                    className="w-full sm:w-auto flex-grow px-5 py-3 rounded-lg text-white placeholder-gray-400 bg-black/50 border-2 border-blue-500/50 focus:outline-none focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all"
                                    required
                                    style={{
                                        backdropFilter: 'blur(10px)'
                                    }}
                                />
                                <button
                                    type="submit"
                                    className="font-black py-3 px-6 rounded-lg uppercase tracking-wide whitespace-nowrap transition-all duration-300 border-2"
                                    style={{
                                        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                                        borderColor: '#ef4444',
                                        color: 'white',
                                        boxShadow: '0 0 20px rgba(239, 68, 68, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.1)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0 0 30px rgba(239, 68, 68, 0.8), inset 0 0 15px rgba(255, 255, 255, 0.2)';
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    Suscribirme
                                </button>
                            </form>
                        ) : (
                            <div className="bg-green-500/20 border-2 border-green-500/70 rounded-lg p-3 inline-block" style={{
                                boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
                            }}>
                                <p className="text-green-100 font-bold text-base">
                                    Gracias por unirte a nuestra comunidad!
                                </p>
                            </div>
                        )}

                        <p className="text-gray-500 text-xs mt-4">
                            Respetamos tu privacidad. No enviamos spam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

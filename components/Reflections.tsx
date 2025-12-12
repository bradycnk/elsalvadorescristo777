
import React from 'react';

interface PostCardProps {
    imageUrl: string;
    title: string;
    excerpt: string;
    url?: string;
    isExternal?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ imageUrl, title, excerpt, url, isExternal }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            {isExternal && (
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    Recurso Externo
                </div>
            )}
        </div>
        <div className="p-5 flex-grow flex flex-col">
            <h3 className="text-lg font-bold text-[#1a3a63] mb-2 group-hover:text-[#f8c000] transition-colors">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{excerpt}</p>
            <a 
                href={url || "#"} 
                onClick={(e) => { if (!url) e.preventDefault(); }}
                target={url?.startsWith('http') || url?.endsWith('.html') ? "_blank" : "_self"}
                rel={url?.startsWith('http') || url?.endsWith('.html') ? "noopener noreferrer" : ""}
                className="text-sm font-bold text-[#1a3a63] hover:text-[#f8c000] transition-colors mt-auto flex items-center"
            >
                {isExternal ? "Explorar Plan" : "Leer más"} 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
        </div>
    </div>
);

interface PlanCategoryProps {
    title: string;
    image: string;
    link: string;
}

const PlanCategory: React.FC<PlanCategoryProps> = ({ title, image, link }) => (
    <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-lg block"
    >
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10"></div>
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold tracking-wide border-2 border-white/30 bg-black/20 backdrop-blur-sm px-6 py-2 rounded-lg group-hover:bg-white group-hover:text-[#1a3a63] transition-all duration-300">
                {title}
            </h3>
        </div>
    </a>
);

const Reflections: React.FC = () => {
    const localPosts = [
        {
            imageUrl: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80",
            title: "El Poder de la Oración en Comunidad",
            excerpt: "Juega y aprende. Descubre cómo la unión en oración trae consuelo y fortaleza. ¡Gana monedas espirituales!",
            url: "/oracion_comunitaria.html" 
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
            title: "Pequeños Actos, Grandes Milagros",
            excerpt: "Una historia inspiradora sobre cómo un pequeño gesto de bondad cambió la vida de una familia entera."
        },
    ];

    // Estas categorías enlazan a las colecciones dinámicas de Bible.com
    // Cuando Bible.com actualice sus planes, estos enlaces mostrarán el contenido nuevo automáticamente.
    const biblePlans = [
        {
            title: "Amor",
            image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
            link: "https://www.bible.com/es/reading-plans-collection/2353"
        },
        {
            title: "Ansiedad",
            image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=800&q=80",
            link: "https://www.bible.com/es/reading-plans-collection/2355"
        },
        {
            title: "Sanidad",
            image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80",
            link: "https://www.bible.com/es/reading-plans-collection/2356"
        },
        {
            title: "Ira",
            image: "https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?auto=format&fit=crop&w=800&q=80",
            link: "https://www.bible.com/es/reading-plans-collection/2354"
        },
        {
            title: "Esperanza",
            image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80",
            link: "https://www.bible.com/es/reading-plans-collection/2357"
        },
        {
            title: "Paz",
            image: "https://images.unsplash.com/photo-1499209974431-276138735994?auto=format&fit=crop&w=800&q=80",
            link: "https://www.bible.com/es/reading-plans-collection/15668"
        }
    ];

    return (
        <section id="reflexiones" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-[#1a3a63] mb-4">Reflexiones y Crecimiento</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nutre tu espíritu con nuestros artículos y descubre planes de lectura diarios para fortalecer tu fe.
                    </p>
                </div>

                {/* Grid Layout: Artículos y Video */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20">
                    
                    {/* Video de la Semana */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-2 rounded-2xl shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-[#1a3a63] mb-3 pl-2">Video Inspiracional</h3>
                            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-black relative group">
                                <video 
                                    src="https://video-cdn.youversionapi.com/50960/es/high.webm"
                                    controls
                                    className="w-full h-full object-cover"
                                    poster="https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&w=1200&q=80"
                                >
                                    Tu navegador no soporta la etiqueta de video.
                                </video>
                            </div>
                        </div>
                    </div>

                    {/* Artículos Locales */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold text-[#1a3a63] mb-3 pl-2">Artículos de la Comunidad</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {localPosts.map((post, index) => (
                                <PostCard key={index} {...post} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* SECCIÓN NUEVA: Planes de Lectura (Estilo YouVersion) */}
                <div className="border-t border-gray-200 pt-16">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                        <div>
                            <h2 className="text-3xl font-extrabold text-[#1a3a63]">Planes de Lectura y Devocionales</h2>
                            <p className="text-gray-500 mt-2">Explora planes gratuitos cortesía de YouVersion (Bible.com)</p>
                        </div>
                        <a 
                            href="https://www.bible.com/es/reading-plans" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#f8c000] font-bold hover:text-yellow-600 transition-colors mt-4 md:mt-0 flex items-center"
                        >
                            Ver todos los planes <span className="ml-2 text-xl">→</span>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {biblePlans.map((plan, index) => (
                            <PlanCategory key={index} {...plan} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Reflections;

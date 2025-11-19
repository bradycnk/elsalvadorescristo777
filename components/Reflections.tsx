
import React from 'react';

interface PostCardProps {
    imageUrl: string;
    title: string;
    excerpt: string;
    url?: string;
}

const PostCard: React.FC<PostCardProps> = ({ imageUrl, title, excerpt, url }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-40">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-5">
            <h3 className="text-lg font-bold text-[#1a3a63] mb-2 group-hover:text-[#f8c000] transition-colors">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{excerpt}</p>
            <a 
                href={url || "#"} 
                onClick={(e) => { if (!url) e.preventDefault(); }}
                target={url?.startsWith('http') || url?.endsWith('.html') ? "_blank" : "_self"}
                rel={url?.startsWith('http') || url?.endsWith('.html') ? "noopener noreferrer" : ""}
                className="text-sm font-semibold text-[#1a3a63] hover:underline mt-3 inline-block"
            >
                Leer más &rarr;
            </a>
        </div>
    </div>
);


const Reflections: React.FC = () => {
    const posts = [
        {
            imageUrl: "https://picsum.photos/400/300?image=1015",
            title: "El Poder de la Oración en Comunidad",
            excerpt: "Descubre cómo la unión en oración puede traer consuelo y fortaleza a quienes más lo necesitan.",
            // Enlace al archivo HTML del juego
            url: "/oracion_comunitaria.html" 
        },
        {
            imageUrl: "https://picsum.photos/400/300?image=1016",
            title: "Pequeños Actos, Grandes Milagros",
            excerpt: "Una historia inspiradora sobre cómo un pequeño gesto de bondad cambió la vida de una familia."
            // Sin URL definida, se comportará como antes (sin acción)
        },
        {
            imageUrl: "https://picsum.photos/400/300?image=1018",
            title: "Amar al Prójimo: Un Llamado a la Acción",
            excerpt: "Reflexionamos sobre el mandamiento de Jesús y cómo podemos vivirlo en nuestro día a día."
        }
    ];

    return (
        <section id="reflexiones" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-[#1a3a63] mb-4">Reflexiones Diarias</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Un espacio para nutrir el espíritu y encontrar inspiración en la fe y la acción.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Video Principal */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-[#1a3a63] mb-4">Video de la Semana</h3>
                         <div className="aspect-w-16 aspect-h-9 rounded-xl shadow-lg overflow-hidden bg-black">
                            <video 
                                src="https://video-cdn.youversionapi.com/50960/es/high.webm"
                                controls
                                className="w-full h-full"
                            >
                                Tu navegador no soporta la etiqueta de video.
                            </video>
                        </div>
                    </div>

                    {/* Posts Recientes */}
                    <div className="lg:col-span-1 space-y-6">
                         <h3 className="text-2xl font-bold text-[#1a3a63] mb-4">Artículos Recientes</h3>
                         {posts.map((post, index) => (
                             <PostCard key={index} {...post} />
                         ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reflections;
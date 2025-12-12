
import React from 'react';

interface BlogPostProps {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
    category: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, date, imageUrl, category }) => (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-100">
        <div className="relative h-56 overflow-hidden group">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-4 left-4 bg-[#f8c000] text-[#1a3a63] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                {category}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center text-sm text-gray-500 mb-3">
                <svg className="w-4 h-4 mr-2 text-[#f8c000]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span className="font-medium">{date}</span>
            </div>
            <h3 className="text-xl font-bold text-[#1a3a63] mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                <a href="#" onClick={(e) => e.preventDefault()}>{title}</a>
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3 flex-grow text-sm leading-relaxed">
                {excerpt}
            </p>
            <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center text-[#1a3a63] font-bold hover:text-[#f8c000] transition-colors mt-auto text-sm group">
                Leer noticia completa
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
        </div>
    </article>
);

const Blog: React.FC = () => {
    const posts = [
        {
            id: 1,
            title: "Inauguración del Nuevo Comedor 'Pan de Vida'",
            excerpt: "Gracias a las donaciones del último mes, hemos logrado abrir un nuevo espacio que alimentará a más de 100 niños diariamente en la comunidad de San José.",
            date: "15 de Marzo, 2024",
            imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
            category: "Alimentación"
        },
        {
            id: 2,
            title: "Jornada Médica: Salud para Todos",
            excerpt: "Más de 300 personas recibieron atención médica gratuita, medicinas y chequeos generales gracias a nuestro equipo de doctores voluntarios que viajaron a la zona.",
            date: "02 de Febrero, 2024",
            imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            category: "Salud"
        },
        {
            id: 3,
            title: "Entrega de Kits Escolares 2024",
            excerpt: "Preparamos el regreso a clases entregando mochilas equipadas con cuadernos, lápices y libros a 500 estudiantes de zonas rurales, apoyando su futuro.",
            date: "20 de Enero, 2024",
            imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
            category: "Educación"
        }
    ];

    return (
        <section id="noticias" className="py-24 bg-white relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-50 rounded-full opacity-50 blur-3xl z-0"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-yellow-50 rounded-full opacity-50 blur-3xl z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-extrabold text-[#1a3a63] mb-4">
                            Actualidad y Noticias
                        </h2>
                        <p className="text-xl text-gray-600">
                            Mantente al día con nuestras últimas actividades y descubre cómo tu apoyo se transforma en acciones concretas.
                        </p>
                    </div>
                    <a href="#" onClick={(e) => e.preventDefault()} className="hidden md:inline-flex items-center text-[#1a3a63] font-bold hover:text-[#f8c000] transition-colors mt-4 md:mt-0">
                        Ver todas las noticias <span className="ml-2 text-xl">→</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map(post => (
                        <BlogPost key={post.id} {...post} />
                    ))}
                </div>

                <div className="text-center mt-12 md:hidden">
                    <a href="#" onClick={(e) => e.preventDefault()} className="inline-block border-2 border-[#1a3a63] text-[#1a3a63] font-bold py-3 px-8 rounded-full hover:bg-[#1a3a63] hover:text-white transition-colors duration-300">
                        Ver todas las noticias
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blog;

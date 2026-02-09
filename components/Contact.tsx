
import React from 'react';

const Contact: React.FC = () => {
    // --------------------------------------------------------------------------------------
    // INSTRUCCIONES DE CONFIGURACIÓN:
    // 1. Crea tu formulario en https://forms.google.com (incluye campo de Teléfono).
    // 2. Activa las notificaciones por correo en la configuración del formulario.
    // 3. Dale a "Enviar", ve a la pestaña "< >" (Incrustar) y copia la URL del 'src'.
    // 4. REEMPLAZA la URL de abajo con la tuya.
    // --------------------------------------------------------------------------------------
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc9zebg5uallnWSp1AnA_xcFCPEcvKICOy-5VuIu0-Mfl-hxw/viewform?embedded=true"; 

    return (
        <section id="contacto" className="py-20 bg-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-4 sm:p-8 rounded-xl shadow-2xl border-t-4 border-[#1a3a63]">
                    <h2 className="text-3xl font-bold text-[#1a3a63] mb-6 text-center">
                        Contáctanos
                    </h2>
                    <p className="text-gray-600 text-center mb-8">
                        Para unir tu iglesia, ser voluntario o realizar donaciones, por favor completa nuestro formulario oficial. Tus datos quedarán registrados de forma segura en nuestro sistema.
                    </p>

                    <div className="w-full flex justify-center overflow-hidden bg-gray-50 rounded-lg">
                        <iframe 
                            src={googleFormUrl}
                            width="100%" 
                            height="800" 
                            className="border-0 w-full"
                            title="Formulario de Google"
                        >
                            Cargando formulario...
                        </iframe>
                    </div>
                    
                    <p className="text-xs text-gray-400 text-center mt-4">
                        Este formulario es gestionado a través de Google Forms para mayor seguridad y transparencia.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
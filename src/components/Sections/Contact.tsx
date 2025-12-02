import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';

interface ContactProps {
  data: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
    emailAddress: string;
    linkedin: string;
    github: string;
    phone: string;
  };
  isVisible: { [key: string]: boolean };
  language: 'es' | 'en';
}

const formSchema = (lang: 'es' | 'en') => z.object({
  name: z.string().min(2, lang === 'es' ? 'El nombre debe tener al menos 2 caracteres' : 'Name must be at least 2 characters'),
  email: z.string().email(lang === 'es' ? 'Email inválido' : 'Invalid email'),
  message: z.string().min(10, lang === 'es' ? 'El mensaje debe tener al menos 10 caracteres' : 'Message must be at least 10 characters'),
});

type FormData = z.infer<ReturnType<typeof formSchema>>;

const Contact: React.FC<ContactProps> = ({ data, isVisible, language }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema(language)),
  });

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    
    // TODO: Replace with your actual EmailJS credentials
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Brayan Zorro',
        },
        PUBLIC_KEY
      );

      toast.success(language === 'es' ? 'Mensaje enviado con éxito!' : 'Message sent successfully!');
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error(language === 'es' ? 'Error al enviar el mensaje. Intenta de nuevo.' : 'Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div 
        id="contact-header"
        data-animate
        className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible['contact-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {data.title}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {data.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div 
          id="contact-form"
          data-animate
          className={`bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 transition-all duration-1000 delay-200 transform ${
            isVisible['contact-form'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                {data.form.name}
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-600 focus:border-transparent'
                }`}
                placeholder={language === 'es' ? 'Ej: Juan Pérez' : 'Ex: John Doe'}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                {data.form.email}
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-600 focus:border-transparent'
                }`}
                placeholder={language === 'es' ? 'Ej: juan@ejemplo.com' : 'Ex: john@example.com'}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                {data.form.message}
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-600 focus:border-transparent'
                }`}
                placeholder={language === 'es' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {language === 'es' ? 'Enviando...' : 'Sending...'}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {data.form.send}
                </>
              )}
            </button>
          </form>
        </div>

        <div 
          id="contact-info"
          data-animate
          className={`space-y-8 transition-all duration-1000 delay-400 transform ${
            isVisible['contact-info'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors group">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Email</h3>
            <a href={`mailto:${data.emailAddress}`} className="text-gray-300 hover:text-white transition-colors">
              {data.emailAddress}
            </a>
          </div>

          <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors group">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">LinkedIn</h3>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Ver Perfil / View Profile
            </a>
          </div>

          <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-colors group">
            <h3 className="text-xl font-semibold mb-2 text-green-400">GitHub</h3>
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Ver Proyectos / View Projects
            </a>
          </div>
          
           <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 hover:border-pink-500/50 transition-colors group">
            <h3 className="text-xl font-semibold mb-2 text-pink-400">Phone</h3>
            <a href={`tel:${data.phone}`} className="text-gray-300 hover:text-white transition-colors">
              {data.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

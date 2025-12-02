import React, { useState } from 'react';
import { Send, Loader2, Mail, Linkedin, Github, Phone, ExternalLink } from 'lucide-react';
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

  const contactCards = [
    {
      icon: Mail,
      title: 'Email',
      value: data.emailAddress,
      href: `mailto:${data.emailAddress}`,
      color: 'text-blue-400',
      borderColor: 'group-hover:border-blue-500/50',
      bgHover: 'group-hover:bg-blue-500/10'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: language === 'es' ? 'Ver Perfil' : 'View Profile',
      href: data.linkedin,
      color: 'text-blue-600',
      borderColor: 'group-hover:border-blue-600/50',
      bgHover: 'group-hover:bg-blue-600/10'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: language === 'es' ? 'Ver Proyectos' : 'View Projects',
      href: data.github,
      color: 'text-purple-500',
      borderColor: 'group-hover:border-purple-500/50',
      bgHover: 'group-hover:bg-purple-500/10'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: data.phone,
      href: `tel:${data.phone}`,
      color: 'text-green-400',
      borderColor: 'group-hover:border-green-500/50',
      bgHover: 'group-hover:bg-green-500/10'
    }
  ];

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
          className={`space-y-6 transition-all duration-1000 delay-400 transform ${
            isVisible['contact-info'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              target={card.title === 'Phone' || card.title === 'Email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`block p-6 rounded-2xl bg-gray-800/30 border border-gray-700 transition-all duration-300 group hover:-translate-y-1 ${card.borderColor} ${card.bgHover}`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gray-900/50 ${card.color}`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-sm font-medium mb-1 ${card.color}`}>
                    {card.title}
                  </h3>
                  <p className="text-gray-300 font-medium flex items-center gap-2">
                    {card.value}
                    {(card.title === 'LinkedIn' || card.title === 'GitHub') && (
                      <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    )}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

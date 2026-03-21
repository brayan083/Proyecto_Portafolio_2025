import * as z from 'zod';

export const contactFormSchema = (lang: 'es' | 'en') => z.object({
  name: z.string().min(2, lang === 'es' ? 'El nombre debe tener al menos 2 caracteres' : 'Name must be at least 2 characters'),
  email: z.string().email(lang === 'es' ? 'Email inválido' : 'Invalid email'),
  message: z.string().min(1, lang === 'es' ? 'El mensaje no puede estar vacío' : 'Message cannot be empty'),
});

export type ContactFormData = z.infer<ReturnType<typeof contactFormSchema>>;

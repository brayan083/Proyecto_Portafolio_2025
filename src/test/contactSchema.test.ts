import { describe, it, expect } from 'vitest';
import { contactFormSchema } from '../utils/contactSchema';

describe('contactFormSchema', () => {
  const schemaEn = contactFormSchema('en');
  const schemaEs = contactFormSchema('es');

  it('validates a correct form submission', () => {
    const result = schemaEn.safeParse({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello there',
    });
    expect(result.success).toBe(true);
  });

  it('rejects name shorter than 2 characters', () => {
    const result = schemaEn.safeParse({
      name: 'J',
      email: 'john@example.com',
      message: 'Hello',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Name must be at least 2 characters');
    }
  });

  it('rejects invalid email', () => {
    const result = schemaEn.safeParse({
      name: 'John',
      email: 'not-an-email',
      message: 'Hello',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Invalid email');
    }
  });

  it('rejects empty message', () => {
    const result = schemaEn.safeParse({
      name: 'John',
      email: 'john@example.com',
      message: '',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Message cannot be empty');
    }
  });

  it('returns Spanish error messages when lang is es', () => {
    const result = schemaEs.safeParse({
      name: 'J',
      email: 'bad',
      message: '',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const messages = result.error.issues.map((i) => i.message);
      expect(messages).toContain('El nombre debe tener al menos 2 caracteres');
      expect(messages).toContain('Email inválido');
      expect(messages).toContain('El mensaje no puede estar vacío');
    }
  });
});

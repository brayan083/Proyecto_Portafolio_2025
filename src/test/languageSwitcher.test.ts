import { describe, it, expect } from 'vitest';
import { content } from '../data/content';

describe('Language switcher content', () => {
  it('has both es and en language keys', () => {
    expect(content).toHaveProperty('es');
    expect(content).toHaveProperty('en');
  });

  it('both languages have the same top-level keys', () => {
    const esKeys = Object.keys(content.es).sort();
    const enKeys = Object.keys(content.en).sort();
    expect(esKeys).toEqual(enKeys);
  });

  it('both languages have all nav items', () => {
    const navKeys = ['home', 'about', 'skills', 'projects', 'contact'];
    for (const key of navKeys) {
      expect(content.es.nav).toHaveProperty(key);
      expect(content.en.nav).toHaveProperty(key);
    }
  });

  it('projects have the same number of items in both languages', () => {
    expect(content.es.projects.items.length).toBe(content.en.projects.items.length);
  });

  it('skills have the same number of categories in both languages', () => {
    expect(content.es.skills.categories.length).toBe(content.en.skills.categories.length);
  });

  it('all project items have required fields', () => {
    for (const lang of ['es', 'en'] as const) {
      for (const project of content[lang].projects.items) {
        expect(project.title).toBeTruthy();
        expect(project.description).toBeTruthy();
        expect(project.tech.length).toBeGreaterThan(0);
        expect(project.demo).toBeDefined();
      }
    }
  });

  it('meta titles differ between languages', () => {
    expect(content.es.meta.title).not.toBe(content.en.meta.title);
  });
});

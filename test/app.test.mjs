import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const appSource = readFileSync(new URL('../App.tsx', import.meta.url), 'utf8');
const headerSource = readFileSync(new URL('../components/Header.tsx', import.meta.url), 'utf8');

test('App incluye secciones críticas', () => {
  assert.match(appSource, /<Hero\s*\/>/);
  assert.match(appSource, /<Programs\s*\/>/);
  assert.match(appSource, /<Contact\s*\/>/);
});

test('Header contiene CTA de donación', () => {
  assert.match(headerSource, /¡Dona Ahora!/);
});

test('Header define enlaces internos clave', () => {
  assert.match(headerSource, /\{ href: '#inicio', label: 'Inicio' \}/);
  assert.match(headerSource, /\{ href: '#programas', label: 'Programas' \}/);
  assert.match(headerSource, /\{ href: '#noticias', label: 'Noticias' \}/);
});

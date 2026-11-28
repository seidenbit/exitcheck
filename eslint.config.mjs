import js from '@eslint/js';
import globals from 'globals';

export default [
  { ignores: ['dist/**', 'coverage/**', 'node_modules/**'] },
  js.configs.recommended,
  {
    rules: {
      // „== null“ prüft bewusst null und undefined zugleich.
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },
  // Die App läuft im Browser, Tests und Werkzeuge unter Node.
  { files: ['src/**/*.js'], languageOptions: { globals: { ...globals.browser } } },
  { files: ['tests/**/*.mjs', 'tools/**/*.mjs'], languageOptions: { globals: { ...globals.node } } },
  // page.evaluate() führt Teile des Browser-Tests im Browser aus.
  { files: ['tests/browser.e2e.mjs'], languageOptions: { globals: { ...globals.browser } } },
];

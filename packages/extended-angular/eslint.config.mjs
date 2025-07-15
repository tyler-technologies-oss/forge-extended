import { defineConfig } from 'eslint/config';
import tylerPlugin from '@tylertech-eslint/eslint-plugin';
import tylerAngularPlugin from '@tylertech-eslint/eslint-plugin-angular';

export default defineConfig([
  {
    name: 'Forge Extended Angular Project TypeScript',
    files: ['projects/**/*.ts'],
    extends: [
      tylerPlugin.configs.tsRecommended,
      tylerPlugin.configs.tsStylistic,
      tylerAngularPlugin.configs.recommended
    ],
    rules: {
      '@angular-eslint/prefer-standalone': 'off',
      '@tylertech-eslint/require-private-modifier': 'off'
    }
  },
  {
    name: 'Forge Extended Angular Demo TypeScript',
    files: ['src/**/*.ts'],
    extends: [
      tylerPlugin.configs.tsRecommended,
      tylerPlugin.configs.tsStylistic,
      tylerAngularPlugin.configs.recommended
    ],
    rules: {
      '@angular-eslint/prefer-standalone': 'off',
      'no-console': 'off'
    }
  },
  {
    name: 'Forge Extended Angular Templates',
    files: ['src/**/*.html'],
    extends: [tylerAngularPlugin.configs.templateRecommended]
  },
  { ignores: ['.angular/**/*'] }
]);

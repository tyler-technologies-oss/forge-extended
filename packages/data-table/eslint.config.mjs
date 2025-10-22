import { defineConfig } from 'eslint/config';
import tylerPlugin from '@tylertech-eslint/eslint-plugin';

export default defineConfig([
  {
    name: 'Forge Extended',
    files: ['src/lib/**/*.ts'],
    extends: [tylerPlugin.configs.tsRecommended, tylerPlugin.configs.tsStylistic]
  },
  {
    name: 'Forge Extended Test',
    files: ['src/lib/**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off'
    }
  },
  { ignores: ['storybook-static/**/*'] }
]);

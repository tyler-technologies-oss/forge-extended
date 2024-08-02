import { resolve } from 'path';
import { defineConfig } from 'vite';
import glob from 'glob';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: glob.sync(resolve(__dirname, 'src/lib/**/index.ts')),
      formats: ['es']
    },
    outDir: 'dist',
    minify: true,
    rollupOptions: {
      external: [/^@tylertech\//, /^@?lit/],
      output: {
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src/lib'
      }
    }
  },
  plugins: [
    tsconfigPaths(),
    dts({
      outDir: 'dist',
      exclude: ['node_modules/**', '**/*.test.ts'],
      compilerOptions: {
        rootDir: './src/lib'
      }
    })
  ]
});

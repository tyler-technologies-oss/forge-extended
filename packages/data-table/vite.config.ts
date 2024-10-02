import { resolve, isAbsolute } from 'path';
import { defineConfig } from 'vite';
import { sync } from 'glob';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: sync(resolve('src/lib/data-table.ts')),
      formats: ['es']
    },
    outDir: 'dist',
    minify: true,
    rollupOptions: {
      output: {
        dir: 'dist'
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

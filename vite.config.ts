import { resolve, basename, dirname } from 'path';
import { defineConfig } from 'vite';
import glob from 'glob';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: glob.sync(resolve(__dirname, 'src/lib/**/!(*.d|*.test).ts')),
      formats: ['es']
    },
    outDir: 'dist',
    minify: true,
    sourcemap: true,

    rollupOptions: {
      external: [/^@tylertech\/forge$/, /^lit$/, /^lit\/decorators.js$/, /^lit\/css-tag.js$/],
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
      compilerOptions: {
        rootDir: './src/lib'
      }
    })
  ]
});

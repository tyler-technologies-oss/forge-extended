import { resolve } from 'path';
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
      external: [/^@tylertech\/forge$/]
    }
  },
  plugins: [tsconfigPaths(), dts({ outDir: 'types', compilerOptions: { rootDir: './src/lib' } })]
});

import { customElementSveltePlugin } from 'custom-element-svelte-integration';
import { customElementVuejsPlugin } from 'custom-element-vuejs-integration';
import { jsDocTagsPlugin } from '@wc-toolkit/jsdoc-tags';
import forgeBranchNamePlugin from './plugins/cem/branch-name.mjs';
import forgeTypePathsPlugin from './plugins/cem/type-paths.mjs';

export default {
  globs: ['src/lib/**/*.ts'],
  exclude: ['**/index.ts'],
  plugins: [
    forgeBranchNamePlugin(),
    forgeTypePathsPlugin(),
    customElementSveltePlugin({
      outdir: 'dist/types/svelte/',
      fileName: 'forge-extended-svelte.d.ts',
      globalTypePath: '../index.d.ts'
    }),
    customElementVuejsPlugin({
      outdir: 'dist/types/vue/',
      fileName: 'forge-extended-vue.d.ts',
      globalTypePath: '../index.d.ts'
    }),
    jsDocTagsPlugin({
      hideLogs: true,
      tags: {
        dependency: {
          mappedName: 'dependencies',
          isArray: true
        },
        state: {
          mappedName: 'states',
          isArray: true
        }
      }
    })
  ]
};

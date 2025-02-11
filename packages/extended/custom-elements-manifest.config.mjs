import { customJSDocTagsPlugin } from 'cem-plugin-custom-jsdoc-tags';
import forgeBranchNamePlugin from './plugins/cem/branch-name.mjs';
import forgeTypePathsPlugin from './plugins/cem/type-paths.mjs';

export default {
  globs: ['src/lib/**/*.ts'],
  exclude: ['**/index.ts'],
  plugins: [
    forgeBranchNamePlugin(),
    forgeTypePathsPlugin(),
    customJSDocTagsPlugin({
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

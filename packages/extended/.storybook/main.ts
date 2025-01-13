import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/web-components-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    }
  ],
  staticDirs: ['../src/stories/assets'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      root: dirname(require.resolve('@storybook/builder-vite')),
      // server: { fsServe: undefined },
      plugins: [tsconfigPaths()]
    });
  }
};
export default config;

// function getAbsolutePath(value: string): any {
//   return dirname(require.resolve(join(value, 'package.json')));
// }

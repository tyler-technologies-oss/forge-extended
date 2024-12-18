import { esbuildPlugin } from '@web/dev-server-esbuild';
import { sendKeysPlugin, sendMousePlugin } from '@web/test-runner-commands/plugins';
import { fileURLToPath } from 'url';
import { readdirSync } from 'fs';

/** Gets all directory names within a given source directory.  */
export const directoryGroup = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

/**
 * @type {import('@web/test-runner').TestRunnerConfig}
 */
export default {
  files: 'src/lib/**/*.test.ts',
  concurrentBrowsers: 3,
  nodeResolve: true,
  testsFinishTimeout: 60000,
  testFramework: {
    config: {
      timeout: 5000,
      retries: 1
    }
  },
  coverageConfig: {
    report: true,
    reportDir: '.coverage',
    include: ['**'],
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 98.5,
      branches: 95.5,
      functions: 96.5,
      lines: 98.5
    }
  },
  plugins: [
    sendKeysPlugin(),
    sendMousePlugin(),
    esbuildPlugin({
      ts: true,
      tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
      loaders: {
        '.scss': 'text'
      }
    })
  ]
};

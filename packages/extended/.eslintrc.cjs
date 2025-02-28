module.exports = {
  root: true,
  ignorePatterns: [
    'node_modules/',
    'dist/**/*',
    'src/stories/**/*',
    'src/dev/**/*',
    'plugins/**/*',
    'vite.config.mts',
    'web-test-runner.config.*',
    'custom-elements-manifest.config.mjs',
    'plopfile.mjs',
    '*.test.ts',
    '.eslintrc.cjs'
  ],
  extends: ['@repo/eslint-config']
};

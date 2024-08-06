/**
 * Copy files to dist folder after build to prepare for publishing.
 *
 * The npm package is published from the `dist` directory, so we need to copy the
 * necessary files to the `dist` directory after the build.
 */

import fs from 'fs';
import path from 'path';

const files = ['package.json', 'README.md', 'LICENSE'];

for (const file of files) {
  const source = path.resolve(file);
  const target = path.resolve('dist', file);
  fs.copyFileSync(source, target);
}

// Clean up the package.json file in the dist directory
const contents = fs.readFileSync(path.resolve('dist', 'package.json'), 'utf8');
const packageJson = JSON.parse(contents);
delete packageJson.scripts;
delete packageJson.devDependencies;
delete packageJson['lint-staged'];
fs.writeFileSync(path.resolve('dist', 'package.json'), JSON.stringify(packageJson, null, 2), 'utf8');

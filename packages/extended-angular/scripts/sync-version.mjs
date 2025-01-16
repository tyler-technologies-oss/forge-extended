// This script is used to keep the version of the package.json file in the
// projects folder in sync with the version of the package.json file at
// the root of this package.

import { promises as fs } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import prettier from 'prettier';

// Define the paths
const filePath = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const fromPackageJsonPath = resolve(__dirname, '../package.json');
const toPackageJsonPath = resolve(__dirname, '../projects/forge-extended-angular/package.json');

// Read the package.json files
const fromPackageJson = JSON.parse(await fs.readFile(fromPackageJsonPath, 'utf8'));
const toPackageJson = JSON.parse(await fs.readFile(toPackageJsonPath, 'utf8'));

// Sync the package versions
toPackageJson.version = fromPackageJson.version;

// Format the package.json contents
const prettierConfig = await prettier.resolveConfig(filePath);
const formattedPackageJson = await prettier.format(JSON.stringify(toPackageJson, undefined, 2), {
  ...prettierConfig,
  parser: 'json'
});

// Write the formatted package.json
await fs.writeFile(toPackageJsonPath, formattedPackageJson, 'utf8');

import { existsSync } from 'fs';
import { generateReactWrappers } from 'custom-element-react-wrappers';
import { pascalCase } from 'change-case';
import manifest from '@tylertech/forge-extended/custom-elements.json' with { type: 'json' };

// We need to rename the React component classes to better match the HTML element tag names.
// The plugin doesn't support that. So we'll modify the manifest in memory by renaming the
// element declaration class names to be based on the tag name instead.
manifest.modules.forEach(module => {
  const componentDeclaration = module.declarations.find(d => d.kind === 'class' && d.customElement && d.tagName);
  if (componentDeclaration) {
    componentDeclaration.name = pascalCase(componentDeclaration.tagName);
  }
});

generateReactWrappers(manifest, {
  outdir: 'dist/',
  modulePath: (_className, tagName) => {
    const { path } = manifest.modules.find(m => m.declarations.some(d => d.tagName === tagName));
    // Strip filename, then walk up until the resolved dist path has an index.mjs
    let modulePath = path.replace(/^src\/lib\//, '').replace(/\/[^\/]+\.ts$/, '');
    while (modulePath.includes('/')) {
      const distPath = new URL(`../../../packages/extended/dist/${modulePath}/index.mjs`, import.meta.url);
      if (existsSync(distPath.pathname)) break;
      modulePath = modulePath.replace(/\/[^\/]+$/, '');
    }
    return `@tylertech/forge-extended/${modulePath}`;
  }
});

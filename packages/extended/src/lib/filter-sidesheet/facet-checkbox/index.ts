export * from './facet-checkbox';

export function defineFacetCheckboxElementComponent(): Promise<typeof import('./facet-checkbox')> {
  return import('./facet-checkbox');
}

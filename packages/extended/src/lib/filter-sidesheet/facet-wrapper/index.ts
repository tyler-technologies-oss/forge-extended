export * from './facet-wrapper';

export function defineFilterWrapperElementComponent(): Promise<typeof import('./facet-wrapper')> {
  return import('./facet-wrapper');
}

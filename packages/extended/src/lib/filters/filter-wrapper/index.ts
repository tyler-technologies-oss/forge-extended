export * from './filter-wrapper';

export function defineFilterWrapperElementComponent(): Promise<typeof import('./filter-wrapper')> {
  return import('./filter-wrapper');
}

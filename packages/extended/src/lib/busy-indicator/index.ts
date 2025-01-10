export * from './busy-indicator';

export function defineBusyIndicatorElementComponent(): Promise<typeof import('./busy-indicator')> {
  return import('./busy-indicator');
}

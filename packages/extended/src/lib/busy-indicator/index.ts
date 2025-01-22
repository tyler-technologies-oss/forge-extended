export * from './busy-indicator';

export function defineBusyIndicatorComponent(): Promise<typeof import('./busy-indicator')> {
  return import('./busy-indicator');
}

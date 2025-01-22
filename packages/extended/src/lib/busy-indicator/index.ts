export * from './busy-indicator';

export function defineBusyIndicatorElement(): Promise<typeof import('./busy-indicator')> {
  return import('./busy-indicator');
}

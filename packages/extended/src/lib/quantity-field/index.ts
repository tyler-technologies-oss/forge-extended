export * from './quantity-field';

export function defineQuantityFieldElementComponent(): Promise<typeof import('./quantity-field')> {
  return import('./quantity-field');
}

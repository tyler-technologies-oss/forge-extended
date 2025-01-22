export * from './quantity-field';

export function defineQuantityFieldComponent(): Promise<typeof import('./quantity-field')> {
  return import('./quantity-field');
}

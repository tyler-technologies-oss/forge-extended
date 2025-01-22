export * from './quantity-field';

export function defineQuantityFieldElement(): Promise<typeof import('./quantity-field')> {
  return import('./quantity-field');
}

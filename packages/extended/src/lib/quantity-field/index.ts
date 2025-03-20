import { QuantityFieldComponent, QuantityFieldComponentTagName } from './quantity-field';
import { tryDefine } from '@tylertech/forge-core';

export * from './quantity-field';

export function defineQuantityFieldComponent(): void {
  tryDefine(QuantityFieldComponentTagName, QuantityFieldComponent);
}

import { StructuredCardComponent, StructuredCardComponentTagName } from './structured-card';
import { tryDefine } from '@tylertech/forge-core';

export * from './structured-card';

export function defineStructuredCardComponent(): void {
  tryDefine(StructuredCardComponentTagName, StructuredCardComponent);
}

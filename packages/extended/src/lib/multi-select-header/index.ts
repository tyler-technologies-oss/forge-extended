import { MultiSelectHeaderComponent, MultiSelectHeaderComponentTagName } from './multi-select-header';
import { tryDefine } from '@tylertech/forge-core';

export * from './multi-select-header';

export function defineMultiSelectHeaderComponent(): void {
  tryDefine(MultiSelectHeaderComponentTagName, MultiSelectHeaderComponent);
}

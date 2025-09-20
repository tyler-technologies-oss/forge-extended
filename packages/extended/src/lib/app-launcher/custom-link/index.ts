import { CustomLinkComponent, CustomLinkComponentTagName } from './custom-link';
import { tryDefine } from '@tylertech/forge-core';

export * from './custom-link';

export function defineCustomLinkComponent(): void {
  tryDefine(CustomLinkComponentTagName, CustomLinkComponent);
}

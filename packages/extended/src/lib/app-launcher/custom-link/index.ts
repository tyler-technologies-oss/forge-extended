import { CustomLinkComponent, CustomLinkComponentTagName } from './custom-link';
import { tryDefine } from '@tylertech/forge-core';

export * from './custom-link';

export function defineUserProfileComponent(): void {
  tryDefine(CustomLinkComponentTagName, CustomLinkComponent);
}

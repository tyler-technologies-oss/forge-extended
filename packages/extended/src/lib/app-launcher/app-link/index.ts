import { AppLinkComponent, AppLinkComponentTagName } from './app-link';
import { tryDefine } from '@tylertech/forge-core';

export * from './app-link';

export function defineAppLinkComponent(): void {
  tryDefine(AppLinkComponentTagName, AppLinkComponent);
}

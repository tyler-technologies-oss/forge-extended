import { AppLauncherLinkComponent, AppLauncherLinkComponentTagName } from './app-launcher-link';
import { tryDefine } from '@tylertech/forge-core';

export * from './app-launcher-link';

export function defineAppLauncherLinkComponent(): void {
  tryDefine(AppLauncherLinkComponentTagName, AppLauncherLinkComponent);
}

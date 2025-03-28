import { AppLauncherComponent, AppLauncherComponentTagName } from './app-launcher';
import { tryDefine } from '@tylertech/forge-core';

export * from './app-launcher';

export function defineAppLauncherComponent(): void {
  tryDefine(AppLauncherComponentTagName, AppLauncherComponent);
}

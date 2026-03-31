import { AppLayoutComponent, AppLayoutComponentTagName } from './app-layout';
import { tryDefine } from '@tylertech/forge-core';

export * from './app-layout';

export function defineAppLayoutComponent(): void {
  tryDefine(AppLayoutComponentTagName, AppLayoutComponent);
}

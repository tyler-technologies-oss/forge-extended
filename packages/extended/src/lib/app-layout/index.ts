import { AppLayoutComponent, AppLayoutComponentTagName } from './app-layout';
import { tryDefine } from '@tylertech/forge-core';

export * from './app-layout';
export { BreakpointHandler } from './breakpoint-handler';

export function defineAppLayoutComponent(): void {
  tryDefine(AppLayoutComponentTagName, AppLayoutComponent);
}

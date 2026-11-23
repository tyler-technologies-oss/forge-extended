import { LandingPageLayoutComponent, LandingPageLayoutComponentTagName } from './landing-page-layout';
import { tryDefine } from '@tylertech/forge-core';

export * from './landing-page-layout';

export function defineLandingPageLayoutComponent(): void {
  tryDefine(LandingPageLayoutComponentTagName, LandingPageLayoutComponent);
}

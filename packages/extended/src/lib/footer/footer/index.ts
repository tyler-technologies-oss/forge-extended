import { FooterComponent, FooterComponentTagName } from './footer';
import { tryDefine } from '@tylertech/forge-core';

export * from './footer';

export function defineFooterComponent(): void {
  tryDefine(FooterComponentTagName, FooterComponent);
}

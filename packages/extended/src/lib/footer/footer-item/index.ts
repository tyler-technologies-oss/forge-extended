import { FooterItemComponent, FooterItemComponentTagName } from './footer-item';
import { tryDefine } from '@tylertech/forge-core';

export * from './footer-item';

export function defineFooterItemComponent(): void {
  tryDefine(FooterItemComponentTagName, FooterItemComponent);
}

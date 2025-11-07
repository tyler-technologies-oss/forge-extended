import { PageToolbarComponent, PageToolbarComponentTagName } from './page-toolbar';
import { tryDefine } from '@tylertech/forge-core';

export * from './page-toolbar';

export function definePageToolbarComponent(): void {
  tryDefine(PageToolbarComponentTagName, PageToolbarComponent);
}

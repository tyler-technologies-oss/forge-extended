import { ResponsiveToolbarComponent, ResponsiveToolbarComponentTagName } from './responsive-toolbar';
import { tryDefine } from '@tylertech/forge-core';

export * from './responsive-toolbar';

export function defineResponsiveToolbarComponent(): void {
  tryDefine(ResponsiveToolbarComponentTagName, ResponsiveToolbarComponent);
}

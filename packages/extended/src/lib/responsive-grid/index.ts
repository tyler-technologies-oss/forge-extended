import { ResponsiveGridComponent, ResponsiveGridComponentTagName } from './responsive-grid';
import { tryDefine } from '@tylertech/forge-core';

export * from './responsive-grid';

export function defineResponsiveGridComponent(): void {
  tryDefine(ResponsiveGridComponentTagName, ResponsiveGridComponent);
}

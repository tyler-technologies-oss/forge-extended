import { ThemeShowcaseComponent, ThemeShowcaseComponentTagName } from './theme-showcase';
import { tryDefine } from '@tylertech/forge-core';

export * from './theme-showcase';

export function defineThemeShowcaseComponent(): void {
  tryDefine(ThemeShowcaseComponentTagName, ThemeShowcaseComponent);
}

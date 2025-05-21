import { ThemeToggleComponent, ThemeToggleComponentTagName } from './theme-toggle';
import { tryDefine } from '@tylertech/forge-core';

export * from './theme-toggle';

export function defineThemeToggleComponent(): void {
  tryDefine(ThemeToggleComponentTagName, ThemeToggleComponent);
}

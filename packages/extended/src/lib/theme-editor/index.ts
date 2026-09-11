import { ThemeEditorComponent, ThemeEditorComponentTagName } from './theme-editor';
import { tryDefine } from '@tylertech/forge-core';

export * from './theme-editor';
export * from './theme-model';
export * from './theme-generator';
export * from './theme-tokens';

export function defineThemeEditorComponent(): void {
  tryDefine(ThemeEditorComponentTagName, ThemeEditorComponent);
}

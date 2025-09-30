import { AiButtonComponent, AiButtonComponentTagName } from './ai-button';
import { tryDefine } from '@tylertech/forge-core';

export * from './ai-button';

export function defineAiButtonComponent(): void {
  tryDefine(AiButtonComponentTagName, AiButtonComponent);
}

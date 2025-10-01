import { AiChatWidgetComponent, AiChatWidgetComponentTagName } from './ai-chat-widget';
import { tryDefine } from '@tylertech/forge-core';

export * from './ai-chat-widget';
export * from './ai-button';
export * from './ai-chat-interface';
export * from './ai-response-message';
export * from './ai-user-message';

export function defineAiChatWidgetComponent(): void {
  tryDefine(AiChatWidgetComponentTagName, AiChatWidgetComponent);
}

import { ContentCardComponent, ContentCardComponentTagName } from './content-card';
import { tryDefine } from '@tylertech/forge-core';

export * from './content-card';

export function defineContentCardComponent(): void {
  tryDefine(ContentCardComponentTagName, ContentCardComponent);
}

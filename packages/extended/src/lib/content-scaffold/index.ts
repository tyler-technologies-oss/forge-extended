import { ContentScaffoldComponent, ContentScaffoldComponentTagName } from './content-scaffold';
import { tryDefine } from '@tylertech/forge-core';

export * from './content-scaffold';

export function defineContentScaffoldComponent(): void {
  tryDefine(ContentScaffoldComponentTagName, ContentScaffoldComponent);
}

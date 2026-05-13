import { CountCardComponent, CountCardComponentTagName } from './count-card';
import { tryDefine } from '@tylertech/forge-core';

export * from './count-card';

export function defineCountCardComponent(): void {
  tryDefine(CountCardComponentTagName, CountCardComponent);
}

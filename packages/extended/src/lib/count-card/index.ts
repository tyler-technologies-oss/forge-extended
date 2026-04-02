import { CountCardComponent, CountCardComponentTagName } from './count-card';
import { CountBadgeComponent, CountBadgeComponentTagName } from './count-badge';
import { tryDefine } from '@tylertech/forge-core';

export * from './count-card';
export * from './count-badge';

export function defineCountCardComponent(): void {
  tryDefine(CountCardComponentTagName, CountCardComponent);
}

export function defineCountBadgeComponent(): void {
  tryDefine(CountBadgeComponentTagName, CountBadgeComponent);
}

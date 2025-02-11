import { BusyIndicatorComponent, BusyIndicatorComponentTagName } from './busy-indicator';
import { tryDefine } from '@tylertech/forge-core';

export * from './busy-indicator';

export function defineBusyIndicatorComponent(): void {
  tryDefine(BusyIndicatorComponentTagName, BusyIndicatorComponent);
}

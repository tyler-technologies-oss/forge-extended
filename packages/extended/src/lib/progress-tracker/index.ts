import { ProgressTrackerComponent, ProgressTrackerComponentTagName } from './progress-tracker';
import { tryDefine } from '@tylertech/forge-core';

export * from './progress-tracker';

export function defineProgressTrackerComponent(): void {
  tryDefine(ProgressTrackerComponentTagName, ProgressTrackerComponent);
}

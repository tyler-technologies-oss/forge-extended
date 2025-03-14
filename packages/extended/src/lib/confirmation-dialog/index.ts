import { ConfirmationDialogComponent, ConfirmationDialogComponentTagName } from './confirmation-dialog';
import { tryDefine } from '@tylertech/forge-core';

export * from './confirmation-dialog';

export function defineConfirmationDialogComponent(): void {
  tryDefine(ConfirmationDialogComponentTagName, ConfirmationDialogComponent);
}

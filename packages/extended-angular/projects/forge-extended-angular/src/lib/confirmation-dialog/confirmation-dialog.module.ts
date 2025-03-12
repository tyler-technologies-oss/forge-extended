import { NgModule } from '@angular/core';
import { ForgeExtendedConfirmationDialogProxyModule } from './confirmation-dialog-proxy.module';
import { ConfirmationDialogService } from './confirmation-dialog.service';

@NgModule({
  providers: [ConfirmationDialogService],
  imports: [ForgeExtendedConfirmationDialogProxyModule],
  exports: [ForgeExtendedConfirmationDialogProxyModule]
})
export class ForgeExtendedConfirmationDialogModule {}

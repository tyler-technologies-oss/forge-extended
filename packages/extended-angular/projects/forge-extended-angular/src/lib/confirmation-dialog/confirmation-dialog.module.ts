import { NgModule } from '@angular/core';

@NgModule({
  providers: [ConfirmationDialogRefService],
  imports: [ForgeExtendedConfirmationDialogRefroxyModule],
  exports: [ForgeExtendedConfirmationDialogRefProxyModule]
})
export class ForgeExtendedConfirmationDialogRefModule {}

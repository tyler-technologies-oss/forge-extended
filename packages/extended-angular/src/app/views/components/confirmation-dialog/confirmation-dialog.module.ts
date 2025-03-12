import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeButtonModule, ForgeStackModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ConfirmationDialogDemoComponent } from './confirmation-dialog.component';
import { ConfirmationDialogRoutingModule } from './confirmation-dialog-routing.module';
import { ForgeExtendedConfirmationDialogModule } from 'projects/forge-extended-angular/src/lib/confirmation-dialog/confirmation-dialog.module';

@NgModule({
  declarations: [ConfirmationDialogDemoComponent],
  imports: [
    CommonModule,
    ConfirmationDialogRoutingModule,
    ForgeExtendedConfirmationDialogModule,
    DemoCardComponent,
    ForgeButtonModule,
    ForgeStackModule
  ]
})
export class ConfirmationDialogModule {}

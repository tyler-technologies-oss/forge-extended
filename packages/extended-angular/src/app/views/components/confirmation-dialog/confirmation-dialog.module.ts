import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeStackModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ConfirmationDialogDemoComponent } from './confirmation-dialog.component';
import { ConfirmationDialogRoutingModule } from './confirmation-dialog-routing.module';
import { ForgeExtendedConfirmationDialogModule } from 'projects/forge-extended-angular/src/lib/confirmation-dialog/confirmation-dialog.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConfirmationDialogDemoComponent],
  imports: [
    CommonModule,
    ConfirmationDialogRoutingModule,
    ForgeExtendedConfirmationDialogModule,
    DemoCardComponent,
    ForgeButtonModule,
    ForgeStackModule,
    ForgeCheckboxModule,
    FormsModule
  ]
})
export class ConfirmationDialogModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationDialogDemoComponent } from './confirmation-dialog.component';

const routes: Routes = [{ path: '', component: ConfirmationDialogDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationDialogRoutingModule {}

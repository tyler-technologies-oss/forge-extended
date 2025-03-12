import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDemoComponent } from './component-demo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ComponentDemoComponent },
  {
    path: 'quantity-field',
    loadChildren: () =>
      import('../../views/components/quantity-field/quantity-field.module').then(m => m.QuantityFieldModule)
  },
  {
    path: 'busy-indicator',
    loadChildren: () =>
      import('../../views/components/busy-indicator/busy-indicator.module').then(m => m.BusyIndicatorModule)
  },
  {
    path: 'confirmation-dialog',
    loadChildren: () =>
      import('../../views/components/confirmation-dialog/confirmation-dialog.module').then(
        m => m.ConfirmationDialogModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentDemoRoutingModule {}

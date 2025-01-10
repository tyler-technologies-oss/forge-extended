import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuantityFieldDemoComponent } from './quantity-field.component';

const routes: Routes = [{ path: '', component: QuantityFieldDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuantityFieldRoutingModule {}

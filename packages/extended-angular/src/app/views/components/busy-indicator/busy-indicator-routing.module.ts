import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusyIndicatorDemoComponent } from './busy-indicator.component';

const routes: Routes = [{ path: '', component: BusyIndicatorDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusyIndicatorRoutingModule {}

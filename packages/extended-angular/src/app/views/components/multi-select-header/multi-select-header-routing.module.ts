import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiSelectHeaderDemoComponent } from './multi-select-header.component';

const routes: Routes = [{ path: '', component: MultiSelectHeaderDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiSelectHeaderRoutingModule {}

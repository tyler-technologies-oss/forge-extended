import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDemoComponent } from './component-demo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ComponentDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentDemoRoutingModule {}

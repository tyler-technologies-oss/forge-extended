import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsiveToolbarDemoComponent } from './responsive-toolbar.component';

const routes: Routes = [{ path: '', component: ResponsiveToolbarDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsiveToolbarRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageLayoutDemoComponent } from './landing-page-layout.component';

const routes: Routes = [{ path: '', component: LandingPageLayoutDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageLayoutRoutingModule {}

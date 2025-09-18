import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLauncherDemoComponent } from './app-launcher.component';

const routes: Routes = [{ path: '', component: AppLauncherDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLauncherRoutingModule {}

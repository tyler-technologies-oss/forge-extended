import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLauncherRoutingModule } from './app-launcher-routing.module';
import { AppLauncherDemoComponent } from './app-launcher.component';
import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ForgeExtendedAppLauncherModule } from 'projects/forge-extended-angular/src/lib/app-launcher/app-launcher.module';
import { ForgeExtendedCustomLinkModule } from 'projects/forge-extended-angular/src/lib/custom-link/custom-link.module';
import { ForgeAppBarModule } from '@tylertech/forge-angular';

@NgModule({
  declarations: [AppLauncherDemoComponent],
  imports: [
    CommonModule,
    AppLauncherRoutingModule,
    DemoCardComponent,
    ForgeExtendedAppLauncherModule,
    ForgeExtendedCustomLinkModule,
    ForgeAppBarModule
  ]
})
export class AppLauncherModule {}

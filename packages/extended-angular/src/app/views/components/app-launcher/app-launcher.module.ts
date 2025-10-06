import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLauncherRoutingModule } from './app-launcher-routing.module';
import { AppLauncherDemoComponent } from './app-launcher.component';
import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ForgeExtendedAppLauncherModule } from 'projects/forge-extended-angular/src/lib/app-launcher/app-launcher.module';
import { ForgeAppBarModule } from '@tylertech/forge-angular';
import { ForgeExtendedAppLauncherLinkModule } from 'projects/forge-extended-angular/src/lib/app-launcher-link/app-launcher-link.module';

@NgModule({
  declarations: [AppLauncherDemoComponent],
  imports: [
    CommonModule,
    AppLauncherRoutingModule,
    DemoCardComponent,
    ForgeExtendedAppLauncherModule,
    ForgeAppBarModule,
    ForgeExtendedAppLauncherLinkModule
  ]
})
export class AppLauncherModule {}

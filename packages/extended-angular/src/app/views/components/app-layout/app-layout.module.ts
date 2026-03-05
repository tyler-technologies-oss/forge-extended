import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutDemoComponent } from './app-layout.component';
import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ForgeExtendedAppLayoutModule } from 'projects/forge-extended-angular/src/lib/app-layout/app-layout.module';
import { ForgeListModule, ForgeIconModule, ForgeIconButtonModule } from '@tylertech/forge-angular';

@NgModule({
  declarations: [AppLayoutDemoComponent],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    DemoCardComponent,
    ForgeExtendedAppLayoutModule,
    ForgeListModule,
    ForgeIconModule,
    ForgeIconButtonModule
  ]
})
export class AppLayoutModule {}

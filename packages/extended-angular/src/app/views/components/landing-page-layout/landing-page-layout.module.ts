import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ForgeButtonModule, ForgeCardModule } from '@tylertech/forge-angular';
import { ForgeExtendedLandingPageLayoutModule } from 'projects/forge-extended-angular/src/lib/landing-page-layout';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { LandingPageLayoutDemoComponent } from './landing-page-layout.component';
import { LandingPageLayoutRoutingModule } from './landing-page-layout-routing.module';

@NgModule({
  declarations: [LandingPageLayoutDemoComponent],
  imports: [
    CommonModule,
    LandingPageLayoutRoutingModule,
    DemoCardComponent,
    ForgeExtendedLandingPageLayoutModule,
    ForgeButtonModule,
    ForgeCardModule
  ]
})
export class LandingPageLayoutModule {}

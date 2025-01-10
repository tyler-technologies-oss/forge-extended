import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeExtendedBusyIndicatorModule } from '@tylertech/forge-extended-angular';
import { ForgeButtonModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { BusyIndicatorDemoComponent } from './busy-indicator.component';
import { BusyIndicatorRoutingModule } from './busy-indicator-routing.module';

@NgModule({
  declarations: [BusyIndicatorDemoComponent],
  imports: [
    CommonModule,
    BusyIndicatorRoutingModule,
    ForgeExtendedBusyIndicatorModule,
    DemoCardComponent,
    ForgeButtonModule
  ]
})
export class BusyIndicatorModule {}

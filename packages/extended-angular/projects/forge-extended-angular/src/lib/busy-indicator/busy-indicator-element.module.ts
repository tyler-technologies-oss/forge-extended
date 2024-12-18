import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BusyIndicatorElement } from './busy-indicator-element.component';

// import '@tylertech/forge-extended/busy-indicator';

@NgModule({
  imports: [CommonModule],
  declarations: [BusyIndicatorElement],
  exports: [BusyIndicatorElement]
})
export class ForgeExtendedBusyIndicatorModule {}

// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { defineBusyIndicatorComponent } from '@tylertech/forge-extended';

import { BusyIndicatorComponent } from './busy-indicator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BusyIndicatorComponent],
  exports: [BusyIndicatorComponent]
})
export class ForgeExtBusyIndicatorProxyModule {
  constructor() {
    defineBusyIndicatorComponent();
  }
}

import { NgModule } from '@angular/core';

import { ForgeExtendedBusyIndicatorModule } from './busy-indicator';
import { ForgeExtendedQuantityFieldElementModule } from './quantity-field';

@NgModule({
  exports: [
    ForgeExtendedBusyIndicatorModule,
    ForgeExtendedQuantityFieldElementModule
  ]
})
export class ForgeExtendedModule {}

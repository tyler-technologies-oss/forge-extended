import { NgModule } from '@angular/core';

import { ForgeExtendedBusyIndicatorModule } from './busy-indicator/busy-indicator-element.module';
import { ForgeExtendedQuantityFieldElementModule } from './quantity-field/quantity-field-element.module';

@NgModule({
  exports: [ForgeExtendedBusyIndicatorModule, ForgeExtendedQuantityFieldElementModule]
})
export class ForgeExtendedModule {}

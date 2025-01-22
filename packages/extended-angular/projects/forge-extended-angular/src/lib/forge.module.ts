import { NgModule } from '@angular/core';

import { ForgeExtendedBusyIndicatorModule } from './busy-indicator/busy-indicator.module';
import { ForgeExtendedQuantityFieldModule } from './quantity-field/quantity-field.module';

@NgModule({
  exports: [ForgeExtendedBusyIndicatorModule, ForgeExtendedQuantityFieldModule]
})
export class ForgeExtendedModule {}

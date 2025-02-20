import { NgModule } from '@angular/core';

import { ForgeExtBusyIndicatorModule } from './busy-indicator/busy-indicator.module';
import { ForgeExtQuantityFieldModule } from './quantity-field/quantity-field.module';

@NgModule({
  exports: [ForgeExtQuantityFieldModule, ForgeExtBusyIndicatorModule]
})
export class ForgeExtendedModule {}

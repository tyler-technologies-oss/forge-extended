import { NgModule } from '@angular/core';
import { ForgeExtendedBusyIndicatorProxyModule } from './busy-indicator-proxy.module';
import { BusyIndicatorService } from './busy-indicator.service';

@NgModule({
  providers: [BusyIndicatorService],
  imports: [ForgeExtendedBusyIndicatorProxyModule],
  exports: [ForgeExtendedBusyIndicatorProxyModule]
})
export class ForgeExtendedBusyIndicatorModule {}

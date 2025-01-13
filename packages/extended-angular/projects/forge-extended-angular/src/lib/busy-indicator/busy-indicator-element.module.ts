import { NgModule } from '@angular/core';
import { ForgeExtendedBusyIndicatorElementProxyModule } from './busy-indicator-element-proxy.module';
import { BusyIndicatorService } from './busy-indicator.service';

@NgModule({
  providers: [BusyIndicatorService],
  imports: [ForgeExtendedBusyIndicatorElementProxyModule],
  exports: [ForgeExtendedBusyIndicatorElementProxyModule]
})
export class ForgeExtendedBusyIndicatorModule {}

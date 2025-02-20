import { NgModule } from '@angular/core';
import { ForgeExtBusyIndicatorProxyModule } from './busy-indicator-proxy.module';
import { BusyIndicatorService } from './busy-indicator.service';

@NgModule({
  providers: [BusyIndicatorService],
  imports: [ForgeExtBusyIndicatorProxyModule],
  exports: [ForgeExtBusyIndicatorProxyModule]
})
export class ForgeExtBusyIndicatorModule {}

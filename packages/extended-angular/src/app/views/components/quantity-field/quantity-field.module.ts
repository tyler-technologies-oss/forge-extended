import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgeExtendedQuantityFieldElementModule } from '@tylertech/forge-extended-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { QuantityFieldDemoComponent } from './quantity-field.component';
import { QuantityFieldRoutingModule } from './quantity-field-routing.module';
import { ForgeLabelValueModule } from '@tylertech/forge-angular';

@NgModule({
  declarations: [QuantityFieldDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuantityFieldRoutingModule,
    ForgeExtendedQuantityFieldElementModule,
    DemoCardComponent,
    ForgeLabelValueModule
  ]
})
export class QuantityFieldModule {}

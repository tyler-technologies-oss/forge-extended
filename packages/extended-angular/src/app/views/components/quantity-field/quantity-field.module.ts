import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeExtQuantityFieldModule } from '@tylertech/forge-extended-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { QuantityFieldRoutingModule } from './quantity-field-routing.module';
import { QuantityFieldDemoComponent } from './quantity-field.component';

@NgModule({
  declarations: [QuantityFieldDemoComponent],
  imports: [CommonModule, FormsModule, QuantityFieldRoutingModule, ForgeExtQuantityFieldModule, DemoCardComponent]
})
export class QuantityFieldModule {}

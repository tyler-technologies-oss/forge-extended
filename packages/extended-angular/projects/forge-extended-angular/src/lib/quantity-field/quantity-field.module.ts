// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { defineQuantityFieldComponent } from '@tylertech/forge-extended';

import { QuantityFieldComponent } from './quantity-field.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuantityFieldComponent],
  exports: [QuantityFieldComponent]
})
export class ForgeExtendedQuantityFieldModule {
  constructor() {
    defineQuantityFieldComponent();
  }
}

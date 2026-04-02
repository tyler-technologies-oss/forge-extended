import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { StructuredCardDemoComponent } from './structured-card.component';
import { StructuredCardRoutingModule } from './structured-card-routing.module';
import { ForgeButtonModule, ForgeIconButtonModule, ForgeIconModule, ForgeStackModule } from '@tylertech/forge-angular';
import { ForgeExtendedStructuredCardModule } from 'projects/forge-extended-angular/src/lib/structured-card/structured-card.module';

@NgModule({
  declarations: [StructuredCardDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    StructuredCardRoutingModule,
    DemoCardComponent,
    ForgeExtendedStructuredCardModule,
    ForgeIconModule,
    ForgeIconButtonModule,
    ForgeButtonModule,
    ForgeStackModule
  ]
})
export class StructuredCardModule {}

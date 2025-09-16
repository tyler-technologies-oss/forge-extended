import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ForgeButtonModule,
  ForgeCheckboxModule,
  ForgeStackModule,
  ForgeIconModule,
  ForgeIconButtonModule
} from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { MultiSelectHeaderDemoComponent } from './multi-select-header.component';
import { MultiSelectHeaderRoutingModule } from './multi-select-header-routing.module';
import { ForgeExtendedMultiSelectHeaderModule } from 'projects/forge-extended-angular/src/lib/multi-select-header/multi-select-header.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MultiSelectHeaderDemoComponent],
  imports: [
    CommonModule,
    MultiSelectHeaderRoutingModule,
    ForgeExtendedMultiSelectHeaderModule,
    DemoCardComponent,
    ForgeButtonModule,
    ForgeStackModule,
    ForgeCheckboxModule,
    ForgeIconModule,
    ForgeIconButtonModule,
    FormsModule
  ]
})
export class MultiSelectHeaderModule {}

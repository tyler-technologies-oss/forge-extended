import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { CountCardDemoComponent } from './count-card.component';
import { CountCardRoutingModule } from './count-card-routing.module';
import {
  ForgeBadgeModule,
  ForgeIconButtonModule,
  ForgeIconModule,
  ForgeOptionModule,
  ForgeSelectModule,
  ForgeSwitchModule
} from '@tylertech/forge-angular';
import { ForgeExtendedCountCardModule } from 'projects/forge-extended-angular/src/lib/count-card/count-card.module';

@NgModule({
  declarations: [CountCardDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    CountCardRoutingModule,
    DemoCardComponent,
    ForgeExtendedCountCardModule,
    ForgeIconModule,
    ForgeIconButtonModule,
    ForgeBadgeModule,
    ForgeSelectModule,
    ForgeOptionModule,
    ForgeSwitchModule
  ]
})
export class CountCardModule {}

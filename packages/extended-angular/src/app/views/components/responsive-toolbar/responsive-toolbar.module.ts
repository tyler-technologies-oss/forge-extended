import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ResponsiveToolbarRoutingModule } from './responsive-toolbar-routing.module';
import { ResponsiveToolbarDemoComponent } from './responsive-toolbar.component';
import { ForgeExtendedResponsiveToolbarModule } from 'projects/forge-extended-angular/src/public-api';
import {
  ForgeButtonModule,
  ForgeCardModule,
  ForgeIconButtonModule,
  ForgeMenuModule,
  ForgeStackModule
} from '@tylertech/forge-angular';

@NgModule({
  declarations: [ResponsiveToolbarDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ResponsiveToolbarRoutingModule,
    ForgeExtendedResponsiveToolbarModule,
    DemoCardComponent,
    ForgeCardModule,
    ForgeStackModule,
    ForgeIconButtonModule,
    ForgeMenuModule,
    ForgeButtonModule
  ]
})
export class ResponsiveToolbarModule {}

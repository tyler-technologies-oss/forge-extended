import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutDemoComponent } from './app-layout.component';
import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import {
  ForgeIconModule,
  ForgeInlineMessageModule,
  ForgeTextFieldModule,
  ForgeButtonModule
} from '@tylertech/forge-angular';

@NgModule({
  declarations: [AppLayoutDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppLayoutRoutingModule,
    DemoCardComponent,
    ForgeIconModule,
    ForgeInlineMessageModule,
    ForgeTextFieldModule,
    ForgeButtonModule
  ]
})
export class AppLayoutModule {}

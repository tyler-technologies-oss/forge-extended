import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { UserProfileDemoComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ForgeAppBarModule, ForgeIconModule } from '@tylertech/forge-angular';
import { ForgeExtendedUserProfileModule, ForgeExtendedProfileLinkModule } from '@tylertech/forge-extended-angular';

@NgModule({
  declarations: [UserProfileDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserProfileRoutingModule,
    DemoCardComponent,
    ForgeAppBarModule,
    ForgeExtendedUserProfileModule,
    ForgeExtendedProfileLinkModule,
    ForgeIconModule
  ]
})
export class UserProfileModule {}

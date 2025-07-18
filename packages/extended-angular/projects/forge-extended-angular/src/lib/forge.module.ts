import { NgModule } from '@angular/core';
import { ForgeExtendedBusyIndicatorModule } from './busy-indicator/busy-indicator.module';
import { ForgeExtendedQuantityFieldModule } from './quantity-field/quantity-field.module';
import { ForgeExtendedConfirmationDialogModule } from './confirmation-dialog/confirmation-dialog.module';
import { ForgeExtendedResponsiveToolbarModule } from './responsive-toolbar/responsive-toolbar.module';
import { ForgeExtendedProfileLinkModule } from './profile-link/profile-link.module';
import { ForgeExtendedUserProfileModule } from './user-profile/user-profile.module';

@NgModule({
  exports: [
    ForgeExtendedBusyIndicatorModule,
    ForgeExtendedQuantityFieldModule,
    ForgeExtendedConfirmationDialogModule,
    ForgeExtendedResponsiveToolbarModule,
    ForgeExtendedProfileLinkModule,
    ForgeExtendedUserProfileModule
  ]
})
export class ForgeExtendedModule {}

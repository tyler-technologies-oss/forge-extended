import { ForgeExtendedAppLauncherLinkModule } from './app-launcher-link/app-launcher-link.module';
import { ForgeExtendedAppLauncherModule } from './app-launcher/app-launcher.module';
import { ForgeExtendedAppLayoutModule } from './app-layout';
import { ForgeExtendedBusyIndicatorModule } from './busy-indicator/busy-indicator.module';
import { ForgeExtendedConfirmationDialogModule } from './confirmation-dialog/confirmation-dialog.module';
import { ForgeExtendedCountCardModule } from './count-card';
import { ForgeExtendedMultiSelectHeaderModule } from './multi-select-header/multi-select-header.module';
import { ForgeExtendedProfileLinkModule } from './profile-link/profile-link.module';
import { ForgeExtendedQuantityFieldModule } from './quantity-field/quantity-field.module';
import { ForgeExtendedResponsiveToolbarModule } from './responsive-toolbar/responsive-toolbar.module';
import { ForgeExtendedStructuredCardModule } from './structured-card';
import { ForgeExtendedUserProfileModule } from './user-profile/user-profile.module';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    ForgeExtendedAppLauncherLinkModule,
    ForgeExtendedAppLauncherModule,
    ForgeExtendedBusyIndicatorModule,
    ForgeExtendedConfirmationDialogModule,
    ForgeExtendedMultiSelectHeaderModule,
    ForgeExtendedProfileLinkModule,
    ForgeExtendedQuantityFieldModule,
    ForgeExtendedResponsiveToolbarModule,
    ForgeExtendedUserProfileModule,
    ForgeExtendedCountCardModule,
    ForgeExtendedAppLayoutModule,
    ForgeExtendedStructuredCardModule
  ]
})
export class ForgeExtendedModule {}

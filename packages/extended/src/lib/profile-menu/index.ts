import { ProfileMenuComponent, ProfileMenuComponentTagName } from './profile-menu';
import { tryDefine } from '@tylertech/forge-core';

export * from './profile-menu';

export function defineProfileMenuComponent(): void {
  tryDefine(ProfileMenuComponentTagName, ProfileMenuComponent);
}

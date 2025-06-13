import { ProfileLinkComponent, ProfileLinkComponentTagName } from './profile-link';
import { tryDefine } from '@tylertech/forge-core';

export * from './profile-link';

export function defineProfileMenuOptionComponent(): void {
  tryDefine(ProfileLinkComponentTagName, ProfileLinkComponent);
}

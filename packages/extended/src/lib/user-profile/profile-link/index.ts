import { ProfileLinkComponent, ProfileLinkComponentTagName } from './profile-link';
import { tryDefine } from '@tylertech/forge-core';

export * from './profile-link';

export function defineProfileLinkComponent(): void {
  tryDefine(ProfileLinkComponentTagName, ProfileLinkComponent);
}

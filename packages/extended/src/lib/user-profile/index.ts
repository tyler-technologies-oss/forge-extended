import { UserProfileComponent, UserProfileComponentTagName } from './user-profile';
import { tryDefine } from '@tylertech/forge-core';

export * from './user-profile';

export function defineUserProfileComponent(): void {
  tryDefine(UserProfileComponentTagName, UserProfileComponent);
}

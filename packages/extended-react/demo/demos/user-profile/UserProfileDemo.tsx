import { IconRegistry } from '@tylertech/forge';
import { ForgeProfileLink, ForgeUserProfile } from '@tylertech/forge-extended-react';
import { ForgeIcon } from '@tylertech/forge-react';
import { tylIconAccount, tylIconSettings } from '@tylertech/tyler-icons';

IconRegistry.define([tylIconAccount, tylIconSettings]);

export function UserProfileDemo(): JSX.Element {
  return (
    <>
      <h2 className="forge-typography--subheading4">User Profile</h2>
      <div>
        <ForgeUserProfile slot="end" full-name="First Last" email="first.last@example.com" themeToggle>
          <ForgeProfileLink>
            <ForgeIcon slot="icon" name="account" />
            <a href="#">Account</a>
          </ForgeProfileLink>
          <ForgeProfileLink>
            <ForgeIcon slot="icon" name="settings" />
            <a href="#">Settings</a>
          </ForgeProfileLink>
        </ForgeUserProfile>
      </div>
    </>
  );
}

import { IAppBarComponent, IconRegistry } from '@tylertech/forge';
import { PropsWithChildren, useEffect } from 'react';
import { ForgeAppBar, ForgeIcon } from '@tylertech/forge-react';
import { tylIconTylerTalkingTLogo } from '@tylertech/tyler-icons';
import { useHistory } from 'react-router-dom';
import { ForgeUserProfile } from '@tylertech/forge-extended-react';

export interface HeaderProps {
  slot: string;
}

function Header(props: PropsWithChildren<HeaderProps>): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    IconRegistry.define(tylIconTylerTalkingTLogo);
  }, []);

  function handleHref(evt: CustomEvent<void>): void {
    evt.preventDefault();
    history.push((evt.target as IAppBarComponent).href);
  }

  function handleSignOut(evt: CustomEvent): void {
    // eslint-disable-next-line no-console
    console.log('Sign out clicked', evt);
  }

  return (
    <ForgeAppBar
      theme-mode="scoped"
      href="/"
      on-forge-app-bar-navigate={handleHref}
      title-text="Tyler Forge™ - React Adapter"
      {...props}>
      <ForgeIcon slot="logo" name="tyler_talking_t_logo" />
      <ForgeUserProfile
        slot="end"
        full-name="First Last"
        email="first.last@example.com"
        themeToggle
        onForgeUserProfileSignOut={handleSignOut}></ForgeUserProfile>
    </ForgeAppBar>
  );
}

export default Header;

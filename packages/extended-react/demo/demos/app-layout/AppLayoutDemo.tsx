import { IconRegistry } from '@tylertech/forge';
import { ForgeAppLayout } from '@tylertech/forge-extended-react';
import { ForgeIcon, ForgeIconButton, ForgeList, ForgeListItem, ForgeStack } from '@tylertech/forge-react';
import { tylIconHome, tylIconSettings, tylIconInfo, tylIconNotifications, tylIconSearch } from '@tylertech/tyler-icons';

IconRegistry.define([tylIconHome, tylIconSettings, tylIconInfo, tylIconNotifications, tylIconSearch]);

export function AppLayoutDemo(): JSX.Element {
  return (
    <>
      <h2 className="forge-typography--subheading4">App Layout</h2>
      <ForgeAppLayout appTitle="My Application">
        {/* Navigation */}
        <ForgeList slot="navigation">
          <ForgeListItem>
            <ForgeIcon slot="start" name="home" />
            <span>Home</span>
          </ForgeListItem>
          <ForgeListItem>
            <ForgeIcon slot="start" name="settings" />
            <span>Settings</span>
          </ForgeListItem>
          <ForgeListItem>
            <ForgeIcon slot="start" name="info" />
            <span>About</span>
          </ForgeListItem>
        </ForgeList>

        {/* App Bar End Content */}
        <ForgeStack slot="app-bar-end" inline alignment="center" gap="4">
          <ForgeIconButton aria-label="Search">
            <ForgeIcon name="search" external />
          </ForgeIconButton>
          <ForgeIconButton aria-label="Notifications">
            <ForgeIcon name="notifications" external />
          </ForgeIconButton>
        </ForgeStack>

        {/* Main Content */}
        <div slot="body" style={{ padding: '16px' }}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sed rem saepe corporis? Magni eos impedit
            itaque pariatur voluptatem quod cumque recusandae non, vero est eum, illum asperiores iste id!
          </p>
        </div>
      </ForgeAppLayout>
    </>
  );
}

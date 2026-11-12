import { addons } from 'storybook/manager-api';
import { defineBannerComponent, defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconWarning } from '@tylertech/tyler-icons';

defineBannerComponent();
defineIconComponent();
IconRegistry.define([tylIconWarning]);

addons.setConfig({
  sidebar: {
    showRoots: true,
    collapsedRoots: ['Getting Started', 'Components'],
    filters: {
      hidden: item => !item.tags?.includes('hidden')
    }
  }
});

/**
 * Renders a site-wide deprecation banner above the Storybook UI so the messaging lives in one place
 * and is visible on every docs page and story.
 */
function renderDeprecationBanner(onNavigate: (path: string) => void): void {
  const banner = document.createElement('forge-banner');
  banner.id = 'forge-extended-deprecation-banner';
  banner.setAttribute('theme', 'warning');
  banner.setAttribute('persistent', '');
  banner.innerHTML = `
    <forge-icon slot="icon" name="warning"></forge-icon>
    <div>
      <strong>Tyler Forge™ Extended is deprecated and will no longer be maintained after January 10, 2027 (90 days).</strong>
      All components have moved into <code>@tylertech/forge</code> 3.17.0 and later.
      <a href="?path=/docs/migrating-to-forge-core--docs" data-path="/docs/migrating-to-forge-core--docs">Read the migration guide</a>
      or run the <code>forge-extended-migration</code> codemod from
      <a href="https://github.com/tyler-technologies-oss/forge-upgrade" target="_blank" rel="noopener">@tylertech/forge-upgrade</a>.
      Concerns about the timeline? Let us know in the
      <a href="https://teams.microsoft.com/l/channel/19%3A1gCw-wLjrS56X_iAY0mpHpk4PyWOi08JiMM7Kc1xvho1%40thread.tacv2/Support?groupId=2bb1b8ea-cd12-4df5-a4ab-0c895bfcda5c&amp;tenantId=7cc5f0f9-ee5b-4106-a62d-1b9f7be46118" target="_blank" rel="noopener noreferrer">Forge Support Teams channel</a>.
    </div>
  `;
  banner.addEventListener('click', evt => {
    const link = (evt.target as HTMLElement).closest<HTMLAnchorElement>('a[data-path]');
    if (link && evt.button === 0 && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
      evt.preventDefault();
      onNavigate(link.dataset.path as string);
    }
  });
  document.body.prepend(banner);
}

addons.register('forge-extended/deprecation-banner', api => {
  renderDeprecationBanner(path => api.navigate(path));
});

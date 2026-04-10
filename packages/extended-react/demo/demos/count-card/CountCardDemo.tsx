import { IconRegistry } from '@tylertech/forge';
import { ForgeCountCard } from '@tylertech/forge-extended-react';
import { ForgeBadge, ForgeIcon, ForgeIconButton } from '@tylertech/forge-react';
import {
  tylIconAttachMoney,
  tylIconPeople,
  tylIconShoppingCart,
  tylIconTrendingUp,
  tylIconStar,
  tylIconWarning,
  tylIconError,
  tylIconInfo,
  tylIconDashboard,
  tylIconMoreVert
} from '@tylertech/tyler-icons';

IconRegistry.define([
  tylIconAttachMoney,
  tylIconPeople,
  tylIconShoppingCart,
  tylIconTrendingUp,
  tylIconStar,
  tylIconWarning,
  tylIconError,
  tylIconInfo,
  tylIconDashboard,
  tylIconMoreVert
]);

export function CountCardDemo(): JSX.Element {
  return (
    <>
      <h2 className="forge-typography--subheading4">Count Card</h2>

      <div style={{ marginBottom: '24px' }}>
        <h3 className="forge-typography--subheading5">Basic</h3>
        <ForgeCountCard style={{ maxWidth: '320px' }}>
          <ForgeIcon slot="icon" name="attach_money" />
          <span slot="label">Total Revenue</span>
          <span slot="count">$12,450.00</span>
        </ForgeCountCard>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 className="forge-typography--subheading5">With Header End Badge</h3>
        <ForgeCountCard theme="success" style={{ maxWidth: '320px' }}>
          <ForgeIcon slot="icon" name="trending_up" />
          <span slot="label">Monthly Growth</span>
          <ForgeBadge slot="header-end" theme="success">
            +12%
          </ForgeBadge>
          <span slot="count">$24,567</span>
        </ForgeCountCard>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 className="forge-typography--subheading5">With Count End Badge</h3>
        <ForgeCountCard theme="primary" style={{ maxWidth: '320px' }}>
          <ForgeIcon slot="icon" name="people" />
          <span slot="label">Active Users</span>
          <span slot="count">1,234</span>
          <ForgeBadge slot="count-end" theme="primary">
            +5%
          </ForgeBadge>
        </ForgeCountCard>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 className="forge-typography--subheading5">With Header Menu</h3>
        <ForgeCountCard theme="secondary" style={{ maxWidth: '320px' }}>
          <ForgeIcon slot="icon" name="shopping_cart" />
          <span slot="label">Orders Today</span>
          <ForgeIconButton slot="header-end" aria-label="More options" density="small">
            <ForgeIcon name="more_vert" />
          </ForgeIconButton>
          <span slot="count">156</span>
        </ForgeCountCard>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 className="forge-typography--subheading5">With Full-Width Sparkline</h3>
        <ForgeCountCard theme="info" style={{ maxWidth: '320px' }}>
          <ForgeIcon slot="icon" name="trending_up" />
          <span slot="label">Weekly Performance</span>
          <span slot="count">89.2%</span>
          <svg slot="full-width" viewBox="0 0 200 40" style={{ width: '100%', display: 'block' }}>
            <polyline
              fill="none"
              stroke="var(--forge-theme-primary)"
              strokeWidth="2"
              points="0,35 20,30 40,32 60,25 80,28 100,20 120,22 140,15 160,18 180,10 200,5"
            />
          </svg>
        </ForgeCountCard>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 className="forge-typography--subheading5">No Border</h3>
        <ForgeCountCard noBorder style={{ maxWidth: '320px' }}>
          <ForgeIcon slot="icon" name="star" />
          <span slot="label">Rating</span>
          <span slot="count">4.8 / 5</span>
        </ForgeCountCard>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 className="forge-typography--subheading5">All Themes</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <ForgeCountCard theme="none">
            <ForgeIcon slot="icon" name="dashboard" />
            <span slot="label">None (Default)</span>
            <span slot="count">100</span>
          </ForgeCountCard>

          <ForgeCountCard theme="primary">
            <ForgeIcon slot="icon" name="star" />
            <span slot="label">Primary</span>
            <span slot="count">1,234</span>
          </ForgeCountCard>

          <ForgeCountCard theme="secondary">
            <ForgeIcon slot="icon" name="people" />
            <span slot="label">Secondary</span>
            <span slot="count">5,678</span>
          </ForgeCountCard>

          <ForgeCountCard theme="tertiary">
            <ForgeIcon slot="icon" name="shopping_cart" />
            <span slot="label">Tertiary</span>
            <span slot="count">910</span>
          </ForgeCountCard>

          <ForgeCountCard theme="success">
            <ForgeIcon slot="icon" name="trending_up" />
            <span slot="label">Success</span>
            <span slot="count">+23.5%</span>
          </ForgeCountCard>

          <ForgeCountCard theme="error">
            <ForgeIcon slot="icon" name="error" />
            <span slot="label">Error</span>
            <span slot="count">12</span>
          </ForgeCountCard>

          <ForgeCountCard theme="warning">
            <ForgeIcon slot="icon" name="warning" />
            <span slot="label">Warning</span>
            <span slot="count">47</span>
          </ForgeCountCard>

          <ForgeCountCard theme="info">
            <ForgeIcon slot="icon" name="info" />
            <span slot="label">Info</span>
            <span slot="count">99+</span>
          </ForgeCountCard>

          <ForgeCountCard theme="info-secondary">
            <ForgeIcon slot="icon" name="attach_money" />
            <span slot="label">Info Secondary</span>
            <span slot="count">$12,450</span>
          </ForgeCountCard>
        </div>
      </div>
    </>
  );
}

import { IconRegistry } from '@tylertech/forge';
import { ForgeLandingPageLayout, ForgeStructuredCard } from '@tylertech/forge-extended-react';
import {
  ForgeBadge,
  ForgeButton,
  ForgeCard,
  ForgeDivider,
  ForgeIcon,
  ForgeIconButton,
  ForgeList,
  ForgeListItem
} from '@tylertech/forge-react';
import {
  tylIconCalendar,
  tylIconChevronRight,
  tylIconClock,
  tylIconForward,
  tylIconMap,
  tylIconPlace,
  tylIconSki,
  tylIconSnowflake,
  tylIconTerrain,
  tylIconThermostat,
  tylIconTicket
} from '@tylertech/tyler-icons';

IconRegistry.define([
  tylIconCalendar,
  tylIconChevronRight,
  tylIconClock,
  tylIconForward,
  tylIconMap,
  tylIconPlace,
  tylIconSki,
  tylIconSnowflake,
  tylIconTerrain,
  tylIconThermostat,
  tylIconTicket
]);

const backgroundImage = 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=2400&q=80';

const conditionsStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 'var(--forge-spacing-medium)',
  padding: 'var(--forge-spacing-medium)'
};

const conditionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: 'var(--forge-spacing-xxsmall)'
};

const conditionIconStyle: React.CSSProperties = {
  fontSize: '32px',
  color: 'var(--forge-theme-tertiary)'
};

const footerContentStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 'var(--forge-spacing-xlarge)',
  paddingBlock: 'var(--forge-spacing-large)'
};

const footerLinksStyle: React.CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--forge-spacing-xsmall)'
};

const footerLegalStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBlock: 'var(--forge-spacing-medium)'
};

const footerColumnTitleStyle: React.CSSProperties = {
  margin: `0 0 var(--forge-spacing-small)`,
  color: 'var(--forge-theme-on-surface-inverse)'
};

const footerLinkStyle: React.CSSProperties = {
  color: 'var(--forge-theme-on-surface-inverse)'
};

const trailBadgeContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--forge-spacing-xsmall)'
};

const announcementActionsStyle: React.CSSProperties = {
  display: 'flex',
  gap: 'var(--forge-spacing-small)',
  marginBlockStart: 'var(--forge-spacing-medium)'
};

export function LandingPageLayoutDemo(): JSX.Element {
  return (
    <ForgeLandingPageLayout imageUrlLarge={backgroundImage} imageUrlSmall={backgroundImage}>
      <span className="forge-typography--subheading7" slot="secondary-title">
        Winter is here
      </span>
      <h2
        className="forge-typography--display6"
        slot="main-title"
        style={{ color: 'var(--forge-landing-page-layout-header-color, #ffffff)' }}>
        Hit the slopes this season
      </h2>
      <ForgeButton className="on-image" slot="action" variant="filled">
        Explore trails
        <ForgeIcon slot="end" name="forward" />
      </ForgeButton>
      <ForgeButton className="on-image" slot="action" variant="outlined">
        Buy a pass
      </ForgeButton>

      <ForgeCard slot="announcements">
        <h3 className="forge-typography--heading3" style={{ margin: '0 0 var(--forge-spacing-xsmall)' }}>
          Season passes on sale
        </h3>
        <p className="forge-typography--body1" style={{ margin: 0 }}>
          Lock in early-bird pricing through November 15th and save 20% on every tier.
        </p>
        <div style={announcementActionsStyle}>
          <ForgeButton variant="tonal">Learn more</ForgeButton>
          <ForgeButton variant="text">Dismiss</ForgeButton>
        </div>
      </ForgeCard>

      <div slot="top">
        <ForgeCard>
          <div style={conditionsStyle}>
            <div style={conditionStyle}>
              <ForgeIcon name="snowflake" style={conditionIconStyle} />
              <h4 className="forge-typography--heading4" style={{ margin: 0 }}>
                18&quot;
              </h4>
              <p className="forge-typography--body2" style={{ margin: 0, color: 'var(--forge-theme-text-medium)' }}>
                Fresh powder
              </p>
            </div>
            <div style={conditionStyle}>
              <ForgeIcon name="thermostat" style={conditionIconStyle} />
              <h4 className="forge-typography--heading4" style={{ margin: 0 }}>
                22°F
              </h4>
              <p className="forge-typography--body2" style={{ margin: 0, color: 'var(--forge-theme-text-medium)' }}>
                Base temperature
              </p>
            </div>
            <div style={conditionStyle}>
              <ForgeIcon name="terrain" style={conditionIconStyle} />
              <h4 className="forge-typography--heading4" style={{ margin: 0 }}>
                42 / 48
              </h4>
              <p className="forge-typography--body2" style={{ margin: 0, color: 'var(--forge-theme-text-medium)' }}>
                Trails open
              </p>
            </div>
          </div>
        </ForgeCard>
      </div>

      <ForgeStructuredCard slot="left">
        <div slot="title" className="forge-typography--heading4">
          Popular trails
        </div>
        <ForgeIconButton slot="after-header-actions" aria-label="Open trail map">
          <ForgeIcon name="map" />
        </ForgeIconButton>
        <ForgeList slot="body" three-line>
          <ForgeListItem>
            <ForgeIcon slot="start" name="ski" />
            <a href="#">Powder Ridge</a>
            <span slot="secondary-text">Advanced · 2.4 mi run</span>
            <span slot="tertiary-text">Chair 4 · Backside</span>
            <div slot="trailing" style={trailBadgeContainerStyle}>
              <ForgeBadge theme="success">Open</ForgeBadge>
              <ForgeIcon name="chevron_right" />
            </div>
          </ForgeListItem>
          <ForgeListItem>
            <ForgeIcon slot="start" name="ski" />
            <a href="#">Blue Sky Bowl</a>
            <span slot="secondary-text">Intermediate · 1.8 mi run</span>
            <span slot="tertiary-text">Chair 2 · Summit</span>
            <div slot="trailing" style={trailBadgeContainerStyle}>
              <ForgeBadge theme="success">Open</ForgeBadge>
              <ForgeIcon name="chevron_right" />
            </div>
          </ForgeListItem>
          <ForgeListItem>
            <ForgeIcon slot="start" name="ski" />
            <a href="#">Cedar Glade</a>
            <span slot="secondary-text">Beginner · 0.9 mi run</span>
            <span slot="tertiary-text">Magic Carpet · Base area</span>
            <div slot="trailing" style={trailBadgeContainerStyle}>
              <ForgeBadge theme="success">Open</ForgeBadge>
              <ForgeIcon name="chevron_right" />
            </div>
          </ForgeListItem>
          <ForgeListItem>
            <ForgeIcon slot="start" name="ski" />
            <a href="#">Timberline Traverse</a>
            <span slot="secondary-text">Expert · 3.1 mi run</span>
            <span slot="tertiary-text">Chair 6 · Peak</span>
            <div slot="trailing" style={trailBadgeContainerStyle}>
              <ForgeBadge theme="warning">Grooming</ForgeBadge>
              <ForgeIcon name="chevron_right" />
            </div>
          </ForgeListItem>
        </ForgeList>
      </ForgeStructuredCard>

      <ForgeStructuredCard slot="right">
        <div slot="title" className="forge-typography--heading4">
          Recent activity
        </div>
        <ForgeList slot="body" two-line>
          <ForgeListItem noninteractive>
            <ForgeIcon slot="start" name="ticket" />
            <span>Season pass renewed</span>
            <span slot="secondary-text">2 hours ago</span>
          </ForgeListItem>
          <ForgeListItem noninteractive>
            <ForgeIcon slot="start" name="calendar" />
            <span>Group lesson booked · Sat 10:00 AM</span>
            <span slot="secondary-text">Yesterday</span>
          </ForgeListItem>
          <ForgeListItem noninteractive>
            <ForgeIcon slot="start" name="place" />
            <span>Checked in at Chair 4</span>
            <span slot="secondary-text">3 days ago</span>
          </ForgeListItem>
          <ForgeListItem noninteractive>
            <ForgeIcon slot="start" name="clock" />
            <span>Rental gear returned</span>
            <span slot="secondary-text">Last week</span>
          </ForgeListItem>
        </ForgeList>
      </ForgeStructuredCard>

      <div slot="footer">
        <div style={footerContentStyle}>
          <div>
            <h5 className="forge-typography--heading3" style={footerColumnTitleStyle}>
              The mountain
            </h5>
            <ul className="forge-typography--body2" style={footerLinksStyle}>
              <li>
                <a href="#" style={footerLinkStyle}>
                  Trail map
                </a>
              </li>
              <li>
                <a href="#" style={footerLinkStyle}>
                  Conditions
                </a>
              </li>
              <li>
                <a href="#" style={footerLinkStyle}>
                  Lift status
                </a>
              </li>
              <li>
                <a href="#" style={footerLinkStyle}>
                  Snow report
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="forge-typography--heading3" style={footerColumnTitleStyle}>
              Plan your visit
            </h5>
            <ul className="forge-typography--body2" style={footerLinksStyle}>
              <li>
                <a href="#" style={footerLinkStyle}>
                  Lift tickets
                </a>
              </li>
              <li>
                <a href="#" style={footerLinkStyle}>
                  Season passes
                </a>
              </li>
              <li>
                <a href="#" style={footerLinkStyle}>
                  Lessons
                </a>
              </li>
              <li>
                <a href="#" style={footerLinkStyle}>
                  Rentals
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="forge-typography--heading3" style={footerColumnTitleStyle}>
              Support
            </h5>
            <ul className="forge-typography--body2" style={footerLinksStyle}>
              <li>
                <a href="#" style={footerLinkStyle}>
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" style={footerLinkStyle}>
                  Directions
                </a>
              </li>
              <li>
                <a href="#" style={footerLinkStyle}>
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" style={footerLinkStyle}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ForgeDivider />
        <div className="forge-typography--body2" style={footerLegalStyle}>
          <span>© 2026 Mountain Resort</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </ForgeLandingPageLayout>
  );
}

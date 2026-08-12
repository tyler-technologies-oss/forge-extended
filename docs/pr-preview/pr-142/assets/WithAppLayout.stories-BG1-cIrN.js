import{x as a}from"./iframe-BZR3avPy.js";import{I as t,z as n,A as i,B as r,C as s,L as l,t as g,D as c,M as d,E as f,F as p,G as m,c as v,H as h,J as y,K as u}from"./with-default-aria-DrGQh3rA.js";import"./app-layout-BlYSzUht.js";import"./landing-page-layout-BuXbqfhJ.js";import"./structured-card-CBV2m1K1.js";import{s as b}from"./decorators-Btj57eUi.js";import{s as e}from"./snowboarding-bg-BMhqgckq.js";import{d as x}from"./index-C2vltYeh.js";import{d as k}from"./index-CCo5mcVb.js";import{d as j}from"./index-BxeetAA7.js";import{d as C}from"./index-5WQkJqMi.js";import{d as w}from"./index-HGkRbmOl.js";import{d as B}from"./index-DSF_ghjH.js";import{d as I}from"./index-CDWbhz5H.js";import{d as L}from"./index-r_punKhr.js";import{d as S}from"./index-D7RjK4aN.js";import"./feature-detection-V1xjMoTa.js";import"./constants-Dczm6517.js";import"./a11y-utils-B2lvl91r.js";import"./when-3fO0zp9C.js";import"./custom-element-C028faeO.js";import"./utils-BeUVm7TG.js";import"./state-Die3n6np.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./index-CA_fSxq6.js";import"./scaffold-D5xQWfMq.js";import"./index-Dxfmhszo.js";import"./dismissible-stack-BIXwkq1T.js";import"./list-BwTq-bh5.js";import"./focus-indicator-BBF39Pup.js";import"./base-button-adapter-BBLLx2xC.js";import"./icon-button-DD2_Bu8d.js";import"./icon-CAC4534v.js";import"./tooltip-B2OhOsWS.js";import"./with-longpress-listener-CZMXxJ4U.js";import"./class-map-CBmZDkCE.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BiY-VgIw.js";import"./lit-utils-B7mGwFLc.js";import"./async-directive-CduYbs5w.js";import"./_commonjsHelpers-CqkleIqs.js";import"./divider-Czpb5EPV.js";x();k();j();C();w();B();I();L();S();t.define([n,i,r,s,l,g,c,d,f,p,m,v,h,y,u]);const T="forge-landing-page-layout",xo={title:"Components/Landing Page Layout",component:T,parameters:{layout:"fullscreen"},decorators:[b(`
      body {
        margin: 0;
        padding: 0;
        background-color: var(--forge-theme-surface-dim);
        height: 100dvh;
        width: 100dvw;
      }

      #storybook-root,
      #root-inner {
        height: 100%;
      }

      .demo-announcement-title {
        margin: 0 0 var(--forge-spacing-xsmall);
      }

      .demo-announcement-body {
        margin: 0;
      }

      .demo-announcement-actions {
        display: flex;
        gap: var(--forge-spacing-small);
        margin-block-start: var(--forge-spacing-medium);
      }

      .demo-conditions {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--forge-spacing-medium);
        padding: var(--forge-spacing-medium);
      }

      @media (max-width: 768px) {
        .demo-conditions {
          grid-template-columns: 1fr;
        }
      }

      .demo-condition {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: var(--forge-spacing-xxsmall);
      }

      .demo-condition-value {
        margin: 0;
      }

      .demo-condition-label {
        margin: 0;
        color: var(--forge-theme-text-medium);
      }

      .demo-condition forge-icon {
        --forge-icon-font-size: 32px;
        color: var(--forge-theme-tertiary);
      }

      .demo-footer-content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--forge-spacing-xlarge);
        padding-block: var(--forge-spacing-large);
      }

      @media (max-width: 768px) {
        .demo-footer-content {
          grid-template-columns: 1fr;
          gap: var(--forge-spacing-large);
        }
      }

      .demo-footer-column-title {
        margin: 0 0 var(--forge-spacing-small);
        color: var(--forge-theme-on-surface-inverse) !important;
      }

      .demo-footer-links {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: var(--forge-spacing-xsmall);
      }

      .demo-footer-links a,
      .demo-footer-links a:visited {
        color: var(--forge-theme-on-surface-inverse);
      }

      .demo-footer-legal {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-block: var(--forge-spacing-medium);
      }

      forge-structured-card {
        --forge-structured-card-body-padding: 0;
      }

      .demo-trail-badge-container {
        display: flex;
        align-items: center;
        gap: var(--forge-spacing-xsmall);
      }
    `)]},o={render:()=>a`
      <forge-app-layout app-title="Mountain Resort">
        <forge-icon-button slot="app-bar-end" aria-label="Notifications">
          <forge-icon name="notifications"></forge-icon>
        </forge-icon-button>
        <forge-icon-button slot="app-bar-end" aria-label="Help">
          <forge-icon name="help_outline"></forge-icon>
        </forge-icon-button>

        <forge-list navlist slot="navigation" data-forge-app-layout-close>
          <forge-list-item selected>
            <forge-icon slot="start" name="home"></forge-icon>
            <a href="javascript: void(0);">Home</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="map"></forge-icon>
            <a href="javascript: void(0);">Trail map</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="ticket"></forge-icon>
            <a href="javascript: void(0);">Tickets &amp; passes</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="calendar"></forge-icon>
            <a href="javascript: void(0);">Lessons</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="star"></forge-icon>
            <a href="javascript: void(0);">Favorites</a>
          </forge-list-item>
        </forge-list>

        <forge-landing-page-layout slot="body" image-url-large=${e} image-url-small=${e}>
          <span class="forge-typography--subheading7" slot="secondary-title">Winter is here</span>
          <h2
            class="forge-typography--display6"
            slot="main-title"
            style="color: var(--forge-landing-page-layout-header-color, #ffffff)">
            Hit the slopes this season
          </h2>
          <forge-button class="on-image" slot="action" variant="filled">
            Explore trails
            <forge-icon slot="end" name="forward"></forge-icon>
          </forge-button>
          <forge-button class="on-image" slot="action" variant="outlined">Buy a pass</forge-button>

          <forge-card slot="announcements">
            <h3 class="forge-typography--heading3 demo-announcement-title">Season passes on sale</h3>
            <p class="forge-typography--body1 demo-announcement-body">
              Lock in early-bird pricing through November 15th and save 20% on every tier.
            </p>
            <div class="demo-announcement-actions">
              <forge-button variant="tonal">Learn more</forge-button>
              <forge-button variant="text">Dismiss</forge-button>
            </div>
          </forge-card>

          <div slot="top">
            <forge-card>
              <div class="demo-conditions">
                <div class="demo-condition">
                  <forge-icon name="snowflake"></forge-icon>
                  <h4 class="forge-typography--heading4 demo-condition-value">18"</h4>
                  <p class="forge-typography--body2 demo-condition-label">Fresh powder</p>
                </div>
                <div class="demo-condition">
                  <forge-icon name="thermostat"></forge-icon>
                  <h4 class="forge-typography--heading4 demo-condition-value">22°F</h4>
                  <p class="forge-typography--body2 demo-condition-label">Base temperature</p>
                </div>
                <div class="demo-condition">
                  <forge-icon name="terrain"></forge-icon>
                  <h4 class="forge-typography--heading4 demo-condition-value">42 / 48</h4>
                  <p class="forge-typography--body2 demo-condition-label">Trails open</p>
                </div>
              </div>
            </forge-card>
          </div>

          <forge-structured-card slot="left">
            <div slot="title" class="forge-typography--heading4">Popular trails</div>
            <forge-icon-button slot="after-header-actions" aria-label="Open trail map">
              <forge-icon name="map"></forge-icon>
            </forge-icon-button>
            <forge-list slot="body" three-line>
              <forge-list-item>
                <forge-icon slot="start" name="ski"></forge-icon>
                <a href="javascript: void(0);">Powder Ridge</a>
                <span slot="secondary-text">Advanced · 2.4 mi run</span>
                <span slot="tertiary-text">Chair 4 · Backside</span>
                <div slot="trailing" class="demo-trail-badge-container">
                  <forge-badge theme="success">Open</forge-badge>
                  <forge-icon name="chevron_right"></forge-icon>
                </div>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="ski"></forge-icon>
                <a href="javascript: void(0);">Blue Sky Bowl</a>
                <span slot="secondary-text">Intermediate · 1.8 mi run</span>
                <span slot="tertiary-text">Chair 2 · Summit</span>
                <div slot="trailing" class="demo-trail-badge-container">
                  <forge-badge theme="success">Open</forge-badge>
                  <forge-icon name="chevron_right"></forge-icon>
                </div>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="ski"></forge-icon>
                <a href="javascript: void(0);">Cedar Glade</a>
                <span slot="secondary-text">Beginner · 0.9 mi run</span>
                <span slot="tertiary-text">Magic Carpet · Base area</span>
                <div slot="trailing" class="demo-trail-badge-container">
                  <forge-badge theme="success">Open</forge-badge>
                  <forge-icon name="chevron_right"></forge-icon>
                </div>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="ski"></forge-icon>
                <a href="javascript: void(0);">Timberline Traverse</a>
                <span slot="secondary-text">Expert · 3.1 mi run</span>
                <span slot="tertiary-text">Chair 6 · Peak</span>
                <div slot="trailing" class="demo-trail-badge-container">
                  <forge-badge theme="warning">Grooming</forge-badge>
                  <forge-icon name="chevron_right"></forge-icon>
                </div>
              </forge-list-item>
            </forge-list>
          </forge-structured-card>

          <forge-structured-card slot="right">
            <div slot="title" class="forge-typography--heading4">Recent activity</div>
            <forge-list slot="body" two-line>
              <forge-list-item noninteractive>
                <forge-icon slot="start" name="ticket"></forge-icon>
                <span>Season pass renewed</span>
                <span slot="secondary-text">2 hours ago</span>
              </forge-list-item>
              <forge-list-item noninteractive>
                <forge-icon slot="start" name="calendar"></forge-icon>
                <span>Group lesson booked · Sat 10:00 AM</span>
                <span slot="secondary-text">Yesterday</span>
              </forge-list-item>
              <forge-list-item noninteractive>
                <forge-icon slot="start" name="place"></forge-icon>
                <span>Checked in at Chair 4</span>
                <span slot="secondary-text">3 days ago</span>
              </forge-list-item>
              <forge-list-item noninteractive>
                <forge-icon slot="start" name="clock"></forge-icon>
                <span>Rental gear returned</span>
                <span slot="secondary-text">Last week</span>
              </forge-list-item>
            </forge-list>
          </forge-structured-card>

          <div slot="footer">
            <div class="demo-footer-content">
              <div>
                <h5 class="forge-typography--heading3 demo-footer-column-title">The mountain</h5>
                <ul class="demo-footer-links forge-typography--body2">
                  <li><a href="javascript: void(0);">Trail map</a></li>
                  <li><a href="javascript: void(0);">Conditions</a></li>
                  <li><a href="javascript: void(0);">Lift status</a></li>
                  <li><a href="javascript: void(0);">Snow report</a></li>
                </ul>
              </div>
              <div>
                <h5 class="forge-typography--heading3 demo-footer-column-title">Plan your visit</h5>
                <ul class="demo-footer-links forge-typography--body2">
                  <li><a href="javascript: void(0);">Lift tickets</a></li>
                  <li><a href="javascript: void(0);">Season passes</a></li>
                  <li><a href="javascript: void(0);">Lessons</a></li>
                  <li><a href="javascript: void(0);">Rentals</a></li>
                </ul>
              </div>
              <div>
                <h5 class="forge-typography--heading3 demo-footer-column-title">Support</h5>
                <ul class="demo-footer-links forge-typography--body2">
                  <li><a href="javascript: void(0);">Contact us</a></li>
                  <li><a href="javascript: void(0);">Directions</a></li>
                  <li><a href="javascript: void(0);">Accessibility</a></li>
                  <li><a href="javascript: void(0);">FAQ</a></li>
                </ul>
              </div>
            </div>
            <forge-divider></forge-divider>
            <div class="demo-footer-legal forge-typography--body2">
              <span>© 2026 Mountain Resort</span>
              <span>Privacy · Terms</span>
            </div>
          </div>
        </forge-landing-page-layout>
      </forge-app-layout>
    `};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <forge-app-layout app-title="Mountain Resort">
        <forge-icon-button slot="app-bar-end" aria-label="Notifications">
          <forge-icon name="notifications"></forge-icon>
        </forge-icon-button>
        <forge-icon-button slot="app-bar-end" aria-label="Help">
          <forge-icon name="help_outline"></forge-icon>
        </forge-icon-button>

        <forge-list navlist slot="navigation" data-forge-app-layout-close>
          <forge-list-item selected>
            <forge-icon slot="start" name="home"></forge-icon>
            <a href="javascript: void(0);">Home</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="map"></forge-icon>
            <a href="javascript: void(0);">Trail map</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="ticket"></forge-icon>
            <a href="javascript: void(0);">Tickets &amp; passes</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="calendar"></forge-icon>
            <a href="javascript: void(0);">Lessons</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="star"></forge-icon>
            <a href="javascript: void(0);">Favorites</a>
          </forge-list-item>
        </forge-list>

        <forge-landing-page-layout slot="body" image-url-large=\${snowboardingBg} image-url-small=\${snowboardingBg}>
          <span class="forge-typography--subheading7" slot="secondary-title">Winter is here</span>
          <h2
            class="forge-typography--display6"
            slot="main-title"
            style="color: var(--forge-landing-page-layout-header-color, #ffffff)">
            Hit the slopes this season
          </h2>
          <forge-button class="on-image" slot="action" variant="filled">
            Explore trails
            <forge-icon slot="end" name="forward"></forge-icon>
          </forge-button>
          <forge-button class="on-image" slot="action" variant="outlined">Buy a pass</forge-button>

          <forge-card slot="announcements">
            <h3 class="forge-typography--heading3 demo-announcement-title">Season passes on sale</h3>
            <p class="forge-typography--body1 demo-announcement-body">
              Lock in early-bird pricing through November 15th and save 20% on every tier.
            </p>
            <div class="demo-announcement-actions">
              <forge-button variant="tonal">Learn more</forge-button>
              <forge-button variant="text">Dismiss</forge-button>
            </div>
          </forge-card>

          <div slot="top">
            <forge-card>
              <div class="demo-conditions">
                <div class="demo-condition">
                  <forge-icon name="snowflake"></forge-icon>
                  <h4 class="forge-typography--heading4 demo-condition-value">18"</h4>
                  <p class="forge-typography--body2 demo-condition-label">Fresh powder</p>
                </div>
                <div class="demo-condition">
                  <forge-icon name="thermostat"></forge-icon>
                  <h4 class="forge-typography--heading4 demo-condition-value">22°F</h4>
                  <p class="forge-typography--body2 demo-condition-label">Base temperature</p>
                </div>
                <div class="demo-condition">
                  <forge-icon name="terrain"></forge-icon>
                  <h4 class="forge-typography--heading4 demo-condition-value">42 / 48</h4>
                  <p class="forge-typography--body2 demo-condition-label">Trails open</p>
                </div>
              </div>
            </forge-card>
          </div>

          <forge-structured-card slot="left">
            <div slot="title" class="forge-typography--heading4">Popular trails</div>
            <forge-icon-button slot="after-header-actions" aria-label="Open trail map">
              <forge-icon name="map"></forge-icon>
            </forge-icon-button>
            <forge-list slot="body" three-line>
              <forge-list-item>
                <forge-icon slot="start" name="ski"></forge-icon>
                <a href="javascript: void(0);">Powder Ridge</a>
                <span slot="secondary-text">Advanced · 2.4 mi run</span>
                <span slot="tertiary-text">Chair 4 · Backside</span>
                <div slot="trailing" class="demo-trail-badge-container">
                  <forge-badge theme="success">Open</forge-badge>
                  <forge-icon name="chevron_right"></forge-icon>
                </div>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="ski"></forge-icon>
                <a href="javascript: void(0);">Blue Sky Bowl</a>
                <span slot="secondary-text">Intermediate · 1.8 mi run</span>
                <span slot="tertiary-text">Chair 2 · Summit</span>
                <div slot="trailing" class="demo-trail-badge-container">
                  <forge-badge theme="success">Open</forge-badge>
                  <forge-icon name="chevron_right"></forge-icon>
                </div>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="ski"></forge-icon>
                <a href="javascript: void(0);">Cedar Glade</a>
                <span slot="secondary-text">Beginner · 0.9 mi run</span>
                <span slot="tertiary-text">Magic Carpet · Base area</span>
                <div slot="trailing" class="demo-trail-badge-container">
                  <forge-badge theme="success">Open</forge-badge>
                  <forge-icon name="chevron_right"></forge-icon>
                </div>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="ski"></forge-icon>
                <a href="javascript: void(0);">Timberline Traverse</a>
                <span slot="secondary-text">Expert · 3.1 mi run</span>
                <span slot="tertiary-text">Chair 6 · Peak</span>
                <div slot="trailing" class="demo-trail-badge-container">
                  <forge-badge theme="warning">Grooming</forge-badge>
                  <forge-icon name="chevron_right"></forge-icon>
                </div>
              </forge-list-item>
            </forge-list>
          </forge-structured-card>

          <forge-structured-card slot="right">
            <div slot="title" class="forge-typography--heading4">Recent activity</div>
            <forge-list slot="body" two-line>
              <forge-list-item noninteractive>
                <forge-icon slot="start" name="ticket"></forge-icon>
                <span>Season pass renewed</span>
                <span slot="secondary-text">2 hours ago</span>
              </forge-list-item>
              <forge-list-item noninteractive>
                <forge-icon slot="start" name="calendar"></forge-icon>
                <span>Group lesson booked · Sat 10:00 AM</span>
                <span slot="secondary-text">Yesterday</span>
              </forge-list-item>
              <forge-list-item noninteractive>
                <forge-icon slot="start" name="place"></forge-icon>
                <span>Checked in at Chair 4</span>
                <span slot="secondary-text">3 days ago</span>
              </forge-list-item>
              <forge-list-item noninteractive>
                <forge-icon slot="start" name="clock"></forge-icon>
                <span>Rental gear returned</span>
                <span slot="secondary-text">Last week</span>
              </forge-list-item>
            </forge-list>
          </forge-structured-card>

          <div slot="footer">
            <div class="demo-footer-content">
              <div>
                <h5 class="forge-typography--heading3 demo-footer-column-title">The mountain</h5>
                <ul class="demo-footer-links forge-typography--body2">
                  <li><a href="javascript: void(0);">Trail map</a></li>
                  <li><a href="javascript: void(0);">Conditions</a></li>
                  <li><a href="javascript: void(0);">Lift status</a></li>
                  <li><a href="javascript: void(0);">Snow report</a></li>
                </ul>
              </div>
              <div>
                <h5 class="forge-typography--heading3 demo-footer-column-title">Plan your visit</h5>
                <ul class="demo-footer-links forge-typography--body2">
                  <li><a href="javascript: void(0);">Lift tickets</a></li>
                  <li><a href="javascript: void(0);">Season passes</a></li>
                  <li><a href="javascript: void(0);">Lessons</a></li>
                  <li><a href="javascript: void(0);">Rentals</a></li>
                </ul>
              </div>
              <div>
                <h5 class="forge-typography--heading3 demo-footer-column-title">Support</h5>
                <ul class="demo-footer-links forge-typography--body2">
                  <li><a href="javascript: void(0);">Contact us</a></li>
                  <li><a href="javascript: void(0);">Directions</a></li>
                  <li><a href="javascript: void(0);">Accessibility</a></li>
                  <li><a href="javascript: void(0);">FAQ</a></li>
                </ul>
              </div>
            </div>
            <forge-divider></forge-divider>
            <div class="demo-footer-legal forge-typography--body2">
              <span>© 2026 Mountain Resort</span>
              <span>Privacy · Terms</span>
            </div>
          </div>
        </forge-landing-page-layout>
      </forge-app-layout>
    \`;
  }
}`,...o.parameters?.docs?.source}}};const ko=["WithAppLayout"];export{o as WithAppLayout,ko as __namedExportsOrder,xo as default};

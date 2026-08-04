import{x as a}from"./iframe-C7fMUolH.js";import{I as r,z as t,A as i,B as n,C as s,D as l,E as d,F as g,G as c,H as m,J as p,K as f}from"./with-default-aria-271WHlov.js";import"./landing-page-layout-BDXvxbzi.js";import"./structured-card-PLx1yJtb.js";import{s as v}from"./decorators-WkUwC5EI.js";import{s as e}from"./snowboarding-bg-BMhqgckq.js";import{d as h}from"./index-Coo-ck4l.js";import{d as y}from"./index-DEDT6JJb.js";import{d as u}from"./index-DYnsJCg6.js";import{d as b}from"./index-BfNYaji5.js";import{d as x}from"./index-C_hig5gk.js";import{d as k}from"./index-Dq7PMuyO.js";import{d as C}from"./index-BfWp_t-7.js";import{d as I}from"./index-Be5GTP63.js";import"./feature-detection-Cuu7LyiG.js";import"./constants-iVqEkiyf.js";import"./a11y-utils-D0XFVk2n.js";import"./custom-element-C028faeO.js";import"./utils-CuBSrgt8.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CFhQHarn.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BAfRIaYf.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cf0GtZU2.js";import"./async-directive-Da_1GK_R.js";import"./_commonjsHelpers-CqkleIqs.js";import"./base-button-adapter-DsNiq0wh.js";import"./focus-indicator-Cj5G_QpO.js";import"./icon-DgvKQl-p.js";import"./divider--tHy8LGB.js";import"./icon-button-BItzV8X1.js";import"./list-Z-NBizvj.js";h();y();u();b();x();k();C();I();r.define([t,i,n,s,l,d,g,c,m,p,f]);const j="forge-landing-page-layout",io={title:"Components/Landing Page Layout",component:j,parameters:{layout:"fullscreen"},decorators:[v(`
      body {
        margin: 0;
        padding: 0;
        background-color: var(--forge-theme-surface);
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

      .demo-footer {
        color: var(--forge-theme-on-surface-inverse);
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
    `)],render:()=>a`
      <forge-landing-page-layout image-url-large=${e} image-url-small=${e}>
        <span class="forge-typography--subheading7" slot="secondary-title">Winter is here</span>
        <h2 class="forge-typography--display6" slot="main-title">Hit the slopes this season</h2>
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const no=["WithBackgroundImage"];export{o as WithBackgroundImage,no as __namedExportsOrder,io as default};

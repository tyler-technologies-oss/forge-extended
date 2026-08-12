import{x as e}from"./iframe-BZR3avPy.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-DrGQh3rA.js";import"./count-card-CZ8J7Gfd.js";import{d as p}from"./index-HGkRbmOl.js";import{d as m}from"./index-DSF_ghjH.js";import{d as c}from"./index-B90u7Vzf.js";import{d as l}from"./index-C2vltYeh.js";import{d}from"./index-CNlqnerk.js";import"./feature-detection-V1xjMoTa.js";import"./constants-Dczm6517.js";import"./a11y-utils-B2lvl91r.js";import"./custom-element-C028faeO.js";import"./utils-BeUVm7TG.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-B7mGwFLc.js";import"./async-directive-CduYbs5w.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-BxeetAA7.js";import"./index-CKyYCgQv.js";import"./tooltip-B2OhOsWS.js";import"./with-longpress-listener-CZMXxJ4U.js";import"./dismissible-stack-BIXwkq1T.js";import"./icon-CAC4534v.js";import"./icon-button-DD2_Bu8d.js";import"./base-button-adapter-BBLLx2xC.js";import"./focus-indicator-BBF39Pup.js";import"./list-dropdown-aware-core-Q_ZMTdaU.js";import"./linear-progress-constants-fVTKB38b.js";import"./list-BwTq-bh5.js";import"./popover-BEPu-OAd.js";import"./skeleton-constants-j2RNU9wn.js";import"./state-Die3n6np.js";import"./class-map-CBmZDkCE.js";import"./style-map-BVZwwXA2.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",N={title:"Components/Count Card",component:f,render:()=>e`
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--forge-spacing-medium);">
        <!-- Card 1: With header-end badge -->
        <forge-count-card>
          <forge-icon slot="icon" name="attach_money"></forge-icon>
          <span slot="label">Revenue</span>
          <forge-badge slot="header-end" theme="success">+12%</forge-badge>
          <span slot="count">$12,450.00</span>
        </forge-count-card>

        <!-- Card 2: With action slot, no icon -->
        <forge-count-card>
          <span slot="label">Total Users</span>
          <forge-menu slot="action" .options=${[{label:"View details",value:"details"},{label:"Export data",value:"export"},{label:"Remove card",value:"remove"}]}>
            <forge-icon-button aria-label="More options">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
          </forge-menu>
          <span slot="count">1,234</span>
        </forge-count-card>

        <!-- Card 3: With count-end and body content -->
        <forge-count-card>
          <forge-icon slot="icon" name="shopping_cart"></forge-icon>
          <span slot="label">Orders This Month</span>
          <span slot="count">567</span>
          <span slot="count-end" style="color: var(--forge-theme-text-medium);">/ 1,000</span>
          <div slot="body">
            <forge-meter value="0.567" min="0" max="1" theme="info"></forge-meter>
          </div>
        </forge-count-card>

        <!-- Card 4: Long label with full-width content -->
        <forge-count-card>
          <forge-icon slot="icon" name="trending_up"></forge-icon>
          <span slot="label">Year-over-Year Growth Rate for Q4 Performance Metrics</span>
          <span slot="count">+23.5%</span>
          <svg slot="full-width" viewBox="0 0 200 40" style="width: 100%; display: block;">
            <polyline
              fill="none"
              stroke="var(--forge-theme-success)"
              stroke-width="2"
              points="0,35 20,30 40,32 60,25 80,28 100,20 120,22 140,15 160,18 180,10 200,5" />
          </svg>
        </forge-count-card>
      </div>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const X=["SlotVariations"];export{o as SlotVariations,X as __namedExportsOrder,N as default};

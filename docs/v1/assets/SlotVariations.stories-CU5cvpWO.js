import{x as e}from"./iframe-C7JWi23m.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-K3PJ0_SZ.js";import"./count-card--hzp0oNs.js";import{d as p}from"./index-B8HFBbmF.js";import{d as m}from"./index-B32YAwfk.js";import{d as c}from"./index-CcMoY13p.js";import{d as l}from"./index-DHi96QGJ.js";import{d}from"./index-BM8DFtIT.js";import"./feature-detection-DwRFlNSf.js";import"./constants-DPUAL7_7.js";import"./a11y-utils-DHYwHs7X.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-Bj7toZcH.js";import"./async-directive-CknBIbyc.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DD9qsl0c.js";import"./index-DrG4UHzn.js";import"./tooltip-C-Y5oe1s.js";import"./with-longpress-listener-RE8qQjre.js";import"./dismissible-stack-BQ_5nqAG.js";import"./icon-D1pxQFQj.js";import"./icon-button-plYv35EG.js";import"./base-button-adapter-CIPT0ae9.js";import"./focus-indicator-Bgm9uuur.js";import"./list-dropdown-aware-core-BMp3_OsZ.js";import"./linear-progress-constants-BIGkAJON.js";import"./list-CwKR7d6T.js";import"./popover-DlKySSC2.js";import"./skeleton-constants-C5XgCQ6U.js";import"./state-DnUESnFS.js";import"./class-map-DtSCGelo.js";import"./style-map-CKuFOp2Q.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const K=["SlotVariations"];export{o as SlotVariations,K as __namedExportsOrder,J as default};

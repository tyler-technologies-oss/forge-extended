import{x as e}from"./iframe-tSrdq99I.js";import{I as t,r,k as n,w as a,v as i,f as s}from"./with-default-aria-Cjw09Hyt.js";import"./count-card-DAPTWarz.js";import{d as p}from"./index-DUD4nVta.js";import{d as m}from"./index-BvK_xeaI.js";import{d as c}from"./index-Cxdg2s-E.js";import{d as l}from"./index-D5SF0yP_.js";import{d}from"./index-D9GFWDsH.js";import"./custom-element-Cg4oYBYF.js";import"./constants-DEDYFPik.js";import"./utils-BuNvph6x.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-C9gaqnGj.js";import"./async-directive-BwzQrKcK.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DxuUp4FF.js";import"./index-mfrX86El.js";import"./tooltip-D7GcPVGW.js";import"./with-longpress-listener-DCkSJ2mx.js";import"./dismissible-stack-DyydnwZ9.js";import"./icon-xRFOyXu1.js";import"./icon-button-CPvX5qA1.js";import"./base-button-adapter-BUXivA6l.js";import"./focus-indicator-DCA67l5Z.js";import"./list-dropdown-aware-core-DnX_nJmP.js";import"./linear-progress-constants-BGY00k5Y.js";import"./list-CkvIqOPB.js";import"./popover-DbbcMMsL.js";import"./skeleton-constants-BEUUO9S0.js";import"./state-BT5CJi-g.js";import"./class-map-CTBWGCQU.js";import"./style-map-mgzE6KRN.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
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

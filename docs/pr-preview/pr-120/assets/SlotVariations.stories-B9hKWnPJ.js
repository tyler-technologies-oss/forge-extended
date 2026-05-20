import{x as e}from"./iframe-DeCz1NxP.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-I7DctnY-.js";import"./count-card-Dj0vOM2W.js";import{d as p}from"./index-y6YfRWNK.js";import{d as m}from"./index-Pb6G1LkD.js";import{d as c}from"./index-Buu2efsl.js";import{d as l}from"./index-BGrwdg2k.js";import{d}from"./index-Dpk5nzj8.js";import"./constants-H4k9CvBY.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BuEhPJXb.js";import"./async-directive-CiAFc-zp.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CGu_mIUY.js";import"./index-BMw_Prgi.js";import"./tooltip-CtF5mnC2.js";import"./with-longpress-listener-CYjYA53N.js";import"./dismissible-stack-CkIBD97B.js";import"./icon-CiK0WDc_.js";import"./icon-button-BGsoo32m.js";import"./base-button-adapter-Cy9mOPq-.js";import"./focus-indicator-D8ZXg04p.js";import"./list-dropdown-aware-core-6Wui6cuj.js";import"./linear-progress-constants-B29qV_te.js";import"./list-JMs13qX8.js";import"./popover-DlUlneyV.js";import"./skeleton-constants-BgOv7Gr5.js";import"./state-DnM88mh2.js";import"./class-map-DVuUGvG9.js";import"./style-map-Bew5MGVR.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",F={title:"Components/Count Card",component:f,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const H=["SlotVariations"];export{o as SlotVariations,H as __namedExportsOrder,F as default};

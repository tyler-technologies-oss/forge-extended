import{x as e}from"./iframe-BID06n7E.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-BREs-j-N.js";import"./count-card-Dyev5xDN.js";import{d as p}from"./index-2i5Wi6_R.js";import{d as m}from"./index-DeiAQ4QI.js";import{d as c}from"./index-CNXONB87.js";import{d as l}from"./index-DyZbf5sF.js";import{d}from"./index-7Cwq59RR.js";import"./constants-B3tN-dMS.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DaTy1hpd.js";import"./async-directive-ZEndwiQE.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-RJA0Keow.js";import"./index-mLeSSAwG.js";import"./tooltip-Byk3k62C.js";import"./with-longpress-listener-Baz068-U.js";import"./position-utils-DfGP7yHD.js";import"./dismissible-stack-CG-qEoPu.js";import"./icon-CYK8fSKq.js";import"./icon-button-HRYonJzk.js";import"./base-button-adapter-5b8XMu03.js";import"./focus-indicator-DyBlokG3.js";import"./list-dropdown-aware-core-pfq_6N92.js";import"./linear-progress-constants-BV5J_STX.js";import"./list-jZZXe4tA.js";import"./popover-D7cvF1P4.js";import"./skeleton-constants-jGjDr0qC.js";import"./state-BmOlXKM6.js";import"./class-map-hW_n5mGN.js";import"./style-map-rRKqdM8O.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",H={title:"Components/Count Card",component:f,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const J=["SlotVariations"];export{o as SlotVariations,J as __namedExportsOrder,H as default};

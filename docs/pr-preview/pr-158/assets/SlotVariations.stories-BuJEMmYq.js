import{x as e}from"./iframe-Qh6uGKis.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-Ci9C3nW2.js";import"./count-card-5pJbFc4J.js";import{d as p}from"./index-ClVoGirk.js";import{d as m}from"./index-B-f0Tlpv.js";import{d as c}from"./index-DnN-RVHK.js";import{d as l}from"./index-D_k87163.js";import{d}from"./index-CHdIvzN8.js";import"./component-utils-CHSR0lNw.js";import"./constants--Eb-8YTG.js";import"./utils-DV_ZlenX.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CcR0cCgf.js";import"./async-directive-CdlHa7rQ.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Btcm4i6H.js";import"./index-COA60wNR.js";import"./tooltip-Dk5G-x2P.js";import"./with-longpress-listener-CCdYr4S9.js";import"./dismissible-stack-BTasuI1h.js";import"./icon-IVNKVlSn.js";import"./icon-button-D_-k_p5i.js";import"./base-button-adapter-Byv4vKGr.js";import"./focus-indicator-9UpC3YRD.js";import"./list-dropdown-aware-core-DJXh3euF.js";import"./linear-progress-constants-DvyBCsCJ.js";import"./list-BWthdhg-.js";import"./popover-Co-ScF0z.js";import"./skeleton-constants-BAkejsfE.js";import"./state-Xd9mEVwF.js";import"./class-map-BCBS4o1b.js";import"./style-map-BRnBBsed.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
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

import{x as e}from"./iframe-uYmMtFXe.js";import{I as t,r,k as n,w as a,v as i,f as s}from"./with-default-aria-Ajc3U0-g.js";import"./count-card-Cp5nScH7.js";import{d as p}from"./index-DY8pP0a5.js";import{d as m}from"./index-Dav54a0r.js";import{d as c}from"./index-D5h3PDOK.js";import{d as l}from"./index-BPv42_UP.js";import{d}from"./index-DmhqSmlY.js";import"./custom-element-RnAbd9qQ.js";import"./constants-CpZXP-xH.js";import"./utils-tJtJfoaq.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CpuDE9B8.js";import"./async-directive-DqvxUZro.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-D1VuADBN.js";import"./index-C0ZI5e83.js";import"./tooltip-D3av5xGC.js";import"./with-longpress-listener-DRadE3GR.js";import"./dismissible-stack-BvYLNEYj.js";import"./icon-D3Ok13p2.js";import"./icon-button-DbCPLHsE.js";import"./base-button-adapter-81PK7MPV.js";import"./focus-indicator-nFJ3EteD.js";import"./list-dropdown-aware-core-CPh5XRX1.js";import"./linear-progress-constants-Dz-MRBIH.js";import"./list-CbfRLLJl.js";import"./popover-DWJoAGkp.js";import"./skeleton-constants-Dsvlu_GE.js";import"./state-B_tVrUm_.js";import"./class-map-kcMyfuC-.js";import"./style-map-D8XjMP1d.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
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

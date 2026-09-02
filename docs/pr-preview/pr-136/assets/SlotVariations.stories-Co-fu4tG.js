import{x as e}from"./iframe-BjE-IuEP.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-C0mEQDuz.js";import"./count-card-CyVoUR4g.js";import{d as p}from"./index-V5h_WnEl.js";import{d as m}from"./index-dXsVakPE.js";import{d as c}from"./index-7tfsQukT.js";import{d as l}from"./index-KAuuXuxJ.js";import{d}from"./index-E-CY0bbA.js";import"./constants-CRIYNPs9.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CcVjPa8J.js";import"./async-directive-lTSM_AAO.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DbrSAVoz.js";import"./index-nLHJ_7en.js";import"./tooltip-DuxrE-tx.js";import"./with-longpress-listener-CJAmkkZ3.js";import"./dismissible-stack-4jy-EvEg.js";import"./icon-Ww3ryr7l.js";import"./icon-button-CrI3QfR_.js";import"./base-button-adapter-CZgVjPHX.js";import"./focus-indicator-D8d7aSmQ.js";import"./list-dropdown-aware-core-DD369hWO.js";import"./linear-progress-constants-CGAwsFoC.js";import"./list-_5p6RBzw.js";import"./popover-BGRzSqC8.js";import"./skeleton-constants-CZRE8HQC.js";import"./state-BBv5DhaP.js";import"./class-map-CCdL37ts.js";import"./style-map-DjUbNG6_.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",F={title:"Components/Count Card",component:f,render:()=>e`
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

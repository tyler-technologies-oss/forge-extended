import{x as e}from"./iframe-BHiuspMz.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-Dr8txCyU.js";import"./count-card-DOUvvFoQ.js";import{d as p}from"./index-DeRClaW4.js";import{d as m}from"./index-CrIKbSsw.js";import{d as c}from"./index-DfWDXUE2.js";import{d as l}from"./index-BQzJykfh.js";import{d}from"./index-_M04vcwd.js";import"./custom-element-CS6H0gzE.js";import"./constants-aKnaKg58.js";import"./utils-CTcdxc71.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CRjWUuMe.js";import"./async-directive-Xn8TSerS.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DQoQlId0.js";import"./index-B6-7FdM1.js";import"./tooltip-MwSLxXkO.js";import"./with-longpress-listener-zKQBTxwL.js";import"./dismissible-stack-BiKy2JpF.js";import"./icon-zqjj0lUM.js";import"./icon-button-DjS9SVHO.js";import"./base-button-adapter-GlzYkY-X.js";import"./focus-indicator-BLsqjX4f.js";import"./list-dropdown-aware-core-Cs1mVT8-.js";import"./linear-progress-constants-oleZAC3s.js";import"./list-C6rOCZwd.js";import"./popover-Dv9qTCRO.js";import"./skeleton-constants-DN2wYhOu.js";import"./state-DXng2SpC.js";import"./class-map-BI-pJmnJ.js";import"./style-map-CWMZHwt-.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
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

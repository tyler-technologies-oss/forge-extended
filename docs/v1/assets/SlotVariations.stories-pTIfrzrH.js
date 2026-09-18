import{x as e}from"./iframe-CSr27Gi9.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-DqAXseBi.js";import"./count-card-DlyUa6nx.js";import{d as p}from"./index-DX-PHoPv.js";import{d as m}from"./index-XImc70I8.js";import{d as c}from"./index-Dkb3004Y.js";import{d as l}from"./index-CaDzBq-P.js";import{d}from"./index-8N_lAb06.js";import"./component-utils-DDaW1mI9.js";import"./constants-B0KOFcFf.js";import"./utils-CaDkb-CY.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BDYppvBO.js";import"./async-directive-DdY3TFlF.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-S8W-aZjQ.js";import"./index-DllKOV-2.js";import"./tooltip-UOOAfJ-G.js";import"./with-longpress-listener-BiENMdof.js";import"./dismissible-stack-CYkZnnQl.js";import"./icon-C2DgJ4Of.js";import"./icon-button-CkTpJu7r.js";import"./base-button-adapter-_1Vo15z1.js";import"./focus-indicator-0djWxlSZ.js";import"./list-dropdown-aware-core-DFiG4_XK.js";import"./linear-progress-constants-Cp2bMJWM.js";import"./list-B5T-3vSF.js";import"./popover-CVaTglWM.js";import"./skeleton-constants-DF8lKR4m.js";import"./state-C-klXQBz.js";import"./class-map-B6tseOWg.js";import"./style-map-ZfLdavep.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
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

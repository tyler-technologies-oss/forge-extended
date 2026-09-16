import{x as e}from"./iframe-CUmtllDg.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-sX8zJ_2t.js";import"./count-card-NNTh0A_R.js";import{d as p}from"./index-DPhamwrd.js";import{d as m}from"./index-CGaJoAh_.js";import{d as c}from"./index-DEAnuKYv.js";import{d as l}from"./index-Cp1Yinde.js";import{d}from"./index-Bva2fajR.js";import"./custom-element-2Mrb3U_x.js";import"./constants-DTntG4X6.js";import"./utils-CNfRvMhc.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DFQytTxg.js";import"./async-directive-B9BDXmta.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Cahstr3s.js";import"./index-BtidZxFX.js";import"./tooltip-B4GxzS7-.js";import"./with-longpress-listener-CIBU5OM7.js";import"./dismissible-stack-Dq8Wx7Op.js";import"./icon-BoaZPg9x.js";import"./icon-button-BERNpzaX.js";import"./base-button-adapter-BgBVsM7d.js";import"./focus-indicator-fO4DkNkz.js";import"./list-dropdown-aware-core-C7lslI6Q.js";import"./linear-progress-constants-DLKacN3g.js";import"./list-fY0-hWWQ.js";import"./popover-iXOrT8w4.js";import"./skeleton-constants-BMCz4G6W.js";import"./state-Cg3j5OBz.js";import"./class-map-7F1FW_MX.js";import"./style-map-CXxblk-R.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
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

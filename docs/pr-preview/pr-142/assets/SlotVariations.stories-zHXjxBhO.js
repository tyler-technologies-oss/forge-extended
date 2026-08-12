import{x as e}from"./iframe-BONfeRbS.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-BX23kPsM.js";import"./count-card-DpCfFgSH.js";import{d as p}from"./index-BbuEY8TC.js";import{d as m}from"./index-UGwEVcKj.js";import{d as c}from"./index-EiVw4x8X.js";import{d as l}from"./index-zLV5Feyi.js";import{d}from"./index-DHwt00KK.js";import"./feature-detection-BdDPgXkM.js";import"./constants-DnUFLkc1.js";import"./a11y-utils-CPysxFLW.js";import"./custom-element-C028faeO.js";import"./utils-D9p4bUJ4.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-DJLuWaYS.js";import"./async-directive-CTteLgwZ.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DQWtLKbM.js";import"./index-D-4eG0O1.js";import"./tooltip-BOfBYoiw.js";import"./with-longpress-listener-BBjmO5EP.js";import"./dismissible-stack--RH1Fewv.js";import"./icon-C7xslxSO.js";import"./icon-button-OYsEtGQk.js";import"./base-button-adapter-DnYus6sP.js";import"./focus-indicator-COKKqZBY.js";import"./list-dropdown-aware-core-D_MHrbwG.js";import"./linear-progress-constants-DoVvRo8z.js";import"./list-Y9tu5Xli.js";import"./popover-Dh6hBsmc.js";import"./skeleton-constants-DEC06Pfa.js";import"./state-BBrMM9pm.js";import"./class-map-DP5Wz34w.js";import"./style-map-BBE2BW0r.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",N={title:"Components/Count Card",component:f,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const X=["SlotVariations"];export{o as SlotVariations,X as __namedExportsOrder,N as default};

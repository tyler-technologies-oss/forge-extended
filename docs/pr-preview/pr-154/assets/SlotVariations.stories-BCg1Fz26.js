import{x as e}from"./iframe-BF-eadiO.js";import{I as t,r,k as n,w as a,v as i,f as s}from"./with-default-aria-C9Cpz9fo.js";import"./count-card-VNB1KPX-.js";import{d as p}from"./index-BXjDdWpl.js";import{d as m}from"./index-Bf9budZ-.js";import{d as c}from"./index-eoPtNyLh.js";import{d as l}from"./index-YppsFCU_.js";import{d}from"./index-BsTxyiem.js";import"./custom-element-C71I-6m3.js";import"./constants-BoaaRiLs.js";import"./utils-BfbFTmRC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BHvSaoDW.js";import"./async-directive-Bduev6Sc.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CV3Mr06h.js";import"./index-B73ODGDC.js";import"./tooltip-DjNUajub.js";import"./with-longpress-listener-BYdzOJl2.js";import"./dismissible-stack-DjoGjvdr.js";import"./icon-CQn9_tFD.js";import"./icon-button-DqObqSUj.js";import"./base-button-adapter-DoZYG0eo.js";import"./focus-indicator-D-YpIZ-n.js";import"./list-dropdown-aware-core-DnBWHYp6.js";import"./linear-progress-constants-BB5TDrBM.js";import"./list-BB3ktmOI.js";import"./popover-CcQ25Hi3.js";import"./skeleton-constants-BjWOtiy4.js";import"./state-BYN9LTwN.js";import"./class-map-D_T65IvU.js";import"./style-map-B2hCpMWn.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
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

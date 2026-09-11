import{x as e}from"./iframe-CYs4rUqc.js";import{I as t,r,k as n,w as a,v as i,f as s}from"./with-default-aria-IIDqe1FM.js";import"./count-card-CaMmrBNa.js";import{d as p}from"./index-CT7xPl9a.js";import{d as m}from"./index-BUFnbwZi.js";import{d as c}from"./index-CD57U0HP.js";import{d as l}from"./index-C5m3cR43.js";import{d}from"./index-BHHPSOx4.js";import"./custom-element-CDYWBB4R.js";import"./constants-BPzvPAwC.js";import"./utils-D4Tmth0h.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-D5rm5sHA.js";import"./async-directive-BlkTbESp.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Cna3cTfO.js";import"./index-DNEPaDKp.js";import"./tooltip-BiQHgGlu.js";import"./with-longpress-listener-Bj8Pz6MQ.js";import"./dismissible-stack-B5VulF68.js";import"./icon-0n1M6L10.js";import"./icon-button-DvWO3SvX.js";import"./base-button-adapter-NVSd6npM.js";import"./focus-indicator-CYx5OX-M.js";import"./list-dropdown-aware-core-SZ81rRJB.js";import"./linear-progress-constants-B8PRsZXu.js";import"./list-YaOfIVb6.js";import"./popover-C-JuMD1I.js";import"./skeleton-constants-C5aIp4aK.js";import"./state-BctSlBrf.js";import"./class-map-DcButXsH.js";import"./style-map-BoO3HD6L.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
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

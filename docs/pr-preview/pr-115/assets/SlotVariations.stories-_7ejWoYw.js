import{x as e}from"./iframe-DctCxiSq.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-CNms5Vty.js";import"./count-card-DQA2aGbd.js";import{d as p}from"./index-CoWFMgSH.js";import{d as m}from"./index-D125PVOJ.js";import{d as c}from"./index-DtXef-UB.js";import{d as l}from"./index-_k3rayXD.js";import{d}from"./index-Bg2jk-db.js";import"./constants-CS4zXbsk.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BjQhxcrF.js";import"./async-directive-hMS-Qt5r.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-KZwkj2I_.js";import"./index-BEwsWSw8.js";import"./tooltip-BTEnoueP.js";import"./with-longpress-listener-Cx26JS2z.js";import"./dismissible-stack-D2yQ4f0P.js";import"./icon-BW_dzchp.js";import"./icon-button-DwZ-7yaj.js";import"./base-button-adapter-DyQ7pt74.js";import"./focus-indicator-Diq_EcWA.js";import"./list-dropdown-aware-core-in1kzSoo.js";import"./linear-progress-constants-C8nGds3p.js";import"./list-C9gR7WRW.js";import"./popover-Co0NGWdd.js";import"./skeleton-constants-58wSoob0.js";import"./state-BpobjxgB.js";import"./class-map-K8DqNwWa.js";import"./style-map-auOw9Js3.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",F={title:"Components/Count Card",component:f,render:()=>e`
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

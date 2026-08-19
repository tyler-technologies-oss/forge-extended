import{x as e}from"./iframe-8MwHtudQ.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-BPqXu6Xp.js";import"./count-card-BlUcAo79.js";import{d as p}from"./index-DFX5CsMH.js";import{d as m}from"./index-BkLVSv1f.js";import{d as c}from"./index-BlNvjjwO.js";import{d as l}from"./index-CfxS1IX_.js";import{d}from"./index-CjJZS86v.js";import"./feature-detection-DEZcwXBI.js";import"./constants-DuGcWjEK.js";import"./a11y-utils-CKen7KlO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-BxX9MyhQ.js";import"./async-directive-4ylYArEM.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-Cv99O3Oe.js";import"./index-E1wU_2kJ.js";import"./tooltip-CP1rbqy9.js";import"./with-longpress-listener-CPq0IsXs.js";import"./dismissible-stack-C_hXrryT.js";import"./icon-CLiBI_A3.js";import"./icon-button-CSXFtLEd.js";import"./base-button-adapter-D5X63cTL.js";import"./focus-indicator-0SpCC1vE.js";import"./list-dropdown-aware-core-DkFtQ-iz.js";import"./linear-progress-constants-DGXRP5pg.js";import"./list-Dr3qmqxp.js";import"./popover-Cgs7gvHW.js";import"./skeleton-constants-DOSOf2_8.js";import"./state-CZd9qnQx.js";import"./class-map-Bb9nqZzS.js";import"./style-map-VD4PCJpf.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
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

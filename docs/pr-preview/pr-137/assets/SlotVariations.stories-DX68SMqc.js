import{x as e}from"./iframe-DY84GSRf.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-Tl2r-4IA.js";import"./count-card-A52F8alu.js";import{d as p}from"./index-BvExAWeJ.js";import{d as m}from"./index-Dy3cNjOb.js";import{d as c}from"./index-Do-7Ottf.js";import{d as l}from"./index-D3g5dggv.js";import{d}from"./index-C4QrGCyd.js";import"./constants-D98kDqAv.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-CnZXxtpX.js";import"./async-directive-Bh2jcCLL.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-CMteLulR.js";import"./index-BRkhxT5_.js";import"./tooltip-D2bd8WoD.js";import"./with-longpress-listener-DHTwpRzc.js";import"./position-utils-BmD1PIUA.js";import"./dismissible-stack-Byk0QYSR.js";import"./icon-DCc3zBHq.js";import"./icon-button-CKHcbntS.js";import"./base-button-adapter-Ca8PAt1F.js";import"./focus-indicator-B4Vch2QM.js";import"./list-dropdown-aware-core-DyDO9SYE.js";import"./linear-progress-constants-p76Xl7g2.js";import"./list-Dhrja6HF.js";import"./popover-CSNBv7VL.js";import"./skeleton-constants-Bfo-mjyd.js";import"./state-qT09zmhL.js";import"./class-map-RoITrbLe.js";import"./style-map-DG4xZIi3.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",H={title:"Components/Count Card",component:f,render:()=>e`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const J=["SlotVariations"];export{o as SlotVariations,J as __namedExportsOrder,H as default};

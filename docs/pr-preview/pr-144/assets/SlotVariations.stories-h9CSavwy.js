import{x as e}from"./iframe-Divla-Cp.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-BEs3GmpT.js";import"./count-card-DekcP9fG.js";import{d as p}from"./index-B9d_yM6M.js";import{d as m}from"./index-r3sRvHmc.js";import{d as c}from"./index-Dn8OEefT.js";import{d as l}from"./index-CWwm6ShL.js";import{d}from"./index-BZLP8QPd.js";import"./feature-detection-D-5lT58i.js";import"./constants-DkN7ZGiS.js";import"./a11y-utils-BCt-Wh9D.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-Bi1B8CZI.js";import"./async-directive-D1XEcX9j.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-DDtCiOcM.js";import"./index-C48eAD1W.js";import"./tooltip-DlREf1Hp.js";import"./with-longpress-listener-D8tPz6R8.js";import"./dismissible-stack-DyjlOaHM.js";import"./icon-C6Jpggai.js";import"./icon-button-CTYCVtl8.js";import"./base-button-adapter-uhdylO1A.js";import"./focus-indicator-CDDzSaVo.js";import"./list-dropdown-aware-core-DeBgxIvc.js";import"./linear-progress-constants-IvNJ2lcy.js";import"./list-CW12Vp-6.js";import"./popover-BijGC2rA.js";import"./skeleton-constants-9zF4Smu6.js";import"./state-CWeB6zh4.js";import"./class-map-DifFCkIf.js";import"./style-map-BsBaNyvw.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
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

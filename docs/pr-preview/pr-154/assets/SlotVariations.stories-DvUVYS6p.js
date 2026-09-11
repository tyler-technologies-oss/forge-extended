import{x as e}from"./iframe-BKxBIIJQ.js";import{I as t,r,k as n,w as a,v as i,f as s}from"./with-default-aria-DjItAXX6.js";import"./count-card-C-MQ-MuR.js";import{d as p}from"./index-0JZT0dcO.js";import{d as m}from"./index-DVopLR72.js";import{d as c}from"./index-BWb4NUA4.js";import{d as l}from"./index-v3JyUmzH.js";import{d}from"./index-B1Kvo2_8.js";import"./custom-element-BldoUTPl.js";import"./constants-aeBb4lYV.js";import"./utils-B42KGafL.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-D3GzrXFC.js";import"./async-directive-CnrapT-E.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-BaUYnTlJ.js";import"./index-Cf-yF1Nt.js";import"./tooltip-C_fHynxG.js";import"./with-longpress-listener-VROGiMiY.js";import"./dismissible-stack-DkTmbPfG.js";import"./icon-CGdxk2in.js";import"./icon-button-DNvrWAkH.js";import"./base-button-adapter-B1QGS9Um.js";import"./focus-indicator-evqk8lHd.js";import"./list-dropdown-aware-core-ODUd_dV0.js";import"./linear-progress-constants-D_6jO8mF.js";import"./list-Ddtt4Jaf.js";import"./popover-BB3pmc-g.js";import"./skeleton-constants-2T5bCXss.js";import"./state-CaY3QDV3.js";import"./class-map-BNDdSF1T.js";import"./style-map-BHjVEl-t.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
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

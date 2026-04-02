import{x as e}from"./iframe-COytv9dl.js";import{I as n,o as t,q as r,f as a}from"./icon-registry-CxyCioWM.js";import"./count-badge-ey9Li0gP.js";import{d as s}from"./index-B2zzxblL.js";import"./base-lit-element--sa9p8lJ.js";import"./async-directive-Xvh01PSI.js";import"./directive-CJw_OlP2.js";import"./index-9Q7z6kh-.js";import"./icon-QN_BHm4s.js";s();n.define([t,r,a]);const c="forge-count-card",h={tags:["hidden"],title:"Components/Count Card",component:c,render:()=>e`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        <forge-count-card>
          <span slot="label">Revenue</span>
          <forge-count-badge slot="header-end" theme="success">
            +12.5%
            <forge-icon slot="end" name="trending_up"></forge-icon>
          </forge-count-badge>
          <span slot="count">$48,250.00</span>
        </forge-count-card>

        <forge-count-card>
          <span slot="label">Expenses</span>
          <forge-count-badge slot="header-end" theme="error">
            -8.3%
            <forge-icon slot="end" name="trending_down"></forge-icon>
          </forge-count-badge>
          <span slot="count">$12,480.00</span>
        </forge-count-card>

        <forge-count-card>
          <forge-icon slot="icon" name="people"></forge-icon>
          <span slot="label">New Users</span>
          <forge-count-badge slot="header-end" theme="info">+156</forge-count-badge>
          <span slot="count">2,847</span>
        </forge-count-card>
      </div>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const x=["WithCountBadge"];export{o as WithCountBadge,x as __namedExportsOrder,h as default};

import{x as e}from"./iframe-D2cfH8Ci.js";import{I as n,p as r,q as t,f as a}from"./icon-registry-Bk9DTUbA.js";import"./count-badge-D1OrGN_n.js";import{d as s}from"./index-DhmB2amE.js";import"./base-lit-element-DbA2Ttky.js";import"./async-directive-D1uFkl34.js";import"./directive-CJw_OlP2.js";import"./index-B5m5iVxn.js";import"./icon-DX90194b.js";s();n.define([r,t,a]);const c="forge-count-card",h={title:"Components/Count Card",component:c,render:()=>e`
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

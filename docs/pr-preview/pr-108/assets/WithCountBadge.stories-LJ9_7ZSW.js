import{x as o}from"./iframe-CuQi_7B8.js";import{I as n,q as r,r as t,g as a}from"./base-lit-element-BqdxpGAk.js";import"./count-badge-DQO4WEyY.js";import{d as s}from"./index-BghzAyTb.js";import"./async-directive-DkER31vm.js";import"./directive-CJw_OlP2.js";import"./index-DfiBxnvX.js";import"./icon-CqVy63VK.js";s();n.define([r,t,a]);const c="forge-count-card",b={title:"Components/Count Card",component:c,render:()=>o`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const h=["WithCountBadge"];export{e as WithCountBadge,h as __namedExportsOrder,b as default};

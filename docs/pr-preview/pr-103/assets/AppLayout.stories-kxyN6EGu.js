import{x as t}from"./iframe-QkmlJ-kp.js";import{d as r}from"./app-layout-C1J5EsAx.js";import{I as i,t as a,a as n,b as s,c as p}from"./with-default-aria-CvB9LU3Y.js";import{d as f}from"./index-Buy3jA5E.js";import{d as m}from"./index-BCOt392e.js";import{d as l}from"./index-CI_IGYGh.js";import{d as g}from"./index-j4wPbdGw.js";import{d as c}from"./index-N2IZRE9S.js";m();l();r();g();f();c();const d="forge-app-layout";i.define([a,n,s,p]);const v={title:"Components/App Layout",component:d,argTypes:{appTitle:{control:"text",description:"The title text to display in the app bar",table:{category:"Properties"}},breakpoint:{control:"number",description:"The screen width breakpoint in pixels for responsive behavior",table:{category:"Properties"}}},args:{appTitle:"App Layout Demo",breakpoint:960}},e={render:o=>t`
      <forge-app-layout app-title=${o.appTitle} breakpoint=${o.breakpoint}>
        <forge-list navlist slot="navigation">
          <forge-list-item>
            <forge-icon slot="start" name="home"></forge-icon>
            <a href="javascript: void(0);">Home</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="inbox"></forge-icon>
            <a href="javascript: void(0);">Inbox</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="star"></forge-icon>
            <a href="javascript: void(0);">Starred</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="settings"></forge-icon>
            <a href="javascript: void(0);">Settings</a>
          </forge-list-item>
        </forge-list>

        <div style="padding: var(--forge-spacing-medium);" slot="body">
          <p class="forge-typography--body1">Resize the frame to see the responsive behavior</p>
        </div>
      </forge-app-layout>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <forge-app-layout app-title=\${args.appTitle} breakpoint=\${args.breakpoint}>
        <forge-list navlist slot="navigation">
          <forge-list-item>
            <forge-icon slot="start" name="home"></forge-icon>
            <a href="javascript: void(0);">Home</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="inbox"></forge-icon>
            <a href="javascript: void(0);">Inbox</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="star"></forge-icon>
            <a href="javascript: void(0);">Starred</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="settings"></forge-icon>
            <a href="javascript: void(0);">Settings</a>
          </forge-list-item>
        </forge-list>

        <div style="padding: var(--forge-spacing-medium);" slot="body">
          <p class="forge-typography--body1">Resize the frame to see the responsive behavior</p>
        </div>
      </forge-app-layout>
    \`;
  }
}`,...e.parameters?.docs?.source}}};const y=["Demo"],k=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{k as A,e as D};

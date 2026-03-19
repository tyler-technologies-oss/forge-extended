import{x as t}from"./iframe-BXpu8WS9.js";import{d as r}from"./app-layout-CYtfxHg8.js";import{I as i,t as a,a as n,b as s,c as p}from"./with-default-aria-C_nvProZ.js";import{d as l}from"./index-Di0Ii2-W.js";import{d as f}from"./index-zDhrQkFi.js";l();f();r();const g="forge-app-layout";i.define([a,n,s,p]);const c={title:"Components/App Layout",component:g,argTypes:{appTitle:{control:"text",description:"The title text to display in the app bar",table:{category:"Properties"}},breakpoint:{control:"number",description:"The screen width breakpoint in pixels for responsive behavior",table:{category:"Properties"}}},args:{appTitle:"App Layout Demo",breakpoint:960}},e={render:o=>t`
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

        <div class="content-container">
          <p class="forge-typography--body1">Resize the frame to see the responsive behavior</p>
        </div>
        <div slot="modal-footer">Footer</div>
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

        <div class="content-container">
          <p class="forge-typography--body1">Resize the frame to see the responsive behavior</p>
        </div>
        <div slot="modal-footer">Footer</div>
      </forge-app-layout>
    \`;
  }
}`,...e.parameters?.docs?.source}}};const m=["Demo"],u=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{u as A,e as D};

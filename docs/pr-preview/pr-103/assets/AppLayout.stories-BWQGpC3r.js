import{x as t}from"./iframe-BZn7XJ1E.js";import{d as r}from"./app-layout-8r67zARc.js";import{p as i,I as n,a,r as s,b as p,s as f}from"./with-default-aria-CtRqHLx0.js";import{a as m}from"./list-C5mZHpoZ.js";import{d as l}from"./index-1bOE2Tfs.js";import{d as g}from"./index-Cp_urVvT.js";import{d as c}from"./index-Btf8Cvj4.js";import{d}from"./index-DjBfsqtk.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function v(){i(m)}l();g();r();c();v();d();const b="forge-app-layout";n.define([a,s,p,f]);const y={title:"Components/App Layout",component:b,argTypes:{appTitle:{control:"text",description:"The title text to display in the app bar",table:{category:"Properties"}},breakpoint:{control:"number",description:"The screen width breakpoint in pixels for responsive behavior",table:{category:"Properties"}}},args:{appTitle:"App Layout Demo",breakpoint:960}},e={render:o=>t`
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
}`,...e.parameters?.docs?.source}}};const h=["Demo"],L=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{L as A,e as D};

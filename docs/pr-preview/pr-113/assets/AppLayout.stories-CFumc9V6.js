import{x as t}from"./iframe-BLBGr_e1.js";import{o as r}from"./if-defined-f4Fg5Idr.js";import{d as a}from"./app-layout-BYw1-Yft.js";import{I as i,t as n,a as p,b as s,c as f}from"./with-default-aria-j9_2aAXy.js";import{d as l}from"./index-Dfjb30VQ.js";import{d as m}from"./index-DiIm4-SL.js";import{d as g}from"./index-CEOZCKUR.js";import{d as c}from"./index-Bi3I32WR.js";import{d}from"./index-JAfPDPI_.js";m();g();a();c();l();d();const b="forge-app-layout";i.define([n,p,s,f]);const v={title:"Components/App Layout",component:b,argTypes:{appTitle:{control:"text",description:"The title text to display in the app bar",table:{category:"Properties"}},appTitleHref:{control:"text",description:"The URL that the app bar title links to",table:{category:"Properties"}},breakpoint:{control:"number",description:"The screen width breakpoint in pixels for responsive behavior",table:{category:"Properties"}},noAppBar:{control:"boolean",description:"Whether to hide the app bar",table:{category:"Properties"}}},args:{appTitle:"App Layout Demo",appTitleHref:void 0,breakpoint:960,noAppBar:!1}},e={render:o=>t`
      <forge-app-layout
        app-title=${o.appTitle}
        app-title-href=${r(o.appTitleHref)}
        breakpoint=${o.breakpoint}
        ?no-app-bar=${o.noAppBar}>
        <forge-list navlist slot="navigation" data-forge-app-layout-close>
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
      <forge-app-layout
        app-title=\${args.appTitle}
        app-title-href=\${ifDefined(args.appTitleHref)}
        breakpoint=\${args.breakpoint}
        ?no-app-bar=\${args.noAppBar}>
        <forge-list navlist slot="navigation" data-forge-app-layout-close>
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
}`,...e.parameters?.docs?.source}}};const h=["Demo"],$=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:h,default:v},Symbol.toStringTag,{value:"Module"}));export{$ as A,e as D};

import{x as t}from"./iframe-Dl9rccmp.js";import{o as r}from"./if-defined-OGRiJYcs.js";import{d as a}from"./app-layout-Lfk0aYpp.js";import{I as i,t as n,a as p,b as s,c as f}from"./with-default-aria-Dz8WdObG.js";import{d as l}from"./index-DwW-n81x.js";import{d as m}from"./index-d1ju8yk8.js";import{d as g}from"./index-BpT5DArQ.js";import{d as c}from"./index-SD8Mmd7v.js";import{d}from"./index-9ZHXBsQk.js";m();g();a();c();l();d();const b="forge-app-layout";i.define([n,p,s,f]);const v={title:"Components/App Layout",component:b,argTypes:{appTitle:{control:"text",description:"The title text to display in the app bar",table:{category:"Properties"}},appTitleHref:{control:"text",description:"The URL that the app bar title links to",table:{category:"Properties"}},breakpoint:{control:"number",description:"The screen width breakpoint in pixels for responsive behavior",table:{category:"Properties"}},noAppBar:{control:"boolean",description:"Whether to hide the app bar",table:{category:"Properties"}}},args:{appTitle:"App Layout Demo",appTitleHref:void 0,breakpoint:960,noAppBar:!1}},e={render:o=>t`
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

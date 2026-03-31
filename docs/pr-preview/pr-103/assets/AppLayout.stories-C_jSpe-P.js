import{x as o}from"./iframe-DQN7m6T1.js";import{o as r}from"./if-defined-BRiKTwrj.js";import{d as i}from"./app-layout-DdhbXODS.js";import{I as a,t as n,a as s,b as p,c as f}from"./with-default-aria-C0GUhR2a.js";import{d as l}from"./index-B5SC9nk_.js";import{d as m}from"./index-BeBk5lN5.js";import{d as g}from"./index-BVI4bSUG.js";import{d as c}from"./index-DXaakUxs.js";import{d}from"./index-QDakK4o1.js";m();g();i();c();l();d();const v="forge-app-layout";a.define([n,s,p,f]);const y={title:"Components/App Layout",component:v,argTypes:{appTitle:{control:"text",description:"The title text to display in the app bar",table:{category:"Properties"}},appTitleHref:{control:"text",description:"The URL that the app bar title links to",table:{category:"Properties"}},breakpoint:{control:"number",description:"The screen width breakpoint in pixels for responsive behavior",table:{category:"Properties"}}},args:{appTitle:"App Layout Demo",appTitleHref:void 0,breakpoint:960}},e={render:t=>o`
      <forge-app-layout
        app-title=${t.appTitle}
        app-title-href=${r(t.appTitleHref)}
        breakpoint=${t.breakpoint}>
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
        breakpoint=\${args.breakpoint}>
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
}`,...e.parameters?.docs?.source}}};const b=["Demo"],H=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{H as A,e as D};

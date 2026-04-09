import{x as o}from"./iframe-DOl2emF7.js";import{o as r}from"./if-defined-dcmkgF62.js";import{d as a}from"./app-layout-3e_uRheM.js";import{I as i,t as n,a as p,b as s,c as l}from"./with-default-aria-CiOE7Mlp.js";import{d as f}from"./index-Bms_YPRM.js";import{d as c}from"./index-DHC73bQO.js";import{d as m}from"./index-ErtbTvYY.js";import{d as g}from"./index-lC_XXeA5.js";import{d}from"./index-BOQYXO1V.js";c();m();a();g();f();d();const b="forge-app-layout";i.define([n,p,s,l]);const y={title:"Components/App Layout",component:b,argTypes:{appTitle:{control:"text",description:"The title text to display in the app bar",table:{category:"Properties"}},appTitleHref:{control:"text",description:"The URL that the app bar title links to",table:{category:"Properties"}},breakpoint:{control:"number",description:"The screen width breakpoint in pixels for responsive behavior",table:{category:"Properties"}},noAppBar:{control:"boolean",description:"Whether to hide the app bar",table:{category:"Properties"}},preset:{control:"select",options:["backoffice","public","documentation"],description:"The layout preset to use",table:{category:"Properties"}}},args:{appTitle:"App Layout Demo",appTitleHref:void 0,breakpoint:960,noAppBar:!1,preset:"backoffice"}},t={render:e=>o`
      <forge-app-layout
        app-title=${e.appTitle}
        app-title-href=${r(e.appTitleHref)}
        breakpoint=${e.breakpoint}
        ?no-app-bar=${e.noAppBar}
        preset=${e.preset}>
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

        <div slot="body">
          <p class="forge-typography--body1" style="margin:0; padding: 0;">
            Resize the frame to see the responsive behavior
          </p>
        </div>
      </forge-app-layout>
    `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <forge-app-layout
        app-title=\${args.appTitle}
        app-title-href=\${ifDefined(args.appTitleHref)}
        breakpoint=\${args.breakpoint}
        ?no-app-bar=\${args.noAppBar}
        preset=\${args.preset}>
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

        <div slot="body">
          <p class="forge-typography--body1" style="margin:0; padding: 0;">
            Resize the frame to see the responsive behavior
          </p>
        </div>
      </forge-app-layout>
    \`;
  }
}`,...t.parameters?.docs?.source}}};const h=["Demo"],A=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{A,t as D};

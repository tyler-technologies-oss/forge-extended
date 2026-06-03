import{x as r}from"./iframe-C44ATlN0.js";import{o as a}from"./if-defined-DpKpZsq1.js";import{d as s}from"./app-layout-zv20x4E2.js";import{I as p,t as g,a as l,b as f,c,d}from"./with-default-aria-DEeb_wyb.js";import{d as m}from"./index-DEQkiF7r.js";import{d as h}from"./index-BysSV1_j.js";import{d as y}from"./index-DGAZgQ00.js";import{d as b}from"./index-FhMfyMYK.js";import{d as v}from"./index-B1JO16kf.js";import{d as u}from"./index-DNmQ7YPe.js";h();y();s();b();m();v();u();const k="forge-app-layout";p.define([g,l,f,c,d]);const T={title:"Components/App Layout",component:k,argTypes:{appTitle:{control:"text",description:"The title text to display in the app bar",table:{category:"Properties"}},appTitleHref:{control:"text",description:"The URL that the app bar title links to",table:{category:"Properties"}},breakpoint:{control:"number",description:"The screen width breakpoint in pixels for responsive behavior",table:{category:"Properties"}},leftBreakpoint:{control:"number",description:"Optional separate breakpoint for the left navigation drawer. Falls back to breakpoint if not set.",table:{category:"Properties"}},rightBreakpoint:{control:"number",description:"Optional separate breakpoint for the right content drawer. Falls back to breakpoint if not set.",table:{category:"Properties"}}},args:{appTitle:"App Layout Demo",appTitleHref:void 0,breakpoint:960,leftBreakpoint:void 0,rightBreakpoint:void 0}},t={render:e=>r`
      <forge-app-layout
        app-title=${e.appTitle}
        app-title-href=${a(e.appTitleHref)}
        breakpoint=${e.breakpoint}
        .leftBreakpoint=${e.leftBreakpoint}
        .rightBreakpoint=${e.rightBreakpoint}>
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
    `},o={render:e=>{function i(n){n.currentTarget.closest("forge-app-layout")?.toggleRightDrawer()}return r`
      <forge-app-layout
        app-title=${e.appTitle}
        app-title-href=${a(e.appTitleHref)}
        breakpoint=${e.breakpoint}
        .leftBreakpoint=${e.leftBreakpoint}
        .rightBreakpoint=${e.rightBreakpoint}>
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
            <forge-icon slot="start" name="settings"></forge-icon>
            <a href="javascript: void(0);">Settings</a>
          </forge-list-item>
        </forge-list>

        <forge-icon-button slot="app-bar-end" aria-label="Toggle details panel" @click=${i}>
          <forge-icon name="info"></forge-icon>
        </forge-icon-button>

        <div style="padding: var(--forge-spacing-medium);" slot="body">
          <p class="forge-typography--body1">Click the info button in the app bar to toggle the right drawer.</p>
          <p class="forge-typography--body1">Resize the frame to see the responsive behavior.</p>
        </div>

        <div slot="body-right-content" style="padding: var(--forge-spacing-medium);">
          <h3 class="forge-typography--heading5">Details Panel</h3>
          <p class="forge-typography--body1">This content appears in the right drawer.</p>
          <p class="forge-typography--body1">On large screens, it appears as a drawer on the right side of the body.</p>
          <p class="forge-typography--body1">On small screens, it appears as a modal dialog.</p>
        </div>
      </forge-app-layout>
    `}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <forge-app-layout
        app-title=\${args.appTitle}
        app-title-href=\${ifDefined(args.appTitleHref)}
        breakpoint=\${args.breakpoint}
        .leftBreakpoint=\${args.leftBreakpoint}
        .rightBreakpoint=\${args.rightBreakpoint}>
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    function handleToggleRightDrawer(event: Event): void {
      const button = event.currentTarget as HTMLElement;
      const appLayout = button.closest('forge-app-layout');
      appLayout?.toggleRightDrawer();
    }
    return html\`
      <forge-app-layout
        app-title=\${args.appTitle}
        app-title-href=\${ifDefined(args.appTitleHref)}
        breakpoint=\${args.breakpoint}
        .leftBreakpoint=\${args.leftBreakpoint}
        .rightBreakpoint=\${args.rightBreakpoint}>
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
            <forge-icon slot="start" name="settings"></forge-icon>
            <a href="javascript: void(0);">Settings</a>
          </forge-list-item>
        </forge-list>

        <forge-icon-button slot="app-bar-end" aria-label="Toggle details panel" @click=\${handleToggleRightDrawer}>
          <forge-icon name="info"></forge-icon>
        </forge-icon-button>

        <div style="padding: var(--forge-spacing-medium);" slot="body">
          <p class="forge-typography--body1">Click the info button in the app bar to toggle the right drawer.</p>
          <p class="forge-typography--body1">Resize the frame to see the responsive behavior.</p>
        </div>

        <div slot="body-right-content" style="padding: var(--forge-spacing-medium);">
          <h3 class="forge-typography--heading5">Details Panel</h3>
          <p class="forge-typography--body1">This content appears in the right drawer.</p>
          <p class="forge-typography--body1">On large screens, it appears as a drawer on the right side of the body.</p>
          <p class="forge-typography--body1">On small screens, it appears as a modal dialog.</p>
        </div>
      </forge-app-layout>
    \`;
  }
}`,...o.parameters?.docs?.source}}};const B=["Demo","WithRightDrawer"],P=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,WithRightDrawer:o,__namedExportsOrder:B,default:T},Symbol.toStringTag,{value:"Module"}));export{P as A,t as D};

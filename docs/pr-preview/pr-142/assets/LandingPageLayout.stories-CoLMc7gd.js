import{E as a,x as o}from"./iframe-PAcmqUG6.js";import{o as t}from"./if-defined-CjMnyJ3P.js";import"./landing-page-layout-Bu7IPPBK.js";import{s as l}from"./decorators-BO-g6OUX.js";const n="forge-landing-page-layout",i={title:"Components/Landing Page Layout",component:n,parameters:{layout:"fullscreen"},decorators:[l(`
      body {
        margin: 0;
        padding: 0;
        background-color: var(--forge-theme-surface);
      }

      #storybook-root,
      #root-inner {
        height: 100%;
      }

      .demo-area {
        border: dashed 2px var(--forge-theme-primary-container-high);
        background-color: var(--forge-theme-primary-container-minimum);
        border-radius: var(--forge-shape-medium);
        display: flex;
        flex-direction: column;
        place-content: center;
        text-align: center;
        color: var(--forge-theme-on-primary-container);
        padding: var(--forge-spacing-large);
        min-height: var(--forge-spacing-xxlarge);
      }

      .demo-area-tall {
        min-height: 400px;
      }

      .demo-area-short {
        min-height: 200px;
      }

      .demo-header-area {
        border: dashed 2px var(--forge-theme-on-primary);
        display: flex;
        flex-direction: column;
        place-content: center;
        text-align: center;
        color: var(--forge-theme-on-primary);
        padding: var(--forge-spacing-medium);
      }

      .demo-action-area {
        border: dashed 2px var(--forge-theme-on-primary);
        display: inline-flex;
        place-content: center;
        color: var(--forge-theme-on-primary);
        padding: var(--forge-spacing-small) var(--forge-spacing-large);
      }

      .demo-footer-area {
        border: dashed 2px var(--forge-theme-on-surface-inverse);
        color: var(--forge-theme-on-surface-inverse);
        display: flex;
        flex-direction: column;
        place-content: center;
        text-align: center;
        padding: var(--forge-spacing-large);
      }
    `)],argTypes:{mode:{control:"select",options:["two-third","equal","three","single"],description:"Controls the body column layout",table:{category:"Properties"}},alignment:{control:"select",options:["center","left"],description:"Controls the horizontal alignment of the header content",table:{category:"Properties"}},size:{control:"select",options:["normal","wide"],description:"Controls the maximum width of the content area",table:{category:"Properties"}},imageUrlLarge:{control:"text",description:"URL of the background image used on large screens (>= 769px)",table:{category:"Properties"}},imageUrlSmall:{control:"text",description:"URL of the background image used on small screens (<= 768px)",table:{category:"Properties"}},showAnnouncements:{control:"boolean",description:"Toggle the announcements slot",table:{category:"Slots"}},showTop:{control:"boolean",description:"Toggle the top slot",table:{category:"Slots"}},showCenter:{control:"boolean",description:'Toggle the center column (only used when mode is "three")',table:{category:"Slots"}},showBodyFooter:{control:"boolean",description:"Toggle the body-footer slot",table:{category:"Slots"}},showFooter:{control:"boolean",description:"Toggle the page footer slot",table:{category:"Slots"}}},args:{mode:"two-third",alignment:"center",size:"normal",imageUrlLarge:"",imageUrlSmall:"",showAnnouncements:!0,showTop:!1,showCenter:!1,showBodyFooter:!1,showFooter:!0}},r={render:e=>o`
      <forge-landing-page-layout
        mode=${e.mode}
        alignment=${e.alignment}
        size=${e.size}
        image-url-large=${t(e.imageUrlLarge||void 0)}
        image-url-small=${t(e.imageUrlSmall||void 0)}>
        <div class="demo-header-area forge-typography--label1" slot="secondary-title">secondary-title</div>
        <div class="demo-header-area forge-typography--label1" slot="main-title">main-title</div>
        <div class="demo-action-area forge-typography--label1" slot="action">action</div>
        <div class="demo-action-area forge-typography--label1" slot="action">action</div>

        ${e.showAnnouncements?o`<div class="demo-header-area forge-typography--label1" slot="announcements">announcements</div>`:a}
        ${e.showTop?o`<div class="demo-area demo-area-short forge-typography--label1" slot="top">top</div>`:a}

        <div class="demo-area demo-area-tall forge-typography--label1" slot="left">left</div>
        ${e.showCenter||e.mode==="three"?o`<div class="demo-area demo-area-tall forge-typography--label1" slot="center">center</div>`:a}
        <div class="demo-area demo-area-tall forge-typography--label1" slot="right">right</div>

        ${e.showBodyFooter?o`<div class="demo-area demo-area-short forge-typography--label1" slot="body-footer">body-footer</div>`:a}
        ${e.showFooter?o`<div class="demo-footer-area forge-typography--label1" slot="footer">footer</div>`:a}
      </forge-landing-page-layout>
    `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <forge-landing-page-layout
        mode=\${args.mode}
        alignment=\${args.alignment}
        size=\${args.size}
        image-url-large=\${ifDefined(args.imageUrlLarge || undefined)}
        image-url-small=\${ifDefined(args.imageUrlSmall || undefined)}>
        <div class="demo-header-area forge-typography--label1" slot="secondary-title">secondary-title</div>
        <div class="demo-header-area forge-typography--label1" slot="main-title">main-title</div>
        <div class="demo-action-area forge-typography--label1" slot="action">action</div>
        <div class="demo-action-area forge-typography--label1" slot="action">action</div>

        \${args.showAnnouncements ? html\`<div class="demo-header-area forge-typography--label1" slot="announcements">announcements</div>\` : nothing}
        \${args.showTop ? html\`<div class="demo-area demo-area-short forge-typography--label1" slot="top">top</div>\` : nothing}

        <div class="demo-area demo-area-tall forge-typography--label1" slot="left">left</div>
        \${args.showCenter || args.mode === 'three' ? html\`<div class="demo-area demo-area-tall forge-typography--label1" slot="center">center</div>\` : nothing}
        <div class="demo-area demo-area-tall forge-typography--label1" slot="right">right</div>

        \${args.showBodyFooter ? html\`<div class="demo-area demo-area-short forge-typography--label1" slot="body-footer">body-footer</div>\` : nothing}
        \${args.showFooter ? html\`<div class="demo-footer-area forge-typography--label1" slot="footer">footer</div>\` : nothing}
      </forge-landing-page-layout>
    \`;
  }
}`,...r.parameters?.docs?.source}}};const s=["Demo"],p=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:s,default:i},Symbol.toStringTag,{value:"Module"}));export{r as D,p as L};

import{r as D,i as P,x as r}from"./iframe-CreInDM6.js";import{I as W,f as q,g as z,h as M,i as H,j as B,k as R,l as G,t as N,b as F}from"./icon-registry-CwmqUg58.js";import{t as L}from"./custom-element-BhZVzxrc.js";import{n as C}from"./property-D4vZDycR.js";import{n as $,e as w}from"./ref-C1kXUrS8.js";import{n as K}from"./when-3fO0zp9C.js";import{d as V}from"./ai-sidebar-BiHoF3jm.js";import"./ai-chat-interface-D4whn_q8.js";import"./ai-modal-BkygMpLT.js";import"./ai-prompt-46cEO_NE.js";import"./ai-dropdown-menu-DZ5K4xAz.js";import"./ai-voice-input-NBk8JHnS.js";import"./ai-user-message-B4Scg9G2.js";import"./ai-response-message-KcxcopVe.js";import"./ai-suggestions-CdwKU6Yk.js";import"./ai-button-Cgc6i2lP.js";import{d as j}from"./index-DkS7Nifc.js";import{d as U}from"./index-Ct1nLHLf.js";import{d as Y}from"./index-BfqEnro2.js";import{d as J}from"./index-DgE_wAYr.js";import{d as Q}from"./index-DO8OeINa.js";const X=":host{display:block;height:100%}";var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,I=e=>{throw TypeError(e)},x=(e,a,o,d)=>{for(var i=d>1?void 0:d?ee(a,o):a,p=e.length-1,c;p>=0;p--)(c=e[p])&&(i=(d?c(a,o,i):c(i))||i);return d&&i&&Z(a,o,i),i},_=(e,a,o)=>a.has(e)||I("Cannot "+o),m=(e,a,o)=>(_(e,a,"read from private field"),o?o.call(e):a.get(e)),u=(e,a,o)=>a.has(e)?I("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,o),s=(e,a,o)=>(_(e,a,"access private method"),o),b,y,t,v,S,A,k,O,T,n;const ae="forge-ai-sidebar-chat";let f=class extends P{constructor(){super(...arguments),u(this,t),this.open=!1,this.expanded=!1,u(this,b,w()),u(this,y,w())}render(){return r`
      ${K(this.expanded,()=>r`
          <forge-ai-modal
            ${$(m(this,y))}
            ?open=${this.open&&this.expanded}
            @forge-ai-modal-close=${s(this,t,T)}>
            ${m(this,t,v)}
          </forge-ai-modal>
        `,()=>r`
          <forge-ai-sidebar
            ${$(m(this,b))}
            ?open=${this.open&&!this.expanded}
            @forge-ai-sidebar-open=${s(this,t,S)}
            @forge-ai-sidebar-close=${s(this,t,A)}>
            ${m(this,t,v)}
          </forge-ai-sidebar>
        `)}
    `}show(){this.open=!0,s(this,t,n).call(this,"forge-ai-sidebar-chat-open")}close(){this.expanded&&(this.expanded=!1,s(this,t,n).call(this,"forge-ai-sidebar-chat-collapse")),this.open=!1,s(this,t,n).call(this,"forge-ai-sidebar-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,s(this,t,n).call(this,"forge-ai-sidebar-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,s(this,t,n).call(this,"forge-ai-sidebar-chat-collapse"))}};b=new WeakMap;y=new WeakMap;t=new WeakSet;v=function(){return r`
      <forge-ai-chat-interface
        show-expand-button
        ?show-minimize-button=${!this.expanded}
        minimize-icon=${this.expanded?"default":"panel"}
        ?expanded=${this.expanded}
        @forge-ai-chat-header-expand=${s(this,t,k)}
        @forge-ai-chat-header-minimize=${s(this,t,O)}>
        <slot></slot>
        <slot name="suggestions" slot="suggestions"></slot>
        <slot name="prompt" slot="prompt"></slot>
      </forge-ai-chat-interface>
    `};S=function(){this.open=!0,s(this,t,n).call(this,"forge-ai-sidebar-chat-open")};A=function(){this.open=!1,s(this,t,n).call(this,"forge-ai-sidebar-chat-close")};k=function(){this.expanded=!this.expanded,this.expanded?s(this,t,n).call(this,"forge-ai-sidebar-chat-expand"):s(this,t,n).call(this,"forge-ai-sidebar-chat-collapse")};O=function(){this.close()};T=function(){this.expanded&&this.collapse()};n=function(e){const a=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(a)};f.styles=D(X);x([C({type:Boolean})],f.prototype,"open",2);x([C({type:Boolean})],f.prototype,"expanded",2);f=x([L(ae)],f);const{action:l}=__STORYBOOK_MODULE_ACTIONS__;V();U();Y();j();J();Q();W.define([q,z,M,H,B,R,G,N,F]);const E=()=>r`
    <forge-ai-prompt slot="prompt">
      <forge-ai-dropdown-menu variant="icon-button" selection-mode="none" slot="actions">
        <span slot="trigger-content">
          <forge-icon name="add" external></forge-icon>
        </span>
        <forge-ai-dropdown-menu-item value="add-image">
          <span>Add image</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="add-pdf">
          <span>Add PDF</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="add-spreadsheet">
          <span>Add spreadsheet</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
      <forge-ai-voice-input slot="actions" @forge-ai-voice-input-result=${a=>{const o=document.querySelector("forge-ai-prompt");o&&(o.value=a.detail.transcript)}}></forge-ai-voice-input>
    </forge-ai-prompt>
  `,oe="forge-ai-sidebar-chat",te={title:"AI/Form Factors/Sidebar",component:oe,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the sidebar chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded modal state"}},args:{open:!0,expanded:!1},render:e=>{const a=l("forge-ai-sidebar-chat-open"),o=l("forge-ai-sidebar-chat-close"),d=l("forge-ai-sidebar-chat-expand"),i=l("forge-ai-sidebar-chat-collapse"),p=r`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        @forge-ai-sidebar-chat-open=${a}
        @forge-ai-sidebar-chat-close=${o}
        @forge-ai-sidebar-chat-expand=${d}
        @forge-ai-sidebar-chat-collapse=${i}>
        <forge-ai-user-message>
          Hello! Can you help me understand the analytics data I'm seeing in my dashboard?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand your analytics data! I can see you're looking at your dashboard with
          various metrics and activity reports. What specific aspects would you like me to explain? I can help with: -
          Interpreting trends and patterns - Explaining key performance indicators - Suggesting areas for improvement -
          Answering questions about specific data points
        </forge-ai-response-message>
        <forge-ai-user-message> What should I focus on first when reviewing my dashboard? </forge-ai-user-message>
        <forge-ai-response-message>
          Great question! Here's a recommended approach for dashboard review: 1. **Start with key metrics** - Look at
          your primary KPIs first 2. **Check for anomalies** - Notice any unusual spikes or drops 3. **Review time
          trends** - Compare current data to historical patterns 4. **Identify opportunities** - Look for areas showing
          positive growth 5. **Address concerns** - Investigate any declining metrics Would you like me to walk through
          any of these areas with your current data?
        </forge-ai-response-message>
        ${E()}
      </forge-ai-sidebar-chat>
    `;return r`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat Demo"></forge-app-bar>

        <forge-toolbar slot="body-header">
          <h2 class="forge-typography--heading4">Page Title</h2>
          <forge-ai-button
            slot="end"
            @click=${()=>{document.querySelector("forge-ai-sidebar-chat")?.toggle()}}
            >Ask AI Assistant</forge-ai-button
          >
        </forge-toolbar>

        <main slot="body" style="padding: 24px;">
          <forge-card>
            <p>Demo of the AI Sidebar Chat component within a typical application layout.</p>
            <p>This is a structured form factor component that combines ai-sidebar and ai-chat-interface.</p>
            <p>The sidebar chat automatically handles composition and includes a minimize button in the header.</p>
          </forge-card>
        </main>

        ${e.position==="left"?r`<div slot="body-left">${p}</div>`:r`<div slot="body-right">${p}</div>`}
      </forge-scaffold>
    `}},h={},g={render:e=>{const a=l("forge-ai-sidebar-chat-open"),o=l("forge-ai-sidebar-chat-close"),d=l("forge-ai-sidebar-chat-expand"),i=l("forge-ai-sidebar-chat-collapse"),p=[{text:"Show me key performance indicators",value:"kpi"},{text:"Analyze user engagement trends",value:"engagement"},{text:"Compare this month to last month",value:"comparison"},{text:"Identify areas for improvement",value:"improvement"},{text:"Generate a summary report",value:"report"}],c=r`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        @forge-ai-sidebar-chat-open=${a}
        @forge-ai-sidebar-chat-close=${o}
        @forge-ai-sidebar-chat-expand=${d}
        @forge-ai-sidebar-chat-collapse=${i}>
        <forge-ai-user-message>
          Hello! Can you help me understand the analytics data I'm seeing in my dashboard?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand your analytics data! I can see you're looking at your dashboard with
          various metrics and activity reports. What specific aspects would you like me to explain?
        </forge-ai-response-message>
        <forge-ai-suggestions slot="suggestions" .suggestions=${p}></forge-ai-suggestions>
        ${E()}
      </forge-ai-sidebar-chat>
    `;return r`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat with Suggestions"></forge-app-bar>

        <forge-toolbar slot="body-header">
          <h2 class="forge-typography--heading4">Dashboard Analytics</h2>
          <forge-ai-button
            slot="end"
            @click=${()=>{document.querySelector("forge-ai-sidebar-chat")?.toggle()}}
            >Ask AI Assistant</forge-ai-button
          >
        </forge-toolbar>

        <main slot="body" style="padding: 24px;">
          <forge-card>
            <p>This demo shows the sidebar chat with AI suggestions for dashboard analytics.</p>
            <p>The suggestions provide quick options for common analytics questions.</p>
          </forge-card>
        </main>

        ${e.position==="left"?r`<div slot="body-left">${c}</div>`:r`<div slot="body-right">${c}</div>`}
      </forge-scaffold>
    `}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const handleOpen = action('forge-ai-sidebar-chat-open');
    const handleClose = action('forge-ai-sidebar-chat-close');
    const handleExpand = action('forge-ai-sidebar-chat-expand');
    const handleCollapse = action('forge-ai-sidebar-chat-collapse');
    const suggestions = [{
      text: 'Show me key performance indicators',
      value: 'kpi'
    }, {
      text: 'Analyze user engagement trends',
      value: 'engagement'
    }, {
      text: 'Compare this month to last month',
      value: 'comparison'
    }, {
      text: 'Identify areas for improvement',
      value: 'improvement'
    }, {
      text: 'Generate a summary report',
      value: 'report'
    }] as Suggestion[];
    const sidebarChat = html\`
      <forge-ai-sidebar-chat
        ?open=\${args.open}
        ?expanded=\${args.expanded}
        @forge-ai-sidebar-chat-open=\${handleOpen}
        @forge-ai-sidebar-chat-close=\${handleClose}
        @forge-ai-sidebar-chat-expand=\${handleExpand}
        @forge-ai-sidebar-chat-collapse=\${handleCollapse}>
        <forge-ai-user-message>
          Hello! Can you help me understand the analytics data I'm seeing in my dashboard?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand your analytics data! I can see you're looking at your dashboard with
          various metrics and activity reports. What specific aspects would you like me to explain?
        </forge-ai-response-message>
        <forge-ai-suggestions slot="suggestions" .suggestions=\${suggestions}></forge-ai-suggestions>
        \${createPrompt()}
      </forge-ai-sidebar-chat>
    \`;
    return html\`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat with Suggestions"></forge-app-bar>

        <forge-toolbar slot="body-header">
          <h2 class="forge-typography--heading4">Dashboard Analytics</h2>
          <forge-ai-button
            slot="end"
            @click=\${() => {
      const sidebar = document.querySelector('forge-ai-sidebar-chat');
      sidebar?.toggle();
    }}
            >Ask AI Assistant</forge-ai-button
          >
        </forge-toolbar>

        <main slot="body" style="padding: 24px;">
          <forge-card>
            <p>This demo shows the sidebar chat with AI suggestions for dashboard analytics.</p>
            <p>The suggestions provide quick options for common analytics questions.</p>
          </forge-card>
        </main>

        \${args.position === 'left' ? html\`<div slot="body-left">\${sidebarChat}</div>\` : html\`<div slot="body-right">\${sidebarChat}</div>\`}
      </forge-scaffold>
    \`;
  }
}`,...g.parameters?.docs?.source}}};const se=["Demo","WithSuggestions"],Ae=Object.freeze(Object.defineProperty({__proto__:null,Demo:h,WithSuggestions:g,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{Ae as A};

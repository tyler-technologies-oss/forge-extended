import{r as E,i as T,x as n}from"./iframe-Cq-laB_0.js";import{I as D,t as M,a as P,b as W,c as z,d as R,e as B,f as H}from"./icon-registry-QJlQPQoC.js";import{t as N}from"./custom-element-BhZVzxrc.js";import{n as C}from"./property-DdMMxwFm.js";import{n as _,e as v}from"./ref-DHtN6YBV.js";import{n as q}from"./when-3fO0zp9C.js";import{d as L}from"./ai-sidebar-Bg_0GnmN.js";import"./ai-chat-interface-B4QexkZg.js";import"./ai-modal-CFLYMSIS.js";import"./ai-user-message-CQPL8Dcz.js";import"./ai-response-message-BzoKWm9m.js";import"./ai-suggestions-DaaJ7k86.js";import"./ai-button-CvDgtmaA.js";import{d as F}from"./index-B56P8DrO.js";import{d as G}from"./index-D__56Mct.js";import{d as K}from"./index-Cb4d6jIT.js";const U=":host{display:block;height:100%}";var Y=Object.defineProperty,j=Object.getOwnPropertyDescriptor,w=e=>{throw TypeError(e)},x=(e,a,o,d)=>{for(var r=d>1?void 0:d?j(a,o):a,p=e.length-1,l;p>=0;p--)(l=e[p])&&(r=(d?l(a,o,r):l(r))||r);return d&&r&&Y(a,o,r),r},$=(e,a,o)=>a.has(e)||w("Cannot "+o),f=(e,a,o)=>($(e,a,"read from private field"),o?o.call(e):a.get(e)),g=(e,a,o)=>a.has(e)?w("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,o),s=(e,a,o)=>($(e,a,"access private method"),o),u,b,t,y,I,S,A,O,k,i;const J="forge-ai-sidebar-chat";let c=class extends T{constructor(){super(...arguments),g(this,t),this.open=!1,this.expanded=!1,g(this,u,v()),g(this,b,v())}render(){return n`
      ${q(this.expanded,()=>n`
          <forge-ai-modal
            ${_(f(this,b))}
            ?open=${this.open&&this.expanded}
            @forge-ai-modal-close=${s(this,t,k)}>
            ${f(this,t,y)}
          </forge-ai-modal>
        `,()=>n`
          <forge-ai-sidebar
            ${_(f(this,u))}
            ?open=${this.open&&!this.expanded}
            @forge-ai-sidebar-open=${s(this,t,I)}
            @forge-ai-sidebar-close=${s(this,t,S)}>
            ${f(this,t,y)}
          </forge-ai-sidebar>
        `)}
    `}show(){this.open=!0,s(this,t,i).call(this,"forge-ai-sidebar-chat-open")}close(){this.expanded&&(this.expanded=!1,s(this,t,i).call(this,"forge-ai-sidebar-chat-collapse")),this.open=!1,s(this,t,i).call(this,"forge-ai-sidebar-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,s(this,t,i).call(this,"forge-ai-sidebar-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,s(this,t,i).call(this,"forge-ai-sidebar-chat-collapse"))}};u=new WeakMap;b=new WeakMap;t=new WeakSet;y=function(){return n`
      <forge-ai-chat-interface
        show-expand-button
        ?show-minimize-button=${!this.expanded}
        minimize-icon=${this.expanded?"default":"panel"}
        ?expanded=${this.expanded}
        @forge-ai-chat-header-expand=${s(this,t,A)}
        @forge-ai-chat-header-minimize=${s(this,t,O)}>
        <slot></slot>
        <slot name="suggestions" slot="suggestions"></slot>
        <slot name="prompt" slot="prompt"></slot>
      </forge-ai-chat-interface>
    `};I=function(){this.open=!0,s(this,t,i).call(this,"forge-ai-sidebar-chat-open")};S=function(){this.open=!1,s(this,t,i).call(this,"forge-ai-sidebar-chat-close")};A=function(){this.expanded=!this.expanded,this.expanded?s(this,t,i).call(this,"forge-ai-sidebar-chat-expand"):s(this,t,i).call(this,"forge-ai-sidebar-chat-collapse")};O=function(){this.close()};k=function(){this.expanded&&this.collapse()};i=function(e){const a=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(a)};c.styles=E(U);x([C({type:Boolean})],c.prototype,"open",2);x([C({type:Boolean})],c.prototype,"expanded",2);c=x([N(J)],c);const{action:m}=__STORYBOOK_MODULE_ACTIONS__;L();G();K();F();D.define([M,P,W,z,R,B,H]);const Q="forge-ai-sidebar-chat",V={title:"AI/Form Factors/Sidebar",component:Q,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the sidebar chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded modal state"}},args:{open:!0,expanded:!1},render:e=>{const a=m("forge-ai-sidebar-chat-open"),o=m("forge-ai-sidebar-chat-close"),d=m("forge-ai-sidebar-chat-expand"),r=m("forge-ai-sidebar-chat-collapse"),p=n`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        @forge-ai-sidebar-chat-open=${a}
        @forge-ai-sidebar-chat-close=${o}
        @forge-ai-sidebar-chat-expand=${d}
        @forge-ai-sidebar-chat-collapse=${r}>
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
      </forge-ai-sidebar-chat>
    `;return n`
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

        ${e.position==="left"?n`<div slot="body-left">${p}</div>`:n`<div slot="body-right">${p}</div>`}
      </forge-scaffold>
    `}},h={};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};const X=["Demo"],ge=Object.freeze(Object.defineProperty({__proto__:null,Demo:h,__namedExportsOrder:X,default:V},Symbol.toStringTag,{value:"Module"}));export{ge as A};

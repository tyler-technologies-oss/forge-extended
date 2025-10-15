import{r as F,i as I,x as r}from"./iframe-BKP6vMqB.js";import{t as A}from"./custom-element-BhZVzxrc.js";import{n as y}from"./property-DMmDRPg7.js";import{r as E}from"./state-DNA7nhOl.js";import{n as T,e as k}from"./ref-Wo6yvqT5.js";import"./ai-dialog-BHrHEGTo.js";import"./ai-chat-interface-BpNlovbV.js";import"./ai-prompt-8bWsQO20.js";import"./ai-dropdown-menu-DwWfn4v7.js";import"./ai-voice-input-Cvr69brK.js";import"./ai-user-message-BwotdKMT.js";import"./ai-response-message-P4zO-BQu.js";import"./ai-fab-CdZgvf0w.js";import"./ai-suggestions-BreXheYA.js";import{I as H,t as z,b as P}from"./icon-registry-FyA6-By-.js";import{d as D}from"./index-CpBQAsUS.js";import{d as O}from"./index-DSA-pCzY.js";import{d as W}from"./index-Bnmpiz6z.js";const q=":host{display:block}";var B=Object.defineProperty,G=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},f=(e,t,o,l)=>{for(var s=l>1?void 0:l?G(t,o):t,u=e.length-1,m;u>=0;u--)(m=e[u])&&(s=(l?m(t,o,s):m(s))||s);return l&&s&&B(t,o,s),s},w=(e,t,o)=>t.has(e)||v("Cannot "+o),h=(e,t,o)=>(w(e,t,"read from private field"),o?o.call(e):t.get(e)),x=(e,t,o)=>t.has(e)?v("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),a=(e,t,o)=>(w(e,t,"access private method"),o),p,n,_,$,b,C,i;const M="forge-ai-floating-chat";let c=class extends I{constructor(){super(...arguments),x(this,n),this.open=!1,this.expanded=!1,this._isFullscreen=!1,x(this,p,k())}updated(){h(this,p).value&&this._isFullscreen!==h(this,p).value.isFullscreen&&(this._isFullscreen=h(this,p).value.isFullscreen)}render(){return r`
      <forge-ai-dialog
        ${T(h(this,p))}
        ?open=${this.open}
        ?expanded=${this.expanded}
        @forge-ai-dialog-fullscreen-change=${a(this,n,_)}
        @forge-ai-dialog-close=${a(this,n,C)}>
        <forge-ai-chat-interface
          ?show-expand-button=${!this._isFullscreen}
          show-minimize-button
          minimize-icon="default"
          ?expanded=${this.expanded}
          @forge-ai-chat-header-expand=${a(this,n,$)}
          @forge-ai-chat-header-minimize=${a(this,n,b)}>
          <slot></slot>
          <slot name="suggestions" slot="suggestions"></slot>
          <slot name="prompt" slot="prompt"></slot>
        </forge-ai-chat-interface>
      </forge-ai-dialog>
    `}show(){this.open=!0,a(this,n,i).call(this,"forge-ai-floating-chat-open")}close(){this.expanded&&(this.expanded=!1,a(this,n,i).call(this,"forge-ai-floating-chat-collapse")),this.open=!1,a(this,n,i).call(this,"forge-ai-floating-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,a(this,n,i).call(this,"forge-ai-floating-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,a(this,n,i).call(this,"forge-ai-floating-chat-collapse"))}};p=new WeakMap;n=new WeakSet;_=function(e){this._isFullscreen=e.detail.isFullscreen};$=function(){this.expanded=!this.expanded,this.expanded?a(this,n,i).call(this,"forge-ai-floating-chat-expand"):a(this,n,i).call(this,"forge-ai-floating-chat-collapse")};b=function(){this.close()};C=function(){this.open&&this.close()};i=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};c.styles=F(q);f([y({type:Boolean})],c.prototype,"open",2);f([y({type:Boolean})],c.prototype,"expanded",2);f([E()],c.prototype,"_isFullscreen",2);c=f([A(M)],c);const R="forge-ai-floating-chat";D();O();W();H.define([z,P]);const S=()=>r`
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
      <forge-ai-voice-input slot="actions" @forge-ai-voice-input-result=${t=>{const o=document.querySelector("forge-ai-prompt");o&&(o.value=t.detail.transcript)}}></forge-ai-voice-input>
    </forge-ai-prompt>
  `,V={title:"AI/Form Factors/Floating",component:R,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:e=>{const t=r`
      <forge-ai-floating-chat ?open=${e.open} ?expanded=${e.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        ${S()}
      </forge-ai-floating-chat>
    `,o=r`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
      </forge-ai-fab>
    `;return r`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat Demo (Form Factor Component)</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This demo shows the structured form factor component that handles composition automatically.</p>
        </div>
        ${o} ${t}
      </div>
    `}},g={},d={render:e=>{const t=[{text:"Can you show me an example?",value:"example"},{text:"How do I use generics with interfaces?",value:"interfaces"},{text:"What are the benefits of generics?",value:"benefits"},{text:"How do I constrain generic types?",value:"constraints"}],o=r`
      <forge-ai-floating-chat ?open=${e.open} ?expanded=${e.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>

        <forge-ai-suggestions
          slot="suggestions"
          .suggestions=${t}
          @forge-ai-suggestions-select=${s=>{console.log("Selected suggestion:",s.detail)}}>
        </forge-ai-suggestions>
        ${S()}
      </forge-ai-floating-chat>
    `,l=r`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
      </forge-ai-fab>
    `;return r`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Suggestions</h2>
          <p>This example shows how to slot in suggestions to the chat interface.</p>
        </div>
        ${l} ${o}
      </div>
    `}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const suggestions = [{
      text: 'Can you show me an example?',
      value: 'example'
    }, {
      text: 'How do I use generics with interfaces?',
      value: 'interfaces'
    }, {
      text: 'What are the benefits of generics?',
      value: 'benefits'
    }, {
      text: 'How do I constrain generic types?',
      value: 'constraints'
    }] as Suggestion[];
    const chat = html\`
      <forge-ai-floating-chat ?open=\${args.open} ?expanded=\${args.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>

        <forge-ai-suggestions
          slot="suggestions"
          .suggestions=\${suggestions}
          @forge-ai-suggestions-select=\${(event: CustomEvent) => {
      console.log('Selected suggestion:', event.detail);
    }}>
        </forge-ai-suggestions>
        \${createPrompt()}
      </forge-ai-floating-chat>
    \`;
    const fab = html\`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=\${() => {
      const chatEl = document.querySelector('forge-ai-floating-chat');
      chatEl?.show();
    }}>
      </forge-ai-fab>
    \`;
    return html\`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Suggestions</h2>
          <p>This example shows how to slot in suggestions to the chat interface.</p>
        </div>
        \${fab} \${chat}
      </div>
    \`;
  }
}`,...d.parameters?.docs?.source}}};const N=["Demo","WithSuggestions"],pe=Object.freeze(Object.defineProperty({__proto__:null,Demo:g,WithSuggestions:d,__namedExportsOrder:N,default:V},Symbol.toStringTag,{value:"Module"}));export{pe as A};

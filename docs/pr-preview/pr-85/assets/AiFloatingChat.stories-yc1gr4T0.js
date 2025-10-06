import{r as C,i as F,x as l}from"./iframe-DXI0fxgu.js";import{t as S}from"./custom-element-BhZVzxrc.js";import{n as y}from"./property-BZB03ODX.js";import{r as E}from"./state-B_maRpFC.js";import{n as T,e as A}from"./ref-TV64m27l.js";import"./ai-dialog-NQjUcSEz.js";import"./ai-chat-interface-jCtugYeC.js";import"./ai-user-message-C573xHlp.js";import"./ai-response-message-Qc5VkFoW.js";import"./ai-fab-YFVuCw3T.js";import"./ai-suggestions-BOGUcXZa.js";const I=":host{display:block}";var H=Object.defineProperty,z=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},f=(e,t,o,r)=>{for(var n=r>1?void 0:r?z(t,o):t,u=e.length-1,m;u>=0;u--)(m=e[u])&&(n=(r?m(t,o,n):m(n))||n);return r&&n&&H(t,o,n),n},w=(e,t,o)=>t.has(e)||v("Cannot "+o),d=(e,t,o)=>(w(e,t,"read from private field"),o?o.call(e):t.get(e)),x=(e,t,o)=>t.has(e)?v("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),a=(e,t,o)=>(w(e,t,"access private method"),o),c,s,_,b,$,i;const k="forge-ai-floating-chat";let h=class extends F{constructor(){super(...arguments),x(this,s),this.open=!1,this.expanded=!1,this._isFullscreen=!1,x(this,c,A())}updated(){d(this,c).value&&this._isFullscreen!==d(this,c).value.isFullscreen&&(this._isFullscreen=d(this,c).value.isFullscreen)}render(){return l`
      <forge-ai-dialog
        ${T(d(this,c))}
        ?open=${this.open}
        ?expanded=${this.expanded}
        @forge-ai-dialog-fullscreen-change=${a(this,s,_)}>
        <forge-ai-chat-interface
          ?show-expand-button=${!this._isFullscreen}
          show-minimize-button
          minimize-icon="default"
          ?expanded=${this.expanded}
          @forge-ai-chat-header-expand=${a(this,s,b)}
          @forge-ai-chat-header-minimize=${a(this,s,$)}>
          <slot></slot>
          <slot name="suggestions" slot="suggestions"></slot>
          <slot name="prompt" slot="prompt"></slot>
        </forge-ai-chat-interface>
      </forge-ai-dialog>
    `}show(){this.open=!0,a(this,s,i).call(this,"forge-ai-floating-chat-open")}close(){this.expanded&&(this.expanded=!1,a(this,s,i).call(this,"forge-ai-floating-chat-collapse")),this.open=!1,a(this,s,i).call(this,"forge-ai-floating-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,a(this,s,i).call(this,"forge-ai-floating-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,a(this,s,i).call(this,"forge-ai-floating-chat-collapse"))}};c=new WeakMap;s=new WeakSet;_=function(e){this._isFullscreen=e.detail.isFullscreen};b=function(){this.expanded=!this.expanded,this.expanded?a(this,s,i).call(this,"forge-ai-floating-chat-expand"):a(this,s,i).call(this,"forge-ai-floating-chat-collapse")};$=function(){this.close()};i=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};h.styles=C(I);f([y({type:Boolean})],h.prototype,"open",2);f([y({type:Boolean})],h.prototype,"expanded",2);f([E()],h.prototype,"_isFullscreen",2);h=f([S(k)],h);const O="forge-ai-floating-chat",W={title:"AI/Form Factors/Floating",component:O,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:e=>{const t=l`
      <forge-ai-floating-chat ?open=${e.open} ?expanded=${e.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
      </forge-ai-floating-chat>
    `,o=l`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
      </forge-ai-fab>
    `;return l`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat Demo (Form Factor Component)</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This demo shows the structured form factor component that handles composition automatically.</p>
        </div>
        ${o} ${t}
      </div>
    `}},p={},g={render:e=>{const t=[{text:"Can you show me an example?",value:"example"},{text:"How do I use generics with interfaces?",value:"interfaces"},{text:"What are the benefits of generics?",value:"benefits"},{text:"How do I constrain generic types?",value:"constraints"}],o=l`
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
          @forge-ai-suggestions-select=${n=>{console.log("Selected suggestion:",n.detail)}}>
        </forge-ai-suggestions>
      </forge-ai-floating-chat>
    `,r=l`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
      </forge-ai-fab>
    `;return l`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Suggestions</h2>
          <p>This example shows how to slot in suggestions to the chat interface.</p>
        </div>
        ${r} ${o}
      </div>
    `}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const D=["Demo","WithSuggestions"],Q=Object.freeze(Object.defineProperty({__proto__:null,Demo:p,WithSuggestions:g,__namedExportsOrder:D,default:W},Symbol.toStringTag,{value:"Module"}));export{Q as A};

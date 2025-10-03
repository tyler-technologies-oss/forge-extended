import{r as $,i as S,x as r}from"./iframe-B8HCYLYZ.js";import{t as F}from"./custom-element-BhZVzxrc.js";import{n as y}from"./property-CwN48wq5.js";import{r as E}from"./state-C7s0kWcr.js";import{n as A,e as T}from"./ref-C66exlfc.js";import"./ai-dialog-DWgm9taV.js";import"./ai-chat-interface-Cq-eQ_LP.js";import"./ai-user-message-BDxjwmoK.js";import"./ai-response-message-PDPdJKUQ.js";import"./ai-fab-button-BW7NBN-f.js";const I=":host{display:block}";var k=Object.defineProperty,z=Object.getOwnPropertyDescriptor,w=e=>{throw TypeError(e)},f=(e,t,o,l)=>{for(var i=l>1?void 0:l?z(t,o):t,u=e.length-1,m;u>=0;u--)(m=e[u])&&(i=(l?m(t,o,i):m(i))||i);return l&&i&&k(t,o,i),i},v=(e,t,o)=>t.has(e)||w("Cannot "+o),g=(e,t,o)=>(v(e,t,"read from private field"),o?o.call(e):t.get(e)),x=(e,t,o)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),a=(e,t,o)=>(v(e,t,"access private method"),o),h,n,b,_,C,s;const B="forge-ai-floating-chat";let p=class extends S{constructor(){super(...arguments),x(this,n),this.open=!1,this.expanded=!1,this._isFullscreen=!1,x(this,h,T())}updated(){g(this,h).value&&this._isFullscreen!==g(this,h).value.isFullscreen&&(this._isFullscreen=g(this,h).value.isFullscreen)}render(){return r`
      <forge-ai-dialog
        ${A(g(this,h))}
        ?open=${this.open}
        ?expanded=${this.expanded}
        @forge-ai-dialog-fullscreen-change=${a(this,n,b)}>
        <forge-ai-chat-interface
          ?show-expand-button=${!this._isFullscreen}
          show-minimize-button
          ?expanded=${this.expanded}
          @forge-ai-chat-header-expand=${a(this,n,_)}
          @forge-ai-chat-header-minimize=${a(this,n,C)}>
          <slot></slot>
          <slot name="suggestions" slot="suggestions"></slot>
          <slot name="prompt" slot="prompt"></slot>
        </forge-ai-chat-interface>
      </forge-ai-dialog>
    `}show(){this.open=!0,a(this,n,s).call(this,"forge-ai-floating-chat-open")}close(){this.expanded&&(this.expanded=!1,a(this,n,s).call(this,"forge-ai-floating-chat-collapse")),this.open=!1,a(this,n,s).call(this,"forge-ai-floating-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,a(this,n,s).call(this,"forge-ai-floating-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,a(this,n,s).call(this,"forge-ai-floating-chat-collapse"))}};h=new WeakMap;n=new WeakSet;b=function(e){this._isFullscreen=e.detail.isFullscreen};_=function(){this.expanded=!this.expanded,this.expanded?a(this,n,s).call(this,"forge-ai-floating-chat-expand"):a(this,n,s).call(this,"forge-ai-floating-chat-collapse")};C=function(){this.close()};s=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};p.styles=$(I);f([y({type:Boolean})],p.prototype,"open",2);f([y({type:Boolean})],p.prototype,"expanded",2);f([E()],p.prototype,"_isFullscreen",2);p=f([F(B)],p);const H="forge-ai-floating-chat",O={title:"AI/AI Floating Chat",component:H,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:e=>{const t=r`
      <forge-ai-floating-chat ?open=${e.open} ?expanded=${e.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
      </forge-ai-floating-chat>
    `,o=r`
      <forge-ai-fab-button
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
      </forge-ai-fab-button>
    `;return r`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat Demo (Form Factor Component)</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This demo shows the structured form factor component that handles composition automatically.</p>
        </div>
        ${o} ${t}
      </div>
    `}},c={},d={render:e=>{const t=r`
      <forge-ai-floating-chat ?open=${e.open} ?expanded=${e.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>

        <!-- Example of slotting suggestions - this would be an actual ai-suggestions component -->
        <div slot="suggestions" style="padding: 16px; background: #f5f5f5; border-radius: 8px; margin: 8px;">
          <strong>Suggested follow-ups:</strong>
          <ul>
            <li>Can you show me an example?</li>
            <li>How do I use generics with interfaces?</li>
            <li>What are the benefits of generics?</li>
          </ul>
        </div>
      </forge-ai-floating-chat>
    `,o=r`
      <forge-ai-fab-button
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
      </forge-ai-fab-button>
    `;return r`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Suggestions</h2>
          <p>This example shows how to slot in suggestions to the chat interface.</p>
        </div>
        ${o} ${t}
      </div>
    `}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const chat = html\`
      <forge-ai-floating-chat ?open=\${args.open} ?expanded=\${args.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>

        <!-- Example of slotting suggestions - this would be an actual ai-suggestions component -->
        <div slot="suggestions" style="padding: 16px; background: #f5f5f5; border-radius: 8px; margin: 8px;">
          <strong>Suggested follow-ups:</strong>
          <ul>
            <li>Can you show me an example?</li>
            <li>How do I use generics with interfaces?</li>
            <li>What are the benefits of generics?</li>
          </ul>
        </div>
      </forge-ai-floating-chat>
    \`;
    const fabButton = html\`
      <forge-ai-fab-button
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=\${() => {
      const chatEl = document.querySelector('forge-ai-floating-chat');
      chatEl?.show();
    }}>
      </forge-ai-fab-button>
    \`;
    return html\`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Suggestions</h2>
          <p>This example shows how to slot in suggestions to the chat interface.</p>
        </div>
        \${fabButton} \${chat}
      </div>
    \`;
  }
}`,...d.parameters?.docs?.source}}};const W=["Demo","WithSuggestions"],L=Object.freeze(Object.defineProperty({__proto__:null,Demo:c,WithSuggestions:d,__namedExportsOrder:W,default:O},Symbol.toStringTag,{value:"Module"}));export{L as A};

import{x as t}from"./iframe-Dd8pSn9E.js";import"./ai-dialog-bfUUSb0B.js";import"./ai-chat-interface-C1fFXH_l.js";import"./ai-user-message-D-EoHcTD.js";import"./ai-response-message-BazWVpVW.js";import"./ai-fab-9kORg8lb.js";import"./custom-element-BhZVzxrc.js";import"./property-BGv0PVOX.js";import"./state-ClWvTgLN.js";import"./when-3fO0zp9C.js";import"./ref-CTkuqqQn.js";import"./directive-CJw_OlP2.js";import"./ai-modal-BQ-6sd7b.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-fNGf_NuJ.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-BCjc20_A.js";import"./ai-icon-KDU7teiw.js";import"./ai-gradient-container-D_G__XTg.js";import"./utils-DDUGSWJu.js";import"./ai-prompt-DH9PeHz2.js";import"./index-5gCMUPyE.js";import"./base-adapter-CwqK-YEQ.js";import"./base-button-adapter-qsJbDomH.js";import"./icon-registry-m82pY_3b.js";import"./with-default-aria-DN9qROpx.js";import"./index-4GOAI1ui.js";import"./base-lit-element-Gl3Dw8Uy.js";import"./index-C4BVbhFC.js";import"./field-8lyAorty.js";import"./index-BQa5tnXp.js";import"./ai-empty-state-Bu4IJfwC.js";import"./ai-actions-toolbar-C__YSBqH.js";const d="forge-ai-dialog",J={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},p=t`
      <forge-ai-dialog ?open=${i.open} ?expanded=${i.expanded}>
        <forge-ai-chat-interface
          ?show-expand-button=${window.innerWidth>768}
          show-minimize-button
          ?expanded=${i.expanded}
          @forge-ai-chat-header-expand=${r}
          @forge-ai-chat-header-minimize=${a}>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
        </forge-ai-chat-interface>
      </forge-ai-dialog>
    `,n=t`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-dialog")?.show()}}>
      </forge-ai-fab>
    `;return t`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Dialog Demo (Atomic Composition)</h2>
          <p>Click the FAB in the bottom right corner to open the AI dialog.</p>
          <p>This demo shows manual composition of ai-dialog + ai-chat-interface components.</p>
        </div>
        ${n} ${p}
      </div>
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const K=["Demo"];export{o as Demo,K as __namedExportsOrder,J as default};

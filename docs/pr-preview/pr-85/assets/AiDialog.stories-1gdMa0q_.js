import{x as t}from"./iframe-d8dyRKJg.js";import"./ai-dialog-D5CbjESm.js";import"./ai-chat-interface-GfpyFNj5.js";import"./ai-user-message-Bt8Hm18g.js";import"./ai-response-message-C2TiNLnb.js";import"./ai-fab-B8NiXHf7.js";import"./custom-element-BhZVzxrc.js";import"./property-DloEdEuy.js";import"./state-BqB5MmGu.js";import"./when-3fO0zp9C.js";import"./ref-BNi6phE2.js";import"./directive-CJw_OlP2.js";import"./ai-modal-B5Gk6y1p.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-CbuwaRHw.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-CSOLXF6n.js";import"./ai-icon-Bih32UvF.js";import"./ai-gradient-container-wDzWnWUc.js";import"./utils-DDUGSWJu.js";import"./ai-prompt-bG3i2w6A.js";import"./index-BExBuWC7.js";import"./base-adapter-B3e4aYrO.js";import"./base-button-adapter-CODzAMYV.js";import"./icon-registry-BYS8A_J0.js";import"./with-default-aria-cjO803a3.js";import"./index-BF_LzNd4.js";import"./base-lit-element-C48hIik0.js";import"./index-w46BELLb.js";import"./field-BDZwiW1R.js";import"./index-CQ39xxkc.js";import"./ai-empty-state-CKTtKXR4.js";import"./ai-actions-toolbar-ichdJza3.js";const d="forge-ai-dialog",J={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},p=t`
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

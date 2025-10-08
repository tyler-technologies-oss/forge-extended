import{x as t}from"./iframe-D_XhDUsg.js";import"./ai-dialog-eEP7TTbd.js";import"./ai-chat-interface-DMdPKe38.js";import"./ai-user-message-DQ4wgCQq.js";import"./ai-response-message-D3nRtKSf.js";import"./ai-fab-DSa8aWZT.js";import"./custom-element-BhZVzxrc.js";import"./property-DGDvsIWm.js";import"./state-BFAo9SZm.js";import"./when-3fO0zp9C.js";import"./ref-zi1h13Ew.js";import"./directive-CJw_OlP2.js";import"./ai-modal-BdxGizts.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-CMfJCNWQ.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-BsjJmytT.js";import"./ai-icon-CyZwcqPS.js";import"./ai-gradient-container-CoiDIBaH.js";import"./utils-DDUGSWJu.js";import"./ai-prompt-BGt2HXGj.js";import"./index-BSH468Z4.js";import"./base-adapter-BzHQQl_e.js";import"./base-button-adapter-BTDpQhbm.js";import"./icon-registry-u4chsTOu.js";import"./with-default-aria-BYyFobwe.js";import"./index-DDGvxu7o.js";import"./base-lit-element-DEMGLHVB.js";import"./index-CYfhhGZX.js";import"./field-PRIZ24YI.js";import"./index-BZmEkJJe.js";import"./ai-empty-state-Csyz9Aon.js";import"./ai-actions-toolbar-jamiKWjq.js";const d="forge-ai-dialog",J={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},p=t`
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

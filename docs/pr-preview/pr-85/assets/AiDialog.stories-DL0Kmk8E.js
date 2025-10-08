import{x as t}from"./iframe-CjPB-dwZ.js";import"./ai-dialog-hbo46uff.js";import"./ai-chat-interface-JzYRrz0U.js";import"./ai-user-message-DALSWGc0.js";import"./ai-response-message-Bjx98CW2.js";import"./ai-fab-D8anGYNW.js";import"./custom-element-BhZVzxrc.js";import"./property-D0VSlw0I.js";import"./state-54fWD5oK.js";import"./when-3fO0zp9C.js";import"./ref-CaK6QFRL.js";import"./directive-CJw_OlP2.js";import"./ai-modal-CW_SJygI.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-BDXGejSa.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-Cnr6uVOK.js";import"./ai-icon-Yrgvb00M.js";import"./ai-gradient-container-Beu71n03.js";import"./utils-DDUGSWJu.js";import"./ai-prompt-CicFmr1M.js";import"./index-BrPPItID.js";import"./base-adapter-DOfyHE6h.js";import"./base-button-adapter-CzG5QKc1.js";import"./icon-registry-BCb_k_Et.js";import"./with-default-aria-Df1bqzUf.js";import"./index-Hrc1geTV.js";import"./base-lit-element-Dr0RJnU5.js";import"./index-Co5KFW2K.js";import"./field-D8KhFCVs.js";import"./index-Cfa9dMRV.js";import"./ai-empty-state-pgBsBdUs.js";import"./ai-actions-toolbar-QqkTj6YZ.js";const d="forge-ai-dialog",J={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},p=t`
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

import{x as t}from"./iframe-oo3gq0gB.js";import"./ai-dialog-D2ZFlb9i.js";import"./ai-chat-interface-BnpgXXXK.js";import"./ai-user-message-rp8F6aDN.js";import"./ai-response-message-BjgJKY1B.js";import"./ai-fab-Bvc0sbwW.js";import"./custom-element-BhZVzxrc.js";import"./property-qjL_MqpK.js";import"./state-DaHhxsOI.js";import"./when-3fO0zp9C.js";import"./ref-Dq8sd1Vm.js";import"./directive-CJw_OlP2.js";import"./ai-modal-BNdD0sYm.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-DjH3IxeN.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-BP7_vUOF.js";import"./ai-icon-CHFXfwdV.js";import"./ai-gradient-container-CrExx4t4.js";import"./utils-DDUGSWJu.js";import"./ai-prompt-CnRThisX.js";import"./index-yD3GdNKq.js";import"./base-adapter-CZG6Cxhu.js";import"./base-button-adapter-C_NgB0cN.js";import"./icon-registry-BxN0BCHC.js";import"./with-default-aria-DMEZJxS1.js";import"./index-CtOOksbv.js";import"./base-lit-element-5BQnnoZ4.js";import"./index-zZWURbop.js";import"./field-BK_wtUyO.js";import"./index-cVhqK8Hw.js";import"./ai-empty-state-D9v6-m4u.js";import"./ai-actions-toolbar-zxbe41pg.js";const d="forge-ai-dialog",J={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},p=t`
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

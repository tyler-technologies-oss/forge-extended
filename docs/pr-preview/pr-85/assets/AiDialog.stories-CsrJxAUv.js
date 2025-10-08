import{x as t}from"./iframe-BnpUnHSo.js";import"./ai-dialog-A48mO680.js";import"./ai-chat-interface-B2U5Zi-O.js";import"./ai-user-message-Cip7x6Rf.js";import"./ai-response-message-CU4pxSoa.js";import"./ai-fab-cquYdmRY.js";import"./custom-element-BhZVzxrc.js";import"./property-DTQCPcIE.js";import"./state-B2EQTvMr.js";import"./when-3fO0zp9C.js";import"./ref-dWZAPPgX.js";import"./directive-CJw_OlP2.js";import"./ai-modal-Dn9fdqx_.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-WK3a9w7Z.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-D3G2jHdo.js";import"./ai-icon-DFGqKqE7.js";import"./ai-gradient-container-sZQLtSRG.js";import"./utils-DDUGSWJu.js";import"./ai-prompt-C1NzNykN.js";import"./index-D2GImMmx.js";import"./base-adapter-lXQVMoo0.js";import"./base-button-adapter-DFcHPbWl.js";import"./icon-registry-BNnTIaNc.js";import"./with-default-aria-Cx6kW1xn.js";import"./index-BXaYWnL1.js";import"./base-lit-element-A1MQsjX0.js";import"./index-CIByvGau.js";import"./field-CL3Q_v9o.js";import"./index-BZdQ-yLZ.js";import"./ai-empty-state-D3BkaTTW.js";import"./ai-actions-toolbar-CgB7HYk7.js";const d="forge-ai-dialog",J={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},p=t`
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

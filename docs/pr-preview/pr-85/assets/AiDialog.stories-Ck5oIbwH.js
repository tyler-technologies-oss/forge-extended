import{x as t}from"./iframe-CarCfk16.js";import"./ai-dialog-DPf7cLGp.js";import"./ai-chat-interface-BKPEEHaf.js";import"./ai-user-message-DLB0fvkR.js";import"./ai-response-message-CMiLmIed.js";import"./ai-fab-DJckyxAw.js";import"./custom-element-BhZVzxrc.js";import"./property-98MJxy1E.js";import"./state-Dcu9EROo.js";import"./when-3fO0zp9C.js";import"./ref-2A8UpWPb.js";import"./directive-CJw_OlP2.js";import"./ai-modal-8FMoJsdV.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-Bx6NC_zK.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-Cs415a1q.js";import"./ai-icon-BR9ttNUU.js";import"./ai-gradient-container-DgB-XI3Q.js";import"./utils-DDUGSWJu.js";import"./ai-prompt-DgqrhKhH.js";import"./index-B4Wxc_7B.js";import"./base-adapter-R2d8Nzv6.js";import"./base-button-adapter-kdxZaZ4Z.js";import"./icon-registry-B_ngAAKs.js";import"./with-default-aria-C1DEjm_H.js";import"./index-BloNZNwr.js";import"./base-lit-element-DXem8R_4.js";import"./index-DIBgCv4k.js";import"./field-cLT2wgf8.js";import"./index-D4jTCCJf.js";import"./ai-empty-state-DzYIUWkt.js";import"./ai-actions-toolbar-DHmRUAiL.js";const d="forge-ai-dialog",J={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},p=t`
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

import{x as t}from"./iframe-BD_Clzv8.js";import"./ai-dialog-AFecp7X8.js";import"./ai-chat-interface-CzSilqj5.js";import"./ai-user-message-2J0ocYKq.js";import"./ai-response-message-s_tFVEel.js";import"./ai-fab-button-O7xQtjqV.js";import"./custom-element-BhZVzxrc.js";import"./property-BuRkmpuX.js";import"./state-BI0ZEGaT.js";import"./when-3fO0zp9C.js";import"./ref-CYnz7duC.js";import"./ai-modal-B0_4miaQ.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-Bj6xRJTt.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-D5z0tusZ.js";import"./ai-icon-Bx_xs73U.js";import"./ai-gradient-container-D2gbnkrn.js";import"./utils-Oij4eZxH.js";import"./ai-prompt-DPY6QNv6.js";import"./index-DBO9Pwfj.js";import"./with-default-aria-DXJN7MmX.js";import"./icon-registry-DhHk0F5O.js";import"./base-button-adapter-B9AnzIzl.js";import"./index-Bchl6gKw.js";import"./field-1uwz_Xm8.js";import"./index-BR-JExgz.js";import"./base-lit-element-BcgrpH-X.js";import"./index-CzcHgMRo.js";import"./ai-empty-state-DidCNIoZ.js";import"./ai-actions-toolbar-BsGb1Chz.js";const d="forge-ai-dialog",j={title:"AI/AI Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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
    `,p=t`
      <forge-ai-fab-button
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-dialog")?.show()}}>
      </forge-ai-fab-button>
    `;return t`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Dialog Demo (Atomic Composition)</h2>
          <p>Click the FAB in the bottom right corner to open the AI dialog.</p>
          <p>This demo shows manual composition of ai-dialog + ai-chat-interface components.</p>
        </div>
        ${p} ${n}
      </div>
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const J=["Demo"];export{o as Demo,J as __namedExportsOrder,j as default};

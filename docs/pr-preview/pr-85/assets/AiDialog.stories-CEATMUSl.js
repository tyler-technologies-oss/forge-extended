import{x as t}from"./iframe-DDeWaA84.js";import"./ai-dialog-Bn8B7-Ey.js";import"./ai-chat-interface-BKLkjOlr.js";import"./ai-user-message-C_HXsQdF.js";import"./ai-response-message-BVMVTftl.js";import"./ai-fab-button-KkHfh8sX.js";import"./custom-element-BhZVzxrc.js";import"./property-Dj9jyCh7.js";import"./state-9Nr5MEEs.js";import"./when-3fO0zp9C.js";import"./ref-BsDqFqFE.js";import"./ai-modal-Be-I5cMT.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-C2lTcOt9.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-BOmCKaaa.js";import"./ai-icon-eAwbBhJn.js";import"./ai-gradient-container-Db8njLF2.js";import"./utils-Oij4eZxH.js";import"./ai-prompt-Cq4_wTrZ.js";import"./index-fbVt2r5N.js";import"./with-default-aria-C2VCde96.js";import"./icon-registry-CCLlBm1u.js";import"./base-button-adapter-zmZMz4NS.js";import"./index-DvcJH9xH.js";import"./field-BO4gN2ab.js";import"./index-C_83Uv7h.js";import"./base-lit-element-OcDc9Lum.js";import"./index-CRm_Oroc.js";import"./ai-empty-state-9Jv5-i7M.js";import"./ai-actions-toolbar-B2AK1DfN.js";const d="forge-ai-dialog",j={title:"AI/AI Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

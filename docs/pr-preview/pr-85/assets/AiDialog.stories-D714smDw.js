import{x as t}from"./iframe-B9SldSw0.js";import"./ai-dialog-COmxTRvH.js";import"./ai-chat-interface-CFgE8j_R.js";import"./ai-user-message-BAVMLiRw.js";import"./ai-response-message-dHul0ple.js";import"./ai-fab-button-cRagSnvq.js";import"./custom-element-BhZVzxrc.js";import"./property-BF1lasvL.js";import"./state-BTBH9Nxf.js";import"./when-3fO0zp9C.js";import"./ref-DFLdTjEX.js";import"./ai-modal-P-wtYrxq.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-CWdHn5hG.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-DzAxzCIO.js";import"./ai-icon-BDy4bXT2.js";import"./ai-gradient-container-DiU7t4-O.js";import"./utils-Oij4eZxH.js";import"./ai-prompt-jd9YYV2b.js";import"./index-BO_gMVMs.js";import"./with-default-aria-BI4PMkAh.js";import"./icon-registry-Gob9ytyL.js";import"./base-button-adapter-Cpu3tlGe.js";import"./index-DwhAUK4s.js";import"./field-hHPB3hDH.js";import"./index-DWRO7HIt.js";import"./base-lit-element-CGs45k_K.js";import"./index-_MgxAYVP.js";import"./ai-empty-state-DRpNNWA3.js";import"./ai-actions-toolbar-B_yhQDgd.js";const d="forge-ai-dialog",j={title:"AI/AI Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

import{x as t}from"./iframe-GUQN7YWx.js";import"./ai-dialog-DyFcQAzN.js";import"./ai-chat-interface-9hHa0EeM.js";import"./ai-user-message-DD1VD63u.js";import"./ai-response-message-CF2H8Qkx.js";import"./ai-fab-button-CJ-dprma.js";import"./custom-element-BhZVzxrc.js";import"./property-Dso-ncKy.js";import"./state-D1LR_0ma.js";import"./when-3fO0zp9C.js";import"./ref-CtlzXo0m.js";import"./ai-modal-CIcKydWA.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-Ceof_vLj.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-CeDtXkDg.js";import"./ai-icon-HX8OJjHq.js";import"./ai-gradient-container-tNpEqbDC.js";import"./utils-Oij4eZxH.js";import"./ai-prompt-bHJocN4g.js";import"./index-BDr9rU_X.js";import"./with-default-aria-DU_n6zLD.js";import"./icon-registry-Y637Cc_x.js";import"./base-button-adapter-eTtVP5xz.js";import"./index-huSmnae_.js";import"./field-F_MUKVD0.js";import"./index-B9b4IjAu.js";import"./base-lit-element-Dwtw0e5e.js";import"./index-CgxM0RgT.js";import"./ai-empty-state-Dxtgckg3.js";import"./ai-actions-toolbar-Dq7NNl8A.js";const d="forge-ai-dialog",j={title:"AI/AI Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

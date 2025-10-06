import{x as t}from"./iframe-CqgrWrfc.js";import"./ai-dialog-C6ZBM6wh.js";import"./ai-chat-interface-CAqDebQr.js";import"./ai-user-message-DBRgSnMP.js";import"./ai-response-message-BSG_UMm2.js";import"./ai-fab-button-CBTq5yMm.js";import"./custom-element-BhZVzxrc.js";import"./property-DndCsNgS.js";import"./state-Bd10CThO.js";import"./when-3fO0zp9C.js";import"./ref-BuVJUlWQ.js";import"./ai-modal-BtOqY90V.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-8madJlTP.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-D_V-LDYL.js";import"./ai-icon-if4iDdWM.js";import"./ai-gradient-container-KH9Dqxum.js";import"./utils-Oij4eZxH.js";import"./ai-prompt-CNqMLU2e.js";import"./index-BiPPR6rA.js";import"./with-default-aria-DpaTsUTa.js";import"./icon-registry-RMT8RpfV.js";import"./base-button-adapter-CcaBxXAO.js";import"./index-BUpIolkW.js";import"./field-C_bVsRlD.js";import"./index-Bf3jX6dJ.js";import"./base-lit-element-C6fQut-t.js";import"./index-DQHjeTgz.js";import"./ai-empty-state-sUUgRkIy.js";import"./ai-actions-toolbar-CMNw1Iuw.js";const d="forge-ai-dialog",j={title:"AI/AI Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

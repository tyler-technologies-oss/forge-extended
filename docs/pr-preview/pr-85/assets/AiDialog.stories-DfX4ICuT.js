import{x as t}from"./iframe-BSSn60lo.js";import"./ai-dialog-BX2LmWx-.js";import"./ai-chat-interface-O3HtUQSx.js";import"./ai-user-message-BzFpZvR1.js";import"./ai-response-message-BGTfllt9.js";import"./ai-fab-CNJSZ_Rf.js";import"./custom-element-BhZVzxrc.js";import"./property-Dphg065k.js";import"./state-1OwxES6Q.js";import"./when-3fO0zp9C.js";import"./ref-CgPGgmgp.js";import"./directive-CJw_OlP2.js";import"./ai-modal-sWKwnz6z.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-Dx3cZZux.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-Bj6TrKNm.js";import"./ai-icon-D-68gaxJ.js";import"./ai-gradient-container-BVABLN8q.js";import"./utils-DDUGSWJu.js";import"./ai-prompt-Bw8Lq2C0.js";import"./index-BFK0vbhe.js";import"./base-adapter-BcfXthUc.js";import"./base-button-adapter-X48OU3BA.js";import"./icon-registry-Cnqmm39J.js";import"./with-default-aria-CyPWr3-8.js";import"./index-xk1I0I2o.js";import"./base-lit-element-CTgRKhwp.js";import"./index-Cx7N7bc6.js";import"./field-CqFQ4mbc.js";import"./index-Cb5c61DV.js";import"./ai-empty-state-CmqgSXxA.js";import"./ai-actions-toolbar-vPH6ZLY1.js";const d="forge-ai-dialog",J={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},p=t`
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

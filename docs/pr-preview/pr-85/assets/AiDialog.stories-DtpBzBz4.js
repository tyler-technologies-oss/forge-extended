import{x as t}from"./iframe-DgB3omVC.js";import"./ai-dialog-uDgYaHue.js";import"./ai-chat-interface-DYUb75cs.js";import"./ai-user-message-nVENFmZ3.js";import"./ai-response-message-B4tTkR8i.js";import"./ai-fab-CbITEYm6.js";import"./custom-element-BhZVzxrc.js";import"./property-DMwPPnOv.js";import"./state-vNP1Z6LS.js";import"./when-3fO0zp9C.js";import"./ref-BqMuLWlQ.js";import"./directive-CJw_OlP2.js";import"./ai-modal-BqpaZJii.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-CpXUOzHt.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-DIvzp5xy.js";import"./ai-icon-Dpq7Gu7h.js";import"./ai-gradient-container-BXjkZowv.js";import"./utils-Bn45QkHx.js";import"./ai-prompt-BWBzRF7P.js";import"./index-Cv1sM1_R.js";import"./with-default-aria-BiuBmGh4.js";import"./icon-registry-DgpUaihG.js";import"./base-button-adapter-jMgdmI7H.js";import"./index-CPJ-sqtb.js";import"./base-lit-element--NFbynm4.js";import"./index-Bfrn15X5.js";import"./field-CXO54aKA.js";import"./index--eKfv8xD.js";import"./ai-empty-state-U9VQQ26k.js";import"./ai-actions-toolbar-5NPOAdoa.js";const d="forge-ai-dialog",j={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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
        ${p} ${n}
      </div>
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const J=["Demo"];export{o as Demo,J as __namedExportsOrder,j as default};

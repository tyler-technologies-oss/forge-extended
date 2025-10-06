import{x as t}from"./iframe-B30E-6f9.js";import"./ai-dialog-C7j2SodY.js";import"./ai-chat-interface-C9-LS3QA.js";import"./ai-user-message-D3UXwnnh.js";import"./ai-response-message-DhgJcz3q.js";import"./ai-fab-e6vGulyo.js";import"./custom-element-BhZVzxrc.js";import"./property-LxIvQ9rE.js";import"./state-D3B-jepI.js";import"./when-3fO0zp9C.js";import"./ref-CyFbDCd8.js";import"./directive-CJw_OlP2.js";import"./ai-modal-BwimrKm_.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-DKloavg3.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-7ANkVG1q.js";import"./ai-icon-J1pDspP6.js";import"./ai-gradient-container-05b_BLwo.js";import"./utils-Bn45QkHx.js";import"./ai-prompt-SNKzOvJl.js";import"./index-Dp4YnJvi.js";import"./with-default-aria-DCBBsBW-.js";import"./icon-registry-DkpQ_en3.js";import"./base-button-adapter-FDJ7PR5H.js";import"./index-BA0v3MPs.js";import"./base-lit-element-DnlFJ2Tx.js";import"./index-BpZXDSwX.js";import"./field-Dd5IwYy0.js";import"./index-B5mSTWDq.js";import"./ai-empty-state-C6aHMSc5.js";import"./ai-actions-toolbar-B3QfFvSY.js";const d="forge-ai-dialog",j={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

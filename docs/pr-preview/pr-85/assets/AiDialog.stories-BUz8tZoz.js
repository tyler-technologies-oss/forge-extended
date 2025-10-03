import{x as t}from"./iframe-B8HCYLYZ.js";import"./ai-dialog-DWgm9taV.js";import"./ai-chat-interface-Cq-eQ_LP.js";import"./ai-user-message-BDxjwmoK.js";import"./ai-response-message-PDPdJKUQ.js";import"./ai-fab-button-BW7NBN-f.js";import"./custom-element-BhZVzxrc.js";import"./property-CwN48wq5.js";import"./state-C7s0kWcr.js";import"./when-3fO0zp9C.js";import"./ref-C66exlfc.js";import"./ai-modal-DgZ0TP4y.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-B6NGhGQj.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-Dwrw_mkp.js";import"./ai-icon-D3wMBbFI.js";import"./ai-gradient-container-C9Lz1La6.js";import"./utils-Oij4eZxH.js";import"./ai-prompt-h6rGJuS9.js";import"./index-BraMNCZE.js";import"./with-default-aria-VdGHtqcR.js";import"./icon-registry-Cd4Di7f1.js";import"./base-button-adapter-CY7UX-yV.js";import"./index-CGyX4Xl7.js";import"./field-Cqxeb1tB.js";import"./index-BxDK5qHU.js";import"./base-lit-element-Bln1s8Qy.js";import"./index-Cm-q4ofq.js";import"./ai-empty-state-uiw-QRVj.js";import"./ai-actions-toolbar-CbWErtfB.js";const d="forge-ai-dialog",j={title:"AI/AI Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

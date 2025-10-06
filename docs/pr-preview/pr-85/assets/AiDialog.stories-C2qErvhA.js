import{x as t}from"./iframe-DXI0fxgu.js";import"./ai-dialog-NQjUcSEz.js";import"./ai-chat-interface-jCtugYeC.js";import"./ai-user-message-C573xHlp.js";import"./ai-response-message-Qc5VkFoW.js";import"./ai-fab-YFVuCw3T.js";import"./custom-element-BhZVzxrc.js";import"./property-BZB03ODX.js";import"./state-B_maRpFC.js";import"./when-3fO0zp9C.js";import"./ref-TV64m27l.js";import"./directive-CJw_OlP2.js";import"./ai-modal-BVzYyRX6.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-CCaJ81xZ.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-CZbqZnkD.js";import"./ai-icon-CAXXlpj5.js";import"./ai-gradient-container-MGB5b-S_.js";import"./utils-Bn45QkHx.js";import"./ai-prompt-BKsKbLhI.js";import"./index-DwZWdB2R.js";import"./with-default-aria-DJPpz-2I.js";import"./icon-registry-DyvrKL9n.js";import"./base-button-adapter-F_Tk_siZ.js";import"./index-Dpg7KF0z.js";import"./base-lit-element-BOfYiDO9.js";import"./index-8MFugv6j.js";import"./field-uFW4HLEp.js";import"./index-J9iAre2N.js";import"./ai-empty-state-BCPcUMo3.js";import"./ai-actions-toolbar-C0m-TQJN.js";const d="forge-ai-dialog",j={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

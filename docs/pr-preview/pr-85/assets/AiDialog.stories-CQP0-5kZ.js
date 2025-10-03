import{x as t}from"./iframe-mvddvlaU.js";import"./ai-dialog-CkatODwR.js";import"./ai-chat-interface-DKgFoMtV.js";import"./ai-user-message-B0YOKew4.js";import"./ai-response-message-BfAIVNjz.js";import"./ai-fab-button-CmWnmrni.js";import"./custom-element-BhZVzxrc.js";import"./property-CHLe1j8R.js";import"./state-CRgpVHlD.js";import"./when-3fO0zp9C.js";import"./ref-DpCR_UBv.js";import"./ai-modal-Bo2MFpJ-.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-DbCJi3qH.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-D18HhtAf.js";import"./ai-icon-Bf3x-MlJ.js";import"./ai-gradient-container-LO5PgeW2.js";import"./utils-Oij4eZxH.js";import"./ai-prompt-D2FIGe1R.js";import"./index-DRAER4-V.js";import"./with-default-aria-DtXqsGfq.js";import"./icon-registry-iJYN_fQB.js";import"./base-button-adapter-BY97seFm.js";import"./index-B-mDaJYv.js";import"./field-mpO9hTKr.js";import"./index-BPD38EB0.js";import"./base-lit-element-DePVlrD0.js";import"./index-B1KeZX4O.js";import"./ai-empty-state-CvMYoIBg.js";import"./ai-actions-toolbar-DMVfc3g1.js";const d="forge-ai-dialog",j={title:"AI/AI Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

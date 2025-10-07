import{x as t}from"./iframe-CzMhYDMp.js";import"./ai-dialog-BP30uKbu.js";import"./ai-chat-interface-5knJ2zeS.js";import"./ai-user-message-D6zOBgbH.js";import"./ai-response-message-Cc5TU9dz.js";import"./ai-fab-C4wfNHvM.js";import"./custom-element-BhZVzxrc.js";import"./property-DHbVZ_Fj.js";import"./state-CIPtwRnI.js";import"./when-3fO0zp9C.js";import"./ref-BGKPRkOp.js";import"./directive-CJw_OlP2.js";import"./ai-modal-Dob1eE7D.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-BQCLHNp2.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-gh_Z81wy.js";import"./ai-icon-C04vqF5K.js";import"./ai-gradient-container-CmNAW4Kk.js";import"./utils-Bn45QkHx.js";import"./ai-prompt-C4wwfEBH.js";import"./index-2ykLY2wi.js";import"./with-default-aria-DoK6itv1.js";import"./icon-registry-BR7aBQ_4.js";import"./base-button-adapter-BnZGTto-.js";import"./index-9b23Rjn-.js";import"./base-lit-element-_JgAVLoj.js";import"./index-0We3DBxA.js";import"./field-ByKsHtix.js";import"./index-DcxB552y.js";import"./ai-empty-state-BkOE3mvQ.js";import"./ai-actions-toolbar-Cn0fhcIK.js";const d="forge-ai-dialog",j={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

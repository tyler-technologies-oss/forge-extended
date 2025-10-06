import{x as t}from"./iframe-CTPneAgr.js";import"./ai-dialog-XGu86Juu.js";import"./ai-chat-interface-C53Ea2XI.js";import"./ai-user-message-EFTKqyPB.js";import"./ai-response-message-Ctqm-e26.js";import"./ai-fab-B7z9TOtL.js";import"./custom-element-BhZVzxrc.js";import"./property-Dc2N9kKe.js";import"./state-EwyD-FDh.js";import"./when-3fO0zp9C.js";import"./ref-leM_0utt.js";import"./directive-CJw_OlP2.js";import"./ai-modal-DxKw-LJn.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-DrDE0eAF.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-BYAwiUCW.js";import"./ai-icon-DcK_2ey0.js";import"./ai-gradient-container-D8-KfTH8.js";import"./utils-Bn45QkHx.js";import"./ai-prompt-CWs6gfsY.js";import"./index-CUqyxjIW.js";import"./with-default-aria-W4COm5eB.js";import"./icon-registry-DUyv9iuP.js";import"./base-button-adapter-DyE9hWa8.js";import"./index-maAAYtiO.js";import"./base-lit-element-CB69aOf-.js";import"./index-D4IOUigD.js";import"./field-BY1KMOI6.js";import"./index-Bbq4x3D1.js";import"./ai-empty-state-4AIUc4S-.js";import"./ai-actions-toolbar-DI5AdhJu.js";const d="forge-ai-dialog",j={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

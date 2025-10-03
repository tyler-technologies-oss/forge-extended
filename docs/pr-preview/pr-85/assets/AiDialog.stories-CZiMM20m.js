import{x as t}from"./iframe-B0-J0LJg.js";import"./ai-dialog-CRc7M3Cj.js";import"./ai-chat-interface-DZPykhHh.js";import"./ai-user-message-DKxj66Bg.js";import"./ai-response-message-DFWOaJNV.js";import"./ai-fab-button-DjDFItjd.js";import"./custom-element-BhZVzxrc.js";import"./property-CgfoAyCh.js";import"./state-Bvqtwjh1.js";import"./when-3fO0zp9C.js";import"./ref-CDKIe4B9.js";import"./ai-modal-BV4te6Cm.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-hbBSdiN0.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-B2k6G3L2.js";import"./ai-icon-DReDHNbc.js";import"./ai-gradient-container-DCodMQRh.js";import"./utils-Oij4eZxH.js";import"./ai-prompt-B8RJRUIh.js";import"./index-CgMD892N.js";import"./with-default-aria-HXLsW0av.js";import"./icon-registry-Boo-GKX6.js";import"./base-button-adapter-B8mFscco.js";import"./index-Dpud_Fiu.js";import"./field-Bd4BhChu.js";import"./index-DEAn5xni.js";import"./base-lit-element-V43of0r0.js";import"./index-C0XK4eqV.js";import"./ai-empty-state-BF9dv-gm.js";import"./ai-actions-toolbar-CJYTCXQv.js";const d="forge-ai-dialog",j={title:"AI/AI Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

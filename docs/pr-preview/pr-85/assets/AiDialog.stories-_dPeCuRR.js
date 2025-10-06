import{x as t}from"./iframe-Nf4WLXYm.js";import"./ai-dialog-CS5Cec4i.js";import"./ai-chat-interface-BRJVDfFo.js";import"./ai-user-message-Bb5DlH1t.js";import"./ai-response-message-DgnDbfaK.js";import"./ai-fab-DpjWA0xP.js";import"./custom-element-BhZVzxrc.js";import"./property-76qi75lb.js";import"./state-eHWx9GP1.js";import"./when-3fO0zp9C.js";import"./ref-BLBcJiBs.js";import"./directive-CJw_OlP2.js";import"./ai-modal-BnQ6MNBE.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-5SksmVtC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-CmF5iB35.js";import"./ai-icon-75INhegg.js";import"./ai-gradient-container-_G0X20X3.js";import"./utils-Bn45QkHx.js";import"./ai-prompt-CstIPxwl.js";import"./index-BDoj2P3F.js";import"./with-default-aria-BVIMRpvX.js";import"./icon-registry-CJK-CT0j.js";import"./base-button-adapter-DdVtUVEb.js";import"./index-BvUg4Pxk.js";import"./base-lit-element-B_a7sa5m.js";import"./index-BnOolYI_.js";import"./field-CSNQZxIe.js";import"./index-EKTB6Ojj.js";import"./ai-empty-state-WCzTWtvo.js";import"./ai-actions-toolbar-Eq6f3ts-.js";const d="forge-ai-dialog",j={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

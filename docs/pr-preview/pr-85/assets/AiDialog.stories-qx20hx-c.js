import{x as t}from"./iframe-CaibHO0y.js";import"./ai-dialog-Cv0Y4m6F.js";import"./ai-chat-interface-DTseN6ct.js";import"./ai-user-message-wLJJy0U-.js";import"./ai-response-message-CPJrQ5ks.js";import"./ai-fab-qraja6wT.js";import"./custom-element-BhZVzxrc.js";import"./property-GAFUFo6c.js";import"./state-BlDweUO9.js";import"./when-3fO0zp9C.js";import"./ref-BLyUv6d5.js";import"./directive-CJw_OlP2.js";import"./ai-modal-BqHkms34.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-CcPDX4GZ.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-BN_mZhOy.js";import"./ai-icon-CFta16wH.js";import"./ai-gradient-container-CDSTOBzE.js";import"./utils-Bn45QkHx.js";import"./ai-prompt-DERJrAeC.js";import"./index-Bx0Q97w1.js";import"./with-default-aria-a5opZvee.js";import"./icon-registry-HgQR9uun.js";import"./base-button-adapter-DHS2QL68.js";import"./index-CGxX6zi4.js";import"./base-lit-element-4k41MjDr.js";import"./index-Azf5fOpv.js";import"./field-BTbwUCe5.js";import"./index-9kRHhAtt.js";import"./ai-empty-state-BxqU5EIH.js";import"./ai-actions-toolbar-BVSM6uVb.js";const d="forge-ai-dialog",j={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

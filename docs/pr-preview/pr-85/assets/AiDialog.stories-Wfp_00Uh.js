import{x as t}from"./iframe-CYF-QaVf.js";import"./ai-dialog-C007fldi.js";import"./ai-chat-interface-DyZGoNO5.js";import"./ai-user-message-DtHrCAZ0.js";import"./ai-response-message-iR4OPxR7.js";import"./ai-fab-rW9HEXEi.js";import"./custom-element-BhZVzxrc.js";import"./property-By72hyiu.js";import"./state-B0cVmdUB.js";import"./when-3fO0zp9C.js";import"./ref-DuvNwyRh.js";import"./directive-CJw_OlP2.js";import"./ai-modal-CBHSCMuO.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-Dc79g4p6.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-BmdGjiP3.js";import"./ai-icon-BENOAETl.js";import"./ai-gradient-container-C5X5mvgp.js";import"./utils-DDUGSWJu.js";import"./ai-prompt-B3Dv2So0.js";import"./index-D6PdTGY-.js";import"./base-adapter-IwXxdKYH.js";import"./base-button-adapter-D1bipBmp.js";import"./icon-registry-DTYmpyzB.js";import"./with-default-aria-s0KXcKTx.js";import"./index-NFsadD4S.js";import"./base-lit-element-DP8G4Tbj.js";import"./index-BmUHhpxs.js";import"./field-CS3t91cA.js";import"./index-h-ETmib9.js";import"./ai-empty-state-C1pn630O.js";import"./ai-actions-toolbar-CDMjdCU9.js";const d="forge-ai-dialog",J={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},p=t`
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
    `,n=t`
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
        ${n} ${p}
      </div>
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const K=["Demo"];export{o as Demo,K as __namedExportsOrder,J as default};

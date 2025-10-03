import{x as t}from"./iframe-CsUbsq26.js";import"./ai-dialog-CXmFzKi3.js";import"./ai-chat-interface-Bmhjp72H.js";import"./ai-user-message-DTwMa40T.js";import"./ai-response-message-BoACgJhb.js";import"./ai-fab-button-B19poN0n.js";import"./custom-element-BhZVzxrc.js";import"./property-CFQcvzxH.js";import"./state-8fqPwGH3.js";import"./when-3fO0zp9C.js";import"./ref-DVpqcmfb.js";import"./ai-modal-kNhZc-D8.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-yc2dn6V_.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-gajM7tZH.js";import"./ai-icon-Br6pIT_N.js";import"./ai-gradient-container-DyE6Dykb.js";import"./utils-Oij4eZxH.js";import"./ai-prompt-CsMzOCuN.js";import"./index-CHH3QX3A.js";import"./with-default-aria-CbGAhtNq.js";import"./icon-registry-BI3oNv0Y.js";import"./base-button-adapter-DBCuQPro.js";import"./index-BUeIwXUQ.js";import"./field-2DStNvvt.js";import"./index-DVZ5j7LJ.js";import"./base-lit-element-kchW9Q1s.js";import"./index-y5RRpSLJ.js";import"./ai-empty-state-DoOAuxvC.js";import"./ai-actions-toolbar-BaZDAvzn.js";const d="forge-ai-dialog",j={title:"AI/AI Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

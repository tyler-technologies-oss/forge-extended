import{x as t}from"./iframe-DzHHSFVf.js";import"./ai-dialog-BNSsDVyf.js";import"./ai-chat-interface-BcaNOu7I.js";import"./ai-user-message-CWejhv1i.js";import"./ai-response-message-VBCiwbZY.js";import"./ai-fab-BTIUs9pq.js";import"./custom-element-BhZVzxrc.js";import"./property-nC-t9p72.js";import"./state-3X-GoxDx.js";import"./when-3fO0zp9C.js";import"./ref-OuBK7Va-.js";import"./directive-CJw_OlP2.js";import"./ai-modal-CoszvrnS.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-BQj0z-mk.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-b3qnmzvK.js";import"./ai-icon-BmPGiCcW.js";import"./ai-gradient-container-CRvhaTRQ.js";import"./utils-DDUGSWJu.js";import"./ai-prompt-B-aobP9R.js";import"./index-BpXMlTX8.js";import"./base-adapter-Ds5Afg62.js";import"./base-button-adapter-hy8ASkWo.js";import"./icon-registry-DBW8BZmy.js";import"./with-default-aria-DZL8hl8X.js";import"./index-kjGaCoQ-.js";import"./base-lit-element-ew92FQbz.js";import"./index-D1RHwquU.js";import"./field-C2_bn9G8.js";import"./index-DplNg2SY.js";import"./ai-empty-state-Dl-beykT.js";import"./ai-actions-toolbar-CbE9ceJS.js";const d="forge-ai-dialog",J={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},p=t`
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

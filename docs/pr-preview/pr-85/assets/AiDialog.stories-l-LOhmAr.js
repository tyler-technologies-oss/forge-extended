import{x as t}from"./iframe-Cq-laB_0.js";import"./ai-dialog-D0YZMZhJ.js";import"./ai-chat-interface-B4QexkZg.js";import"./ai-user-message-CQPL8Dcz.js";import"./ai-response-message-BzoKWm9m.js";import"./ai-fab-DiAWgeaW.js";import"./custom-element-BhZVzxrc.js";import"./property-DdMMxwFm.js";import"./state-CkZ3iwkj.js";import"./when-3fO0zp9C.js";import"./ref-DHtN6YBV.js";import"./directive-CJw_OlP2.js";import"./ai-modal-CFLYMSIS.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-DwPvJJxK.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-DDFgSWIy.js";import"./ai-icon-DxmuxHwQ.js";import"./ai-gradient-container-DwWeYXdv.js";import"./utils-Bn45QkHx.js";import"./ai-prompt-CdAPrpWK.js";import"./index-D15SgsRn.js";import"./with-default-aria-C8uYVa_A.js";import"./icon-registry-QJlQPQoC.js";import"./base-button-adapter-BoCXpPvJ.js";import"./index-Cb4d6jIT.js";import"./base-lit-element-BdSPcvwX.js";import"./index-QSzOuC62.js";import"./field-D36NJmIU.js";import"./index-i__By2hs.js";import"./ai-empty-state-CvMOncQO.js";import"./ai-actions-toolbar-c7Yo84h1.js";const d="forge-ai-dialog",j={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

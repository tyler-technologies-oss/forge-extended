import{x as t}from"./iframe-lqpmXWRw.js";import"./ai-dialog-BdH0LQyG.js";import"./ai-chat-interface-DzYAUzfx.js";import"./ai-user-message-_P6IsUjK.js";import"./ai-response-message-FeTDrAUC.js";import"./ai-fab-C85ZQgPF.js";import"./custom-element-BhZVzxrc.js";import"./property-CnHJax5j.js";import"./state-DuuOGxJx.js";import"./when-3fO0zp9C.js";import"./ref-Culwn6ya.js";import"./directive-CJw_OlP2.js";import"./ai-modal-CKygW7Ld.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-Bp5CUPRl.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-1GMJtBuc.js";import"./ai-icon-C-VD1Jdn.js";import"./ai-gradient-container-BV5qpgoa.js";import"./utils-DDUGSWJu.js";import"./ai-prompt-BMOtaT5x.js";import"./index-9Zb2gqMU.js";import"./base-adapter-Bt1wv7OR.js";import"./base-button-adapter-ChNm_0Wa.js";import"./icon-registry-B3BS71cJ.js";import"./with-default-aria-D1zlN38M.js";import"./index-CbTHd2kL.js";import"./base-lit-element-2qnyfaf5.js";import"./index-DjyghvYy.js";import"./field-BmVcfKKi.js";import"./index-CbrDtwys.js";import"./ai-empty-state-xSoMdQYW.js";import"./ai-actions-toolbar-JY5QQKai.js";const d="forge-ai-dialog",J={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},p=t`
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

import{x as t}from"./iframe-DsjZy_1n.js";import"./ai-dialog-zMI7TTBD.js";import"./ai-chat-interface-C3rTY1Tg.js";import"./ai-user-message-LkggGPNl.js";import"./ai-response-message-VLRTjldw.js";import"./ai-fab-BsvMqg4i.js";import"./custom-element-BhZVzxrc.js";import"./property-BjCz1Uvz.js";import"./state-w6ehoa_C.js";import"./when-3fO0zp9C.js";import"./ref-Dte0d8BZ.js";import"./directive-CJw_OlP2.js";import"./ai-modal-ErPYyVcl.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-DHCj4Bgk.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-D4nLQO-m.js";import"./ai-icon-DkPPWl1J.js";import"./ai-gradient-container-BVMoWuva.js";import"./utils-DDUGSWJu.js";import"./ai-prompt-CUiY3_aS.js";import"./index-DemU_hkM.js";import"./base-adapter-BbJdlUaI.js";import"./base-button-adapter-CBrZjt9r.js";import"./icon-registry-BgGL1Gzt.js";import"./with-default-aria-BcKQIzCZ.js";import"./index-DX2PeB-r.js";import"./base-lit-element-CVX2eMJH.js";import"./index-Cs3QWwkw.js";import"./field-v-6PAG0q.js";import"./index-DAxzTsYP.js";import"./ai-empty-state-BFb0f-nN.js";import"./ai-actions-toolbar-u4SzzL4A.js";const d="forge-ai-dialog",J={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},p=t`
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

import{x as t}from"./iframe-ZQHSt-iJ.js";import"./ai-dialog-DuU1yLow.js";import"./ai-chat-interface-W26C2ItH.js";import"./ai-user-message-Cr3s8Nv7.js";import"./ai-response-message-DO3Cxyng.js";import"./ai-fab-Ce4QGjVn.js";import"./custom-element-BhZVzxrc.js";import"./property-BlJkblJV.js";import"./state-DHWO_BWf.js";import"./when-3fO0zp9C.js";import"./ref-BCFovZ6d.js";import"./directive-CJw_OlP2.js";import"./ai-modal-A7QkB6m9.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-DYTVpiZa.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-BDST9PV5.js";import"./ai-icon-BrQI0AN9.js";import"./ai-gradient-container-DHxL-LIH.js";import"./utils-Bn45QkHx.js";import"./ai-prompt-4FCc0ZbN.js";import"./index-pGRIAyA7.js";import"./with-default-aria-BCAImnzt.js";import"./icon-registry-C299wTqa.js";import"./base-button-adapter-CNQehpes.js";import"./index-eqi7uHwD.js";import"./base-lit-element-5WJg_sby.js";import"./index-BXw4bG2O.js";import"./field-BN2Q-XoN.js";import"./index-uTz5KbOv.js";import"./ai-empty-state-DDD7V6_N.js";import"./ai-actions-toolbar-Ak08Bv0b.js";const d="forge-ai-dialog",j={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

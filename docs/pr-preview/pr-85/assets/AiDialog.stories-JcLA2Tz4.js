import{x as t}from"./iframe-ChM2Ou9X.js";import"./ai-dialog-HmMojZWs.js";import"./ai-chat-interface-DLj390b_.js";import"./ai-user-message-DpEzauIH.js";import"./ai-response-message-BYUTU3x3.js";import"./ai-fab-D-3bXNo5.js";import"./custom-element-BhZVzxrc.js";import"./property-C-gvHGFk.js";import"./state-BBJehaxf.js";import"./when-3fO0zp9C.js";import"./ref-CrfMSRO0.js";import"./directive-CJw_OlP2.js";import"./ai-modal-BzMUHwNq.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-DiBRoHku.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-BKC4Nd-T.js";import"./ai-icon-NUYjRc0Y.js";import"./ai-gradient-container-Bp_edVrp.js";import"./utils-Bn45QkHx.js";import"./ai-prompt-DXrAjwJc.js";import"./index-BSHcOM15.js";import"./with-default-aria-Cz2vU3mx.js";import"./icon-registry-B-sY0Bl5.js";import"./base-button-adapter-2XY7Njr1.js";import"./index-f8dd88Iq.js";import"./base-lit-element-BuS8cZOM.js";import"./index-BJqEH28i.js";import"./field-37DuJiS0.js";import"./index-MSbIwala.js";import"./ai-empty-state-LOE1jDc0.js";import"./ai-actions-toolbar-CShn2YoJ.js";const d="forge-ai-dialog",j={title:"AI/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const r=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},a=()=>{document.querySelector("forge-ai-dialog")?.close()},n=t`
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

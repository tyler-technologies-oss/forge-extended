import{x as e}from"./iframe-ZQHSt-iJ.js";import"./ai-chat-interface-W26C2ItH.js";import"./ai-user-message-Cr3s8Nv7.js";import"./ai-response-message-DO3Cxyng.js";import"./ai-suggestions-allBqe-V.js";import"./ai-gradient-container-DHxL-LIH.js";import"./ai-empty-state-DDD7V6_N.js";import{d as o}from"./index-eqi7uHwD.js";import"./custom-element-BhZVzxrc.js";import"./property-BlJkblJV.js";import"./state-DHWO_BWf.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-chat-header-BDST9PV5.js";import"./ai-icon-BrQI0AN9.js";import"./utils-Bn45QkHx.js";import"./ai-prompt-4FCc0ZbN.js";import"./index-pGRIAyA7.js";import"./with-default-aria-BCAImnzt.js";import"./icon-registry-C299wTqa.js";import"./base-button-adapter-CNQehpes.js";import"./index-BXw4bG2O.js";import"./field-BN2Q-XoN.js";import"./index-uTz5KbOv.js";import"./ai-actions-toolbar-Ak08Bv0b.js";import"./base-lit-element-5WJg_sby.js";const g="forge-ai-chat-interface";o();const M={title:"AI/Primitives/Chat Interface",component:g,render:()=>e`<forge-ai-chat-interface></forge-ai-chat-interface>`},a={},t={render:()=>e`
      <forge-ai-gradient-container>
        <forge-ai-chat-interface>
          <forge-ai-empty-state>
            <forge-ai-suggestions slot="actions" variant="block" .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}> </forge-ai-suggestions>
          </forge-ai-empty-state>
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `},s={render:()=>e`
      <forge-ai-chat-interface>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
        <forge-ai-response-message>
          Sure! Here's a simple example of a generic function: This function works with any type T, providing type
          safety while being reusable.
        </forge-ai-response-message>
      </forge-ai-chat-interface>
    `},r={render:()=>e`
      <forge-ai-chat-interface>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
        <forge-ai-response-message>
          Sure! Here's a simple example of a generic function: This function works with any type T, providing type
          safety while being reusable.
        </forge-ai-response-message>
        <forge-ai-suggestions slot="suggestions" .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}></forge-ai-suggestions>
      </forge-ai-chat-interface>
    `},n={render:()=>e`
      <forge-ai-gradient-container>
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
          <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
          <forge-ai-response-message>
            Sure! Here's a simple example of a generic function: This function works with any type T, providing type
            safety while being reusable.
          </forge-ai-response-message>
          <forge-ai-suggestions slot="suggestions" .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}></forge-ai-suggestions>
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const suggestions = [{
      text: 'Help me write an email',
      value: 'email'
    }, {
      text: 'Create a presentation',
      value: 'presentation'
    }, {
      text: 'Write some code',
      value: 'code'
    }, {
      text: 'Plan a meeting',
      value: 'meeting'
    }, {
      text: 'Summarize a document',
      value: 'summarize'
    }] as Suggestion[];
    return html\`
      <forge-ai-gradient-container>
        <forge-ai-chat-interface>
          <forge-ai-empty-state>
            <forge-ai-suggestions slot="actions" variant="block" .suggestions=\${suggestions}> </forge-ai-suggestions>
          </forge-ai-empty-state>
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    \`;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <forge-ai-chat-interface>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
        <forge-ai-response-message>
          Sure! Here's a simple example of a generic function: This function works with any type T, providing type
          safety while being reusable.
        </forge-ai-response-message>
      </forge-ai-chat-interface>
    \`;
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const suggestions = [{
      text: 'Help me write an email',
      value: 'email'
    }, {
      text: 'Create a presentation',
      value: 'presentation'
    }, {
      text: 'Write some code',
      value: 'code'
    }, {
      text: 'Plan a meeting',
      value: 'meeting'
    }, {
      text: 'Summarize a document',
      value: 'summarize'
    }] as Suggestion[];
    return html\`
      <forge-ai-chat-interface>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
        <forge-ai-response-message>
          Sure! Here's a simple example of a generic function: This function works with any type T, providing type
          safety while being reusable.
        </forge-ai-response-message>
        <forge-ai-suggestions slot="suggestions" .suggestions=\${suggestions}></forge-ai-suggestions>
      </forge-ai-chat-interface>
    \`;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const suggestions = [{
      text: 'Help me write an email',
      value: 'email'
    }, {
      text: 'Create a presentation',
      value: 'presentation'
    }, {
      text: 'Write some code',
      value: 'code'
    }, {
      text: 'Plan a meeting',
      value: 'meeting'
    }, {
      text: 'Summarize a document',
      value: 'summarize'
    }] as Suggestion[];
    return html\`
      <forge-ai-gradient-container>
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
          <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
          <forge-ai-response-message>
            Sure! Here's a simple example of a generic function: This function works with any type T, providing type
            safety while being reusable.
          </forge-ai-response-message>
          <forge-ai-suggestions slot="suggestions" .suggestions=\${suggestions}></forge-ai-suggestions>
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    \`;
  }
}`,...n.parameters?.docs?.source}}};const _=["Demo","WithEmptyState","WithMessages","WithSuggestions","WithGradientBorderComponent"];export{a as Demo,t as WithEmptyState,n as WithGradientBorderComponent,s as WithMessages,r as WithSuggestions,_ as __namedExportsOrder,M as default};

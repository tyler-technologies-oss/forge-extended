import{x as n}from"./iframe-DDeWaA84.js";import"./ai-chat-interface-BKLkjOlr.js";import"./ai-user-message-C_HXsQdF.js";import"./ai-response-message-BVMVTftl.js";import"./ai-suggestions-CYICZnpZ.js";import"./ai-gradient-container-Db8njLF2.js";import{d as i}from"./index-C_83Uv7h.js";import"./custom-element-BhZVzxrc.js";import"./property-Dj9jyCh7.js";import"./state-9Nr5MEEs.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-chat-header-BOmCKaaa.js";import"./ai-icon-eAwbBhJn.js";import"./utils-Oij4eZxH.js";import"./ai-prompt-Cq4_wTrZ.js";import"./index-fbVt2r5N.js";import"./with-default-aria-C2VCde96.js";import"./icon-registry-CCLlBm1u.js";import"./base-button-adapter-zmZMz4NS.js";import"./index-DvcJH9xH.js";import"./field-BO4gN2ab.js";import"./index-CRm_Oroc.js";import"./ai-empty-state-9Jv5-i7M.js";import"./ai-actions-toolbar-B2AK1DfN.js";import"./base-lit-element-OcDc9Lum.js";const o="forge-ai-chat-interface";i();const D={title:"AI/AI Chat Interface",component:o,render:()=>n`<forge-ai-chat-interface></forge-ai-chat-interface>`},e={},s={render:()=>n`
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
    `},a={render:()=>n`
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
    `},r={render:()=>n`
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
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const M=["Demo","WithMessages","WithSuggestions","WithGradientBorderComponent"];export{e as Demo,r as WithGradientBorderComponent,s as WithMessages,a as WithSuggestions,M as __namedExportsOrder,D as default};

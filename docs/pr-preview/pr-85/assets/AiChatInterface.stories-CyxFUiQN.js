import{x as n}from"./iframe-ChOg00Na.js";import"./ai-chat-interface-O2NkzW3_.js";import"./ai-user-message-C3WYQ6hN.js";import"./ai-response-message-BhVrfJFj.js";import"./ai-suggestions-CB-TS-BY.js";import{d as o}from"./ai-prompt-ClX0KZNI.js";import"./custom-element-BhZVzxrc.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-icon-Bf43kTrq.js";import"./property-4KfbnjLy.js";import"./utils-Oij4eZxH.js";import"./ai-actions-toolbar-h9HWYlAf.js";import"./index-v-qU2dpR.js";import"./with-default-aria-0ZuZ8nVj.js";import"./icon-registry-BQI8WzyS.js";import"./base-button-adapter-uhaPtFKU.js";import"./index-DX_RzWCT.js";import"./index-DFBiZsi5.js";import"./field-qu2WEXpA.js";const t="forge-ai-chat-interface";o();const z={title:"AI/AI Chat Interface",component:t,render:()=>n`<forge-ai-chat-interface></forge-ai-chat-interface>`},e={},r={render:()=>n`
      <forge-card no-padding raised>
        <forge-ai-chat-interface></forge-ai-chat-interface>
      </forge-card>
    `},a={render:()=>n`
      <forge-card no-padding raised>
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
        </forge-ai-chat-interface>
      </forge-card>
    `},s={render:()=>n`
      <forge-card no-padding raised>
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
      </forge-card>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <forge-card no-padding raised>
        <forge-ai-chat-interface></forge-ai-chat-interface>
      </forge-card>
    \`;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <forge-card no-padding raised>
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
        </forge-ai-chat-interface>
      </forge-card>
    \`;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      <forge-card no-padding raised>
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
      </forge-card>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const G=["Demo","InCard","WithMessages","WithSuggestions"];export{e as Demo,r as InCard,a as WithMessages,s as WithSuggestions,G as __namedExportsOrder,z as default};

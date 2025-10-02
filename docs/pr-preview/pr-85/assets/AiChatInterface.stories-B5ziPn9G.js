import{x as n}from"./iframe-iyBimxDc.js";import"./ai-chat-interface-Bq-qxNIn.js";import"./ai-user-message-Ntp5AhH9.js";import"./ai-response-message-CkzaFfwQ.js";import"./ai-suggestions-B7tHvb6k.js";import{d as o}from"./ai-prompt-9x1_1i-f.js";import"./custom-element-BhZVzxrc.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-icon-5o6c9jXU.js";import"./property-DeMPfocB.js";import"./utils-Oij4eZxH.js";import"./ai-actions-toolbar-DTl0BIZX.js";import"./index-D5k81CAY.js";import"./with-default-aria-ZjkiVOws.js";import"./icon-registry-9YhI877e.js";import"./base-button-adapter-tTkh_4AV.js";import"./index-DsM9WEyj.js";import"./index-6xmzlTW5.js";import"./field-DeYf_Vsk.js";const t="forge-ai-chat-interface";o();const z={title:"AI/AI Chat Interface",component:t,render:()=>n`<forge-ai-chat-interface></forge-ai-chat-interface>`},e={},r={render:()=>n`
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

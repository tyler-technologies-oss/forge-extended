import{x as n}from"./iframe-CmVnuY_w.js";import"./ai-chat-interface-DzWWaLJ-.js";import"./ai-user-message-DTHmjI-u.js";import"./ai-response-message-C6N0wxC7.js";import"./ai-suggestions-CKy3a0i6.js";import{d as o}from"./ai-prompt-C-zElWaw.js";import"./custom-element-BhZVzxrc.js";import"./state-RK3FlCAB.js";import"./property-BuuY4It3.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-icon-BC6m_WKl.js";import"./utils-Oij4eZxH.js";import"./ai-empty-state-Dsqvi3Wd.js";import"./ai-actions-toolbar-CjGmtcQK.js";import"./index-D-BdJf8P.js";import"./with-default-aria-cJT2W8LP.js";import"./icon-registry-a8TMMRH6.js";import"./base-button-adapter-KMv6nVoH.js";import"./index-DnnlhdxX.js";import"./index-CvBcXCP3.js";import"./field-lowzM-7W.js";const t="forge-ai-chat-interface";o();const A={title:"AI/AI Chat Interface",component:t,render:()=>n`<forge-ai-chat-interface></forge-ai-chat-interface>`},e={},r={render:()=>n`
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
}`,...s.parameters?.docs?.source}}};const D=["Demo","InCard","WithMessages","WithSuggestions"];export{e as Demo,r as InCard,a as WithMessages,s as WithSuggestions,D as __namedExportsOrder,A as default};

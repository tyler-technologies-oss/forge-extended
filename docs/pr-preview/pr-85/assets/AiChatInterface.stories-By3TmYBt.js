import{x as e}from"./iframe-H7I6SA_0.js";import"./ai-chat-interface-taFXM52P.js";import"./ai-prompt-B8N1hZlT.js";import"./prompt-button-DcPhlBWW.js";import"./ai-dropdown-menu-DDv1hmg1.js";import"./ai-file-picker-ByNsnc3m.js";import"./ai-voice-input-BAxGoH1g.js";import"./ai-user-message-D-mFHc4r.js";import"./ai-response-message-BhBPv8XJ.js";import"./ai-suggestions-CSPPWQ06.js";import"./ai-gradient-container-CHjdDoYg.js";import"./ai-empty-state-CHf0_rke.js";import{I as p,t as c,a as u,b as l,c as f}from"./icon-registry-Dzn911pM.js";import{d}from"./index-Bxv9-6Pg.js";import{d as h}from"./index-4MkXZpN5.js";import{d as y}from"./index-AIawYiyc.js";const w="forge-ai-chat-interface";d();h();y();p.define([c,u,l,f]);const o=()=>e`
    <forge-ai-prompt slot="prompt">
      <forge-ai-file-picker variant="icon-button" slot="actions" @forge-ai-file-picker-change=${g=>{console.log("File selected:",g.detail.file.name)}}>
        <forge-icon slot="icon" name="add"></forge-icon>
      </forge-ai-file-picker>
      <forge-ai-voice-input slot="actions" @forge-ai-voice-input-result=${g=>{const m=document.querySelector("forge-ai-prompt");m&&(m.value=g.detail.transcript)}}></forge-ai-voice-input>
      <forge-prompt-button slot="actions">
        <forge-icon name="web_alt" slot="leading"></forge-icon>
        Web search
      </forge-prompt-button>
      <forge-ai-dropdown-menu variant="button" selection-mode="single" slot="actions">
        <span slot="trigger-content">GPT-4</span>
        <forge-icon name="arrow_drop_down" slot="end"></forge-icon>

        <forge-ai-dropdown-menu-item value="gpt-4">
          <span>GPT-4</span>
        </forge-ai-dropdown-menu-item>

        <forge-ai-dropdown-menu-item value="gpt-3.5">
          <span>GPT-3.5</span>
        </forge-ai-dropdown-menu-item>

        <forge-ai-dropdown-menu-item value="claude-3">
          <span>Claude-3</span>
        </forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    </forge-ai-prompt>
  `,v={title:"AI/Primitives/Chat Interface",component:w,render:()=>e` <forge-ai-chat-interface> ${o()} </forge-ai-chat-interface> `},a={},n={render:()=>e`
      <forge-ai-gradient-container>
        <forge-ai-chat-interface>
          <forge-ai-empty-state>
            <forge-ai-suggestions slot="actions" variant="block" .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}> </forge-ai-suggestions>
          </forge-ai-empty-state>
          ${o()}
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `},t={render:()=>e`
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
        ${o()}
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
        ${o()}
      </forge-ai-chat-interface>
    `},s={render:()=>e`
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
          ${o()}
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          \${createPrompt()}
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    \`;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
        \${createPrompt()}
      </forge-ai-chat-interface>
    \`;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        \${createPrompt()}
      </forge-ai-chat-interface>
    \`;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          \${createPrompt()}
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const x=["Demo","WithEmptyState","WithMessages","WithSuggestions","WithGradientBorderComponent"],F=Object.freeze(Object.defineProperty({__proto__:null,Demo:a,WithEmptyState:n,WithGradientBorderComponent:s,WithMessages:t,WithSuggestions:r,__namedExportsOrder:x,default:v},Symbol.toStringTag,{value:"Module"}));export{F as A,a as D};

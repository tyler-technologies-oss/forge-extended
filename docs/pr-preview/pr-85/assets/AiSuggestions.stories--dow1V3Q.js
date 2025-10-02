import{x as s}from"./iframe-CUyNwiwu.js";import"./ai-suggestions-BXZ0bPpI.js";import"./custom-element-BhZVzxrc.js";import"./property-B65diJJi.js";import"./index-CX2YGzrH.js";import"./with-default-aria-BTxRBcsi.js";import"./icon-registry-DN_G8EjV.js";import"./base-button-adapter-joBc-7ey.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,r="forge-ai-suggestions",x={title:"AI/AI Suggestions",component:r,render:()=>{const t=[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"},{text:"Translate text",value:"translate"},{text:"Generate ideas",value:"brainstorm"},{text:"Review my work",value:"review"},{text:"Explain a concept",value:"explain"},{text:"Ask a question",value:"question"}],o=a("forge-ai-suggestions-select");return s`
      <div style="width: 420px;">
        <forge-ai-suggestions
          .suggestions=${t}
          @forge-ai-suggestions-select=${o}></forge-ai-suggestions>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const d=["Demo"];export{e as Demo,d as __namedExportsOrder,x as default};

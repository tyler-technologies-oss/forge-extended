import{x as s}from"./iframe-DkIoW-rz.js";import"./ai-suggestions-CsVa2qxr.js";import"./custom-element-BhZVzxrc.js";import"./property-Bce-7EI7.js";import"./index-CEmqG2Oz.js";import"./with-default-aria-4RmTDhZx.js";import"./utils-Oij4eZxH.js";import"./icon-registry-DiBgHrDA.js";import"./base-button-adapter-CxY01EZs.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,r="forge-ai-suggestions",d={title:"AI/AI Suggestions",component:r,render:()=>{const t=[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"},{text:"Translate text",value:"translate"},{text:"Generate ideas",value:"brainstorm"},{text:"Review my work",value:"review"},{text:"Explain a concept",value:"explain"},{text:"Ask a question",value:"question"}],o=a("forge-ai-suggestions-select");return s`
      <div style="width: 420px;">
        <forge-ai-suggestions
          .suggestions=${t}
          @forge-ai-suggestions-select=${o}></forge-ai-suggestions>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const v=["Demo"];export{e as Demo,v as __namedExportsOrder,d as default};

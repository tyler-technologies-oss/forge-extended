import{x as i}from"./iframe-CaheMlEz.js";import"./ai-suggestions-j3rn9dm3.js";import"./custom-element-BhZVzxrc.js";import"./property-CAeim165.js";import"./index-pgaslzZB.js";import"./base-adapter-waYCpIou.js";import"./base-button-adapter-DgVeaHhr.js";import"./icon-registry-BqiawAn8.js";import"./with-default-aria-ByjeZAL8.js";import"./utils-DDUGSWJu.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,r="forge-ai-suggestions",f={title:"AI/Primitives/Suggestions",component:r,argTypes:{variant:{control:"select",options:["inline","block"],description:"Display variant for suggestions layout"}},args:{variant:"inline"},render:t=>{const o=[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"},{text:"Translate text",value:"translate"},{text:"Generate ideas",value:"brainstorm"},{text:"Review my work",value:"review"},{text:"Explain a concept",value:"explain"},{text:"Ask a question",value:"question"}],a=s("forge-ai-suggestions-select");return i`
      <div style="width: 420px;">
        <forge-ai-suggestions
          .suggestions=${o}
          variant=${t.variant}
          @forge-ai-suggestions-select=${a}></forge-ai-suggestions>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const _=["Demo"];export{e as Demo,_ as __namedExportsOrder,f as default};

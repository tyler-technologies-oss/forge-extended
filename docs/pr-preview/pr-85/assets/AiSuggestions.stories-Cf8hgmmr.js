import{x as i}from"./iframe-Dd8pSn9E.js";import"./ai-suggestions-Dlt0ZHXW.js";import"./custom-element-BhZVzxrc.js";import"./property-BGv0PVOX.js";import"./index-5gCMUPyE.js";import"./base-adapter-CwqK-YEQ.js";import"./base-button-adapter-qsJbDomH.js";import"./icon-registry-m82pY_3b.js";import"./with-default-aria-DN9qROpx.js";import"./utils-DDUGSWJu.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,r="forge-ai-suggestions",f={title:"AI/Primitives/Suggestions",component:r,argTypes:{variant:{control:"select",options:["inline","block"],description:"Display variant for suggestions layout"}},args:{variant:"inline"},render:t=>{const o=[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"},{text:"Translate text",value:"translate"},{text:"Generate ideas",value:"brainstorm"},{text:"Review my work",value:"review"},{text:"Explain a concept",value:"explain"},{text:"Ask a question",value:"question"}],a=s("forge-ai-suggestions-select");return i`
      <div style="width: 420px;">
        <forge-ai-suggestions
          .suggestions=${o}
          variant=${t.variant}
          @forge-ai-suggestions-select=${a}></forge-ai-suggestions>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const _=["Demo"];export{e as Demo,_ as __namedExportsOrder,f as default};

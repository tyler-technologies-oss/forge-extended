import{x as i}from"./iframe-BnpUnHSo.js";import"./ai-suggestions-BVSgiY-_.js";import"./custom-element-BhZVzxrc.js";import"./property-DTQCPcIE.js";import"./index-D2GImMmx.js";import"./base-adapter-lXQVMoo0.js";import"./base-button-adapter-DFcHPbWl.js";import"./icon-registry-BNnTIaNc.js";import"./with-default-aria-Cx6kW1xn.js";import"./utils-DDUGSWJu.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,r="forge-ai-suggestions",f={title:"AI/Primitives/Suggestions",component:r,argTypes:{variant:{control:"select",options:["inline","block"],description:"Display variant for suggestions layout"}},args:{variant:"inline"},render:t=>{const o=[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"},{text:"Translate text",value:"translate"},{text:"Generate ideas",value:"brainstorm"},{text:"Review my work",value:"review"},{text:"Explain a concept",value:"explain"},{text:"Ask a question",value:"question"}],a=s("forge-ai-suggestions-select");return i`
      <div style="width: 420px;">
        <forge-ai-suggestions
          .suggestions=${o}
          variant=${t.variant}
          @forge-ai-suggestions-select=${a}></forge-ai-suggestions>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const _=["Demo"];export{e as Demo,_ as __namedExportsOrder,f as default};

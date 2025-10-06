import{x as s}from"./iframe-ChM2Ou9X.js";import"./ai-suggestions-CXw768kx.js";import"./custom-element-BhZVzxrc.js";import"./property-C-gvHGFk.js";import"./index-BSHcOM15.js";import"./with-default-aria-Cz2vU3mx.js";import"./utils-Bn45QkHx.js";import"./icon-registry-B-sY0Bl5.js";import"./base-button-adapter-2XY7Njr1.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,r="forge-ai-suggestions",d={title:"AI/Primitives/Suggestions",component:r,argTypes:{variant:{control:"select",options:["inline","block"],description:"Display variant for suggestions layout"}},args:{variant:"inline"},render:t=>{const a=[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"},{text:"Translate text",value:"translate"},{text:"Generate ideas",value:"brainstorm"},{text:"Review my work",value:"review"},{text:"Explain a concept",value:"explain"},{text:"Ask a question",value:"question"}],o=i("forge-ai-suggestions-select");return s`
      <div style="width: 420px;">
        <forge-ai-suggestions
          .suggestions=${a}
          variant=${t.variant}
          @forge-ai-suggestions-select=${o}></forge-ai-suggestions>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const f=["Demo"];export{e as Demo,f as __namedExportsOrder,d as default};

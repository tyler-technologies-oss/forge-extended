import{x as o}from"./iframe-DSIgYrvx.js";import"./ai-suggestions-C7G0rBxL.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,n="forge-ai-suggestions",r={title:"AI/Primitives/Suggestions",component:n,argTypes:{variant:{control:"select",options:["inline","block"],description:"Display variant for suggestions layout"}},args:{variant:"inline"},render:t=>{const s=[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"},{text:"Translate text",value:"translate"},{text:"Generate ideas",value:"brainstorm"},{text:"Review my work",value:"review"},{text:"Explain a concept",value:"explain"},{text:"Ask a question",value:"question"}],a=i("forge-ai-suggestions-select");return o`
      <div style="width: 420px;">
        <forge-ai-suggestions
          .suggestions=${s}
          variant=${t.variant}
          @forge-ai-suggestions-select=${a}></forge-ai-suggestions>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const l=["Demo"],c=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:l,default:r},Symbol.toStringTag,{value:"Module"}));export{c as A,e as D};

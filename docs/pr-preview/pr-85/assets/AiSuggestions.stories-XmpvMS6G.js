import{x as s}from"./iframe-BELQzk-g.js";import"./ai-suggestions-Cmx9P7jx.js";import"./custom-element-BhZVzxrc.js";import"./property-Cve3l9r7.js";import"./index-qBXpUfNp.js";import"./with-default-aria-B0WmA3AF.js";import"./icon-registry-DPCMHHji.js";import"./base-button-adapter-3KtV6PFv.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,r="forge-ai-suggestions",x={title:"AI/AI Suggestions",component:r,render:()=>{const t=[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"},{text:"Translate text",value:"translate"},{text:"Generate ideas",value:"brainstorm"},{text:"Review my work",value:"review"},{text:"Explain a concept",value:"explain"},{text:"Ask a question",value:"question"}],o=a("forge-ai-suggestions-select");return s`
      <div style="width: 420px;">
        <forge-ai-suggestions
          .suggestions=${t}
          @forge-ai-suggestions-select=${o}></forge-ai-suggestions>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const d=["Demo"];export{e as Demo,d as __namedExportsOrder,x as default};

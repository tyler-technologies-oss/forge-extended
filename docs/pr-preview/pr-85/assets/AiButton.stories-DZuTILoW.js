import{x as o}from"./iframe-B37UJEmP.js";import"./ai-button-C7P5pMLA.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,r="forge-ai-button",a=n("click"),c={title:"AI/AI Button",component:r,render:e=>o`
      <forge-ai-button .variant=${e.variant} .disabled=${e.disabled} .type=${e.type} @click=${a}>
        ${e.content}
      </forge-ai-button>
    `,argTypes:{disabled:{control:"boolean",description:"Whether the button is disabled"},content:{control:"text",description:"The text content of the button"}},args:{variant:"raised",disabled:!1,type:"button",content:"AI Assistant"}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const i=["Demo"],l=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:i,default:c},Symbol.toStringTag,{value:"Module"}));export{l as A,t as D};

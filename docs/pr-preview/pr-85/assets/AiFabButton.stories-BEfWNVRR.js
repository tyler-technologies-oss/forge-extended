import{x as r}from"./iframe-B8HCYLYZ.js";import"./ai-fab-button-BW7NBN-f.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-fab-button",a=n("click"),c={title:"AI/AI FAB Button",component:s,render:o=>r`
      <forge-ai-fab-button .disabled=${o.disabled} .extended=${o.extended} @click=${a}>
        ${o.content}
      </forge-ai-fab-button>
    `,argTypes:{disabled:{control:"boolean",description:"Whether the button is disabled"},extended:{control:"boolean",description:"Whether the button is extended"},content:{control:"text",description:"The text content of the button"}},args:{disabled:!1,extended:!1,content:"AI Assistant"}},e={},t={args:{disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const d=["Demo","Disabled"],b=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,Disabled:t,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{b as A,e as D};

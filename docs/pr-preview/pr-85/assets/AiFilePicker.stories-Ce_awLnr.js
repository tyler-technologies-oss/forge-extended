import{x as c}from"./iframe-H7I6SA_0.js";import{s as n}from"./utils-Bgw3xfrQ.js";import"./ai-file-picker-ByNsnc3m.js";import{d as p}from"./index-Bhgu7eTI.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__;p();const m="forge-ai-file-picker",u=d("forge-ai-file-picker-change"),f={title:"AI/Primitives/File Picker",component:m,render:e=>{function l(i){u(i.detail),console.log("File selected:",i.detail.file)}return c`
      <forge-stack gap="24">
        <forge-ai-file-picker
          .variant=${e.variant}
          .disabled=${e.disabled}
          .accept=${e.accept}
          .multiple=${e.multiple}
          @forge-ai-file-picker-change=${l}>
          ${e.variant==="button"?"Upload File":c`<forge-icon slot="icon" name="add"></forge-icon>`}
        </forge-ai-file-picker>
        <div>Selected file details will appear in the Actions tab below when a file is selected.</div>
      </forge-stack>
    `},argTypes:{variant:{control:"select",options:["button","icon-button"],description:"The variant of the file picker button"},disabled:{control:"boolean",description:"Whether the file picker is disabled"},accept:{control:"text",description:"Accepted file types (comma-separated MIME types or extensions)"},multiple:{control:"boolean",description:"Whether to allow multiple file selection"}},args:{variant:"button",disabled:!1,accept:"",multiple:!1}},a={...n},t={...n,args:{variant:"icon-button"}},r={...n,args:{accept:"image/*"}},o={...n,args:{multiple:!0}},s={...n,args:{disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  args: {
    variant: 'icon-button'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  args: {
    accept: 'image/*'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  args: {
    multiple: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  args: {
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const g=["Demo","IconButton","ImageOnly","Multiple","Disabled"],k=Object.freeze(Object.defineProperty({__proto__:null,Demo:a,Disabled:s,IconButton:t,ImageOnly:r,Multiple:o,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{k as A,a as D,t as I,o as M,r as a,s as b};

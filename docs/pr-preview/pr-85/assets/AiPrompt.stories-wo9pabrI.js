import{x as e}from"./iframe-GUQN7YWx.js";import"./ai-prompt-bHJocN4g.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,a="forge-ai-prompt",i={title:"AI/AI Prompt",component:a,argTypes:{variant:{control:"select",options:["stacked","inline"],description:"Layout variant for the prompt component"},placeholder:{control:"text",description:"Placeholder text for the input field"},showAdditionalAction:{control:"boolean",description:"Show additional action button (only visible in stacked variant)"}},args:{variant:"stacked",placeholder:"Ask a question...",showAdditionalAction:!1},render:t=>{const n=r("forge-ai-prompt-send");return e`
      <forge-ai-prompt variant=${t.variant} placeholder=${t.placeholder} @forge-ai-prompt-send=${n}>
        ${t.showAdditionalAction?e`
              <forge-button slot="additional-action" type="button"> Optional Button 1 </forge-button>
              <forge-button slot="additional-action" type="button"> Optional Button 2 </forge-button>
            `:""}
      </forge-ai-prompt>
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const p=["Demo"],l=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:p,default:i},Symbol.toStringTag,{value:"Module"}));export{l as A,o as D};

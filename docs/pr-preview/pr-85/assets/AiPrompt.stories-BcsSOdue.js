import{x as i}from"./iframe-BQrsiEyh.js";import"./ai-prompt-ul687qZC.js";import"./prompt-button-D2j5yW4Y.js";import"./ai-dropdown-menu-cg2jn39q.js";import"./ai-voice-input-BNM9fGJ2.js";import{I as p,e as s,c as d,a as c,t as m}from"./icon-registry-DH_mpcNN.js";import{d as l}from"./index-DeQitNSN.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__;l();p.define([s,d,c,m]);const f="forge-ai-prompt",u={title:"AI/Primitives/Prompt",component:f,argTypes:{variant:{control:"select",options:["stacked","inline"],description:"Layout variant for the prompt component"},placeholder:{control:"text",description:"Placeholder text for the input field"}},args:{variant:"stacked",placeholder:"Ask a question..."},render:e=>{const t=g("forge-ai-prompt-send"),r=a=>{const n=document.querySelector("forge-ai-prompt");n&&(n.value=a.detail.transcript)};return i`
      <forge-ai-prompt variant=${e.variant} placeholder=${e.placeholder} @forge-ai-prompt-send=${t}>
        <forge-ai-dropdown-menu variant="icon-button" selection-mode="none" slot="actions">
          <span slot="trigger-content">
            <forge-icon-button>
              <forge-icon name="add"></forge-icon>
            </forge-icon-button>
          </span>

          <forge-ai-dropdown-menu-item value="gpt-4.1">
            <span>Add image</span>
            <!-- <span slot="description">More capable, advanced reasoning</span> -->
            <forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>

          <forge-ai-dropdown-menu-item value="gpt-4">
            <span>Add video</span>
            <!-- <span slot="description">Advanced reasoning capabilities</span> -->
            <forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu>
        <forge-ai-voice-input slot="actions" @forge-ai-voice-input-result=${r}></forge-ai-voice-input>
        <forge-prompt-button slot="actions">
          <forge-icon name="web_alt" slot="leading"></forge-icon>
          Web search
        </forge-prompt-button>
        <forge-ai-dropdown-menu variant="button" selection-mode="single" slot="actions">
          <span slot="trigger-content">GPT-4</span>
          <forge-icon name="arrow_drop_down" slot="end"></forge-icon>

          <forge-ai-dropdown-menu-item value="gpt-4">
            <span>GPT-4</span>
          </forge-ai-dropdown-menu-item>

          <forge-ai-dropdown-menu-item value="gpt-3.5">
            <span>GPT-3.5</span>
          </forge-ai-dropdown-menu-item>

          <forge-ai-dropdown-menu-item value="claude-3">
            <span>Claude-3</span>
          </forge-ai-dropdown-menu-item>
        </forge-ai-dropdown-menu>
      </forge-ai-prompt>
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const v=["Demo"],O=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:v,default:u},Symbol.toStringTag,{value:"Module"}));export{O as A,o as D};

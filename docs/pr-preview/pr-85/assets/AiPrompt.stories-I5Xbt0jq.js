import{x as c}from"./iframe-CreInDM6.js";import"./ai-prompt-46cEO_NE.js";import"./prompt-button-CLyuVrgu.js";import"./ai-dropdown-menu-DZ5K4xAz.js";import"./ai-voice-input-NBk8JHnS.js";import"./ai-file-picker-CuuYWyPn.js";import{I as s,e as l,c as d,a as m,t as f}from"./icon-registry-CwmqUg58.js";import{d as g}from"./index-DgE_wAYr.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__;g();s.define([l,d,m,f]);const u="forge-ai-prompt",v={title:"AI/Primitives/Prompt",component:u,argTypes:{variant:{control:"select",options:["stacked","inline"],description:"Layout variant for the prompt component"},placeholder:{control:"text",description:"Placeholder text for the input field"}},args:{variant:"stacked",placeholder:"Ask a question..."},render:t=>{const a=n("forge-ai-prompt-send"),i=e=>{const r=document.querySelector("forge-ai-prompt");r&&(r.value=e.detail.transcript)},p=e=>{console.log("File selected:",e.detail.file.name),n("forge-ai-file-picker-change")(e.detail)};return c`
      <forge-ai-prompt variant=${t.variant} placeholder=${t.placeholder} @forge-ai-prompt-send=${a}>
        <forge-ai-file-picker variant="icon-button" slot="actions" @forge-ai-file-picker-change=${p}>
          <forge-icon slot="icon" name="add"></forge-icon>
        </forge-ai-file-picker>
        <forge-ai-voice-input slot="actions" @forge-ai-voice-input-result=${i}></forge-ai-voice-input>
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
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const _=["Demo"],S=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:_,default:v},Symbol.toStringTag,{value:"Module"}));export{S as A,o as D};

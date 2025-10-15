import{x as r}from"./iframe-Dj2Wx9s_.js";import"./ai-voice-input-BbQUKkbb.js";import{d as i}from"./index-DQl7dnM0.js";i();const n="forge-ai-voice-input",a={title:"AI/Primitives/Voice Input",component:n,render:()=>r`
      <forge-stack gap="24">
        <forge-ai-voice-input @forge-ai-voice-input-result=${t=>{const o=document.getElementById("result");o&&(o.textContent=`"${t.detail.transcript}" (confidence: ${Math.round(t.detail.confidence*100)}%)`)}}></forge-ai-voice-input>
        <div>Result: <span id="result">Click the microphone and speak...</span></div>
      </forge-stack>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const s=["Demo"],l=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:s,default:a},Symbol.toStringTag,{value:"Module"}));export{l as A,e as D};

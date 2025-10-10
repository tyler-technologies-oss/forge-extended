import{r as g,i as u,x as l}from"./iframe-BeV46OhB.js";import{t as d}from"./custom-element-BhZVzxrc.js";import{r as f}from"./state-CJP416Qf.js";import{I as m,u as h}from"./icon-registry-q_llhbr2.js";import{d as _}from"./index-sqROEyqE.js";import{d as v}from"./index-emeK4iFB.js";const b=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */.ai-voice-input{display:inline-flex;align-items:center;justify-content:center}.ai-voice-input forge-icon-button.recording{position:relative;animation:pulse 1.5s ease-in-out infinite;--forge-icon-button-background-color: transparent}.ai-voice-input forge-icon-button.recording:before{content:"";position:absolute;top:50%;left:50%;width:100%;height:100%;border-radius:50%;background-color:var(--forge-theme-error-container-low, #f6e0e4);transform:translate(-50%,-50%) scale(0);animation:pulse-ring 1.5s ease-in-out infinite;z-index:-1}@keyframes pulse{0%{transform:scale(1);opacity:1}50%{transform:scale(1.1);opacity:.7}to{transform:scale(1);opacity:1}}@keyframes pulse-ring{0%{transform:translate(-50%,-50%) scale(1);opacity:.8}50%{transform:translate(-50%,-50%) scale(1.3);opacity:.4}to{transform:translate(-50%,-50%) scale(1.6);opacity:0}}`;var R=Object.defineProperty,y=Object.getOwnPropertyDescriptor,p=(n,e,t,o)=>{for(var i=o>1?void 0:o?y(e,t):e,c=n.length-1,a;c>=0;c--)(a=n[c])&&(i=(o?a(e,t,i):a(i))||i);return o&&i&&R(e,t,i),i};_();m.define([h]);const S="forge-ai-voice-input";let s=class extends u{constructor(){super(...arguments),this._isRecording=!1,this._recognition=null}connectedCallback(){super.connectedCallback(),this._initializeSpeechRecognition()}_initializeSpeechRecognition(){const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){console.warn("Speech Recognition is not supported in this browser");return}this._recognition=new n,this._recognition.continuous=!1,this._recognition.interimResults=!1,this._recognition.lang="en-US",this._recognition.onstart=()=>{this._isRecording=!0},this._recognition.onend=()=>{this._isRecording=!1},this._recognition.onerror=()=>{this._isRecording=!1},this._recognition.onresult=e=>{if(e.results.length>0){const t=e.results[0];if(t.length>0){const o=t[0],i={transcript:o.transcript,confidence:o.confidence};this.dispatchEvent(new CustomEvent("forge-ai-voice-input-result",{detail:i,bubbles:!0}))}}}}_toggleRecording(){this._recognition&&(this._isRecording?this._recognition.stop():this._recognition.start())}render(){return l`
      <div class="ai-voice-input">
        <forge-icon-button
          theme=${this._isRecording?"error":""}
          class=${this._isRecording?"recording":""}
          @click=${this._toggleRecording}
          aria-label=${this._isRecording?"Stop recording":"Start recording"}
          ?disabled=${!this._recognition}>
          <forge-icon name="mic"></forge-icon>
        </forge-icon-button>
      </div>
    `}};s.styles=g(b);p([f()],s.prototype,"_isRecording",2);s=p([d(S)],s);v();const w="forge-ai-voice-input",C={title:"AI/Primitives/Voice Input",component:w,render:()=>l`
      <forge-stack gap="24">
        <forge-ai-voice-input @forge-ai-voice-input-result=${e=>{const t=document.getElementById("result");t&&(t.textContent=`"${e.detail.transcript}" (confidence: ${Math.round(e.detail.confidence*100)}%)`)}}></forge-ai-voice-input>
        <div>Result: <span id="result">Click the microphone and speak...</span></div>
      </forge-stack>
    `},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const I=["Demo"],P=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:I,default:C},Symbol.toStringTag,{value:"Module"}));export{P as A,r as D};

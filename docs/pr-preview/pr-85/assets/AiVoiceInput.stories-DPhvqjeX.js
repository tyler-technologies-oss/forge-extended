import{r as p,i as u,x as l}from"./iframe-C3fo8bEJ.js";import{t as d}from"./custom-element-BhZVzxrc.js";import{r as f}from"./state-BPLo0cBI.js";import{I as h,u as m}from"./icon-registry-CfgxRLEi.js";import{d as _}from"./index-BxZ1AGSF.js";import{d as v}from"./index-DB7f3ksC.js";const b=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */.ai-voice-input{display:inline-flex;align-items:center;justify-content:center}.ai-voice-input forge-icon-button.recording{animation:pulse 1.5s ease-in-out infinite}@keyframes pulse{0%{transform:scale(1);opacity:1;--forge-icon-button-background-color: transparent}50%{transform:scale(1.1);opacity:.7;--forge-icon-button-background-color: var(--forge-theme-error-container, #ecc2c9)}to{transform:scale(1);opacity:1;--forge-icon-button-background-color: transparent}}`;var R=Object.defineProperty,y=Object.getOwnPropertyDescriptor,g=(n,e,t,o)=>{for(var i=o>1?void 0:o?y(e,t):e,c=n.length-1,a;c>=0;c--)(a=n[c])&&(i=(o?a(e,t,i):a(i))||i);return o&&i&&R(e,t,i),i};_();h.define([m]);const S="forge-ai-voice-input";let s=class extends u{constructor(){super(...arguments),this._isRecording=!1,this._recognition=null}connectedCallback(){super.connectedCallback(),this._initializeSpeechRecognition()}_initializeSpeechRecognition(){const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){console.warn("Speech Recognition is not supported in this browser");return}this._recognition=new n,this._recognition.continuous=!1,this._recognition.interimResults=!1,this._recognition.lang="en-US",this._recognition.onstart=()=>{this._isRecording=!0},this._recognition.onend=()=>{this._isRecording=!1},this._recognition.onerror=()=>{this._isRecording=!1},this._recognition.onresult=e=>{if(e.results.length>0){const t=e.results[0];if(t.length>0){const o=t[0],i={transcript:o.transcript,confidence:o.confidence};this.dispatchEvent(new CustomEvent("forge-ai-voice-input-result",{detail:i,bubbles:!0}))}}}}_toggleRecording(){this._recognition&&(this._isRecording?this._recognition.stop():this._recognition.start())}render(){return l`
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
    `}};s.styles=p(b);g([f()],s.prototype,"_isRecording",2);s=g([d(S)],s);v();const C="forge-ai-voice-input",w={title:"AI/Primitives/Voice Input",component:C,render:()=>l`
      <forge-stack gap="24">
        <forge-ai-voice-input @forge-ai-voice-input-result=${e=>{const t=document.getElementById("result");t&&(t.textContent=`"${e.detail.transcript}" (confidence: ${Math.round(e.detail.confidence*100)}%)`)}}></forge-ai-voice-input>
        <div>Result: <span id="result">Click the microphone and speak...</span></div>
      </forge-stack>
    `},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const I=["Demo"],P=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:I,default:w},Symbol.toStringTag,{value:"Module"}));export{P as A,r as D};

import{r as l,i as g,x as p}from"./iframe-xC0vBhGT.js";import{t as f}from"./custom-element-BhZVzxrc.js";import{r as u}from"./state-BCrvFT3x.js";import{I as h,q as d}from"./icon-registry-ChndCm7L.js";import{d as m}from"./index-DK3gNycP.js";const _=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */.ai-voice-input{display:inline-flex;align-items:center;justify-content:center}.ai-voice-input forge-icon-button.recording{position:relative;animation:pulse 1.5s ease-in-out infinite;--forge-icon-button-background-color: transparent}.ai-voice-input forge-icon-button.recording:before{content:"";position:absolute;top:50%;left:50%;width:100%;height:100%;border-radius:50%;background-color:var(--forge-theme-error-container-low, #f6e0e4);transform:translate(-50%,-50%) scale(0);animation:pulse-ring 1.5s ease-in-out infinite;z-index:-1}@keyframes pulse{0%{transform:scale(1);opacity:1}50%{transform:scale(1.1);opacity:.7}to{transform:scale(1);opacity:1}}@keyframes pulse-ring{0%{transform:translate(-50%,-50%) scale(1);opacity:.8}50%{transform:translate(-50%,-50%) scale(1.3);opacity:.4}to{transform:translate(-50%,-50%) scale(1.6);opacity:0}}`;var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,a=(o,i,t,n)=>{for(var e=n>1?void 0:n?v(i,t):i,s=o.length-1,c;s>=0;s--)(c=o[s])&&(e=(n?c(i,t,e):c(e))||e);return n&&e&&b(i,t,e),e};m();h.define([d]);const R="forge-ai-voice-input";let r=class extends g{constructor(){super(...arguments),this._isRecording=!1,this._recognition=null}connectedCallback(){super.connectedCallback(),this._initializeSpeechRecognition()}_initializeSpeechRecognition(){const o=window.SpeechRecognition||window.webkitSpeechRecognition;if(!o){console.warn("Speech Recognition is not supported in this browser");return}this._recognition=new o,this._recognition.continuous=!1,this._recognition.interimResults=!1,this._recognition.lang="en-US",this._recognition.onstart=()=>{this._isRecording=!0},this._recognition.onend=()=>{this._isRecording=!1},this._recognition.onerror=()=>{this._isRecording=!1},this._recognition.onresult=i=>{if(i.results.length>0){const t=i.results[0];if(t.length>0){const n=t[0],e={transcript:n.transcript,confidence:n.confidence};this.dispatchEvent(new CustomEvent("forge-ai-voice-input-result",{detail:e,bubbles:!0}))}}}}_toggleRecording(){this._recognition&&(this._isRecording?this._recognition.stop():this._recognition.start())}render(){return p`
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
    `}};r.styles=l(_);a([u()],r.prototype,"_isRecording",2);r=a([f(R)],r);

import{x as t}from"./iframe-QzzbqrfA.js";import{I as r,l as c,m as a,k as s,c as i,n as m}from"./icon-registry-DkZ9Rd4X.js";import"./multi-select-header-DKCXWGjz.js";import{d}from"./index-DH5HdI6V.js";import{d as f}from"./index-Ci8QZ6cV.js";import{d as p}from"./index-BnlTki3l.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__;d();f();p();r.define([c,a,s,i,m]);const g="forge-multi-select-header",x={title:"Components/Multi Select Header",component:g,render:o=>{const n=u("forge-multi-select-header-select-all"),l=[{label:"Export as a PDF",value:"option-1",icon:"file_pdf",leadingIconType:"component"},{label:"Export to Excel",value:"option-2",icon:"file_excel",leadingIconType:"component"}];return t`
      <forge-multi-select-header
        .text=${o.text}
        .noBorder=${o.noBorder}
        @forge-multi-select-header-select-all=${n}>
        ${o.selectAllText?t`<span slot="select-all-button-text">${o.selectAllText}</span>`:""}
        <forge-icon-button slot="actions" aria-label="Select all items">
          <forge-icon name="download"></forge-icon>
        </forge-icon-button>
        <forge-icon-button slot="actions" aria-label="Clear selection">
          <forge-icon name="delete"></forge-icon>
        </forge-icon-button>
        <forge-menu slot="actions" .options=${l}>
          <forge-icon-button aria-label="More actions">
            <forge-icon name="more_vert"></forge-icon>
          </forge-icon-button>
        </forge-menu>
      </forge-multi-select-header>
    `},argTypes:{text:{control:"text"},noBorder:{control:"boolean"},selectAllText:{control:"text"}},args:{text:"3 items selected",noBorder:!1,selectAllText:"Select All"}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const b=["Demo"],A=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:b,default:x},Symbol.toStringTag,{value:"Module"}));export{e as D,A as M};

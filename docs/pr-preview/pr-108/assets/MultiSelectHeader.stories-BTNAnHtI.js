import{x as t}from"./iframe-D-b265Qe.js";import{I as r,m as c,u as a,j as s,k as i,v as m}from"./base-lit-element-CHK6hcJb.js";import"./multi-select-header-Tszeg4pU.js";import{d}from"./index-Db7SBkgZ.js";import{d as f}from"./index-DatREZyY.js";import{d as p}from"./index-j42Td1BD.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__;d();f();p();r.define([c,a,s,i,m]);const g="forge-multi-select-header",x={title:"Components/Multi Select Header",component:g,render:o=>{const n=u("forge-multi-select-header-select-all"),l=[{label:"Export as a PDF",value:"option-1",icon:"file_pdf",leadingIconType:"component"},{label:"Export to Excel",value:"option-2",icon:"file_excel",leadingIconType:"component"}];return t`
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

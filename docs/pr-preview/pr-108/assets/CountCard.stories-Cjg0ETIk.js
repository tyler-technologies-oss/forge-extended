import{E as o,x as t}from"./iframe-C4xYzNeS.js";import{I as n,q as a}from"./base-lit-element-CA1-SNEn.js";import"./count-card-D8dpFwXW.js";import{d as l}from"./index-bSInoyeR.js";import{d as s}from"./index-DFUXNcdM.js";l();s();n.define([a]);const c="forge-count-card",d={title:"Components/Count Card",component:c,render:e=>t`
      <div style="width: 320px;">
        <forge-count-card theme=${e.theme||o} ?no-border=${e.noBorder}>
          ${e.showIcon?t`<forge-icon slot="icon" name="attach_money"></forge-icon>`:o}
          ${e.showLabel?t`<span slot="label">${e.labelText}</span>`:o}
          ${e.showHeaderEnd?t`<forge-badge slot="header-end" theme=${e.theme||o}>${e.badgeText}</forge-badge>`:o}
          <span slot="count">${e.countText}</span>
          ${e.showFullWidth?t`
                <svg slot="full-width" viewBox="0 0 200 40" style="width: 100%; display: block;">
                  <polyline
                    fill="none"
                    stroke="var(--forge-theme-primary)"
                    stroke-width="2"
                    points="0,35 20,30 40,32 60,25 80,28 100,20 120,22 140,15 160,18 180,10 200,5" />
                </svg>
              `:o}
        </forge-count-card>
      </div>
    `,argTypes:{theme:{control:"select",options:["primary","secondary","tertiary","success","error","warning","info","info-secondary"],description:"Theme variant applied to the card",table:{category:"Properties"}},noBorder:{control:"boolean",description:"Hide the card border",table:{category:"Properties"}},showIcon:{control:"boolean",description:"Toggle the icon slot",table:{category:"Slots"}},showLabel:{control:"boolean",description:"Toggle the label slot",table:{category:"Slots"}},showHeaderEnd:{control:"boolean",description:"Toggle the header-end slot (badge)",table:{category:"Slots"}},showFullWidth:{control:"boolean",description:"Toggle the full-width slot (sparkline)",table:{category:"Slots"}},labelText:{control:"text",description:"Label text content",table:{category:"Content"}},countText:{control:"text",description:"Count text content",table:{category:"Content"}},badgeText:{control:"text",description:"Badge text content",table:{category:"Content"}}},args:{theme:"primary",noBorder:!1,showIcon:!0,showLabel:!0,showHeaderEnd:!0,showFullWidth:!1,labelText:"Tomorrows money",countText:"$303.33",badgeText:"+12%"}},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const i=["Demo"],u=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:i,default:d},Symbol.toStringTag,{value:"Module"}));export{u as C,r as D};

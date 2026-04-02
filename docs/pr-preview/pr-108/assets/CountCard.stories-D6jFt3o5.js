import{E as n,x as o}from"./iframe-DuhvI10w.js";import{I as r,o as a}from"./base-lit-element-CAsKKKY4.js";import"./count-card-DyWuf7pv.js";import{d as l}from"./index-DtJ9J61N.js";import{d as s}from"./index-C7IY5EK6.js";l();s();r.define([a]);const c="forge-count-card",d={title:"Components/Count Card",component:c,render:e=>o`
      <div style="width: 320px;">
        <forge-count-card ?tonal=${e.tonal}>
          ${e.showIcon?o`<forge-icon slot="icon" name="attach_money"></forge-icon>`:n}
          ${e.showLabel?o`<span slot="label">${e.labelText}</span>`:n}
          ${e.showHeaderEnd?o`<forge-badge slot="header-end" theme=${e.badgeTheme}>${e.badgeText}</forge-badge>`:n}
          <span slot="count">${e.countText}</span>
          ${e.showFullWidth?o`
                <svg slot="full-width" viewBox="0 0 200 40" style="width: 100%; display: block;">
                  <polyline
                    fill="none"
                    stroke="var(--forge-theme-primary)"
                    stroke-width="2"
                    points="0,35 20,30 40,32 60,25 80,28 100,20 120,22 140,15 160,18 180,10 200,5" />
                </svg>
              `:n}
        </forge-count-card>
      </div>
    `,argTypes:{tonal:{control:"boolean",description:"Apply tonal styling to the card",table:{category:"Properties"}},showIcon:{control:"boolean",description:"Toggle the icon slot",table:{category:"Slots"}},showLabel:{control:"boolean",description:"Toggle the label slot",table:{category:"Slots"}},showHeaderEnd:{control:"boolean",description:"Toggle the header-end slot (badge)",table:{category:"Slots"}},showFullWidth:{control:"boolean",description:"Toggle the full-width slot (sparkline)",table:{category:"Slots"}},labelText:{control:"text",description:"Label text content",table:{category:"Content"}},countText:{control:"text",description:"Count text content",table:{category:"Content"}},badgeText:{control:"text",description:"Badge text content",table:{category:"Content"}},badgeTheme:{control:"select",options:["primary","secondary","tertiary","success","error","warning","info"],description:"Badge theme variant",table:{category:"Badge"}}},args:{tonal:!1,showIcon:!0,showLabel:!0,showHeaderEnd:!0,showFullWidth:!1,labelText:"Tomorrows money",countText:"$303.33",badgeText:"+12%",badgeTheme:"success"}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const i=["Demo"],u=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:i,default:d},Symbol.toStringTag,{value:"Module"}));export{u as C,t as D};

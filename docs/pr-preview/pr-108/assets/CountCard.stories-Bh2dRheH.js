import{E as n,x as o}from"./iframe-C5gKD9mH.js";import{I as r,n as a}from"./icon-registry-DLm4iQXa.js";import"./count-badge-Bjpt8POm.js";import{d as l}from"./index-Ccg1Rz9U.js";l();r.define([a]);const s="forge-count-card",c={title:"Components/Count Card",component:s,render:e=>o`
      <div style="width: 320px;">
        <forge-count-card>
          ${e.showIcon?o`<forge-icon slot="icon" name="attach_money"></forge-icon>`:n}
          ${e.showLabel?o`<span slot="label">${e.labelText}</span>`:n}
          ${e.showHeaderEnd?o`<forge-count-badge slot="header-end" theme=${e.badgeTheme}>${e.badgeText}</forge-count-badge>`:n}
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
    `,argTypes:{showIcon:{control:"boolean",description:"Toggle the icon slot",table:{category:"Slots"}},showLabel:{control:"boolean",description:"Toggle the label slot",table:{category:"Slots"}},showHeaderEnd:{control:"boolean",description:"Toggle the header-end slot (badge)",table:{category:"Slots"}},showFullWidth:{control:"boolean",description:"Toggle the full-width slot (sparkline)",table:{category:"Slots"}},labelText:{control:"text",description:"Label text content",table:{category:"Content"}},countText:{control:"text",description:"Count text content",table:{category:"Content"}},badgeText:{control:"text",description:"Badge text content",table:{category:"Content"}},badgeTheme:{control:"select",options:["primary","secondary","tertiary","success","error","warning","info"],description:"Badge theme variant",table:{category:"Badge"}}},args:{showIcon:!0,showLabel:!0,showHeaderEnd:!0,showFullWidth:!1,labelText:"Tomorrows money",countText:"$303.33",badgeText:"+12%",badgeTheme:"success"}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const d=["Demo"],h=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{h as C,t as D};

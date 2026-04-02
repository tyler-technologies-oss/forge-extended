import{E as t,x as o}from"./iframe-D2cfH8Ci.js";import{I as r,n as l}from"./icon-registry-Bk9DTUbA.js";import"./count-badge-D1OrGN_n.js";import{d as a}from"./index-DhmB2amE.js";a();r.define([l]);const s="forge-count-card",c={title:"Components/Count Card",component:s,render:e=>o`
      <div style="width: 320px;">
        <forge-count-card>
          ${e.showIcon?o`<forge-icon slot="icon" name="attach_money"></forge-icon>`:t}
          ${e.showLabel?o`<span slot="label">${e.labelText}</span>`:t}
          ${e.showHeaderEnd?o`<forge-count-badge slot="header-end" theme=${e.badgeTheme}>${e.badgeText}</forge-count-badge>`:t}
          ${e.showCount?o`<span slot="count">${e.countText}</span>`:t}
          ${e.showFullBleed?o`
                <svg slot="full-bleed" viewBox="0 0 200 40" style="width: 100%; display: block;">
                  <polyline
                    fill="none"
                    stroke="var(--forge-theme-primary)"
                    stroke-width="2"
                    points="0,35 20,30 40,32 60,25 80,28 100,20 120,22 140,15 160,18 180,10 200,5" />
                </svg>
              `:t}
        </forge-count-card>
      </div>
    `,argTypes:{showIcon:{control:"boolean",description:"Toggle the icon slot",table:{category:"Slots"}},showLabel:{control:"boolean",description:"Toggle the label slot",table:{category:"Slots"}},showHeaderEnd:{control:"boolean",description:"Toggle the header-end slot (badge)",table:{category:"Slots"}},showCount:{control:"boolean",description:"Toggle the count slot",table:{category:"Slots"}},showFullBleed:{control:"boolean",description:"Toggle the full-bleed slot (sparkline)",table:{category:"Slots"}},labelText:{control:"text",description:"Label text content",table:{category:"Content"}},countText:{control:"text",description:"Count text content",table:{category:"Content"}},badgeText:{control:"text",description:"Badge text content",table:{category:"Content"}},badgeTheme:{control:"select",options:["primary","secondary","tertiary","success","error","warning","info"],description:"Badge theme variant",table:{category:"Badge"}}},args:{showIcon:!0,showLabel:!0,showHeaderEnd:!0,showCount:!0,showFullBleed:!1,labelText:"Tomorrows money",countText:"$303.33",badgeText:"+12%",badgeTheme:"success"}},n={};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};const d=["Demo"],u=Object.freeze(Object.defineProperty({__proto__:null,Demo:n,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{u as C,n as D};

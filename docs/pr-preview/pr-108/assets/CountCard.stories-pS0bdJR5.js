import{E as o,x as t}from"./iframe-DwMgCYtb.js";import{I as r,q as l}from"./with-default-aria-CfDmXVrN.js";import"./count-card-DdCLAgs6.js";import{d as a}from"./index-ejc1wpxF.js";import{d as c}from"./index-Fm-7uJrG.js";a();c();r.define([l]);const d="forge-count-card",s={title:"Components/Count Card",component:d,render:e=>t`
      <div style="width: 320px;">
        <forge-count-card theme=${e.theme||o} ?no-border=${e.noBorder}>
          ${e.showIcon?t`<forge-icon slot="icon" name="attach_money"></forge-icon>`:o}
          ${e.showLabel?t`<span slot="label">${e.labelText}</span>`:o}
          ${e.showHeaderEnd?t`<forge-badge slot="header-end" theme=${e.theme||o}>${e.badgeText}</forge-badge>`:o}
          <span slot="count">${e.countText}</span>
          ${e.showCountEnd?t`<forge-badge slot="count-end" theme=${e.theme||o}>${e.countEndText}</forge-badge>`:o}
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
    `,argTypes:{theme:{control:"select",options:["none","primary","secondary","tertiary","success","error","warning","info","info-secondary"],description:"Theme variant applied to the card",table:{category:"Properties"}},noBorder:{control:"boolean",description:"Hide the card border",table:{category:"Properties"}},showIcon:{control:"boolean",description:"Toggle the icon slot",table:{category:"Slots"}},showLabel:{control:"boolean",description:"Toggle the label slot",table:{category:"Slots"}},showHeaderEnd:{control:"boolean",description:"Toggle the header-end slot (badge)",table:{category:"Slots"}},showCountEnd:{control:"boolean",description:"Toggle the count-end slot (badge)",table:{category:"Slots"}},showFullWidth:{control:"boolean",description:"Toggle the full-width slot (sparkline)",table:{category:"Slots"}},labelText:{control:"text",description:"Label text content",table:{category:"Content"}},countText:{control:"text",description:"Count text content",table:{category:"Content"}},countEndText:{control:"text",description:"Count end text content",table:{category:"Content"}},badgeText:{control:"text",description:"Badge text content",table:{category:"Content"}}},args:{theme:"none",noBorder:!1,showIcon:!0,showLabel:!0,showHeaderEnd:!0,showCountEnd:!1,showFullWidth:!1,labelText:"Tomorrows money",countText:"$303.33",countEndText:"+5%",badgeText:"+12%"}},n={};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};const i=["Demo"],u=Object.freeze(Object.defineProperty({__proto__:null,Demo:n,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{u as C,n as D};

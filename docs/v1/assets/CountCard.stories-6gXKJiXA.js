import{E as e,x as t}from"./iframe-_4hlFKQj.js";import{I as r,q as l,e as a}from"./with-default-aria-DivMzomX.js";import"./count-card-BM_eI7pL.js";import{d as c}from"./index-DM1NEpjt.js";import{d as s}from"./index-zquUmkeF.js";import{d}from"./index-BQxhPO2r.js";c();s();d();r.define([l,a]);const i="forge-count-card",p={title:"Components/Count Card",component:i,render:o=>t`
      <div style="width: 320px;">
        <forge-count-card theme=${o.theme||e} ?no-border=${o.noBorder}>
          ${o.showIcon?t`<forge-icon slot="icon" name="attach_money"></forge-icon>`:e}
          ${o.showLabel?t`<span slot="label">${o.labelText}</span>`:e}
          ${o.showHeaderEnd?t`<forge-badge slot="header-end" theme=${o.theme||e}>${o.badgeText}</forge-badge>`:e}
          ${o.showAction?t`
                <forge-icon-button slot="action" aria-label="More options">
                  <forge-icon name="more_vert"></forge-icon>
                </forge-icon-button>
              `:e}
          <span slot="count">${o.countText}</span>
          ${o.showCountEnd?t`<forge-badge slot="count-end" theme=${o.theme||e}>${o.countEndText}</forge-badge>`:e}
          ${o.showFullWidth?t`
                <svg slot="full-width" viewBox="0 0 200 40" style="width: 100%; display: block;">
                  <polyline
                    fill="none"
                    stroke="var(--forge-theme-primary)"
                    stroke-width="2"
                    points="0,35 20,30 40,32 60,25 80,28 100,20 120,22 140,15 160,18 180,10 200,5" />
                </svg>
              `:e}
        </forge-count-card>
      </div>
    `,argTypes:{theme:{control:"select",options:["none","primary","secondary","tertiary","success","error","warning","info","info-secondary"],description:"Theme variant applied to the card",table:{category:"Properties"}},noBorder:{control:"boolean",description:"Hide the card border",table:{category:"Properties"}},showIcon:{control:"boolean",description:"Toggle the icon slot",table:{category:"Slots"}},showLabel:{control:"boolean",description:"Toggle the label slot",table:{category:"Slots"}},showHeaderEnd:{control:"boolean",description:"Toggle the header-end slot (badge)",table:{category:"Slots"}},showAction:{control:"boolean",description:"Toggle the action slot (icon button)",table:{category:"Slots"}},showCountEnd:{control:"boolean",description:"Toggle the count-end slot (badge)",table:{category:"Slots"}},showFullWidth:{control:"boolean",description:"Toggle the full-width slot (sparkline)",table:{category:"Slots"}},labelText:{control:"text",description:"Label text content",table:{category:"Content"}},countText:{control:"text",description:"Count text content",table:{category:"Content"}},countEndText:{control:"text",description:"Count end text content",table:{category:"Content"}},badgeText:{control:"text",description:"Badge text content",table:{category:"Content"}}},args:{theme:"none",noBorder:!1,showIcon:!0,showLabel:!0,showHeaderEnd:!0,showAction:!1,showCountEnd:!1,showFullWidth:!1,labelText:"Tomorrows money",countText:"$303.33",countEndText:"+5%",badgeText:"+12%"}},n={};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};const h=["Demo"],w=Object.freeze(Object.defineProperty({__proto__:null,Demo:n,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{w as C,n as D};

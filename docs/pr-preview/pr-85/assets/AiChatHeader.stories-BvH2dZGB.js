import{x as i}from"./iframe-Cq-laB_0.js";import"./ai-chat-header-DDFgSWIy.js";import{d as s}from"./index-Cb4d6jIT.js";import{d as c}from"./index-i__By2hs.js";import"./custom-element-BhZVzxrc.js";import"./property-DdMMxwFm.js";import"./when-3fO0zp9C.js";import"./ai-icon-DxmuxHwQ.js";import"./ai-gradient-container-DwWeYXdv.js";import"./utils-Bn45QkHx.js";import"./with-default-aria-C8uYVa_A.js";import"./icon-registry-QJlQPQoC.js";import"./base-lit-element-BdSPcvwX.js";import"./base-button-adapter-BoCXpPvJ.js";const d="forge-ai-chat-header";s();c();const M={title:"AI/Primitives/Chat Header",component:d,argTypes:{title:{control:"text",description:"The title text to display in the header"}},args:{title:"AI Assistant"},render:e=>i`<forge-ai-chat-header .title=${e.title}></forge-ai-chat-header>`},t={},r={args:{title:"My Custom AI Bot"}},a={render:e=>i`
      <forge-ai-chat-header .title=${e.title}>
        <forge-icon-button slot="header-actions" aria-label="Switch to full screen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5 5h5v2H7v3H5zm9 0h5v5h-2V7h-3zm3 9h2v5h-5v-2h3zm-7 3v2H5v-5h2v3z" />
          </svg>
        </forge-icon-button>
        <forge-icon-button slot="header-actions" aria-label="Minimize chat window">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6 19h12v2H6z" />
          </svg>
        </forge-icon-button>
      </forge-ai-chat-header>
    `},o={render:e=>i`
      <forge-card no-padding raised>
        <forge-ai-chat-header .title=${e.title}></forge-ai-chat-header>
      </forge-card>
    `},n={args:{title:"Support Assistant"},render:e=>i`
      <forge-card no-padding raised>
        <forge-ai-chat-header .title=${e.title}>
          <forge-icon-button slot="header-actions" aria-label="Close chat">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </forge-icon-button>
        </forge-ai-chat-header>
      </forge-card>
    `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Custom AI Bot'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
      <forge-ai-chat-header .title=\${args.title}>
        <forge-icon-button slot="header-actions" aria-label="Switch to full screen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5 5h5v2H7v3H5zm9 0h5v5h-2V7h-3zm3 9h2v5h-5v-2h3zm-7 3v2H5v-5h2v3z" />
          </svg>
        </forge-icon-button>
        <forge-icon-button slot="header-actions" aria-label="Minimize chat window">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6 19h12v2H6z" />
          </svg>
        </forge-icon-button>
      </forge-ai-chat-header>
    \`;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
      <forge-card no-padding raised>
        <forge-ai-chat-header .title=\${args.title}></forge-ai-chat-header>
      </forge-card>
    \`;
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Support Assistant'
  },
  render: (args: any) => {
    return html\`
      <forge-card no-padding raised>
        <forge-ai-chat-header .title=\${args.title}>
          <forge-icon-button slot="header-actions" aria-label="Close chat">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </forge-icon-button>
        </forge-ai-chat-header>
      </forge-card>
    \`;
  }
}`,...n.parameters?.docs?.source}}};const A=["Demo","WithCustomTitle","WithHeaderActions","InCard","InCardWithActions"];export{t as Demo,o as InCard,n as InCardWithActions,r as WithCustomTitle,a as WithHeaderActions,A as __namedExportsOrder,M as default};

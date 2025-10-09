import{j as n,M as r,T as s,C as a}from"./blocks-DRqVDcn7.js";import{useMDXComponents as i}from"./index-DNFFXgUn.js";import{C as p}from"./CustomArgTypes-QZOj9YTM.js";import{A as c,D as m}from"./AiReasoning.stories-DxVuKgeK.js";import"./iframe-DqEJrj69.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BuvLjwpB.js";import"./custom-element-BhZVzxrc.js";import"./property-C_ceE6xC.js";import"./state-DdshXehW.js";import"./ai-reasoning-header-BeLUW-qg.js";import"./ai-gradient-container-BSTVKsMQ.js";import"./utils-Bn45QkHx.js";import"./ai-chat-interface-DUuNH_XV.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-chat-header-B8P0rnV9.js";import"./ai-icon-DMFg_gBe.js";import"./class-map-DO_TSVWV.js";import"./directive-CJw_OlP2.js";import"./overlay-yTdgLGO9.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-prompt-BvTvsFTI.js";import"./index-CYN2K4d9.js";import"./base-adapter-BYCWzLZH.js";import"./base-button-adapter-BykPNyNi.js";import"./icon-registry-Bn8j1jNm.js";import"./with-default-aria-C1Yo8-a6.js";import"./icon-hEbI9dfx.js";import"./index-BV0lZfEn.js";import"./base-lit-element-BsGutEVO.js";import"./index-Cl0MhF3L.js";import"./field-Cvtxa2Ou.js";import"./index-B8VqpnZX.js";import"./ai-empty-state-CYBy1JsX.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
`,n.jsx(s,{}),`
`,n.jsxs(e.p,{children:["A container for displaying AI reasoning processes with streaming content. Designed to be composed with ",n.jsx(e.code,{children:"forge-ai-reasoning-header"})," and multiple ",n.jsx(e.code,{children:"forge-ai-reasoning-content"})," components that are added dynamically as reasoning steps stream in."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<forge-ai-reasoning expanded="false">
  <forge-ai-reasoning-header slot="header" expanded="false" reasoning="true">
    <span slot="reasoning-title">Thinking...</span>
    <span slot="title">AI Reasoning Process</span>
  </forge-ai-reasoning-header>

  <!-- Add multiple content components as steps stream in -->
  <forge-ai-reasoning-content>Step 1: Analyzing the problem...</forge-ai-reasoning-content>
  <forge-ai-reasoning-content>Step 2: Considering approaches...</forge-ai-reasoning-content>
  <forge-ai-reasoning-content>Step 3: Recommending solution...</forge-ai-reasoning-content>
</forge-ai-reasoning>
`})}),`
`,n.jsx(e.h2,{id:"streaming-pattern",children:"Streaming Pattern"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const container = document.querySelector('forge-ai-reasoning');

function addStep(text) {
  const step = document.createElement('forge-ai-reasoning-content');
  step.textContent = text;
  container.appendChild(step);
}
`})}),`
`,n.jsx(e.h2,{id:"key-points",children:"Key Points"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Streaming design"}),": Add ",n.jsx(e.code,{children:"forge-ai-reasoning-content"})," components dynamically as AI reasoning steps arrive"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Required header"}),": Must use ",n.jsx(e.code,{children:"forge-ai-reasoning-header"})," in the header slot"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"One step per component"}),": Each reasoning step gets its own content component with typing animation"]}),`
`]}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(a,{of:m}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(p,{})]})}function Q(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{Q as default};

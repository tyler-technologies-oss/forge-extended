import{j as n,M as r,T as s,C as a}from"./blocks-Bim393kR.js";import{useMDXComponents as i}from"./index-DNFFXgUn.js";import{C as p}from"./CustomArgTypes-DURJyxf9.js";import{A as c,D as m}from"./AiReasoning.stories-BzdHAT0u.js";import"./iframe-CsT5GiRw.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-1EmZlPqE.js";import"./custom-element-BhZVzxrc.js";import"./property-QpDCI8Us.js";import"./state-C0NeWyig.js";import"./ai-reasoning-header-PeWTSwXi.js";import"./ai-gradient-container-VWx57i_6.js";import"./utils-Bn45QkHx.js";import"./ai-chat-interface-CWMCD0El.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-chat-header-C7NkELL-.js";import"./ai-icon-RzZ0Hhe5.js";import"./class-map-D8I4OyvM.js";import"./directive-CJw_OlP2.js";import"./overlay-BVk3undK.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-prompt-CQWen3cp.js";import"./index-IL3uW91u.js";import"./base-adapter-CKWQyY0r.js";import"./base-button-adapter-BElRUIvS.js";import"./icon-registry-huHYBZV6.js";import"./with-default-aria-Bob-h_ZQ.js";import"./icon-BjhFxmhS.js";import"./index-DUmptmHP.js";import"./base-lit-element-DPwCva5Z.js";import"./index-DszjkWyh.js";import"./field-C24LVxZH.js";import"./index-YEhuOrU1.js";import"./ai-empty-state-C3ctD_X7.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

import{j as n,M as r,T as s,C as a}from"./blocks-BvNwBRsE.js";import{useMDXComponents as i}from"./index-DNFFXgUn.js";import{C as p}from"./CustomArgTypes-CjNKisAB.js";import{A as m,D as c}from"./AiReasoning.stories-BMIUg8Qe.js";import"./iframe-BJcB4Mwu.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-ogJV19S2.js";import"./custom-element-BhZVzxrc.js";import"./property-DsQJEtk3.js";import"./state-ihDe8m5F.js";import"./ai-reasoning-header-BfQcYx6t.js";import"./ai-gradient-container-CmPOPPE8.js";import"./utils-Bn45QkHx.js";import"./ai-chat-interface-C5hC5coQ.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-chat-header-BPTGWiZA.js";import"./ai-icon-CSAcieur.js";import"./class-map-BWIVnH85.js";import"./directive-CJw_OlP2.js";import"./overlay-DJTpnfbC.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-prompt-CpavD9Kq.js";import"./ai-voice-input-CeCJqOwI.js";import"./icon-registry-C-7RsPo0.js";import"./index-CTrb7Jdf.js";import"./base-adapter-CkG1kWyM.js";import"./base-button-adapter-C-9W22Vz.js";import"./with-default-aria-DF7lfrXX.js";import"./icon-z8OLcgfi.js";import"./index-Bl_x6YeS.js";import"./index-zjT6dnos.js";import"./base-lit-element-DjrTYrkZ.js";import"./index-Nh2l9Q9N.js";import"./field-C9vJ4qLn.js";import"./ai-empty-state-B-MPiFt5.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:m}),`
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
`,n.jsx(a,{of:c}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(p,{})]})}function V(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{V as default};

import{j as n,M as r,T as s,C as a}from"./blocks-CdamH2vs.js";import{useMDXComponents as i}from"./index-DNFFXgUn.js";import{C as p}from"./CustomArgTypes-DCyMeorz.js";import{A as m,D as c}from"./AiReasoning.stories-C3N-ymld.js";import"./iframe-BM3h9hs5.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-oV_5WNWJ.js";import"./custom-element-BhZVzxrc.js";import"./property-DPSdVyYk.js";import"./state-Cf5-EL21.js";import"./ai-reasoning-header-BgI8H12C.js";import"./ai-gradient-container-0uNqoYcF.js";import"./utils-Bn45QkHx.js";import"./ai-chat-interface-DYn8zwU3.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-chat-header-CpGB0fnl.js";import"./ai-icon-BbADqGsM.js";import"./class-map-BwFx9LDv.js";import"./directive-CJw_OlP2.js";import"./overlay-DKYZP9YO.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-prompt-DJM5dkWc.js";import"./ai-voice-input-CGBBu4SE.js";import"./icon-registry-CFBeo7J2.js";import"./index-DyR6A_jj.js";import"./base-adapter-BPocsE3J.js";import"./base-button-adapter-BxDQ3Z69.js";import"./with-default-aria-CNahUE19.js";import"./icon-CkM-obg-.js";import"./index-KpEpzQy5.js";import"./index-BpWadKJJ.js";import"./base-lit-element-_ih8J5bW.js";import"./index-DlDnQFrk.js";import"./field-F-ajUWv2.js";import"./ai-empty-state-CThuTJuK.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:m}),`
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

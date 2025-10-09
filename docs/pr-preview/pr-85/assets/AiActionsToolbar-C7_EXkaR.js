import{j as n,M as r,T as s,C as a}from"./blocks-DwLpLEJp.js";import{useMDXComponents as i}from"./index-DNFFXgUn.js";import{C as c}from"./CustomArgTypes-C28TXITO.js";import{A as l,D as d}from"./AiActionsToolbar.stories-DFgXEFSc.js";import"./iframe-C3PjIt-Y.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DqfLm9cK.js";import"./ai-actions-toolbar-Dp0f12nt.js";import"./custom-element-BhZVzxrc.js";import"./index-CLK2uHLb.js";import"./base-adapter-mVoHbkl6.js";import"./base-button-adapter-BT_0lweJ.js";import"./icon-registry-C_AUa6-9.js";import"./with-default-aria-DyOWljmd.js";import"./utils-DDUGSWJu.js";function o(t){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:l}),`
`,n.jsx(s,{}),`
`,n.jsx(e.p,{children:"The AI Actions Toolbar provides a set of action buttons commonly used in AI chat interfaces for interacting with AI-generated content. It includes refresh, copy, and feedback actions that emit structured events for easy integration."}),`
`,n.jsx(e.p,{children:"The component provides consistent styling using Forge design tokens and icon button patterns, with all functionality handled through event emission."}),`
`,n.jsx(a,{of:d}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," All actions emit events for the parent application to handle. The component does not perform any functionality directly, allowing for flexible integration."]}),`
`]}),`
`,n.jsx(e.h3,{id:"action-types",children:"Action Types"}),`
`,n.jsx(e.p,{children:"The toolbar provides four main actions:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Refresh"})," - Regenerate or refresh AI content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Copy"})," - Emit copy action event for parent to handle clipboard operations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Thumbs Up/Down"})," - Provide feedback on your AI responses"]}),`
`]}),`
`,n.jsx(e.h3,{id:"event-handling",children:"Event Handling"}),`
`,n.jsx(e.p,{children:"The component emits a single event type for all actions:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`toolbar.addEventListener('forge-ai-actions-toolbar-action', event => {
  const { action } = event.detail; // 'refresh' | 'copy' | 'thumbs-up' | 'thumbs-down'

  switch (action) {
    case 'refresh':
      // Handle refresh request
      break;
    case 'copy':
      // Handle copy action (implement clipboard logic here)
      break;
    case 'thumbs-up':
    case 'thumbs-down':
      // Handle feedback
      break;
  }
});
`})}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["All buttons have proper ",n.jsx(e.code,{children:"aria-label"})," attributes for screen reader compatibility"]}),`
`,n.jsx(e.li,{children:"Keyboard navigation supported through standard button focus behavior"}),`
`,n.jsx(e.li,{children:"High contrast icons for better visibility"}),`
`,n.jsx(e.li,{children:"Semantic button elements provide proper role information"}),`
`]})]})}function I(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{I as default};

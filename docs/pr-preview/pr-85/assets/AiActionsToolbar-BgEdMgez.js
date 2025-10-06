import{j as e,M as r,C as s}from"./blocks-CuOPVZAk.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import"./index-CWk7euD-.js";import{A as c,D as a,I as l}from"./AiActionsToolbar.stories-BSqETpj7.js";import"./iframe-CqgrWrfc.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ai-actions-toolbar-CMNw1Iuw.js";import"./custom-element-BhZVzxrc.js";import"./index-DQHjeTgz.js";import"./with-default-aria-DpaTsUTa.js";import"./utils-Oij4eZxH.js";import"./icon-registry-RMT8RpfV.js";import"./base-button-adapter-CcaBxXAO.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(n.h1,{id:"ai-actions-toolbar",children:"AI Actions Toolbar"}),`
`,e.jsx(n.p,{children:"The AI Actions Toolbar component provides a set of action buttons commonly used in AI chat interfaces for interacting with AI-generated content."}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Refresh"}),": Regenerate or refresh AI content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Copy"}),": Copy content to clipboard (automatically detects copyable parent content)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Thumbs Up/Down"}),": Provide feedback on AI responses"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistent Styling"}),": Uses Forge design tokens and icon button patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Event-Driven"}),": Emits structured events for all actions"]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"in-message-context",children:"In Message Context"}),`
`,e.jsx(n.p,{children:"This example shows how the toolbar appears when used within an AI response message context, with copyable content:"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsx(n.p,{children:"The component emits a single event type for all actions:"}),`
`,e.jsx(n.h3,{id:"forge-ai-actions-toolbar-action",children:e.jsx(n.code,{children:"forge-ai-actions-toolbar-action"})}),`
`,e.jsx(n.p,{children:"Fired when any action button is clicked."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Event Detail:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  action: 'refresh' | 'copy' | 'thumbs-up' | 'thumbs-down';
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example Usage:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`toolbar.addEventListener('forge-ai-actions-toolbar-action', event => {
  const { action } = event.detail;

  switch (action) {
    case 'refresh':
      // Handle refresh request
      break;
    case 'copy':
      // Handle copy completion (content already copied to clipboard)
      break;
    case 'thumbs-up':
    case 'thumbs-down':
      // Handle feedback
      break;
  }
});
`})}),`
`,e.jsx(n.h2,{id:"copy-functionality",children:"Copy Functionality"}),`
`,e.jsx(n.p,{children:"The copy button automatically:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Searches for a parent element with ",e.jsx(n.code,{children:"data-copyable"})," attribute"]}),`
`,e.jsx(n.li,{children:"Falls back to the immediate parent element"}),`
`,e.jsx(n.li,{children:"Extracts and copies the text content to the clipboard"}),`
`,e.jsx(n.li,{children:"Emits the 'copy' action event after successful copy"}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["All buttons have proper ",e.jsx(n.code,{children:"aria-label"})," attributes"]}),`
`,e.jsx(n.li,{children:"Keyboard navigation supported through standard button focus behavior"}),`
`,e.jsx(n.li,{children:"High contrast icons for better visibility"}),`
`,e.jsx(n.li,{children:"Semantic button elements for screen reader compatibility"}),`
`]})]})}function w(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{w as default};

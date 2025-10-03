import{j as e,M as o,T as r,C as l}from"./blocks-Bz-bhEpE.js";import{useMDXComponents as s}from"./index-DNFFXgUn.js";import{C as c}from"./CustomArgTypes-Ck5lApDq.js";import{A as a}from"./AiFloatingChat.stories-D68dz2S5.js";import"./iframe-B0-J0LJg.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-Drvmer3C.js";import"./custom-element-BhZVzxrc.js";import"./property-CgfoAyCh.js";import"./state-Bvqtwjh1.js";import"./ref-CDKIe4B9.js";import"./ai-dialog-CRc7M3Cj.js";import"./when-3fO0zp9C.js";import"./ai-modal-BV4te6Cm.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-hbBSdiN0.js";import"./ai-chat-interface-DZPykhHh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-B2k6G3L2.js";import"./ai-icon-DReDHNbc.js";import"./ai-gradient-container-DCodMQRh.js";import"./utils-Oij4eZxH.js";import"./ai-prompt-B8RJRUIh.js";import"./index-CgMD892N.js";import"./with-default-aria-HXLsW0av.js";import"./icon-registry-Boo-GKX6.js";import"./base-button-adapter-B8mFscco.js";import"./index-Dpud_Fiu.js";import"./field-Bd4BhChu.js";import"./index-DEAn5xni.js";import"./base-lit-element-V43of0r0.js";import"./index-C0XK4eqV.js";import"./ai-empty-state-BF9dv-gm.js";import"./ai-user-message-DKxj66Bg.js";import"./ai-response-message-DFWOaJNV.js";import"./ai-actions-toolbar-CJYTCXQv.js";import"./ai-fab-button-DjDFItjd.js";import"./ai-suggestions-B5rY5Eq1.js";function t(n){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(r,{children:"AI Floating Chat"}),`
`,e.jsxs(i.p,{children:["The AI Floating Chat component is a structured form factor component that provides a complete floating chat interface with built-in composition of ",e.jsx(i.code,{children:"ai-dialog"})," and ",e.jsx(i.code,{children:"ai-chat-interface"})," components. This component handles all the wiring and event management automatically, providing an easy-to-use solution for common floating chat use cases."]}),`
`,e.jsx(i.h2,{id:"features",children:"Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Structured composition"}),": Combines ai-dialog and ai-chat-interface components automatically"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Built-in event handling"}),": Manages expand/minimize/open/close events internally"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Responsive behavior"}),": Adapts to different viewport sizes automatically"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Customizable slots"}),": Supports slotting messages, suggestions, and custom prompt components"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Rich API"}),": Provides methods and events for programmatic control"]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(i.p,{children:"Use the AI Floating Chat component when you want:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"A quick, easy-to-implement floating chat interface"}),`
`,e.jsx(i.li,{children:"Standard floating chat behavior without custom positioning logic"}),`
`,e.jsx(i.li,{children:"Built-in responsive behavior and event handling"}),`
`,e.jsx(i.li,{children:'A component that "just works" out of the box'}),`
`]}),`
`,e.jsxs(i.p,{children:["For more complex compositions or custom containers, consider using the atomic ",e.jsx(i.code,{children:"ai-dialog"})," and ",e.jsx(i.code,{children:"ai-chat-interface"})," components directly."]}),`
`,e.jsx(i.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(l,{children:e.jsx("div",{style:{minHeight:"400px",position:"relative"},children:e.jsxs("forge-ai-floating-chat",{children:[e.jsx("forge-ai-user-message",{children:"Hello! Can you help me understand how to use TypeScript generics?"}),e.jsx("forge-ai-response-message",{children:e.jsx(i.p,{children:`I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
can work with different types while maintaining type safety.`})})]})})}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(i.h3,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{}),`
`,e.jsx(i.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"show()"}),": Opens the chat"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"close()"}),": Closes the chat"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"toggle()"}),": Toggles the chat open/closed state"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"expand()"}),": Expands the chat to full width"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"collapse()"}),": Collapses the chat to normal width"]}),`
`]}),`
`,e.jsx(i.h3,{id:"events",children:"Events"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-floating-chat-open"}),": Fired when the chat is opened"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-floating-chat-close"}),": Fired when the chat is closed"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-floating-chat-expand"}),": Fired when the chat is expanded"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-floating-chat-collapse"}),": Fired when the chat is collapsed"]}),`
`]}),`
`,e.jsx(i.h3,{id:"slots",children:"Slots"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Default slot"}),": For messages (ai-user-message, ai-response-message components)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"suggestions"})}),": For AI suggestions component"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"prompt"})}),": For custom AI prompt component (defaults to forge-ai-prompt if not provided)"]}),`
`]}),`
`,e.jsx(i.h2,{id:"comparison-with-atomic-components",children:"Comparison with Atomic Components"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Approach"}),e.jsx(i.th,{children:"Best For"}),e.jsx(i.th,{children:"Pros"}),e.jsx(i.th,{children:"Cons"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"ai-floating-chat"})}),e.jsx(i.td,{children:"Simple floating chat"}),e.jsx(i.td,{children:'Easy to use, built-in wiring, "just works"'}),e.jsx(i.td,{children:"Less flexible, opinionated structure"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"ai-dialog + ai-chat-interface"})}),e.jsx(i.td,{children:"Custom compositions"}),e.jsx(i.td,{children:"Maximum flexibility, reusable parts"}),e.jsx(i.td,{children:"More setup, manual event wiring"})]})]})]}),`
`,e.jsx(i.p,{children:"Both approaches are valid - choose based on your specific needs and complexity requirements."})]})}function V(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{V as default};

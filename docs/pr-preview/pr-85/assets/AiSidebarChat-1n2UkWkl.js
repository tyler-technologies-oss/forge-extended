import{j as e,M as r,T as o,C as d}from"./blocks-Cc7ozq-w.js";import{useMDXComponents as t}from"./index-DNFFXgUn.js";import{C as c}from"./CustomArgTypes-DYf1nqr9.js";import{A as h}from"./AiSidebarChat.stories-C8reSxib.js";import"./iframe-CaibHO0y.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DbTamtgz.js";import"./icon-registry-HgQR9uun.js";import"./custom-element-BhZVzxrc.js";import"./property-GAFUFo6c.js";import"./ref-BLyUv6d5.js";import"./directive-CJw_OlP2.js";import"./when-3fO0zp9C.js";import"./ai-sidebar-BDi88ZHF.js";import"./with-default-aria-a5opZvee.js";import"./utils-Bn45QkHx.js";import"./state-BlDweUO9.js";import"./class-map-CcPDX4GZ.js";import"./ai-chat-interface-DTseN6ct.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./ai-chat-header-BN_mZhOy.js";import"./ai-icon-CFta16wH.js";import"./ai-gradient-container-CDSTOBzE.js";import"./ai-prompt-DERJrAeC.js";import"./index-Bx0Q97w1.js";import"./base-button-adapter-DHS2QL68.js";import"./index-CGxX6zi4.js";import"./base-lit-element-4k41MjDr.js";import"./index-Azf5fOpv.js";import"./field-BTbwUCe5.js";import"./index-9kRHhAtt.js";import"./ai-empty-state-BxqU5EIH.js";import"./ai-modal-BqHkms34.js";import"./query-CeEMzN2B.js";import"./ai-user-message-wLJJy0U-.js";import"./ai-response-message-CPJrQ5ks.js";import"./ai-actions-toolbar-BVSM6uVb.js";import"./ai-suggestions-CUz3sdou.js";import"./ai-button-BwYp8ET7.js";import"./index-BkAva_6l.js";import"./index-DvTPiDON.js";function s(n){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:h}),`
`,e.jsx(o,{children:"AI Sidebar Chat"}),`
`,e.jsxs(i.p,{children:["The AI Sidebar Chat component is a structured form factor component that provides a complete sidebar chat interface with built-in composition of ",e.jsx(i.code,{children:"ai-sidebar"})," and ",e.jsx(i.code,{children:"ai-chat-interface"})," components. This component handles all the wiring and event management automatically, providing an easy-to-use solution for sidebar-based chat interfaces."]}),`
`,e.jsx(i.h2,{id:"features",children:"Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Structured composition"}),": Combines ai-sidebar and ai-chat-interface components automatically"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Built-in event handling"}),": Manages open/close events and minimize button interactions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Flexible positioning"}),": Supports both left and right sidebar positions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Responsive design"}),": Adapts to mobile viewports automatically"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Customizable slots"}),": Supports slotting messages, suggestions, and custom prompt components"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Rich API"}),": Provides methods and events for programmatic control"]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(i.p,{children:"Use the AI Sidebar Chat component when you want:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"A quick, easy-to-implement sidebar chat interface"}),`
`,e.jsx(i.li,{children:"Standard sidebar chat behavior without custom positioning logic"}),`
`,e.jsx(i.li,{children:"Built-in event handling and minimize functionality"}),`
`,e.jsx(i.li,{children:'A component that "just works" out of the box'}),`
`]}),`
`,e.jsxs(i.p,{children:["For more complex compositions or custom containers, consider using the atomic ",e.jsx(i.code,{children:"ai-sidebar"})," and ",e.jsx(i.code,{children:"ai-chat-interface"})," components directly."]}),`
`,e.jsx(i.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(d,{children:e.jsx("div",{style:{position:"relative",height:"400px",overflow:"hidden"},children:e.jsxs("forge-ai-sidebar-chat",{children:[e.jsx("forge-ai-user-message",{children:"Hello! Can you help me understand how to use TypeScript generics?"}),e.jsx("forge-ai-response-message",{children:e.jsx(i.p,{children:`I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
can work with different types while maintaining type safety.`})})]})})}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(i.h3,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{}),`
`,e.jsx(i.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"show()"}),": Opens the sidebar chat"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"close()"}),": Closes the sidebar chat"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"toggle()"}),": Toggles the sidebar chat open/closed state"]}),`
`]}),`
`,e.jsx(i.h3,{id:"events",children:"Events"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-open"}),": Fired when the sidebar chat is opened"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-close"}),": Fired when the sidebar chat is closed"]}),`
`]}),`
`,e.jsx(i.h3,{id:"slots",children:"Slots"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Default slot"}),": For messages (ai-user-message, ai-response-message components)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"suggestions"})}),": For AI suggestions component"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"prompt"})}),": For custom AI prompt component (defaults to forge-ai-prompt if not provided)"]}),`
`]}),`
`,e.jsx(i.h2,{id:"positioning",children:"Positioning"}),`
`,e.jsx(i.p,{children:"The sidebar chat supports two positions:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"right"})})," (default): Sidebar slides in from the right edge"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"left"})}),": Sidebar slides in from the left edge"]}),`
`]}),`
`,e.jsx(i.h2,{id:"built-in-features",children:"Built-in Features"}),`
`,e.jsx(i.h3,{id:"minimize-button",children:"Minimize Button"}),`
`,e.jsx(i.p,{children:"The component automatically includes a minimize button in the chat header that closes the sidebar when clicked."}),`
`,e.jsx(i.h3,{id:"event-synchronization",children:"Event Synchronization"}),`
`,e.jsx(i.p,{children:"The component automatically synchronizes events between the underlying sidebar container and the parent component, ensuring consistent state management."}),`
`,e.jsx(i.h2,{id:"comparison-with-atomic-components",children:"Comparison with Atomic Components"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Approach"}),e.jsx(i.th,{children:"Best For"}),e.jsx(i.th,{children:"Pros"}),e.jsx(i.th,{children:"Cons"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"ai-sidebar-chat"})}),e.jsx(i.td,{children:"Simple sidebar chat"}),e.jsx(i.td,{children:'Easy to use, built-in wiring, "just works"'}),e.jsx(i.td,{children:"Less flexible, opinionated structure"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"ai-sidebar + ai-chat-interface"})}),e.jsx(i.td,{children:"Custom compositions"}),e.jsx(i.td,{children:"Maximum flexibility, reusable parts"}),e.jsx(i.td,{children:"More setup, manual event wiring"})]})]})]}),`
`,e.jsx(i.p,{children:"Both approaches are valid - choose based on your specific needs and complexity requirements."})]})}function $(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{$ as default};

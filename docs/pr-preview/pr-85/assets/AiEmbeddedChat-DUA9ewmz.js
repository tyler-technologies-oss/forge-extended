import{j as e,M as r,T as d}from"./blocks-BKjT9Dw4.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{C as s}from"./CustomArgTypes-C79-tmAU.js";import{A as a}from"./AiEmbeddedChat.stories-BlGGhEgv.js";import"./iframe-BKP6vMqB.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BBvBK-dp.js";import"./custom-element-BhZVzxrc.js";import"./property-DMmDRPg7.js";import"./state-DNA7nhOl.js";import"./ref-Wo6yvqT5.js";import"./directive-CJw_OlP2.js";import"./when-3fO0zp9C.js";import"./ai-modal-DLRqFrzW.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-OHUOkoEl.js";import"./ai-chat-interface-BpNlovbV.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-CbVClyWh.js";import"./ai-icon-ePnVWrZQ.js";import"./ai-gradient-container-Cz50PS20.js";import"./utils-Bn45QkHx.js";import"./overlay-5zNjNbUb.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-empty-state-D60UuyRN.js";import"./ai-prompt-8bWsQO20.js";import"./index--1y8LJdS.js";import"./tslib.es6-D5TJvmCu.js";import"./base-adapter-D72Umsh7.js";import"./base-button-adapter-DE1A2g_z.js";import"./icon-registry-FyA6-By-.js";import"./with-default-aria-D0bZRvxi.js";import"./icon-CVy8WPiZ.js";import"./index-CpBQAsUS.js";import"./base-lit-element-DRP9ivuU.js";import"./index-yu9yqbCr.js";import"./field-BIBv6qki.js";import"./index-Bnmpiz6z.js";import"./ai-dropdown-menu-DwWfn4v7.js";import"./query-assigned-elements-C0jk5akS.js";import"./if-defined-3hMPaY-I.js";import"./popover-CLylAEgt.js";import"./ai-voice-input-Cvr69brK.js";import"./ai-user-message-BwotdKMT.js";import"./ai-response-message-P4zO-BQu.js";import"./ai-actions-toolbar-B8uOSwSE.js";import"./ai-suggestions-BreXheYA.js";import"./index-DSA-pCzY.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(d,{children:"AI Embedded Chat"}),`
`,e.jsxs(n.p,{children:["The AI Embedded Chat component is a structured form factor component that provides an embedded chat interface for inline page usage with built-in composition of ",e.jsx(n.code,{children:"ai-gradient-container"})," and ",e.jsx(n.code,{children:"ai-chat-interface"})," components. This component handles all the wiring and event management automatically, providing an easy-to-use solution for embedded chat interfaces that can expand to modal view when needed."]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Structured composition"}),": Combines ai-gradient-container and ai-chat-interface components automatically"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dual view modes"}),": Renders embedded inline content that can expand to modal view"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Built-in event handling"}),": Manages expand/collapse events and modal interactions internally"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gradient theming"}),": Supports multiple gradient intensity variants (low, medium, high, disabled)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Expandable interface"}),": Built-in expand functionality to switch from embedded to modal view"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable slots"}),": Supports slotting messages, suggestions, and custom prompt components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rich API"}),": Provides methods and events for programmatic control"]}),`
`]}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(n.p,{children:"Use the AI Embedded Chat component when you want:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A chat interface embedded directly in page content"}),`
`,e.jsx(n.li,{children:"Ability to expand the chat to a larger modal view for better focus"}),`
`,e.jsx(n.li,{children:"Built-in gradient theming and visual polish"}),`
`,e.jsx(n.li,{children:"Standard embedded chat behavior without custom container logic"}),`
`,e.jsx(n.li,{children:"A component that seamlessly transitions between embedded and modal states"}),`
`,e.jsx(n.li,{children:'A component that "just works" out of the box'}),`
`]}),`
`,e.jsxs(n.p,{children:["For more complex compositions or custom containers, consider using the atomic ",e.jsx(n.code,{children:"ai-gradient-container"}),", ",e.jsx(n.code,{children:"ai-modal"}),", and ",e.jsx(n.code,{children:"ai-chat-interface"})," components directly."]}),`
`,e.jsx(n.h2,{id:"usage-patterns",children:"Usage Patterns"}),`
`,e.jsx(n.h3,{id:"embedded-mode-default",children:"Embedded Mode (Default)"}),`
`,e.jsxs(n.p,{children:["The component renders as an embedded chat interface within the ",e.jsx(n.code,{children:"ai-gradient-container"}),", perfect for inline page content. Users can expand to modal view using the expand button in the chat header."]}),`
`,e.jsx(n.h3,{id:"modal-mode-expanded",children:"Modal Mode (Expanded)"}),`
`,e.jsxs(n.p,{children:["When expanded, the chat interface moves to a modal overlay powered by ",e.jsx(n.code,{children:"ai-modal"}),", providing a focused chat experience. The modal includes minimize functionality to return to embedded mode."]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(s,{})]})}function re(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{re as default};

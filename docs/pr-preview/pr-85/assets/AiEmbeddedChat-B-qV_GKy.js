import{j as e,M as r,T as d}from"./blocks-BHBCSBEn.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{C as s}from"./CustomArgTypes-CoWXtA08.js";import{A as a}from"./AiEmbeddedChat.stories-D8tXCWww.js";import"./iframe-QzzbqrfA.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DZYlAMxO.js";import"./custom-element-BhZVzxrc.js";import"./property-Dfd5sbDZ.js";import"./state-DfWlpL4k.js";import"./ref-Dy_ELmEO.js";import"./directive-CJw_OlP2.js";import"./when-3fO0zp9C.js";import"./ai-modal-BSikt3YJ.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-CbAe91xp.js";import"./ai-chat-interface-Db04e9-K.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-zD6NGT34.js";import"./ai-icon-B0exiPDh.js";import"./ai-gradient-container-C8cy6C6D.js";import"./utils-Bn45QkHx.js";import"./overlay-y33f4FbW.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-empty-state-BWsQ-zhP.js";import"./ai-prompt-ecRp4fSE.js";import"./index-BnlTki3l.js";import"./tslib.es6-CZ84MPSp.js";import"./base-adapter-BRiqBcvI.js";import"./base-button-adapter-CApSEwSv.js";import"./icon-registry-DkZ9Rd4X.js";import"./with-default-aria-WYsLsa3D.js";import"./icon-Nnbgcm13.js";import"./index-BBJUI7sQ.js";import"./base-lit-element-Dlk585Jr.js";import"./index-DyKYNYOK.js";import"./field-CgozYpgx.js";import"./index-DH5HdI6V.js";import"./ai-dropdown-menu-CyNV9t0E.js";import"./query-assigned-elements-C0jk5akS.js";import"./if-defined-CvgT8Tmn.js";import"./popover-Dt0NMqIu.js";import"./ai-voice-input-DLHKchU1.js";import"./ai-user-message-DxYg0p5p.js";import"./ai-response-message-CJju-fku.js";import"./ai-actions-toolbar-D3vGYnwc.js";import"./ai-suggestions-CHSFfDNv.js";import"./index-Ci8QZ6cV.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

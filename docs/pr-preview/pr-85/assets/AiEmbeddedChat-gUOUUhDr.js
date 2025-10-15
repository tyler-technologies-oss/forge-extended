import{j as e,M as r,T as d}from"./blocks-Dl7kpce0.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{C as s}from"./CustomArgTypes-D9CHwsC4.js";import{A as a}from"./AiEmbeddedChat.stories-CmL-cBWh.js";import"./iframe-Dj2Wx9s_.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DG7ocqB_.js";import"./custom-element-BhZVzxrc.js";import"./property--p0twyNi.js";import"./state-C7ih0SO4.js";import"./ref-CdAl0GZw.js";import"./directive-CJw_OlP2.js";import"./when-3fO0zp9C.js";import"./ai-modal-THbMTU1G.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-D1XayC9L.js";import"./ai-chat-interface-DvJ4KViQ.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-CEr3oZRN.js";import"./ai-icon-nqh84Y5m.js";import"./utils-DX1d4zMb.js";import"./ai-gradient-container-BpTxbqc2.js";import"./overlay-B0U0bHpF.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-empty-state-kOLW37Qr.js";import"./ai-prompt-CVPXwj2m.js";import"./ai-dropdown-menu-D1CQzZE3.js";import"./query-assigned-elements-C0jk5akS.js";import"./if-defined-Dy9LXpuh.js";import"./popover-C97uMKTT.js";import"./ai-voice-input-BbQUKkbb.js";import"./icon-registry-Bo-1kFDP.js";import"./constants-BoOZBCnr.js";import"./tslib.es6-BgHmU9yJ.js";import"./index-Cm4l-mi5.js";import"./base-button-adapter-EnRC7p3D.js";import"./with-default-aria-BrnkgR6D.js";import"./utils-Bn45QkHx.js";import"./focus-indicator-constants-BVMUwzYN.js";import"./icon-B07KW0xm.js";import"./ai-user-message-CUX-QiXk.js";import"./ai-response-message-UI5VV5pW.js";import"./ai-actions-toolbar-6d63RVs9.js";import"./ai-suggestions-_6VmSOFB.js";import"./index-Che3qtlD.js";import"./index-DrqEGwti.js";import"./base-lit-element-CHhU0ZfK.js";import"./index-DN-HWt4a.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

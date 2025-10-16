import{j as e,M as r,T as d}from"./blocks-3tlasUPf.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{C as s}from"./CustomArgTypes-C3_DbQbG.js";import{A as a}from"./AiEmbeddedChat.stories-BEJ_9vXD.js";import"./iframe-ElF690t2.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DwH4LjiY.js";import"./custom-element-BhZVzxrc.js";import"./property-ieXCiId-.js";import"./state-DXdCrdLp.js";import"./ref-jV6GEf61.js";import"./directive-CJw_OlP2.js";import"./when-3fO0zp9C.js";import"./ai-modal-Cn2vx7U6.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-wJNRXRE7.js";import"./ai-chat-interface-LZ8z9crG.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-BkbRa28L.js";import"./ai-icon-KBeSs4FK.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BhWC3oZi.js";import"./popover-Cw4IYs74.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-dropdown-menu-Bc7MxMkt.js";import"./query-assigned-elements-C0jk5akS.js";import"./if-defined-MwxvbEni.js";import"./ai-empty-state-BwNsQahx.js";import"./ai-prompt-DFmV6qxA.js";import"./ai-voice-input-BB8zEqZo.js";import"./ai-user-message-gZzIkn9Q.js";import"./ai-response-message-Diecq1No.js";import"./ai-actions-toolbar-5GedZkuq.js";import"./ai-suggestions-GDAx06Zu.js";import"./icon-registry-ChED3c2i.js";import"./constants-nZJBRhDC.js";import"./tslib.es6-CR5qsw2B.js";import"./index-DHDEGfUS.js";import"./utils-Bn45QkHx.js";import"./base-lit-element-BSciqFUX.js";import"./index-D3I6Ykt_.js";import"./icon-BCBts4JN.js";import"./index-Bas3kT4d.js";import"./base-button-adapter-CP7GOM4t.js";import"./with-default-aria-DE5_HY3N.js";import"./focus-indicator-constants-Cnmo2eiT.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function ie(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ie as default};

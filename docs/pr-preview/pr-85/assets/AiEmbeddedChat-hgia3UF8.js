import{j as e,M as r,T as d}from"./blocks-0lKIBLYZ.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{C as s}from"./CustomArgTypes-0YoJz0U1.js";import{A as a}from"./AiEmbeddedChat.stories-CvLNPRCL.js";import"./iframe-D4_PDUj_.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DwH4LjiY.js";import"./custom-element-BhZVzxrc.js";import"./property-lDMeBEK6.js";import"./state-DvCUhRBy.js";import"./ref-v0FgBt5J.js";import"./directive-CJw_OlP2.js";import"./when-3fO0zp9C.js";import"./ai-modal-BhgVHH7K.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-BDmDEXgn.js";import"./ai-chat-interface-B1NzSD9t.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-r60cTyL3.js";import"./ai-icon-D5cNvdE1.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-v-4-rfGP.js";import"./popover-CLwd4fyO.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-dropdown-menu-DZb-tQlC.js";import"./query-assigned-elements-C0jk5akS.js";import"./if-defined-CjUu1-s1.js";import"./ai-empty-state-DSl2SWri.js";import"./ai-prompt-C6_pk3It.js";import"./ai-voice-input-DkOfwW8I.js";import"./ai-user-message-BUGuiqnE.js";import"./ai-response-message-D5AbLvLa.js";import"./ai-actions-toolbar-IijcW3VI.js";import"./ai-suggestions-I_GuozML.js";import"./icon-registry-dSMumASG.js";import"./constants-B-RucK1w.js";import"./tslib.es6-BTtIs1t3.js";import"./index-DPSDebqF.js";import"./utils-Bn45QkHx.js";import"./base-lit-element-e5jki4y4.js";import"./index-Bb7v1CCi.js";import"./icon-C5rTWHhX.js";import"./index-cH0JI1Dq.js";import"./base-button-adapter-e7N4rFUw.js";import"./with-default-aria-CQW_RqFI.js";import"./focus-indicator-constants-DTe4ke2h.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

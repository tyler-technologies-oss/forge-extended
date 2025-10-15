import{j as e,M as r,T as d}from"./blocks-DdIAIeRk.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{C as s}from"./CustomArgTypes-w-BibigI.js";import{A as a}from"./AiEmbeddedChat.stories-mEvIg_lb.js";import"./iframe-hNc3SCSi.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-Rr9hPBAS.js";import"./custom-element-BhZVzxrc.js";import"./property-B1cnHQzh.js";import"./state-BUayJejJ.js";import"./ref-BbvxtUvh.js";import"./directive-CJw_OlP2.js";import"./when-3fO0zp9C.js";import"./ai-modal-DlPlP2rW.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-C8ukwYfH.js";import"./ai-chat-interface-CBEkcPho.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./ai-chat-header-D9CwBeJT.js";import"./ai-icon-BQWJjT7X.js";import"./ai-gradient-container-CV3b3cdY.js";import"./utils-Bn45QkHx.js";import"./overlay-s1hQwq-A.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-empty-state-HB9J8ZhA.js";import"./ai-prompt-BWXmRSKF.js";import"./index-Cmh80XV3.js";import"./tslib.es6-CspROu-E.js";import"./base-adapter-BlgT_BE-.js";import"./base-button-adapter-ByubjB_F.js";import"./icon-registry-C5CEsCZD.js";import"./with-default-aria-BlBGD6Ta.js";import"./icon-Bc4Ao2c1.js";import"./index-B5-2WJf-.js";import"./base-lit-element-C0mGSsp5.js";import"./index-DxvvGuUP.js";import"./field-Bpm9RJ_i.js";import"./index-C1URnBoB.js";import"./ai-dropdown-menu-CV_oZQ6j.js";import"./query-assigned-elements-C0jk5akS.js";import"./if-defined-BTY1CzgM.js";import"./popover-lO64Yy0k.js";import"./ai-voice-input-CWMQHga_.js";import"./ai-user-message-ghM6D5tF.js";import"./ai-response-message-DwTrhS2v.js";import"./ai-actions-toolbar-DJGbeArm.js";import"./ai-suggestions-BizezMX0.js";import"./index-DPthb7bP.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

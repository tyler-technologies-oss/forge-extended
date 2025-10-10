import{j as e,M as t,T as o,C as d}from"./blocks-Bim393kR.js";import{useMDXComponents as r}from"./index-DNFFXgUn.js";import{C as l}from"./CustomArgTypes-DURJyxf9.js";import{A as c}from"./AiSidebar.stories-DaHgITtT.js";import"./iframe-CsT5GiRw.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-1EmZlPqE.js";import"./icon-registry-huHYBZV6.js";import"./ai-sidebar-swskOlVv.js";import"./base-adapter-CKWQyY0r.js";import"./custom-element-BhZVzxrc.js";import"./property-QpDCI8Us.js";import"./state-C0NeWyig.js";import"./class-map-D8I4OyvM.js";import"./directive-CJw_OlP2.js";import"./ai-chat-interface-CWMCD0El.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-chat-header-C7NkELL-.js";import"./ai-icon-RzZ0Hhe5.js";import"./ai-gradient-container-VWx57i_6.js";import"./utils-Bn45QkHx.js";import"./overlay-BVk3undK.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-prompt-CQWen3cp.js";import"./index-IL3uW91u.js";import"./base-button-adapter-BElRUIvS.js";import"./with-default-aria-Bob-h_ZQ.js";import"./icon-BjhFxmhS.js";import"./index-DUmptmHP.js";import"./base-lit-element-DPwCva5Z.js";import"./index-DszjkWyh.js";import"./field-C24LVxZH.js";import"./index-YEhuOrU1.js";import"./ai-empty-state-C3ctD_X7.js";import"./ai-user-message-CLM3hSl8.js";import"./ai-response-message-D9AUzbXJ.js";import"./ai-actions-toolbar-9K4_PfAg.js";import"./popover-CN2TzKHQ.js";import"./ai-button-Bz6xH27q.js";import"./index-DGKqzKov.js";function s(n){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(o,{children:"AI Sidebar"}),`
`,e.jsx(i.p,{children:"The AI Sidebar component is a container component that provides a drawer-style sidebar interface using Forge CSS-only drawer classes. This component serves as the foundational container for sidebar-based AI interfaces, offering positioning control and backdrop interaction."}),`
`,e.jsx(i.h2,{id:"features",children:"Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Flexible positioning"}),": Supports both left and right sidebar positions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Backdrop interaction"}),": Clicking the backdrop closes the sidebar"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"CSS-based animations"}),": Smooth slide-in/slide-out transitions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Responsive design"}),": Adapts to mobile viewports with full-width display"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Accessibility support"}),": Proper ARIA attributes for screen readers"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Event-driven API"}),": Emits events for open/close state changes"]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(i.p,{children:"Use the AI Sidebar component when you want:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"A container for sidebar-based content (typically AI chat interfaces)"}),`
`,e.jsx(i.li,{children:"Control over sidebar positioning (left or right)"}),`
`,e.jsx(i.li,{children:"A foundational component for building custom sidebar compositions"}),`
`,e.jsx(i.li,{children:"Direct control over the sidebar behavior without built-in chat interface logic"}),`
`]}),`
`,e.jsxs(i.p,{children:["For a complete sidebar chat solution, consider using the ",e.jsx(i.code,{children:"ai-sidebar-chat"})," form factor component which combines this container with the chat interface automatically."]}),`
`,e.jsx(i.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(d,{children:e.jsx("div",{style:{position:"relative",height:"400px",overflow:"hidden"},children:e.jsx("forge-ai-sidebar",{children:e.jsxs("forge-ai-chat-interface",{"show-minimize-button":!0,children:[e.jsx("forge-ai-user-message",{children:"Hello! Can you help me understand how to use TypeScript generics?"}),e.jsx("forge-ai-response-message",{children:e.jsx(i.p,{children:`I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
can work with different types while maintain type safety.`})})]})})})}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(i.h3,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"show()"}),": Opens the sidebar"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"close()"}),": Closes the sidebar"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"toggle()"}),": Toggles the sidebar open/closed state"]}),`
`]}),`
`,e.jsx(i.h3,{id:"events",children:"Events"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-open"}),": Fired when the sidebar is opened"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-close"}),": Fired when the sidebar is closed"]}),`
`]}),`
`,e.jsx(i.h2,{id:"positioning",children:"Positioning"}),`
`,e.jsx(i.p,{children:"The sidebar supports two positions:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"right"})})," (default): Sidebar slides in from the right edge"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"left"})}),": Sidebar slides in from the left edge"]}),`
`]}),`
`,e.jsx(i.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsx(i.p,{children:"On mobile viewports (≤768px), the sidebar automatically becomes full-width regardless of positioning, providing an optimal mobile experience."}),`
`,e.jsx(i.h2,{id:"comparison-with-form-factor-component",children:"Comparison with Form Factor Component"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Approach"}),e.jsx(i.th,{children:"Best For"}),e.jsx(i.th,{children:"Pros"}),e.jsx(i.th,{children:"Cons"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"ai-sidebar"})}),e.jsx(i.td,{children:"Custom compositions"}),e.jsx(i.td,{children:"Maximum flexibility, reusable container"}),e.jsx(i.td,{children:"Manual content setup required"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"ai-sidebar-chat"})}),e.jsx(i.td,{children:"Complete sidebar chat"}),e.jsx(i.td,{children:"Easy to use, built-in chat interface"}),e.jsx(i.td,{children:"Less flexible, opinionated setup"})]})]})]}),`
`,e.jsxs(i.p,{children:["Choose the atomic ",e.jsx(i.code,{children:"ai-sidebar"})," component when you need a flexible container, or use ",e.jsx(i.code,{children:"ai-sidebar-chat"})," for a complete solution."]})]})}function $(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{$ as default};

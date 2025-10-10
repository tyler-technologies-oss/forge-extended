import{j as e,M as t,T as r,C as c}from"./blocks-Bim393kR.js";import{useMDXComponents as s}from"./index-DNFFXgUn.js";import{C as d}from"./CustomArgTypes-DURJyxf9.js";import{A as l,D as a}from"./AiModal.stories-CrgAkgr7.js";import"./iframe-CsT5GiRw.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-1EmZlPqE.js";import"./ref-BjD3NhjE.js";import"./directive-CJw_OlP2.js";import"./ai-modal-FZRbE8z8.js";import"./custom-element-BhZVzxrc.js";import"./property-QpDCI8Us.js";import"./state-C0NeWyig.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-D8I4OyvM.js";function i(o){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(r,{}),`
`,e.jsxs(n.p,{children:["The AI Modal component provides a basic modal dialog implementation using the native HTML ",e.jsx(n.code,{children:"<dialog>"})," element. This component is designed to be a simple, foundational modal that can be extended for more specific use cases."]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(n.p,{children:["The AI Modal renders content within a standard HTML dialog element and provides programmatic control through the ",e.jsx(n.code,{children:"open"})," property and ",e.jsx(n.code,{children:"show()"}),"/",e.jsx(n.code,{children:"close()"})," methods."]}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(n.h2,{id:"opening-and-closing",children:"Opening and Closing"}),`
`,e.jsx(n.p,{children:"The modal can be controlled in several ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Property"}),": Set the ",e.jsx(n.code,{children:"open"})," property to ",e.jsx(n.code,{children:"true"})," or ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Attribute"}),": Add or remove the ",e.jsx(n.code,{children:"open"})," attribute"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Methods"}),": Call ",e.jsx(n.code,{children:"show()"})," to open or ",e.jsx(n.code,{children:"close()"})," to close the modal"]}),`
`]}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsx(n.p,{children:"All content is provided through slots, giving you complete control over the modal's internal structure and styling. The component provides no default content - everything must be provided by the consumer."}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["This component uses the native HTML ",e.jsx(n.code,{children:"<dialog>"})," element, which provides built-in accessibility features including:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Proper focus management"}),`
`,e.jsx(n.li,{children:"Keyboard navigation (Escape key to close)"}),`
`,e.jsx(n.li,{children:"Screen reader compatibility"}),`
`,e.jsx(n.li,{children:"Backdrop interaction handling"}),`
`]}),`
`,e.jsx(n.p,{children:"Make sure to provide appropriate ARIA labels and descriptions for your modal content to ensure full accessibility compliance."})]})}function I(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{I as default};

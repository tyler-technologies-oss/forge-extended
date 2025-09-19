import{j as e,M as r,T as s,C as d}from"./blocks-thZhTl7O.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{C as a}from"./CustomArgTypes-DwlxoW7G.js";import{Q as l,D as m}from"./QuantityField.stories-DfbwfvHp.js";import"./iframe-jjB25JuI.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-3d6WLTXN.js";import"./with-default-aria-Bnrm7Muh.js";import"./base-button-adapter-BHi6R9uZ.js";import"./base-CShCMygk.js";import"./index-v5-t59We.js";import"./index-DlRm-url.js";import"./tooltip-B5DyGB9J.js";import"./with-longpress-listener-CpTrBmfm.js";import"./dismissible-stack-xVAdIIkQ.js";import"./index-OHl1pQaT.js";function i(n){const t={code:"code",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(s,{}),`
`,e.jsx(t.p,{children:"Quantity fields are used to input a numeric value for a field. They are often used in forms to allow users to increment or decrement a value."}),`
`,e.jsxs(t.p,{children:['The quantity field is a "decorator" style component, meaning it wraps and enhances the provided ',e.jsx(t.code,{children:"<input>"}),` element with buttons to increment and
decrement the value. You should communicate with the `,e.jsx(t.code,{children:"<input>"}),` as you normally would in terms of getting/setting the value or listening to events,
otherwise the component handles the styling and orchestration of element as a whole.`]}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(t.h2,{id:"invalid-and-required-states",children:"Invalid and Required States"}),`
`,e.jsxs(t.p,{children:["The quantity field can be marked as invalid or required by setting the ",e.jsx(t.code,{children:"invalid"})," or ",e.jsx(t.code,{children:"required"})," props. The ",e.jsx(t.code,{children:"invalid"}),` prop will add a red border to the
input field, while the `,e.jsx(t.code,{children:"required"})," prop will add an asterisk to the label. You may be required to also set the ",e.jsx(t.code,{children:"required"}),` attribute on the input field
itself depending on your form validation requirements.`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(a,{})]})}function Q(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{Q as default};

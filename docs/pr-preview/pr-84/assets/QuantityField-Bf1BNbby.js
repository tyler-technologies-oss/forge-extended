import{j as e,M as r,T as s,C as d}from"./blocks-Bjf9K5da.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{C as a}from"./CustomArgTypes-Ga3FLWAW.js";import{Q as l,D as m}from"./QuantityField.stories-Cvgo4L51.js";import"./iframe-iPkDJD_4.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CGPJUuL4.js";import"./with-default-aria-BwzNE_IN.js";import"./base-button-adapter-CJQngP5I.js";import"./base-CShCMygk.js";import"./index-B9QnfXMu.js";import"./index-DMO0ZXv6.js";import"./tooltip-BqSLEJoj.js";import"./with-longpress-listener-BwI850ZZ.js";import"./dismissible-stack-CtoUl30q.js";import"./index-CgalI0dF.js";function i(n){const t={code:"code",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
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

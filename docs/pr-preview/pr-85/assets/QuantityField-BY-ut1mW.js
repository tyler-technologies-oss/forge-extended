import{j as e,M as r,T as s,C as d}from"./blocks-5lbqjzyN.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{C as a}from"./CustomArgTypes-DK7eDikl.js";import{Q as m,D as l}from"./QuantityField.stories-CBk_oK-R.js";import"./iframe-DSIgYrvx.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-1EmZlPqE.js";import"./custom-element-BhZVzxrc.js";import"./property-B1_KO4U0.js";import"./query-assigned-elements-C0jk5akS.js";import"./base-CShCMygk.js";import"./icon-registry-CIidBo0T.js";import"./base-adapter-Bysb_IZd.js";import"./base-button-adapter-CcvBl2Un.js";import"./with-default-aria-BT3RsvBm.js";import"./utils-Bn45QkHx.js";import"./field-o_hWg0oj.js";import"./index-7yq3rPSp.js";import"./icon-CvuDTJRs.js";import"./tooltip-SVHnjzxG.js";import"./with-longpress-listener-BtykMEDz.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./dismissible-stack-DCWKnNij.js";import"./index-BvWrcrK0.js";function n(i){const t={code:"code",h2:"h2",p:"p",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:m}),`
`,e.jsx(s,{}),`
`,e.jsx(t.p,{children:"Quantity fields are used to input a numeric value for a field. They are often used in forms to allow users to increment or decrement a value."}),`
`,e.jsxs(t.p,{children:['The quantity field is a "decorator" style component, meaning it wraps and enhances the provided ',e.jsx(t.code,{children:"<input>"}),` element with buttons to increment and
decrement the value. You should communicate with the `,e.jsx(t.code,{children:"<input>"}),` as you normally would in terms of getting/setting the value or listening to events,
otherwise the component handles the styling and orchestration of element as a whole.`]}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(t.h2,{id:"invalid-and-required-states",children:"Invalid and Required States"}),`
`,e.jsxs(t.p,{children:["The quantity field can be marked as invalid or required by setting the ",e.jsx(t.code,{children:"invalid"})," or ",e.jsx(t.code,{children:"required"})," props. The ",e.jsx(t.code,{children:"invalid"}),` prop will add a red border to the
input field, while the `,e.jsx(t.code,{children:"required"})," prop will add an asterisk to the label. You may be required to also set the ",e.jsx(t.code,{children:"required"}),` attribute on the input field
itself depending on your form validation requirements.`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(a,{})]})}function Y(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{Y as default};

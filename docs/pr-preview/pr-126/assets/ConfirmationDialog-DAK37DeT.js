import{j as e,M as r,T as s,C as l}from"./blocks-B5tY0qEs.js";import{useMDXComponents as n}from"./index-DNFFXgUn.js";import{C as a}from"./CustomArgTypes-ClUx8Ojk.js";import{C as c,D as d}from"./ConfirmationDialog.stories-DKkM_tGt.js";import"./iframe-BMmxjS7K.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CRcBmDtb.js";import"./ref-KhGHN0Ac.js";import"./async-directive-C8AHgdeZ.js";import"./directive-CJw_OlP2.js";import"./constants-DxKBK66z.js";import"./with-default-aria-DUm9cFDb.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./when-3fO0zp9C.js";import"./style-map-lC-WH_oI.js";import"./slot-utils-DH2anZHy.js";import"./index-CmABe4zC.js";import"./base-button-adapter-DVfHKjLr.js";import"./focus-indicator-BZurIPmT.js";import"./icon-DHP83XnC.js";import"./index-BDoDAABD.js";import"./dismissible-stack-BP6jnQvR.js";import"./index-C9xcGEac.js";import"./circular-progress-DshhIzMk.js";import"./index-CuaVTp8w.js";import"./icon-button-B-lwPuxH.js";function t(o){const i={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(s,{}),`
`,e.jsx(i.p,{children:"A confirmation dialog is a modal component used to present users with a brief message or alert requiring their decision. It typically includes two actions:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:'Primary action – The main action that confirms the decision (e.g., "Delete", "Submit", "Confirm").'}),`
`,e.jsx(i.li,{children:'Secondary action – An alternative or dismissive action (e.g., "Cancel", "Go back"), allowing users to exit without proceeding.'}),`
`]}),`
`,e.jsx(i.p,{children:"For succinct alerts (one sentence or less), the dialog title is usually omitted to maintain a clean and focused UI. However, for longer messages or critical actions, a title can provide additional clarity."}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Note:"})," Confirmation dialogs display the same in mobile and desktop contexts."]}),`
`]}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(a,{}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["The confirmation dialog component will add the ",e.jsx(i.code,{children:'role="dialog"'})," and ",e.jsx(i.code,{children:'aria-modal="true"'})," attribute for you."]}),`
`,e.jsxs(i.li,{children:["Be sure to set the ",e.jsx(i.code,{children:"label"})," and ",e.jsx(i.code,{children:"description"})," attributes on the ",e.jsx(i.code,{children:"<forge-confirmation-dialog>"})," element if needed.",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"This will allow for a screen reader to properly announce the dialog title and description when it opens."}),`
`,e.jsxs(i.li,{children:["The ",e.jsx(i.code,{children:"aria-labelledby"})," and ",e.jsx(i.code,{children:"aria-describedby"})," attributes will be set automatically for you based on the ",e.jsx(i.code,{children:"label"})," and ",e.jsx(i.code,{children:"description"})," attributes. If no ",e.jsx(i.code,{children:"label"})," or ",e.jsx(i.code,{children:"description"})," is provided, the component will automatically set these to the content of the title slot and message slot."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:["The ",e.jsx(i.code,{children:"busyLabel"})," property allows you to customize the aria-label of the ",e.jsx(i.code,{children:"forge-busy-indicator"})," that becomes visible when ",e.jsx(i.code,{children:"isBusy"}),` is set to true. By default this will announce the word "loading" to the screenreader. It's recommended you set this to a more descriptive value based on the context of your application.`]}),`
`]})]})}function G(o={}){const{wrapper:i}={...n(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(t,{...o})}):t(o)}export{G as default};

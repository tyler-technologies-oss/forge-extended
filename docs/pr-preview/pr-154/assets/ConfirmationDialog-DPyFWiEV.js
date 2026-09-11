import{j as e,M as r,T as s,C as l}from"./blocks-B3Q056UL.js";import{useMDXComponents as n}from"./index-De36GQbW.js";import{C as a}from"./CustomArgTypes-BtA6T8mx.js";import{C as c,D as d}from"./ConfirmationDialog.stories-B8FPcmiY.js";import"./iframe-BQvNP4M8.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BFrnilJx.js";import"./ref-hEdGp07P.js";import"./async-directive-CTOhvSPE.js";import"./directive-CJw_OlP2.js";import"./custom-element-CCcGDftf.js";import"./utils-DlINy0qF.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./when-3fO0zp9C.js";import"./style-map-LthcQtPp.js";import"./with-default-aria-BV0tb14g.js";import"./constants-vdQC6Ta-.js";import"./slot-utils-DH2anZHy.js";import"./index-BOzD9efv.js";import"./base-button-adapter-sdHxCcuI.js";import"./focus-indicator-B8XRN2Qz.js";import"./icon-CWB8ZOKZ.js";import"./index-C5fsD-kW.js";import"./dismissible-stack-2XmwfeXm.js";import"./index-CeANmAxS.js";import"./circular-progress-aBLK6EqM.js";import"./index-CQOn-3Nq.js";import"./icon-button-CY77UBum.js";function t(o){const i={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
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
`]})]})}function N(o={}){const{wrapper:i}={...n(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(t,{...o})}):t(o)}export{N as default};

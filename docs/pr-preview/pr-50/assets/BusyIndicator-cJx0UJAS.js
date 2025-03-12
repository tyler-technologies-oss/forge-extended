import{j as e,M as r,T as a,C as i}from"./index-CK86jjpx.js";import{useMDXComponents as o}from"./index-BUuUUfOy.js";import{C as l}from"./CustomArgTypes-BrA0BKGT.js";import{B as c,D as d,I as h}from"./BusyIndicator.stories-1ZavSgcB.js";import"./iframe-Ciro2n9A.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BCI4JQNS.js";import"./index-ogSvIofg.js";import"./utils-DptcQDUQ.js";import"./lit-element-CxMangmT.js";import"./directive-helpers-D8tqYSsJ.js";import"./base-CuPozXem.js";function s(n){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(a,{}),`
`,e.jsx(t.p,{children:`Busy indicators are a specialized dialog that is used to indicate that a process is running and the user should wait. It is typically used when a process is
expected to take more than a few seconds to complete. The busy indicator is modal and will prevent the user from interacting with a part, or the rest of the
application until the process is complete.`}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"}),` The busy indicator is not intended to be used for processes that take less than a few seconds to complete. For processes that take less than a few
seconds, consider using a progress indicator instead.`]}),`
`,e.jsxs(t.p,{children:["Use the busy indicator sparingly, as it can be disruptive to the user experience. ",e.jsx(t.strong,{children:"Only use the busy indicator when it is absolutely necessary"}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"mode",children:"Mode"}),`
`,e.jsxs(t.p,{children:["Busy indicators are available in two modes: ",e.jsx(t.code,{children:"fullscreen"})," (default) and ",e.jsx(t.code,{children:"inline"}),"."]}),`
`,e.jsx(t.h3,{id:"fullscreen",children:"Fullscreen"}),`
`,e.jsx(t.p,{children:`The fullscreen mode is the default mode for the busy indicator. It will display a modal dialog that will prevent the user from interacting with the rest of the
application until the process is complete. The fullscreen mode is best used when the process is expected to take a long time to complete.`}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(t.p,{children:"Fullscreen busy indicators are displayed in the top-layer above all other elements, and use fixed positioning to cover the viewport."}),`
`,e.jsx(t.h3,{id:"inline",children:"Inline"}),`
`,e.jsx(t.p,{children:`The inline mode will display the busy indicator inline with the rest of the content. The content will still be rendered within a dialog, but it is non-modal.
The inline mode is best used when the process is expected to take a short amount of time to complete, while still allowing the user to interact with the rest
of the application.`}),`
`,e.jsx(i,{of:h}),`
`,e.jsxs(t.p,{children:["Inline busy indicators are displayed in the normal flow of the document, use absolute positioning, and will ",e.jsx(t.strong,{children:"not"}),` prevent the user from interacting with the element
obscured by the busy indicator overlay, or other parts of the page. Make sure to disable user interaction with the obscured element(s) if necessary while the busy
indicator is visible.`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," When using the inline mode, make sure to provide a ",e.jsx(t.code,{children:"position: relative"}),` style to the parent element of the busy indicator to ensure that it is
positioned correctly and constrained within the parent element bounds.`]}),`
`]}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t.p,{children:"The busy indicator is available in multiple variants:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"spinner"})," (default) - A simple spinner that indicates that a process is running. This can be accompanied by an optional title and/or message."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"progress"})," - A progress indicator that indicates the progress of a process. This can be accompanied by an optional title and/or message."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"message-only"})," - A message-only variant that displays a title and/or message to the user. This variant does not include a spinner or progress indicator."]}),`
`]}),`
`,e.jsx(t.h2,{id:"cancelable",children:"Cancelable"}),`
`,e.jsxs(t.p,{children:["The busy indicator can be made cancelable by providing a ",e.jsx(t.code,{children:"cancelable"}),` attribute. This will render a cancel button that the user can click to cancel the process
that is running. When the process is canceled, the busy indicator will dispatch a `,e.jsx(t.code,{children:"forge-busy-indicator-cancel"}),` event that can be used to handle the cancellation
however you see fit. You are responsible for closing the busy indicator manually after the event is dispatched.`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:`The busy indicator is a dialog that will prevent the user from interacting with the parts of the page while the process is running. It is important to ensure
that the busy indicator is accessible to all users, including those using assistive technologies.`}),`
`,e.jsxs(t.p,{children:["To provide an accessible label for the busy indicator, use the ",e.jsx(t.code,{children:"label"}),` attribute. To also provide a description of the process that is running, use
the `,e.jsx(t.code,{children:"description"})," attribute. The values will be read out by screen readers to provide context to the user."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," By default the accessible lable and description will use the ",e.jsx(t.code,{children:"titleText"})," and ",e.jsx(t.code,{children:"message"})," properties respectively."]}),`
`]})]})}function k(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{k as default};

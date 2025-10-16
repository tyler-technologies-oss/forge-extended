import{j as e,M as o,T as c,C as t}from"./blocks-3tlasUPf.js";import{useMDXComponents as r}from"./index-DNFFXgUn.js";import{C as a}from"./CustomArgTypes-C3_DbQbG.js";import{A as d,D as s,I as p,a as h,M as f,b as x}from"./AiFilePicker.stories-QNma30Wt.js";import"./iframe-ElF690t2.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DwH4LjiY.js";import"./ai-file-picker-BsdFfoC-.js";import"./custom-element-BhZVzxrc.js";import"./property-ieXCiId-.js";import"./state-DXdCrdLp.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-wJNRXRE7.js";import"./directive-CJw_OlP2.js";import"./if-defined-MwxvbEni.js";import"./index-B1UziEUT.js";import"./tslib.es6-CR5qsw2B.js";import"./constants-nZJBRhDC.js";function l(n){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(c,{}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"forge-ai-file-picker"})," component provides an easy way for users to select and upload files with support for both button and icon-button variants."]}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(i.h2,{id:"features",children:"Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Button and Icon Button Variants"}),": Choose between ",e.jsx(i.code,{children:"button"})," and ",e.jsx(i.code,{children:"icon-button"})," variants for different UI contexts"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Drag & Drop Support"}),": Visual feedback when files are dragged over the component"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"File Type Restrictions"}),": Use the ",e.jsx(i.code,{children:"accept"})," attribute to limit file types (e.g., ",e.jsx(i.code,{children:"image/*"}),", ",e.jsx(i.code,{children:".pdf"}),", ",e.jsx(i.code,{children:"text/plain"}),")"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Multiple File Selection"}),": Enable ",e.jsx(i.code,{children:"multiple"})," attribute to allow selecting multiple files at once"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Event Emission"}),": Emits ",e.jsx(i.code,{children:"forge-ai-file-picker-change"})," event with file details and timestamp"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Accessibility"}),": Full keyboard support and ARIA labels for screen readers"]}),`
`]}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i.h3,{id:"button-variant",children:"Button Variant"}),`
`,e.jsx(i.p,{children:"The default variant displays as a standard button with text content."}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(i.h3,{id:"icon-button-variant",children:"Icon Button Variant"}),`
`,e.jsx(i.p,{children:"The icon-button variant displays as a compact icon button, ideal for toolbars or space-constrained layouts."}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i.h2,{id:"file-type-restrictions",children:"File Type Restrictions"}),`
`,e.jsxs(i.p,{children:["You can restrict the types of files that can be selected using the ",e.jsx(i.code,{children:"accept"})," attribute:"]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(i.h2,{id:"multiple-file-selection",children:"Multiple File Selection"}),`
`,e.jsxs(i.p,{children:["Enable multiple file selection by setting the ",e.jsx(i.code,{children:"multiple"})," attribute:"]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(i.h2,{id:"disabled-state",children:"Disabled State"}),`
`,e.jsx(i.p,{children:"The component can be disabled to prevent file selection:"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(i.h2,{id:"events",children:"Events"}),`
`,e.jsx(i.p,{children:"The component emits the following events:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"forge-ai-file-picker-change"})}),": Fired when a file is selected via click or drag & drop",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"detail.file"}),": The selected File object"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"detail.timestamp"}),": Timestamp when the file was selected"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<!-- Basic file picker -->
<forge-ai-file-picker>Choose File</forge-ai-file-picker>

<!-- Icon button variant -->
<forge-ai-file-picker variant="icon-button">
  <forge-icon slot="icon" name="upload"></forge-icon>
</forge-ai-file-picker>

<!-- Image files only -->
<forge-ai-file-picker accept="image/*">Select Image</forge-ai-file-picker>

<!-- Multiple files -->
<forge-ai-file-picker multiple>Select Files</forge-ai-file-picker>

<!-- With event handling -->
<forge-ai-file-picker id="file-picker">Upload Document</forge-ai-file-picker>
<script>
  document.getElementById('file-picker').addEventListener('forge-ai-file-picker-change', event => {
    console.log('File selected:', event.detail.file.name);
  });
<\/script>
`})}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(a,{})]})}function R(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{R as default};

import{j as e,M as r,C as a,A as l}from"./blocks-BkTUxhlt.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{A as n,D as h}from"./AiChainOfThought.stories-C7J-hpQx.js";import"./iframe-B1Mvpz_X.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BhZVzxrc.js";import"./property-CXqI3rTd.js";import"./ai-reasoning-header-DMKnqxW1.js";import"./if-defined-dnIW84B-.js";import"./ai-chat-interface-HIaCENGo.js";import"./state-DSnEguRI.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-chat-header-BNWOnhUP.js";import"./ai-icon-Dc1s64V1.js";import"./ai-gradient-container-BGX3cQc4.js";import"./utils-Bn45QkHx.js";import"./class-map-Bnksb1HH.js";import"./directive-CJw_OlP2.js";import"./overlay-DPtVioTz.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-empty-state-tU2NPgVF.js";import"./ai-prompt-j5vRwN55.js";import"./index-DBP4fG47.js";import"./tslib.es6-DB7za60O.js";import"./base-adapter-DBqpRPtw.js";import"./base-button-adapter-BIHJs8Zs.js";import"./icon-registry-CgXURTcr.js";import"./with-default-aria-BMV5JQ5D.js";import"./icon-bnm7miJN.js";import"./index-UcjIgpty.js";import"./base-lit-element-BeM5_E6Y.js";import"./index-CR0C8gOy.js";import"./field-CLpGOnZW.js";import"./index-ChFZvLCp.js";import"./ai-dropdown-menu-wH1nq8py.js";import"./query-CeEMzN2B.js";import"./query-assigned-elements-C0jk5akS.js";import"./popover-R0yVfKq2.js";import"./ai-voice-input-B2Iyl8h3.js";import"./ai-user-message-DXPJjKWz.js";import"./ai-response-message-IlcHLfXT.js";import"./ai-actions-toolbar-CIv3oLEq.js";import"./index-CNQKkUaq.js";function s(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:n}),`
`,e.jsx(i.h1,{id:"ai-chain-of-thought",children:"AI Chain of Thought"}),`
`,e.jsxs(i.p,{children:["A structured container for displaying AI reasoning processes with expandable content. Uses ",e.jsx(i.code,{children:"forge-ai-reasoning-header"})," and contains specialized utility components for different types of thought processes."]}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<forge-ai-chain-of-thought title="Analyzing Request">
  <forge-ai-thought-search-result .sources="\${sources}">
    <span slot="title">Searching for information</span>
    Found 3 relevant articles about the topic.
  </forge-ai-thought-search-result>

  <forge-ai-thought-image>
    <span slot="title">Analyzing image</span>
    <img src="image.jpg" slot="image" />
  </forge-ai-thought-image>

  <forge-ai-thought-detail>
    <span slot="title">Final assessment</span>
    Based on the analysis, here's my conclusion...
  </forge-ai-thought-detail>
</forge-ai-chain-of-thought>
`})}),`
`,e.jsx(i.h2,{id:"utility-components",children:"Utility Components"}),`
`,e.jsxs(i.h3,{id:"search-results-forge-ai-thought-search-result",children:["Search Results (",e.jsx(i.code,{children:"forge-ai-thought-search-result"}),")"]}),`
`,e.jsx(i.p,{children:"Displays search results with clickable source links."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"sources"})," property: Array of ",e.jsx(i.code,{children:"{title, href}"})," objects"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"title"})," slot: Description of the search"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"image-analysis-forge-ai-thought-image",children:["Image Analysis (",e.jsx(i.code,{children:"forge-ai-thought-image"}),")"]}),`
`,e.jsx(i.p,{children:"Shows image analysis with the analyzed image."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"image"})," slot: The image being analyzed"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"title"})," slot: Description of the analysis"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"detail-assessment-forge-ai-thought-detail",children:["Detail Assessment (",e.jsx(i.code,{children:"forge-ai-thought-detail"}),")"]}),`
`,e.jsx(i.p,{children:"General-purpose component for text-based reasoning steps."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"title"})," slot: Step description"]}),`
`,e.jsx(i.li,{children:"Default slot: Reasoning content"}),`
`]}),`
`,e.jsx(i.h2,{id:"key-points",children:"Key Points"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Expandable container"}),": Uses reasoning header for toggle functionality"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Specialized components"}),": Different utility components for different reasoning types"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Structured thinking"}),": Organizes AI reasoning into clear, visual steps"]}),`
`]}),`
`,e.jsx(i.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:n})]})}function te(t={}){const{wrapper:i}={...o(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(s,{...t})}):s(t)}export{te as default};

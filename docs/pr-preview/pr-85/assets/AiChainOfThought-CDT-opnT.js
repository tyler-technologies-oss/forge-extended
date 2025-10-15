import{j as e,M as r,C as a,A as l}from"./blocks-BKjT9Dw4.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{A as n,D as h}from"./AiChainOfThought.stories-Dtb275Yg.js";import"./iframe-BKP6vMqB.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BhZVzxrc.js";import"./property-DMmDRPg7.js";import"./ai-reasoning-header-BrGjRCE1.js";import"./if-defined-3hMPaY-I.js";import"./ai-chat-interface-BpNlovbV.js";import"./state-DNA7nhOl.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-chat-header-CbVClyWh.js";import"./ai-icon-ePnVWrZQ.js";import"./ai-gradient-container-Cz50PS20.js";import"./utils-Bn45QkHx.js";import"./class-map-OHUOkoEl.js";import"./directive-CJw_OlP2.js";import"./overlay-5zNjNbUb.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-empty-state-D60UuyRN.js";import"./ai-prompt-8bWsQO20.js";import"./index--1y8LJdS.js";import"./tslib.es6-D5TJvmCu.js";import"./base-adapter-D72Umsh7.js";import"./base-button-adapter-DE1A2g_z.js";import"./icon-registry-FyA6-By-.js";import"./with-default-aria-D0bZRvxi.js";import"./icon-CVy8WPiZ.js";import"./index-CpBQAsUS.js";import"./base-lit-element-DRP9ivuU.js";import"./index-yu9yqbCr.js";import"./field-BIBv6qki.js";import"./index-Bnmpiz6z.js";import"./ai-dropdown-menu-DwWfn4v7.js";import"./query-CeEMzN2B.js";import"./query-assigned-elements-C0jk5akS.js";import"./popover-CLylAEgt.js";import"./ai-voice-input-Cvr69brK.js";import"./ai-user-message-BwotdKMT.js";import"./ai-response-message-P4zO-BQu.js";import"./ai-actions-toolbar-B8uOSwSE.js";import"./index-DSA-pCzY.js";function s(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:n}),`
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

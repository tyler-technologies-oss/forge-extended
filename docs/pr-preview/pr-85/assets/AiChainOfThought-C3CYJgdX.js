import{j as e,M as r,C as a,A as l}from"./blocks-BCARkvgB.js";import{useMDXComponents as o}from"./index-DNFFXgUn.js";import{A as n,D as h}from"./AiChainOfThought.stories-CjHDkHZo.js";import"./iframe-H7I6SA_0.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BhZVzxrc.js";import"./property-DIp2Xoco.js";import"./ai-reasoning-header-Cu6ZMWoh.js";import"./if-defined-Cj0qVhtD.js";import"./ai-chat-interface-taFXM52P.js";import"./state-Cu3mo0WS.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./ai-chat-header-BulJbkiL.js";import"./ai-icon-BwJcqoSN.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CHjdDoYg.js";import"./class-map-DZjzRYMH.js";import"./directive-CJw_OlP2.js";import"./overlay-BJIYkJHr.js";import"./floating-ui.dom-D-Vy2gwa.js";import"./ai-empty-state-CHf0_rke.js";import"./ai-prompt-B8N1hZlT.js";import"./ai-dropdown-menu-DDv1hmg1.js";import"./query-CeEMzN2B.js";import"./query-assigned-elements-C0jk5akS.js";import"./popover-DzOFAkTh.js";import"./ai-voice-input-BAxGoH1g.js";import"./ai-user-message-D-mFHc4r.js";import"./ai-response-message-BhBPv8XJ.js";import"./ai-actions-toolbar-zuOCXbFG.js";import"./icon-registry-Dzn911pM.js";import"./constants-rwysG9cG.js";import"./tslib.es6-8j9kLYnD.js";import"./index-Bxv9-6Pg.js";import"./utils-Bn45QkHx.js";import"./base-lit-element-DjYE9yfk.js";import"./index-4MkXZpN5.js";import"./icon-D5HAnF9R.js";import"./index-AIawYiyc.js";import"./base-button-adapter-dDP2vnJr.js";import"./with-default-aria-DthQn8WE.js";import"./focus-indicator-constants-vD-HmAUJ.js";function s(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:n}),`
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
`,e.jsx(l,{of:n})]})}function ie(t={}){const{wrapper:i}={...o(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(s,{...t})}):s(t)}export{ie as default};

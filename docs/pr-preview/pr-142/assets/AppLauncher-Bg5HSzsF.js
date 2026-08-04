import{j as e,M as c}from"./blocks-6g3TNqm2.js";import{useMDXComponents as l}from"./index-De36GQbW.js";import"./iframe-Bi2jjneX.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Migration/App Launcher"}),`
`,e.jsx(n.h1,{id:"app-launcher-migration",children:"App Launcher Migration"}),`
`,e.jsxs(n.p,{children:["Migrating from the ",e.jsx(n.code,{children:"forge-internal"})," ",e.jsx(n.code,{children:"<forge-app-launcher>"})," to ",e.jsx(n.code,{children:"@tylertech/forge-extended"}),"."]}),`
`,e.jsx(n.h2,{id:"key-changes",children:"Key Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data source:"})," ",e.jsx(n.code,{children:"optionsCallback"})," is gone. Set ",e.jsx(n.code,{children:"relatedApps"})," and ",e.jsx(n.code,{children:"allApps"})," array properties directly."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Trigger:"})," ",e.jsx(n.code,{children:"<forge-app-launcher-button>"})," is removed. ",e.jsx(n.code,{children:"<forge-app-launcher>"})," renders its own trigger."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icons:"})," the ",e.jsx(n.code,{children:"icon"})," object is replaced by a single ",e.jsx(n.code,{children:"iconName"})," string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Events:"})," the ",e.jsx(n.code,{children:"forge-app-launcher-select"})," event is removed. Options are native ",e.jsx(n.code,{children:"<a>"})," links."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default target:"})," now ",e.jsx(n.code,{children:"_blank"})," (was ",e.jsx(n.code,{children:"_self"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"New:"})," ",e.jsx(n.code,{children:"<forge-app-launcher-link>"})," for supplementary links, plus slots for headings/labels."]}),`
`]}),`
`,e.jsx(n.h2,{id:"option-shape",children:"Option shape"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- { label, uri, icon: { type, name, uri, color }, helpText, priority, target }
+ { label, uri, iconName, target }
`})}),`
`,e.jsx(n.h2,{id:"before--after",children:"Before / After"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Before -->
<forge-app-launcher id="launcher"></forge-app-launcher>
<script>
  launcher.optionsCallback = async () => ({
    options: [{ label: 'Payments', uri: '/pay', icon: { type: 'font', name: 'payment' } }]
  });
<\/script>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- After -->
<forge-app-launcher id="launcher"></forge-app-launcher>
<script>
  launcher.relatedApps = [{ label: 'Payments', uri: '/pay', iconName: 'payment', target: '_blank' }];
  launcher.allApps = [...];
<\/script>
`})}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"?path=/docs/components-app-launcher--docs",children:"App Launcher docs"})," for the full API."]})]})}function h(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{h as default};

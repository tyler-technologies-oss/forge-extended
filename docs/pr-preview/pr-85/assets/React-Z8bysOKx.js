import{j as e,M as r}from"./blocks-Cg_EVWIb.js";import{useMDXComponents as s}from"./index-DNFFXgUn.js";import"./iframe-ChOg00Na.js";import"./index-CWk7euD-.js";import"./_commonjsHelpers-CqkleIqs.js";function o(n){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Frameworks/React"}),`
`,e.jsx(t.h1,{id:"react",children:"React"}),`
`,e.jsxs(t.p,{children:[`Direct support for custom elements in React has been a requested feature for long time. As you can see on
`,e.jsx(t.a,{href:"https://custom-elements-everywhere.com/#react",rel:"nofollow",children:"Custom Elements Everywhere"})," React scores quite low."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["As of May 2024, React 19 now ",e.jsx(t.a,{href:"https://custom-elements-everywhere.com/#react-beta",rel:"nofollow",children:"supports custom elements"})," natively."]}),`
`,e.jsx(t.p,{children:"This means that you can use Forge components directly in React more seamlessly without any additional libraries! 🎉"}),`
`]}),`
`,e.jsx(t.p,{children:"If you're using React 18 or earlier, you can still use Forge Extended components, but there are some caveats to be aware of:"}),`
`,e.jsx(t.h2,{id:"the-problem",children:"The Problem"}),`
`,e.jsx(t.p,{children:`React doesn't pass data through the JavaScript API on HTML elements. This means that any Web Components created
with the Custom Elements API in the browser will suffer from the same issue when trying to pass complex data types
such as array, objects, and functions through to the underlying HTML element.`}),`
`,e.jsx(t.p,{children:`Another issue is how event bubbling works in React. Since React uses its own synthetic events system, standard HTML
event bubbling from custom elements doesn't work, nor does attaching event listeners to these custom elements.`}),`
`,e.jsx(t.h2,{id:"forge-extended--react-adapter",children:"Forge Extended + React Adapter"}),`
`,e.jsx(t.p,{children:"To make using Forge Extended with React more seamless, we have created an adapter library that helps with the issues mentioned above."}),`
`,e.jsx(t.p,{children:`This adapter library provides a thin wrapper component around all Forge Extended components that allows you to pass data and listen
to events in a more React-friendly way.`}),`
`,e.jsxs(t.p,{children:["While the adapter is not ",e.jsx(t.em,{children:"required"})," to use Forge Extended with React, it is ",e.jsx(t.strong,{children:"highly"})," recommended to make the integration easier."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["You can view source code for the Forge Extended React adapter on ",e.jsx(t.a,{href:"https://github.com/tyler-technologies-oss/forge-extended/tree/main/packages/extended-react",rel:"nofollow",children:"GitHub"}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.p,{children:"To use Forge in your React application, install the following packages from npm:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm install @tylertech/forge-extended @tylertech/forge-extended-react
`})}),`
`,e.jsx(t.p,{children:"Now that you have Forge Extended and the React adapter installed, let's add the rest of the setup to your React application."}),`
`,e.jsx(t.h2,{id:"importing-components",children:"Importing Components"}),`
`,e.jsxs(t.p,{children:["To use Forge Extended components in your React application, import the components you need from the ",e.jsx(t.code,{children:"@tylertech/forge-extended-react"}),` package,
as well as the custom elements from `,e.jsx(t.code,{children:"@tylertech/forge-extended"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { ForgeResponsiveToolbar } from '@tylertech/forge-extended-react';

import '@tylertech/forge-extended/responsive-toolbar';

function App() {
  return <ForgeResponsiveToolbar></ForgeResponsiveToolbar>;
}
`})})]})}function h(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{h as default};

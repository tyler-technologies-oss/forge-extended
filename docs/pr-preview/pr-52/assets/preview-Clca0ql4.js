const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-CiECf_XJ.js","./iframe-CRrBDKo-.js","./index-CPtbKEmR.js","./_commonjsHelpers-CqkleIqs.js","./index-BCI4JQNS.js","./index-ogSvIofg.js"])))=>i.map(i=>d[i]);
import{_ as o}from"./iframe-CRrBDKo-.js";var i=Object.defineProperty,s=(e,r)=>{for(var t in r)i(e,t,{get:r[t],enumerable:!0})},_={};s(_,{parameters:()=>n});var d=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,a]=r;return a.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await o(()=>import("./DocsRenderer-CFRXHY34-CiECf_XJ.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>d[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};

import{v as T}from"./v4-CtRu48qb.js";const{addons:m}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:A}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:l}=__STORYBOOK_MODULE_GLOBAL__;var b="storybook/actions",S=`${b}/action-event`,x={depth:10,clearOnStoryChange:!0,limit:50},f=(t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:f(r,e)},v=t=>!!(typeof t=="object"&&t&&f(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),D=t=>{if(v(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),n=r==null?void 0:r.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...r,value:Object.create(n.constructor.prototype)}),e}return t},I=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?T():Date.now().toString(36)+Math.random().toString(36).substring(2);function p(t,e={}){let r={...x,...e},n=function(...o){var O,d;if(e.implicit){let g=(O="__STORYBOOK_PREVIEW__"in l?l.__STORYBOOK_PREVIEW__:void 0)==null?void 0:O.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(g){let c=!((d=globalThis==null?void 0:globalThis.FEATURES)!=null&&d.disallowImplicitActionsInRenderV8),u=new A({phase:g.phase,name:t,deprecated:c});if(c)console.warn(u);else throw u}}let i=m.getChannel(),s=I(),a=5,_=o.map(D),h=o.length>1?_:_[0],E={id:s,count:0,data:{name:t,args:h},options:{...r,maxDepth:a+(r.depth||3),allowFunction:r.allowFunction||!1}};i.emit(S,E)};return n.isAction=!0,n.implicit=e.implicit,n}var R=(t,e)=>typeof e[t]>"u"&&!(t in e),j=t=>{let{initialArgs:e,argTypes:r,id:n,parameters:{actions:o}}=t;if(!o||o.disable||!o.argTypesRegex||!r)return{};let i=new RegExp(o.argTypesRegex);return Object.entries(r).filter(([s])=>!!i.test(s)).reduce((s,[a,_])=>(R(a,e)&&(s[a]=p(a,{implicit:!0,id:n})),s),{})},w=t=>{let{initialArgs:e,argTypes:r,parameters:{actions:n}}=t;return n!=null&&n.disable||!r?{}:Object.entries(r).filter(([o,i])=>!!i.action).reduce((o,[i,s])=>(R(i,e)&&(o[i]=p(typeof s.action=="string"?s.action:i)),o),{})},L=[w,j],y=!1,C=t=>{let{parameters:{actions:e}}=t;if(!(e!=null&&e.disable)&&!y&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in l&&typeof l.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=l.__STORYBOOK_TEST_ON_MOCK_CALL__;r((n,o)=>{let i=n.getMockName();i!=="spy"&&(!/^next\/.*::/.test(i)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(s=>i.startsWith(s)))&&p(i)(o)}),y=!0}},B=[C];export{L as argsEnhancers,B as loaders};

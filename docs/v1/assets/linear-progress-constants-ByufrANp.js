import{x as v}from"./lit-element-CxMangmT.js";import{g as I}from"./_commonjsHelpers-CqkleIqs.js";import{C as L}from"./property-CCc0HukU.js";var b={exports:{}},C;function M(){return C||(C=1,function(m,d){(function(){function B(h,O){var c,u=0,P=h.length,l,e="",t,o,f,i,n,a,p,R,x=!0,y=!1,s;c=arguments.length>1?O:{},typeof c.indent>"u"&&(c.indent="    "),typeof c.openbrace=="string"&&(x=c.openbrace==="end-of-line"),typeof c.autosemicolon=="boolean"&&(y=c.autosemicolon);function S(r){return r===" "||r===`
`||r==="	"||r==="\r"||r==="\f"}function E(r){return r==="'"||r==='"'}function k(r){return t>="a"&&t<="z"||t>="A"&&t<="Z"||t>="0"&&t<="9"||"-_*.:#[]".indexOf(r)>=0}function A(){var r;for(r=a;r>0;r-=1)e+=c.indent}function N(){e=s(e),x?e+=" {":(e+=`
`,A(),e+="{"),o!==`
`&&(e+=`
`),a+=1}function g(){var r;a-=1,e=s(e),e.length>0&&y&&(r=e.charAt(e.length-1),r!==";"&&r!=="{"&&(e+=";")),e+=`
`,A(),e+="}",l.push(e),e=""}for(String.prototype.trimRight?s=function(r){return r.trimRight()}:s=function(r){return r.replace(/\s+$/,"")},n={Start:0,AtRule:1,Block:2,Selector:3,Ruleset:4,Property:5,Separator:6,Expression:7,URL:8},a=0,i=n.Start,R=!1,l=[],h=h.replace(/\r\n/g,`
`);u<P;){if(t=h.charAt(u),o=h.charAt(u+1),u+=1,E(p)){e+=t,t===p&&(p=null),t==="\\"&&o===p&&(e+=o,u+=1);continue}if(E(t)){e+=t,p=t;continue}if(R){e+=t,t==="*"&&o==="/"&&(R=!1,e+=o,u+=1);continue}if(t==="/"&&o==="*"){R=!0,e+=t,e+=o,u+=1;continue}if(i===n.Start){if(l.length===0&&S(t)&&e.length===0)continue;if(t<=" "||t.charCodeAt(0)>=128){i=n.Start,e+=t;continue}if(k(t)||t==="@"){if(f=s(e),f.length===0)l.length>0&&(e=`

`);else if(f.charAt(f.length-1)==="}"||f.charAt(f.length-1)===";")e=f+`

`;else for(;o=e.charAt(e.length-1),!(o!==" "&&o.charCodeAt(0)!==9);)e=e.substr(0,e.length-1);e+=t,i=t==="@"?n.AtRule:n.Selector;continue}}if(i===n.AtRule){if(t===";"){e+=t,i=n.Start;continue}if(t==="{"){f=s(e),N(),i=f==="@font-face"?n.Ruleset:n.Block;continue}e+=t;continue}if(i===n.Block){if(k(t)){if(f=s(e),f.length===0)l.length>0&&(e=`

`);else if(f.charAt(f.length-1)==="}")e=f+`

`;else for(;o=e.charAt(e.length-1),!(o!==" "&&o.charCodeAt(0)!==9);)e=e.substr(0,e.length-1);A(),e+=t,i=n.Selector;continue}if(t==="}"){g(),i=n.Start;continue}e+=t;continue}if(i===n.Selector){if(t==="{"){N(),i=n.Ruleset;continue}if(t==="}"){g(),i=n.Start;continue}e+=t;continue}if(i===n.Ruleset){if(t==="}"){g(),i=n.Start,a>0&&(i=n.Block);continue}if(t===`
`){e=s(e),e+=`
`;continue}if(!S(t)){e=s(e),e+=`
`,A(),e+=t,i=n.Property;continue}e+=t;continue}if(i===n.Property){if(t===":"){e=s(e),e+=": ",i=n.Expression,S(o)&&(i=n.Separator);continue}if(t==="}"){g(),i=n.Start,a>0&&(i=n.Block);continue}e+=t;continue}if(i===n.Separator){if(!S(t)){e+=t,i=n.Expression;continue}E(o)&&(i=n.Expression);continue}if(i===n.Expression){if(t==="}"){g(),i=n.Start,a>0&&(i=n.Block);continue}if(t===";"){e=s(e),e+=`;
`,i=n.Ruleset;continue}if(e+=t,t==="("&&e.charAt(e.length-2)==="l"&&e.charAt(e.length-3)==="r"&&e.charAt(e.length-4)==="u"){i=n.URL;continue}continue}if(i===n.URL&&t===")"&&e.charAt(e.length-1!=="\\")){e+=t,i=n.Expression;continue}e+=t}return e=l.join("")+e,e}m.exports=B})()}(b)),b.exports}var _=M();const $=I(_);function z(m){return d=>v`
      ${d()}

      <style>
${$(m,{indent:"  "})}
      </style>
    `}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const F=`${L}linear-progress`,U={INDETERMINATE:"forge-linear-progress--indeterminate"},q={ROOT:".forge-linear-progress",TRACK:".track",PROGRESS:".primary-bar"},T={DETERMINATE:"determinate",PROGRESS:"progress",BUFFER:"buffer",THEME:"theme"},w={...T},H={elementName:F,classes:U,selectors:q,attributes:w,observedAttributes:T};export{H as L,z as s};

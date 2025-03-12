import{R as e,f as A,h,i as _,u as I}from"./index-oKvIZERb.js";import{g as D,a as L,b as M,h as v,c as B}from"./utils-DbzorOZO.js";const R="_container_avqoi_337",q="_codeLink_avqoi_341",G="_subcomponentHeader_avqoi_347",z="_section_avqoi_353",O="_table_avqoi_357",E={container:R,codeLink:q,subcomponentHeader:G,section:z,table:O};function s({title:n,name:t,children:l,headingLevel:a="h3"}){const o=(a==="h3"?n:`${t}-${n}`).toLowerCase().replace(/[^a-z0-9]/gi,"-");return e.createElement("section",{className:E.section},e.createElement(A,{as:a,id:o},n),l)}const j=["(default)"];function g({items:n}){return e.createElement("table",{className:E.table},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Name"),e.createElement("th",null,"Description"))),e.createElement("tbody",null,n==null?void 0:n.map((t,l)=>e.createElement("tr",{key:`${t.name}-${l}`},e.createElement("td",null,j.includes(t.name)?e.createElement("i",null,t.name):e.createElement(h,null,t.name)),e.createElement("td",null,e.createElement(_,null,t.description))))))}function F(){return e.createElement("img",{className:"github-logo",src:"./github-mark.png",alt:"GitHub Logo",style:{height:"1.5rem",width:"1.5rem"}})}const C="https://github.com/tyler-technologies-oss/forge-extended/tree",U=n=>n.replace(/^forge-/gi,"").replace(/-/g," ").replace(/(?:^|\s)\S/g,t=>t.toUpperCase());function k({typeText:n}){n=v(n);const t=[...new Set(n.match(/\w+/g)??[])].sort((a,r)=>r.length-a.length),l=L();return t.forEach(a=>{const r=B(a);if(r){const{path:o,lineNumber:u}=r,c=`${C}/${l}/packages/extended/${o}#L${u}`,i=new RegExp(`(?<!>)${a}`,"g");n=n.replace(i,`<a href=${c} target="_blank" rel="noreferrer noopener">${a}</a>`)}}),e.createElement(h,null,e.createElement("span",{dangerouslySetInnerHTML:{__html:n}}))}function H({items:n,globalConfigProperties:t}){return e.createElement("table",{className:E.table},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Name"),e.createElement("th",null,"Type"),e.createElement("th",null,"Default"),e.createElement("th",null,"Description"),t!=null&&t.length?e.createElement("th",{style:{whiteSpace:"nowrap",textAlign:"center"}},"Global Config"):null)),e.createElement("tbody",null,n==null?void 0:n.map((l,a)=>{var r;return e.createElement("tr",{key:`${l.name}-${a}`},e.createElement("td",null,e.createElement(h,null,l.name)),e.createElement("td",null,(r=l.type)!=null&&r.text?e.createElement(k,{typeText:l.type.text}):"-"),e.createElement("td",null,l.default?e.createElement(h,null,l.default):"-"),e.createElement("td",null,e.createElement(_,null,l.description)),t!=null&&t.length?e.createElement("td",{style:{textAlign:"center"}},t.includes(l.name)?"✅":""):null)})))}function X({items:n}){return e.createElement("table",{className:E.table},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Name"),e.createElement("th",null,"Description"),e.createElement("th",null,"Type"))),e.createElement("tbody",null,n==null?void 0:n.map(t=>{var l;return e.createElement("tr",{key:t.name},e.createElement("td",null,e.createElement(h,null,t.name)),e.createElement("td",null,e.createElement(_,null,t.description)),e.createElement("td",null,(l=t.type)!=null&&l.text?e.createElement(k,{typeText:t.type.text}):"-"))})))}function J({items:n}){return e.createElement("table",{className:E.table},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Name"),e.createElement("th",null,"Description"),e.createElement("th",null,"Parameters"),e.createElement("th",null,"Return Type"))),e.createElement("tbody",null,n==null?void 0:n.map(t=>{var l,a,r;return e.createElement("tr",{key:t.name},e.createElement("td",null,e.createElement(h,null,`${t.name}()`)),e.createElement("td",null,e.createElement(_,null,t.description)),e.createElement("td",null,(l=t.parameters)!=null&&l.length?e.createElement(k,{typeText:P(t.parameters)}):"-"),e.createElement("td",null,(r=(a=t.return)==null?void 0:a.type)!=null&&r.text?e.createElement(k,{typeText:t.return.type.text}):"-"))})))}function K({dependencies:n}){return e.createElement(e.Fragment,null,e.createElement("p",null,"This component will automatically include the following components:"),e.createElement("ul",null,n.map(t=>{const l=t.toLowerCase().replace(/^forge-/gi,"").replace(/[^a-z0-9]/gi,"-");return e.createElement("li",{key:t},e.createElement("a",{href:`./?path=/docs/components-${l}--docs`},`<${t}>`))})))}function P(n){return n.map(t=>`${t.name}: ${t.type.text}`).join(", ")}function d(n){return n.sort((t,l)=>t.name.localeCompare(l.name))}function N({tagName:n,headingLevel:t}){var $,T,S,x,w;const l=M(n),a=($=l.members)==null?void 0:$.filter(m=>m.kind==="field"&&m.privacy==="public"),r=l.attributes,o=(T=l.members)==null?void 0:T.filter(m=>m.kind==="method"&&m.privacy==="public"),u=l.events,c=(S=l.dependencies)==null?void 0:S.map(({name:m})=>m),i=(x=l.globalConfigProperties)==null?void 0:x.map(({name:m})=>m),p=((w=l.slots)==null?void 0:w.map(m=>(m.name||(m.name="(default)"),m)))??[],b=l.cssProperties,y=l.cssParts,f=l.states;return e.createElement("div",null,!!(a!=null&&a.length)&&e.createElement(s,{title:"Properties",name:n,headingLevel:t},e.createElement(H,{items:d(a),globalConfigProperties:i})),!!(r!=null&&r.length)&&e.createElement(s,{title:"Attributes",name:n,headingLevel:t},e.createElement(H,{items:d(r)})),!!(u!=null&&u.length)&&e.createElement(s,{title:"Events",name:n,headingLevel:t},e.createElement(X,{items:d(u)})),!!(p!=null&&p.length)&&e.createElement(s,{title:"Slots",name:n,headingLevel:t},e.createElement(g,{items:d(p)})),!!(o!=null&&o.length)&&e.createElement(s,{title:"Methods",name:n,headingLevel:t},e.createElement(J,{items:d(o)})),!!(f!=null&&f.length)&&e.createElement(s,{title:"States",name:n,headingLevel:t},e.createElement(g,{items:f})),!!(b!=null&&b.length)&&e.createElement(s,{title:"CSS Custom Properties",name:n,headingLevel:t},e.createElement(g,{items:d(b)})),!!(y!=null&&y.length)&&e.createElement(s,{title:"CSS Shadow Parts",name:n,headingLevel:t},e.createElement(g,{items:d(y)})),!!(c!=null&&c.length)&&e.createElement(s,{title:"Dependencies",name:n,headingLevel:t},e.createElement(K,{dependencies:c.sort()})))}function W(){const n=I("story",["story"]),t=n.story.component;if(!t||typeof t!="string")return null;const l=n.story.subcomponents,a=!!l&&Object.keys(l).length>0,r=L(),o=({modulePath:c,className:i})=>e.createElement("a",{href:`${C}/${r}/packages/extended/${c}`,rel:"noreferrer noopener",target:"_blank",className:i},e.createElement(F,null));if(!a){const c=D(t);return e.createElement("div",{className:E.container},c!=null&&c.path?e.createElement(o,{modulePath:c.path,className:E.codeLink}):null,e.createElement(N,{tagName:t,headingLevel:"h3"}))}const u=[t,...Object.values(l)];return e.createElement("div",null,u.map(c=>{const i=`${c.toLowerCase().replace(/[^a-z0-9]/gi,"-")}-api`,p=D(c);return e.createElement("div",{key:c,style:{marginBlockStart:"24px"}},e.createElement("div",{className:E.subcomponentHeader},e.createElement(A,{as:"h3",id:i},U(c)),p.path?e.createElement(o,{modulePath:p.path}):null),e.createElement(N,{tagName:c,headingLevel:"h4"}))}))}export{W as C};

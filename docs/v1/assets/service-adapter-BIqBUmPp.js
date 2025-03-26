function G(t=5){return Math.random().toString(36).substring(2,2+t)}function F(t){return typeof t<"u"&&t!==null}function J(t){return typeof t=="string"}function X(t){return typeof t=="number"}function Y(t){return typeof t=="function"}function A(t){return t instanceof Array}function _(t){return t instanceof Object}function K(t){return t!=null&&""+t!="false"}function Q(t){return+t}function Z(t,n){return t===n||typeof t=="object"&&typeof n=="object"&&JSON.stringify(t)===JSON.stringify(n)}function $(t,n,o){let e,i,r,s,a=0;o=o||{};const f=()=>{a=o.leading===!1?0:Date.now(),s=null,r=t.apply(e,i),s||(e=i=null)};return function(){const l=Date.now();!a&&o.leading===!1&&(a=l);const c=n-(l-a);return e=this,i=arguments,c<=0||c>n?(s&&(clearTimeout(s),s=null),a=l,r=t.apply(e,i),s||(e=i=null)):!s&&o.trailing!==!1&&(s=setTimeout(f,c)),r}}function C(t){return t.ownerDocument||document}function d(t){return t&&t.nodeType===1}function b(t,n){if(!d(t))throw new Error("DOMUtils - offset: invalid element argument");const o=t.getBoundingClientRect(),e=C(t).defaultView,i=n||e.document.documentElement,r={width:o.width,height:o.width,top:0,left:0,bottom:0,right:0};if(!n||i===e.document.documentElement||i===e.document.body)r.top=e.scrollY+o.top,r.bottom=i.clientHeight-e.scrollY-o.bottom,r.left=e.scrollX+o.left,r.right=i.clientWidth-e.scrollX-o.right;else{if(!d(n))throw new Error("DOMUtils - offset: invalid parentElement argument");const s=n.getBoundingClientRect();r.top=o.top-s.top,r.bottom=s.bottom-o.bottom,r.left=o.left-s.left,r.right=s.right-o.right}return{width:Math.round(o.width),height:Math.round(o.height),top:Math.round(r.top),bottom:Math.round(r.bottom),left:Math.round(r.left),right:Math.round(r.right)}}function z(t){for(;t.lastChild;)t.removeChild(t.lastChild)}function q(t,n){return n.parentNode.replaceChild(t,n)}function T(t,n){A(t)?t.forEach(o=>n.classList.add(o)):n.classList.add(t)}function N(t,n){A(t)?t.forEach(o=>n.classList.remove(o)):n.classList.remove(t)}function V(){const t=document.createElement("fakeelement"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(const o in n)if(t.style[o]!==void 0)return n[o]}async function tt(t,n,o=!0){return t.classList.add(n),new Promise(e=>{const i=V(),r=()=>{o&&t.classList.remove(n),t.removeEventListener(i,r),e()};t.addEventListener(i,r)})}function nt(t){t.removeNode?t.removeNode(!0):t.remove?t.remove():t.parentNode.removeChild(t)}function ot(t,n){const o=u(t,n);return o.length?Promise.resolve(o[0]):new Promise(e=>{const i=new MutationObserver(r=>{if(r.reduce((a,f)=>a+f.addedNodes.length,0)>0){const a=u(t,n);a.length&&(i.disconnect(),e(a[0]))}});i.observe(t,{childList:!0,subtree:!0})})}function E(t,n){if(t.nodeType!==Node.ELEMENT_NODE)return!1;typeof n=="string"&&(n=n.replace(/\s+/,"").split(","));const o=Element.prototype.matches;return n.some(e=>o.call(t,e))}function u(t,n,o=!1){let e=[];if(!t)return e;if(typeof n=="string"&&(n=n.replace(/\s+/,"").split(",")),o&&E(t,n)&&e.indexOf(t)===-1&&e.push(t),t.tagName==="SLOT")t.assignedNodes().forEach(r=>e=e.concat(u(r,n,!0)));else{let i=t.shadowRoot?t.shadowRoot.firstElementChild:t.firstElementChild;for(;i;)e=e.concat(u(i,n,!0)),i=i.nextElementSibling}return e}function et(t=document){const n=t.activeElement;return!n||n===t.body?n:w(n)}function w(t){return t.shadowRoot&&t.shadowRoot.activeElement&&(t=w(t.shadowRoot.activeElement)),t}function rt(t,n,o){n?T(o,t):N(o,t)}function it(t,n,o,e=""){n?t.setAttribute(o,e):t.removeAttribute(o)}function st(t,n,o="auto",e="nearest"){if(!t)return;if(t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth){const r=b(n,t),s=r.top<=n.clientHeight,a=r.bottom<=n.clientHeight;if(s||a){const c=h(e,s,n.offsetTop,n.clientHeight,t.offsetTop,t.offsetHeight);t.scrollTo({top:c,behavior:o});return}const f=r.left<=n.clientWidth,l=r.right<=n.clientWidth;if(f||l){const c=h(e,f,n.offsetLeft,n.clientWidth,t.offsetLeft,t.offsetWidth);t.scrollTo({left:c,behavior:o})}}}function h(t,n,o,e,i,r){return t==="nearest"?n?o-i-e:o-r+e*2:o-i-r/2+e/2}const L=["srbg","p3","rec2020"],O=["fullscreen","standalone","minimal-ui","browser","window-controls-overlay"],D=["standard","high"],H=["none","active"],P=[0,1],p=["none","hover"],k=["none","inverted"],R=["portrait","landscape"],S=["none","scroll","optional-paged","paged"],B=["none","scroll"],m=["none","coarse","fine"],W=["no-preference","more","less","custom"],M=["light","dark"],x=["no-preference","reduce"],U=["none","initial-only","enabled"],j=["none","slow","fast"],I=["standard","high"];Array.from(p.values()),Array.from(m.values()),Array.from(L.values()),Array.from(O.values()),Array.from(D.values()),Array.from(H.values()),Array.from(P.values()),Array.from(p.values()),Array.from(k.values()),Array.from(R.values()),Array.from(S.values()),Array.from(B.values()),Array.from(m.values()),Array.from(W.values()),Array.from(M.values()),Array.from(x.values()),Array.from(U.values()),Array.from(j.values()),Array.from(I.values());var g;(function(t){t.Up="up",t.Down="down",t.Left="left",t.Right="right"})(g||(g={}));var v;(function(t){t.Scroll="scroll",t.Scrolled="scrolled",t.ScrolledStart="scrolled-start",t.ScrolledEnd="scrolled-end"})(v||(v={}));var y;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.DELETE="DELETE",t.PATCH="PATCH",t.HEAD="HEAD",t.CONNECT="CONNECT",t.OPTIONS="OPTIONS",t.TRACE="TRACE"})(y||(y={}));export{g as S,K as a,J as b,Q as c,u as d,T as e,N as f,et as g,it as h,X as i,A as j,$ as k,F as l,v as m,Z as n,_ as o,tt as p,q,G as r,nt as s,rt as t,z as u,Y as v,st as w,ot as x};

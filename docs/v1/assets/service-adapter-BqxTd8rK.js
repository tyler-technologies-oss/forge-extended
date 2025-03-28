function J(t=5){return Math.random().toString(36).substring(2,2+t)}function X(t){return typeof t<"u"&&t!==null}function Y(t){return typeof t=="string"}function K(t){return typeof t=="number"}function Q(t){return typeof t=="function"}function w(t){return t instanceof Array}function R(t){return t instanceof Object}function Z(t){return t!=null&&""+t!="false"}function $(t){return+t}function q(t,n){return t===n||typeof t=="object"&&typeof n=="object"&&JSON.stringify(t)===JSON.stringify(n)}function z(t,n,o){let e,r,i,a,c=0;o=o||{};const l=()=>{c=o.leading===!1?0:Date.now(),a=null,i=t.apply(e,r),a||(e=r=null)};return function(){const u=Date.now();!c&&o.leading===!1&&(c=u);const f=n-(u-c);return e=this,r=arguments,f<=0||f>n?(a&&(clearTimeout(a),a=null),c=u,i=t.apply(e,r),a||(e=r=null)):!a&&o.trailing!==!1&&(a=setTimeout(l,f)),i}}function T(t){return t.ownerDocument||document}function h(t){return t&&t.nodeType===1}function b(t,n){if(!h(t))throw new Error("DOMUtils - offset: invalid element argument");const o=t.getBoundingClientRect(),e=T(t).defaultView,r=n||e.document.documentElement,i={width:o.width,height:o.width,top:0,left:0,bottom:0,right:0};if(!n||r===e.document.documentElement||r===e.document.body)i.top=e.scrollY+o.top,i.bottom=r.clientHeight-e.scrollY-o.bottom,i.left=e.scrollX+o.left,i.right=r.clientWidth-e.scrollX-o.right;else{if(!h(n))throw new Error("DOMUtils - offset: invalid parentElement argument");const a=n.getBoundingClientRect();i.top=o.top-a.top,i.bottom=a.bottom-o.bottom,i.left=o.left-a.left,i.right=a.right-o.right}return{width:Math.round(o.width),height:Math.round(o.height),top:Math.round(i.top),bottom:Math.round(i.bottom),left:Math.round(i.left),right:Math.round(i.right)}}function F(t){for(;t.lastChild;)t.removeChild(t.lastChild)}function tt(t,n){return n.parentNode.replaceChild(t,n)}function N(t,n){w(t)?t.forEach(o=>n.classList.add(o)):n.classList.add(t)}function E(t,n){w(t)?t.forEach(o=>n.classList.remove(o)):n.classList.remove(t)}function V(){const t=document.createElement("fakeelement"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(const o in n)if(t.style[o]!==void 0)return n[o]}async function nt(t,n,o=!0){return t.classList.add(n),new Promise(e=>{const r=V(),i=()=>{o&&t.classList.remove(n),t.removeEventListener(r,i),e()};t.addEventListener(r,i)})}function ot(t){t.removeNode?t.removeNode(!0):t.remove?t.remove():t.parentNode.removeChild(t)}function et(t,n){const o=d(t,n);return o.length?Promise.resolve(o[0]):new Promise(e=>{const r=new MutationObserver(i=>{if(i.reduce((c,l)=>c+l.addedNodes.length,0)>0){const c=d(t,n);c.length&&(r.disconnect(),e(c[0]))}});r.observe(t,{childList:!0,subtree:!0})})}function L(t,n){if(t.nodeType!==Node.ELEMENT_NODE)return!1;typeof n=="string"&&(n=n.replace(/\s+/,"").split(","));const o=Element.prototype.matches;return n.some(e=>o.call(t,e))}function d(t,n,o=!1){let e=[];if(!t)return e;if(typeof n=="string"&&(n=n.replace(/\s+/,"").split(",")),o&&L(t,n)&&e.indexOf(t)===-1&&e.push(t),t.tagName==="SLOT")t.assignedNodes().forEach(i=>e=e.concat(d(i,n,!0)));else{let r=t.shadowRoot?t.shadowRoot.firstElementChild:t.firstElementChild;for(;r;)e=e.concat(d(r,n,!0)),r=r.nextElementSibling}return e}function it(t=document){const n=t.activeElement;return!n||n===t.body?n:C(n)}function C(t){return t.shadowRoot&&t.shadowRoot.activeElement&&(t=C(t.shadowRoot.activeElement)),t}function rt(t,n,o){n?N(o,t):E(o,t)}function st(t,n,o,e=""){n?t.setAttribute(o,e):t.removeAttribute(o)}function at(t,n,o="auto",e="nearest"){if(!t)return;if(t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth){const i=b(n,t),a=i.top<=n.clientHeight,c=i.bottom<=n.clientHeight;if(a||c){const f=p(e,a,n.offsetTop,n.clientHeight,t.offsetTop,t.offsetHeight);t.scrollTo({top:f,behavior:o});return}const l=i.left<=n.clientWidth,u=i.right<=n.clientWidth;if(l||u){const f=p(e,l,n.offsetLeft,n.clientWidth,t.offsetLeft,t.offsetWidth);t.scrollTo({left:f,behavior:o})}}}function p(t,n,o,e,r,i){return t==="nearest"?n?o-r-e:o-i+e*2:o-r-i/2+e/2}const D=["srbg","p3","rec2020"],H=["fullscreen","standalone","minimal-ui","browser","window-controls-overlay"],P=["standard","high"],k=["none","active"],S=[0,1],m=["none","hover"],B=["none","inverted"],M=["portrait","landscape"],W=["none","scroll","optional-paged","paged"],_=["none","scroll"],v=["none","coarse","fine"],x=["no-preference","more","less","custom"],U=["light","dark"],j=["no-preference","reduce"],I=["none","initial-only","enabled"],O=["none","slow","fast"],G=["standard","high"];Array.from(m.values()),Array.from(v.values()),Array.from(D.values()),Array.from(H.values()),Array.from(P.values()),Array.from(k.values()),Array.from(S.values()),Array.from(m.values()),Array.from(B.values()),Array.from(M.values()),Array.from(W.values()),Array.from(_.values()),Array.from(v.values()),Array.from(x.values()),Array.from(U.values()),Array.from(j.values()),Array.from(I.values()),Array.from(O.values()),Array.from(G.values());class s{static observe(n,o,e){var r,i;s._targets.has(n)&&((r=s._observer)==null||r.unobserve(n)),s._targets.set(n,o),s._countTargets(),(i=s._observer)==null||i.observe(n,e)}static unobserve(n){var o;s._targets.delete(n),(o=s._observer)==null||o.unobserve(n),s._countTargets()}static _countTargets(){s._observer?s._targets.size<1&&(s._observer=void 0):s._targets.size&&(s._observer=new ResizeObserver(s._handleResize))}}s._targets=new Map;s._handleResize=t=>{t.forEach(n=>{var o;(o=s._targets.get(n.target))==null||o(n)})};var g;(function(t){t.Up="up",t.Down="down",t.Left="left",t.Right="right"})(g||(g={}));var y;(function(t){t.Scroll="scroll",t.Scrolled="scrolled",t.ScrolledStart="scrolled-start",t.ScrolledEnd="scrolled-end"})(y||(y={}));var A;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.DELETE="DELETE",t.PATCH="PATCH",t.HEAD="HEAD",t.CONNECT="CONNECT",t.OPTIONS="OPTIONS",t.TRACE="TRACE"})(A||(A={}));export{s as F,g as S,$ as a,Y as b,Z as c,d,N as e,E as f,it as g,st as h,K as i,w as j,z as k,X as l,y as m,q as n,R as o,nt as p,tt as q,J as r,ot as s,rt as t,F as u,Q as v,at as w,et as x};

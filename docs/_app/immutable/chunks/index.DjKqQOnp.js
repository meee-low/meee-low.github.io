var C=Object.defineProperty;var D=(t,e,n)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $=(t,e,n)=>(D(t,typeof e!="symbol"?e+"":e,n),n);import{r as m,n as y,e as w,f as T,i as A,g as j,h as N,j as B,k as H,l as b,m as I,p as P,q as R}from"./scheduler.BlDD8Q_K.js";let p=!1;function L(){p=!0}function q(){p=!1}function M(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function O(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let a=0;a<e.length;a++){const o=e[a];o.claim_order!==void 0&&s.push(o)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const a=e[s].claim_order,o=(r>0&&e[n[r]].claim_order<=a?r+1:M(1,r,_=>e[n[_]].claim_order,a))-1;i[s]=n[o]+1;const c=o+1;n[c]=s,r=Math.max(c,r)}const u=[],l=[];let f=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);f>=s;f--)l.push(e[f]);f--}for(;f>=0;f--)l.push(e[f]);u.reverse(),l.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<l.length;s++){for(;a<u.length&&l[s].claim_order>=u[a].claim_order;)a++;const o=a<u.length?u[a]:null;t.insertBefore(l[s],o)}}function z(t,e){t.appendChild(e)}function F(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function it(t){const e=E("style");return e.textContent="/* empty */",G(F(t),e),e.sheet}function G(t,e){return z(t.head||t,e),e.sheet}function U(t,e){if(p){for(O(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function rt(t,e,n){p&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function st(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function at(){return x(" ")}function lt(){return x("")}function ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ft(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ct(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function ot(t){return function(e){e.target===this&&t.call(this,e)}}function dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _t(t){return t.dataset.svelteH}function W(t){return Array.from(t.childNodes)}function J(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,i,r=!1){J(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const f=t[l];if(e(f)){const s=n(f);return s===void 0?t.splice(l,1):t[l]=s,r||(t.claim_info.last_index=l),f}}for(let l=t.claim_info.last_index-1;l>=0;l--){const f=t[l];if(e(f)){const s=n(f);return s===void 0?t.splice(l,1):t[l]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,f}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function K(t,e,n,i){return S(t,r=>r.nodeName===e,r=>{const u=[];for(let l=0;l<r.attributes.length;l++){const f=r.attributes[l];n[f.name]||u.push(f.name)}u.forEach(l=>r.removeAttribute(l))},()=>i(e))}function ht(t,e,n){return K(t,e,n,E)}function Q(t,e){return S(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(e),!0)}function mt(t){return Q(t," ")}function pt(t,e){e=""+e,t.data!==e&&(t.data=e)}function $t(t,e){t.value=e??""}function yt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function xt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function gt(t,e){return new t(e)}const h=new Set;let d;function vt(){d={r:0,c:[],p:d}}function wt(){d.r||m(d.c),d=d.p}function X(t,e){t&&t.i&&(h.delete(t),t.i(e))}function Nt(t,e,n,i){if(t&&t.o){if(h.has(t))return;h.add(t),d.c.push(()=>{h.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function bt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function At(t){t&&t.c()}function Et(t,e){t&&t.l(e)}function Y(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),N(()=>{const u=t.$$.on_mount.map(I).filter(A);t.$$.on_destroy?t.$$.on_destroy.push(...u):m(u),t.$$.on_mount=[]}),r.forEach(N)}function Z(t,e){const n=t.$$;n.fragment!==null&&(B(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function k(t,e){t.$$.dirty[0]===-1&&(P.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function St(t,e,n,i,r,u,l=null,f=[-1]){const s=H;b(t);const a=t.$$={fragment:null,ctx:[],props:u,update:y,not_equal:r,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:w(),dirty:f,skip_bound:!1,root:e.target||s.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(t,e.props||{},(c,_,...g)=>{const v=g.length?g[0]:_;return a.ctx&&r(a.ctx[c],a.ctx[c]=v)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](v),o&&k(t,c)),_}):[],a.update(),o=!0,m(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){L();const c=W(e.target);a.fragment&&a.fragment.l(c),c.forEach(V)}else a.fragment&&a.fragment.c();e.intro&&X(t.$$.fragment),Y(t,e.target,e.anchor),q(),T()}b(s)}class Ct{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){Z(this,1),this.$destroy=y}$on(e,n){if(!A(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!j(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const tt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(tt);export{gt as A,ut as B,ft as C,$t as D,F as E,it as F,ct as G,ot as H,bt as I,Ct as S,W as a,Q as b,ht as c,V as d,E as e,mt as f,rt as g,U as h,St as i,pt as j,At as k,_t as l,Et as m,dt as n,Y as o,X as p,Nt as q,Z as r,at as s,x as t,xt as u,wt as v,st as w,vt as x,lt as y,yt as z};
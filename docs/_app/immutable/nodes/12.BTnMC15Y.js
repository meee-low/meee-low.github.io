import{s as b,n as c}from"../chunks/scheduler.Qsv3XV_C.js";import{S as k,i as x,e as d,c as p,a as g,d as i,k as o,g as v,r as y,t as w,s as E,b as I,f as P,h as f}from"../chunks/index.4hiSCMsU.js";import{e as m}from"../chunks/each.D8rep6LZ.js";function u(r,a,n){const t=r.slice();return t[1]=a[n],t}function _(r){let a,n=r[1].title+"",t,s;return{c(){a=d("a"),t=w(n),s=E(),this.h()},l(l){a=p(l,"A",{class:!0,href:!0});var e=g(a);t=I(e,n),s=P(e),e.forEach(i),this.h()},h(){o(a,"class","min-h-10 min-w-24 rounded-sm border border-black p-2 text-center hover:underline"),o(a,"href",$+r[1].link)},m(l,e){v(l,a,e),f(a,t),f(a,s)},p:c,d(l){l&&i(a)}}}function S(r){let a,n=m(r[0]),t=[];for(let s=0;s<n.length;s+=1)t[s]=_(u(r,n,s));return{c(){a=d("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){a=p(s,"DIV",{class:!0});var l=g(a);for(let e=0;e<t.length;e+=1)t[e].l(l);l.forEach(i),this.h()},h(){o(a,"class","flex gap-4 px-[5vw]")},m(s,l){v(s,a,l);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(a,null)},p(s,[l]){if(l&1){n=m(s[0]);let e;for(e=0;e<n.length;e+=1){const h=u(s,n,e);t[e]?t[e].p(h,l):(t[e]=_(h),t[e].c(),t[e].m(a,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=n.length}},i:c,o:c,d(s){s&&i(a),y(t,s)}}}const $="/interactive/bracketeering/";function q(r){return[[{title:"Images",link:"images"},{title:"Text",link:"list"}]]}class T extends k{constructor(a){super(),x(this,a,q,S,b,{})}}export{T as component};

import{s as X,n as M,c as P,o as G,r as z}from"../chunks/Bx6vS9cK.js";import{S as H,i as K,d as m,a as T,g as B,y as D,j as L,s as W,b,c as E,e as y,f as S,h as w,t as A,z as F,w as R,m as O,o as Q}from"../chunks/pkgiTMN5.js";import{e as J}from"../chunks/DCkIQie_.js";import{s as Y}from"../chunks/B0g_KCio.js";import{R as Z,e as x}from"../chunks/B5y4zSmF.js";import{p as $}from"../chunks/Bi5hm_x9.js";function V(n,e,l){const i=n.slice();return i[17]=e[l],i}function ee(n){let e,l,i=n[4][0]+"",a,o,t,s=n[4][1]+"",r,d,h,u,p,N,g=J(n[6]),_=[];for(let c=0;c<g.length;c+=1)_[c]=j(V(n,g,c));return{c(){e=w("div"),l=w("button"),a=A(i),o=L(),t=w("button"),r=A(s),d=L(),h=w("div"),u=w("ul");for(let c=0;c<_.length;c+=1)_[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var v=y(e);l=E(v,"BUTTON",{class:!0});var f=y(l);a=S(f,i),f.forEach(m),o=B(v),t=E(v,"BUTTON",{class:!0});var k=y(t);r=S(k,s),k.forEach(m),v.forEach(m),d=B(c),h=E(c,"DIV",{});var C=y(h);u=E(C,"UL",{});var I=y(u);for(let U=0;U<_.length;U+=1)_[U].l(I);I.forEach(m),C.forEach(m),this.h()},h(){O(l,"class","border p-2"),O(t,"class","border p-2"),O(e,"class","flex gap-2 px-[5vw]")},m(c,v){T(c,e,v),b(e,l),b(l,a),b(e,o),b(e,t),b(t,r),T(c,d,v),T(c,h,v),b(h,u);for(let f=0;f<_.length;f+=1)_[f]&&_[f].m(u,null);p||(N=[R(l,"click",n[11]),R(t,"click",n[12])],p=!0)},p(c,v){if(v&16&&i!==(i=c[4][0]+"")&&W(a,i),v&16&&s!==(s=c[4][1]+"")&&W(r,s),v&64){g=J(c[6]);let f;for(f=0;f<g.length;f+=1){const k=V(c,g,f);_[f]?_[f].p(k,v):(_[f]=j(k),_[f].c(),_[f].m(u,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=g.length}},d(c){c&&(m(e),m(d),m(h)),Q(_,c),p=!1,z(N)}}}function te(n){let e,l,i,a,o,t,s=n[7].interactive.ranker.sendButtonText+"",r,d,h;return{c(){e=w("form"),l=L(),i=w("label"),a=w("textarea"),o=L(),t=w("button"),r=A(s),this.h()},l(u){e=E(u,"FORM",{});var p=y(e);l=B(p),i=E(p,"LABEL",{});var N=y(i);a=E(N,"TEXTAREA",{rows:!0,cols:!0,class:!0}),y(a).forEach(m),N.forEach(m),o=B(p),t=E(p,"BUTTON",{class:!0});var g=y(t);r=S(g,s),g.forEach(m),p.forEach(m),this.h()},h(){O(a,"rows","5"),O(a,"cols","40"),O(a,"class","border"),O(t,"class","block rounded-md border p-2")},m(u,p){T(u,e,p),b(e,l),b(e,i),b(i,a),F(a,n[3]),b(e,o),b(e,t),b(t,r),d||(h=[R(a,"input",n[10]),R(t,"click",n[8])],d=!0)},p(u,p){p&8&&F(a,u[3]),p&128&&s!==(s=u[7].interactive.ranker.sendButtonText+"")&&W(r,s)},d(u){u&&m(e),d=!1,z(h)}}}function j(n){let e,l=`${n[17]}`,i,a;return{c(){e=w("li"),i=A(l),a=L()},l(o){e=E(o,"LI",{});var t=y(e);i=S(t,l),a=B(t),t.forEach(m)},m(o,t){T(o,e,t),b(e,i),b(e,a)},p(o,t){t&64&&l!==(l=`${o[17]}`)&&W(i,l)},d(o){o&&m(e)}}}function q(n){var t,s;let e,l,i=JSON.stringify({words:n[1],wordScores:n[5],ranker:{elements:(t=n[0])==null?void 0:t.elements,matrix:(s=n[0])==null?void 0:s.comparisons.toArrayOfArrays()}},null,2)+"",a,o;return{c(){e=w("pre"),l=A("  "),a=A(i),o=A(`
`)},l(r){e=E(r,"PRE",{});var d=y(e);l=S(d,"  "),a=S(d,i),o=S(d,`
`),d.forEach(m)},m(r,d){T(r,e,d),b(e,l),b(e,a),b(e,o)},p(r,d){var h,u;d&35&&i!==(i=JSON.stringify({words:r[1],wordScores:r[5],ranker:{elements:(h=r[0])==null?void 0:h.elements,matrix:(u=r[0])==null?void 0:u.comparisons.toArrayOfArrays()}},null,2)+"")&&W(a,i)},d(r){r&&m(e)}}}function re(n){let e,l;function i(s,r){return s[0]?ee:te}let a=i(n),o=a(n),t=n[2]&&q(n);return{c(){o.c(),e=L(),t&&t.c(),l=D()},l(s){o.l(s),e=B(s),t&&t.l(s),l=D()},m(s,r){o.m(s,r),T(s,e,r),t&&t.m(s,r),T(s,l,r)},p(s,[r]){a===(a=i(s))&&o?o.p(s,r):(o.d(1),o=a(s),o&&(o.c(),o.m(e.parentNode,e))),s[2]?t?t.p(s,r):(t=q(s),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},i:M,o:M,d(s){s&&(m(e),m(l)),o.d(s),t&&t.d(s)}}}function le(n,e,l){let i,a,o,t;P(n,$,k=>l(13,o=k)),P(n,Y,k=>l(7,t=k));let s=!1;G(()=>{l(2,s=o.url.searchParams.has("debug"))});let r;const d=x.bradleyTerry;let h,u=[],p=["",""];function N(){l(1,u=h.split(",")),l(0,r=new Z(u)),g()}function g(){r&&l(4,p=r.suggestComparison())}function _(k){r==null||r.addComparison(p[k],p[(k+1)%2]),l(0,r),g()}function c(){h=this.value,l(3,h)}const v=()=>_(0),f=()=>_(1);return n.$$.update=()=>{n.$$.dirty&3&&l(6,i=r?r.sortedElements(d):u),n.$$.dirty&3&&l(5,a=r?r.evaluate(d):u.map(k=>0))},[r,u,s,h,p,a,i,t,N,_,c,v,f]}class ue extends H{constructor(e){super(),K(this,e,le,re,X,{})}}export{ue as component};

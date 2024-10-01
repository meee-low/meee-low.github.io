import{s as X,n as R,c as O,o as Z,f as $,e as U}from"../chunks/scheduler.Qsv3XV_C.js";import{S as x,i as ee,y as j,g as C,d as c,e as k,s as M,t as y,c as v,a as S,f as A,b as I,n as V,k as m,h as g,w as Q,j as F,r as te}from"../chunks/index.4hiSCMsU.js";import{e as H}from"../chunks/each.D8rep6LZ.js";import{P as se,e as le,M as ae}from"../chunks/ranker.DnwvpLt0.js";import{s as K,i as re}from"../chunks/images_store.DLIbdK8b.js";import{g as oe}from"../chunks/entry.CyGHBQmc.js";function z(o,s,r){const t=o.slice();return t[12]=s[r],t[14]=r,t}function ne(o){let s,r,t,e,l=`You have made ${o[0]?o[0].getTotalComparisons():0} comparisons.`,a,u,_,h=`There are ${o[4].length} total images.`,b,T,w,d=`We recommend doing between ${o[4].length} and ${Math.round(o[4].length*Math.log2(o[4].length))} comparisons for accurate results.`,n,E,N,W="Finish ranking",G,Y,f=o[2]&&J(o);return{c(){s=k("div"),f&&f.c(),r=M(),t=k("div"),e=k("span"),a=y(l),u=M(),_=k("span"),b=y(h),T=M(),w=k("span"),n=y(d),E=M(),N=k("button"),N.textContent=W,this.h()},l(i){s=v(i,"DIV",{class:!0});var p=S(s);f&&f.l(p),p.forEach(c),r=A(i),t=v(i,"DIV",{class:!0});var P=S(t);e=v(P,"SPAN",{class:!0});var q=S(e);a=I(q,l),q.forEach(c),u=A(P),_=v(P,"SPAN",{class:!0});var B=S(_);b=I(B,h),B.forEach(c),T=A(P),w=v(P,"SPAN",{class:!0});var D=S(w);n=I(D,d),D.forEach(c),P.forEach(c),E=A(i),N=v(i,"BUTTON",{class:!0,"data-svelte-h":!0}),V(N)!=="svelte-1wu9snc"&&(N.textContent=W),this.h()},h(){m(s,"class","grid grid-cols-2 gap-6"),m(e,"class","block"),m(_,"class","block"),m(w,"class","block"),m(t,"class","my-4"),m(N,"class","rounded-sm border border-black p-2")},m(i,p){C(i,s,p),f&&f.m(s,null),C(i,r,p),C(i,t,p),g(t,e),g(e,a),g(t,u),g(t,_),g(_,b),g(t,T),g(t,w),g(w,n),C(i,E,p),C(i,N,p),G||(Y=Q(N,"click",o[6]),G=!0)},p(i,p){i[2]?f?f.p(i,p):(f=J(i),f.c(),f.m(s,null)):f&&(f.d(1),f=null),p&1&&l!==(l=`You have made ${i[0]?i[0].getTotalComparisons():0} comparisons.`)&&F(a,l),p&16&&h!==(h=`There are ${i[4].length} total images.`)&&F(b,h),p&16&&d!==(d=`We recommend doing between ${i[4].length} and ${Math.round(i[4].length*Math.log2(i[4].length))} comparisons for accurate results.`)&&F(n,d)},d(i){i&&(c(s),c(r),c(t),c(E),c(N)),f&&f.d(),G=!1,Y()}}}function ie(o){let s,r="Error: Not enough images to start comparing. Need at least 2.",t,e,l="Click here to go back and add images.";return{c(){s=k("p"),s.textContent=r,t=M(),e=k("a"),e.textContent=l,this.h()},l(a){s=v(a,"P",{class:!0,"data-svelte-h":!0}),V(s)!=="svelte-148cj7w"&&(s.textContent=r),t=A(a),e=v(a,"A",{class:!0,href:!0,"data-svelte-h":!0}),V(e)!=="svelte-w9cmbm"&&(e.textContent=l),this.h()},h(){m(s,"class","text-red-500"),m(e,"class","text-blue-500 underline"),m(e,"href","./")},m(a,u){C(a,s,u),C(a,t,u),C(a,e,u)},p:R,d(a){a&&(c(s),c(t),c(e))}}}function J(o){let s,r=H(o[2]),t=[];for(let e=0;e<r.length;e+=1)t[e]=L(z(o,r,e));return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=j()},l(e){for(let l=0;l<t.length;l+=1)t[l].l(e);s=j()},m(e,l){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,l);C(e,s,l)},p(e,l){if(l&44){r=H(e[2]);let a;for(a=0;a<r.length;a+=1){const u=z(e,r,a);t[a]?t[a].p(u,l):(t[a]=L(u),t[a].c(),t[a].m(s.parentNode,s))}for(;a<t.length;a+=1)t[a].d(1);t.length=r.length}},d(e){e&&c(s),te(t,e)}}}function L(o){let s,r,t,e,l,a=o[12].file.name+"",u,_,h,b,T;function w(){return o[7](o[14])}return{c(){s=k("button"),r=k("img"),e=M(),l=k("span"),u=y(a),_=M(),this.h()},l(d){s=v(d,"BUTTON",{class:!0});var n=S(s);r=v(n,"IMG",{class:!0,src:!0}),e=A(n),l=v(n,"SPAN",{class:!0});var E=S(l);u=I(E,a),E.forEach(c),_=A(n),n.forEach(c),this.h()},h(){m(r,"class","mx-auto max-h-[80%] object-cover"),U(r.src,t=o[12].url)||m(r,"src",t),m(l,"class","block overflow-hidden text-ellipsis whitespace-nowrap text-center"),m(s,"class",h=(o[3]?"cursor-wait":"")+" max-h-[70vh] rounded-md border-2 border-black"),s.disabled=o[3]},m(d,n){C(d,s,n),g(s,r),g(s,e),g(s,l),g(l,u),g(s,_),b||(T=Q(s,"click",w),b=!0)},p(d,n){o=d,n&4&&!U(r.src,t=o[12].url)&&m(r,"src",t),n&4&&a!==(a=o[12].file.name+"")&&F(u,a),n&8&&h!==(h=(o[3]?"cursor-wait":"")+" max-h-[70vh] rounded-md border-2 border-black")&&m(s,"class",h),n&8&&(s.disabled=o[3])},d(d){d&&c(s),b=!1,T()}}}function ce(o){let s;function r(l,a){return l[1]||!l[0]?ie:ne}let t=r(o),e=t(o);return{c(){e.c(),s=j()},l(l){e.l(l),s=j()},m(l,a){e.m(l,a),C(l,s,a)},p(l,[a]){t===(t=r(l))&&e?e.p(l,a):(e.d(1),e=t(l),e&&(e.c(),e.m(s.parentNode,s)))},i:R,o:R,d(l){l&&c(s),e.d(l)}}}function ue(o,s,r){let t,e;O(o,K,n=>r(9,t=n)),O(o,re,n=>r(4,e=n));let l;const a=le.bradleyTerry,u=ae.fewestComparisonsFirst;let _=!1,h,b=!1;Z(()=>{e.length>=2?(r(0,l=new se(e)),r(2,h=l.currentlyCompared)):r(1,_=!0)});function T(n){r(3,b=!0),l.handleWinner(n),r(2,h=l.newComparison(u)),r(0,l),r(3,b=!1)}function w(){$(K,t=l.sortedElements(a),t),oe("./results")}return[l,_,h,b,e,T,w,n=>{T(n)}]}class ge extends x{constructor(s){super(),ee(this,s,ue,ce,X,{})}}export{ge as component};

import{a as x,n as _,c as S}from"../chunks/scheduler.UubVa_LB.js";import{S as q,i as j,e as f,q as d,s as k,f as g,r as h,u as v,k as u,v as w,j as m,w as $,x as E}from"../chunks/index.C3OHPa4N.js";import{s as y}from"../chunks/entry.DQTx7rgY.js";const C=()=>{const s=y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return C().page.subscribe(s)}};function P(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=d(r),n=k(),i=f("p"),l=d(c)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(u),n=w(e),i=g(e,"P",{});var p=h(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(l,c)},i:_,o:_,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return S(s,H,n=>r(0,o=n)),[o]}let F=class extends q{constructor(t){super(),j(this,t,z,P,x,{})}};export{F as component};

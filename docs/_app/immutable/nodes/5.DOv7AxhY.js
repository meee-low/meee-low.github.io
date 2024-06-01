import{s as ae,n as le,r as Se,a as be,A as ye}from"../chunks/scheduler.BlDD8Q_K.js";import{S as oe,i as ue,e as E,s as C,t as Y,c as k,a as A,l as pe,f as P,b as G,d as v,n as m,g as U,h as d,D as V,B as X,w as ke,k as F,m as q,o as M,p as S,q as D,r as R,x as ce,v as he,j as fe,y as De,u as ut}from"../chunks/index.DjKqQOnp.js";import{e as ne}from"../chunks/each.CTmsS8Mm.js";import{w as ft,d as ct}from"../chunks/index.BDd1sOfL.js";import{S as we,B as Ie,T as at}from"../chunks/ThreeColumnSubHeader.zKqoN8Q2.js";const ht=()=>({personalInfo:{name:"",phone:"",email:"",linkedin:"",website:"",location:"",github:""},workExperience:[],education:[],coursesAndCertifications:[],projects:[],languages:[],skills:[]});let Ee=ft(ht());function pt(l){let e,n,t="Personal Info",a,r,s,i,h,f,$,c,o,_,u,p,b,L,H,O,I,g,T,y,Z,J,ie,x,se,de;return{c(){e=E("section"),n=E("h2"),n.textContent=t,a=C(),r=E("label"),s=Y(`Nome:\r
    `),i=E("input"),h=C(),f=E("label"),$=Y(`Telefone:\r
    `),c=E("input"),o=C(),_=E("label"),u=Y(`Email:\r
    `),p=E("input"),b=C(),L=E("label"),H=Y(`LinkedIn:\r
    `),O=E("input"),I=C(),g=E("label"),T=Y(`Website:\r
    `),y=E("input"),Z=C(),J=E("label"),ie=Y(`GitHub:\r
    `),x=E("input"),this.h()},l(z){e=k(z,"SECTION",{class:!0});var B=A(e);n=k(B,"H2",{class:!0,"data-svelte-h":!0}),pe(n)!=="svelte-1yc9z05"&&(n.textContent=t),a=P(B),r=k(B,"LABEL",{class:!0});var Te=A(r);s=G(Te,`Nome:\r
    `),i=k(Te,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),Te.forEach(v),h=P(B),f=k(B,"LABEL",{class:!0});var re=A(f);$=G(re,`Telefone:\r
    `),c=k(re,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),re.forEach(v),o=P(B),_=k(B,"LABEL",{class:!0});var W=A(_);u=G(W,`Email:\r
    `),p=k(W,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),W.forEach(v),b=P(B),L=k(B,"LABEL",{class:!0});var Ce=A(L);H=G(Ce,`LinkedIn:\r
    `),O=k(Ce,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),Ce.forEach(v),I=P(B),g=k(B,"LABEL",{class:!0});var K=A(g);T=G(K,`Website:\r
    `),y=k(K,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),K.forEach(v),Z=P(B),J=k(B,"LABEL",{class:!0});var Q=A(J);ie=G(Q,`GitHub:\r
    `),x=k(Q,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),Q.forEach(v),B.forEach(v),this.h()},h(){m(n,"class","font-bold text-lg"),m(i,"class","border inline-block"),m(i,"type","text"),m(i,"name","name"),m(i,"id","form-name"),m(i,"placeholder","Your Name"),m(r,"class","block"),m(c,"class","border inline-block"),m(c,"type","text"),m(c,"name","phone"),m(c,"id","form-phone"),m(c,"placeholder","9-999-999-999"),m(f,"class","block"),m(p,"class","border inline-block"),m(p,"type","text"),m(p,"name","email"),m(p,"id","form-email"),m(p,"placeholder","example@example.com"),m(_,"class","block"),m(O,"class","border inline-block"),m(O,"type","text"),m(O,"name","linkedin"),m(O,"id","form-linkedin"),m(O,"placeholder","example"),m(L,"class","block"),m(y,"class","border inline-block"),m(y,"type","text"),m(y,"name","website"),m(y,"id","form-website"),m(y,"placeholder","example.com"),m(g,"class","block"),m(x,"class","border inline-block"),m(x,"type","text"),m(x,"name","github"),m(x,"id","form-github"),m(x,"placeholder","example"),m(J,"class","block"),m(e,"class","mb-2")},m(z,B){U(z,e,B),d(e,n),d(e,a),d(e,r),d(r,s),d(r,i),V(i,l[1].name),d(e,h),d(e,f),d(f,$),d(f,c),V(c,l[1].phone),d(e,o),d(e,_),d(_,u),d(_,p),V(p,l[1].email),d(e,b),d(e,L),d(L,H),d(L,O),V(O,l[1].linkedin),d(e,I),d(e,g),d(g,T),d(g,y),V(y,l[1].website),d(e,Z),d(e,J),d(J,ie),d(J,x),V(x,l[1].github),se||(de=[X(i,"input",l[2]),X(c,"input",l[3]),X(p,"input",l[4]),X(O,"input",l[5]),X(y,"input",l[6]),X(x,"input",l[7])],se=!0)},p(z,[B]){B&2&&i.value!==z[1].name&&V(i,z[1].name),B&2&&c.value!==z[1].phone&&V(c,z[1].phone),B&2&&p.value!==z[1].email&&V(p,z[1].email),B&2&&O.value!==z[1].linkedin&&V(O,z[1].linkedin),B&2&&y.value!==z[1].website&&V(y,z[1].website),B&2&&x.value!==z[1].github&&V(x,z[1].github)},i:le,o:le,d(z){z&&v(e),se=!1,Se(de)}}}function dt(l,e,n){let t,a=le,r=()=>(a(),a=be(s,_=>n(1,t=_)),s);l.$$.on_destroy.push(()=>a());let{data:s}=e;r();function i(){t.name=this.value,s.set(t)}function h(){t.phone=this.value,s.set(t)}function f(){t.email=this.value,s.set(t)}function $(){t.linkedin=this.value,s.set(t)}function c(){t.website=this.value,s.set(t)}function o(){t.github=this.value,s.set(t)}return l.$$set=_=>{"data"in _&&r(n(0,s=_.data))},[s,t,i,h,f,$,c,o]}let mt=class extends oe{constructor(e){super(),ue(this,e,dt,pt,ae,{data:0})}};function Ue(l,e,n,t){var a,r,s=!1,i=n.length>=2,h=(u,p,b)=>{if(a=p,i&&(r=u),!s){let L=e(u,p,b);if(e.length<2)p(L);else return L}s=!1},f=ct(l,h,t),$=!Array.isArray(l);function c(u){var p=n(u,r);$?(s=!0,l.set(p)):p.forEach((b,L)=>{s=!0,l[L].set(b)}),s=!1}var o=!1;function _(u){var p,b,L,H;if(o){H=u(ye(f)),a(H);return}var O=f.subscribe(I=>{o?p?b=!0:p=!0:L=I});H=u(L),o=!0,a(H),O(),o=!1,b&&(H=ye(f)),p&&c(H)}return{subscribe:f.subscribe,set(u){_(()=>u)},update:_}}function ee(l,e){if(Array.isArray(e)){let n=e.concat();return Ue(l,t=>{for(let a=0;a<n.length;++a)t=t[n[a]];return t},(t,a)=>{let r=a;for(let s=0;s<n.length-1;++s)r=r[n[s]];return r[n[n.length-1]]=t,a})}else return Ue(l,n=>n[e],(n,t)=>(t[e]=n,t))}function je(l,e,n){const t=l.slice();return t[4]=e[n],t[5]=e,t[6]=n,t}function Oe(l){let e,n,t;function a(){l[3].call(e,l[5],l[6])}return{c(){e=E("input"),this.h()},l(r){e=k(r,"INPUT",{class:!0,type:!0}),this.h()},h(){m(e,"class","border block ml-2"),m(e,"type","text")},m(r,s){U(r,e,s),V(e,l[4]),n||(t=X(e,"input",a),n=!0)},p(r,s){l=r,s&2&&e.value!==l[4]&&V(e,l[4])},d(r){r&&v(e),n=!1,t()}}}function bt(l){let e,n,t="Bullet Points:",a,r,s,i="Add more bullet points",h,f,$=ne(l[1]),c=[];for(let o=0;o<$.length;o+=1)c[o]=Oe(je(l,$,o));return{c(){e=E("div"),n=E("h4"),n.textContent=t,a=C();for(let o=0;o<c.length;o+=1)c[o].c();r=C(),s=E("button"),s.textContent=i,this.h()},l(o){e=k(o,"DIV",{class:!0});var _=A(e);n=k(_,"H4",{"data-svelte-h":!0}),pe(n)!=="svelte-1vfmlcp"&&(n.textContent=t),a=P(_);for(let u=0;u<c.length;u+=1)c[u].l(_);r=P(_),s=k(_,"BUTTON",{class:!0,"data-svelte-h":!0}),pe(s)!=="svelte-srue4l"&&(s.textContent=i),_.forEach(v),this.h()},h(){m(s,"class","border block ml-2"),m(e,"class","ml-2")},m(o,_){U(o,e,_),d(e,n),d(e,a);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(e,null);d(e,r),d(e,s),h||(f=X(s,"click",l[2]),h=!0)},p(o,[_]){if(_&2){$=ne(o[1]);let u;for(u=0;u<$.length;u+=1){const p=je(o,$,u);c[u]?c[u].p(p,_):(c[u]=Oe(p),c[u].c(),c[u].m(e,r))}for(;u<c.length;u+=1)c[u].d(1);c.length=$.length}},i:le,o:le,d(o){o&&v(e),ke(c,o),h=!1,f()}}}function _t(l,e,n){let t,a=le,r=()=>(a(),a=be(s,f=>n(1,t=f)),s);l.$$.on_destroy.push(()=>a());let{bullets:s}=e;r();function i(){t.push(""),s.set(t)}function h(f,$){f[$]=this.value,s.set(t)}return l.$$set=f=>{"bullets"in f&&r(n(0,s=f.bullets))},[s,t,i,h]}class Ne extends oe{constructor(e){super(),ue(this,e,_t,bt,ae,{bullets:0})}}function $t(l){let e,n,t,a,r,s,i,h,f,$,c,o,_,u,p,b,L,H,O,I;return L=new Ne({props:{bullets:ee(l[0],"bulletPoints")}}),{c(){e=E("label"),n=Y(`Cargo:\r
`),t=E("input"),a=C(),r=E("label"),s=Y(`Empregador:\r
`),i=E("input"),h=C(),f=E("label"),$=Y(`Início:\r
`),c=E("input"),o=C(),_=E("label"),u=Y(`Fim:\r
`),p=E("input"),b=C(),F(L.$$.fragment),this.h()},l(g){e=k(g,"LABEL",{class:!0});var T=A(e);n=G(T,`Cargo:\r
`),t=k(T,"INPUT",{class:!0,type:!0}),T.forEach(v),a=P(g),r=k(g,"LABEL",{class:!0});var y=A(r);s=G(y,`Empregador:\r
`),i=k(y,"INPUT",{class:!0,type:!0}),y.forEach(v),h=P(g),f=k(g,"LABEL",{class:!0});var Z=A(f);$=G(Z,`Início:\r
`),c=k(Z,"INPUT",{class:!0,type:!0}),Z.forEach(v),o=P(g),_=k(g,"LABEL",{class:!0});var J=A(_);u=G(J,`Fim:\r
`),p=k(J,"INPUT",{class:!0,type:!0}),J.forEach(v),b=P(g),q(L.$$.fragment,g),this.h()},h(){m(t,"class","border inline-block"),m(t,"type","text"),m(e,"class","block"),m(i,"class","border inline-block"),m(i,"type","text"),m(r,"class","block"),m(c,"class","border inline-block"),m(c,"type","month"),m(f,"class","block"),m(p,"class","border inline-block"),m(p,"type","month"),m(_,"class","block")},m(g,T){U(g,e,T),d(e,n),d(e,t),V(t,l[1].position),U(g,a,T),U(g,r,T),d(r,s),d(r,i),V(i,l[1].employer),U(g,h,T),U(g,f,T),d(f,$),d(f,c),V(c,l[1].dateStart),U(g,o,T),U(g,_,T),d(_,u),d(_,p),V(p,l[1].dateEnd),U(g,b,T),M(L,g,T),H=!0,O||(I=[X(t,"input",l[2]),X(i,"input",l[3]),X(c,"input",l[4]),X(p,"input",l[5])],O=!0)},p(g,[T]){T&2&&t.value!==g[1].position&&V(t,g[1].position),T&2&&i.value!==g[1].employer&&V(i,g[1].employer),T&2&&V(c,g[1].dateStart),T&2&&V(p,g[1].dateEnd);const y={};T&1&&(y.bullets=ee(g[0],"bulletPoints")),L.$set(y)},i(g){H||(S(L.$$.fragment,g),H=!0)},o(g){D(L.$$.fragment,g),H=!1},d(g){g&&(v(e),v(a),v(r),v(h),v(f),v(o),v(_),v(b)),R(L,g),O=!1,Se(I)}}}function gt(l,e,n){let t,a=le,r=()=>(a(),a=be(s,c=>n(1,t=c)),s);l.$$.on_destroy.push(()=>a());let{data:s}=e;r();function i(){t.position=this.value,s.set(t)}function h(){t.employer=this.value,s.set(t)}function f(){t.dateStart=this.value,s.set(t)}function $(){t.dateEnd=this.value,s.set(t)}return l.$$set=c=>{"data"in c&&r(n(0,s=c.data))},[s,t,i,h,f,$]}class vt extends oe{constructor(e){super(),ue(this,e,gt,$t,ae,{data:0})}}function Ve(l,e,n){const t=l.slice();return t[3]=e[n],t[5]=n,t}function He(l){let e,n;return e=new vt({props:{data:ee(l[0],l[5])}}),{c(){F(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){M(e,t,a),n=!0},p(t,a){const r={};a&1&&(r.data=ee(t[0],t[5])),e.$set(r)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Et(l){let e,n,t="Work Experience",a,r,s="Add",i,h,f,$,c=ne(l[1]),o=[];for(let u=0;u<c.length;u+=1)o[u]=He(Ve(l,c,u));const _=u=>D(o[u],1,1,()=>{o[u]=null});return{c(){e=E("section"),n=E("h2"),n.textContent=t,a=C(),r=E("button"),r.textContent=s,i=C();for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=k(u,"SECTION",{});var p=A(e);n=k(p,"H2",{class:!0,"data-svelte-h":!0}),pe(n)!=="svelte-1w3ya4h"&&(n.textContent=t),a=P(p),r=k(p,"BUTTON",{class:!0,"data-svelte-h":!0}),pe(r)!=="svelte-17hybyw"&&(r.textContent=s),i=P(p);for(let b=0;b<o.length;b+=1)o[b].l(p);p.forEach(v),this.h()},h(){m(n,"class","inline-block font-bold text-lg"),m(r,"class","border")},m(u,p){U(u,e,p),d(e,n),d(e,a),d(e,r),d(e,i);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(e,null);h=!0,f||($=X(r,"click",l[2]),f=!0)},p(u,[p]){if(p&3){c=ne(u[1]);let b;for(b=0;b<c.length;b+=1){const L=Ve(u,c,b);o[b]?(o[b].p(L,p),S(o[b],1)):(o[b]=He(L),o[b].c(),S(o[b],1),o[b].m(e,null))}for(ce(),b=c.length;b<o.length;b+=1)_(b);he()}},i(u){if(!h){for(let p=0;p<c.length;p+=1)S(o[p]);h=!0}},o(u){o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)D(o[p]);h=!1},d(u){u&&v(e),ke(o,u),f=!1,$()}}}function kt(l,e,n){let t,a=le,r=()=>(a(),a=be(s,h=>n(1,t=h)),s);l.$$.on_destroy.push(()=>a());let{workExperience:s}=e;r();function i(){const h={position:"",employer:"",dateStart:"",dateEnd:"",bulletPoints:[]};t.push(h),s.set(t)}return l.$$set=h=>{"workExperience"in h&&r(n(0,s=h.workExperience))},[s,t,i]}class wt extends oe{constructor(e){super(),ue(this,e,kt,Et,ae,{workExperience:0})}}function We(l,e,n){const t=l.slice();return t[6]=e[n],t[7]=e,t[8]=n,t}function Fe(l){let e,n,t,a,r,s,i,h,f,$,c,o,_,u,p,b;function L(){l[3].call(t,l[7],l[8])}function H(){l[4].call(i,l[7],l[8])}function O(){l[5].call(c,l[7],l[8])}return _=new Ne({props:{bullets:ee(l[0],[l[8],"bulletPoints"])}}),{c(){e=E("label"),n=Y(`Título:\r
      `),t=E("input"),a=C(),r=E("label"),s=Y(`Descrição:\r
      `),i=E("input"),h=C(),f=E("label"),$=Y(`Link:\r
      `),c=E("input"),o=C(),F(_.$$.fragment),this.h()},l(I){e=k(I,"LABEL",{class:!0});var g=A(e);n=G(g,`Título:\r
      `),t=k(g,"INPUT",{class:!0,type:!0}),g.forEach(v),a=P(I),r=k(I,"LABEL",{class:!0});var T=A(r);s=G(T,`Descrição:\r
      `),i=k(T,"INPUT",{class:!0,type:!0}),T.forEach(v),h=P(I),f=k(I,"LABEL",{class:!0});var y=A(f);$=G(y,`Link:\r
      `),c=k(y,"INPUT",{class:!0,type:!0}),y.forEach(v),o=P(I),q(_.$$.fragment,I),this.h()},h(){m(t,"class","border inline-block"),m(t,"type","text"),m(e,"class","block"),m(i,"class","border inline-block"),m(i,"type","text"),m(r,"class","block"),m(c,"class","border inline-block"),m(c,"type","text"),m(f,"class","block")},m(I,g){U(I,e,g),d(e,n),d(e,t),V(t,l[6].title),U(I,a,g),U(I,r,g),d(r,s),d(r,i),V(i,l[6].description),U(I,h,g),U(I,f,g),d(f,$),d(f,c),V(c,l[6].link),U(I,o,g),M(_,I,g),u=!0,p||(b=[X(t,"input",L),X(i,"input",H),X(c,"input",O)],p=!0)},p(I,g){l=I,g&2&&t.value!==l[6].title&&V(t,l[6].title),g&2&&i.value!==l[6].description&&V(i,l[6].description),g&2&&c.value!==l[6].link&&V(c,l[6].link);const T={};g&1&&(T.bullets=ee(l[0],[l[8],"bulletPoints"])),_.$set(T)},i(I){u||(S(_.$$.fragment,I),u=!0)},o(I){D(_.$$.fragment,I),u=!1},d(I){I&&(v(e),v(a),v(r),v(h),v(f),v(o)),R(_,I),p=!1,Se(b)}}}function It(l){let e,n,t="Projects",a,r,s="Add",i,h,f,$,c=ne(l[1]),o=[];for(let u=0;u<c.length;u+=1)o[u]=Fe(We(l,c,u));const _=u=>D(o[u],1,1,()=>{o[u]=null});return{c(){e=E("section"),n=E("h2"),n.textContent=t,a=C(),r=E("button"),r.textContent=s,i=C();for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=k(u,"SECTION",{});var p=A(e);n=k(p,"H2",{class:!0,"data-svelte-h":!0}),pe(n)!=="svelte-1llheg4"&&(n.textContent=t),a=P(p),r=k(p,"BUTTON",{class:!0,"data-svelte-h":!0}),pe(r)!=="svelte-12518qt"&&(r.textContent=s),i=P(p);for(let b=0;b<o.length;b+=1)o[b].l(p);p.forEach(v),this.h()},h(){m(n,"class","text-lg font-bold inline"),m(r,"class","border inline-block")},m(u,p){U(u,e,p),d(e,n),d(e,a),d(e,r),d(e,i);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(e,null);h=!0,f||($=X(r,"click",l[2]),f=!0)},p(u,[p]){if(p&3){c=ne(u[1]);let b;for(b=0;b<c.length;b+=1){const L=We(u,c,b);o[b]?(o[b].p(L,p),S(o[b],1)):(o[b]=Fe(L),o[b].c(),S(o[b],1),o[b].m(e,null))}for(ce(),b=c.length;b<o.length;b+=1)_(b);he()}},i(u){if(!h){for(let p=0;p<c.length;p+=1)S(o[p]);h=!0}},o(u){o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)D(o[p]);h=!1},d(u){u&&v(e),ke(o,u),f=!1,$()}}}function Tt(l,e,n){let t,a=le,r=()=>(a(),a=be(s,c=>n(1,t=c)),s);l.$$.on_destroy.push(()=>a());let{projects:s}=e;r();function i(){t.push({title:"",description:"",link:"",bulletPoints:[]}),s.set(t)}function h(c,o){c[o].title=this.value,s.set(t)}function f(c,o){c[o].description=this.value,s.set(t)}function $(c,o){c[o].link=this.value,s.set(t)}return l.$$set=c=>{"projects"in c&&r(n(0,s=c.projects))},[s,t,i,h,f,$]}class Ct extends oe{constructor(e){super(),ue(this,e,Tt,It,ae,{projects:0})}}function Pt(l){let e,n,t,a,r,s,i,h,f,$,c,o,_,u,p,b,L,H,O,I;return L=new Ne({props:{bullets:ee(l[0],"bulletPoints")}}),{c(){e=E("label"),n=Y("Instituição: "),t=E("input"),a=C(),r=E("label"),s=Y("Título: "),i=E("input"),h=C(),f=E("label"),$=Y("Data de começo (mês/ano): "),c=E("input"),o=C(),_=E("label"),u=Y("Data de término (mês/ano): "),p=E("input"),b=C(),F(L.$$.fragment),this.h()},l(g){e=k(g,"LABEL",{class:!0});var T=A(e);n=G(T,"Instituição: "),t=k(T,"INPUT",{class:!0,type:!0}),T.forEach(v),a=P(g),r=k(g,"LABEL",{class:!0});var y=A(r);s=G(y,"Título: "),i=k(y,"INPUT",{class:!0,type:!0}),y.forEach(v),h=P(g),f=k(g,"LABEL",{class:!0});var Z=A(f);$=G(Z,"Data de começo (mês/ano): "),c=k(Z,"INPUT",{class:!0,type:!0}),Z.forEach(v),o=P(g),_=k(g,"LABEL",{class:!0});var J=A(_);u=G(J,"Data de término (mês/ano): "),p=k(J,"INPUT",{class:!0,type:!0}),J.forEach(v),b=P(g),q(L.$$.fragment,g),this.h()},h(){m(t,"class","inline-block border"),m(t,"type","text"),m(e,"class","block"),m(i,"class","inline-block border"),m(i,"type","text"),m(r,"class","block"),m(c,"class","inline-block border"),m(c,"type","month"),m(f,"class","block"),m(p,"class","inline-block border"),m(p,"type","month"),m(_,"class","block")},m(g,T){U(g,e,T),d(e,n),d(e,t),V(t,l[1].institution),U(g,a,T),U(g,r,T),d(r,s),d(r,i),V(i,l[1].degree),U(g,h,T),U(g,f,T),d(f,$),d(f,c),V(c,l[1].dateStart),U(g,o,T),U(g,_,T),d(_,u),d(_,p),V(p,l[1].dateEnd),U(g,b,T),M(L,g,T),H=!0,O||(I=[X(t,"input",l[2]),X(i,"input",l[3]),X(c,"input",l[4]),X(p,"input",l[5])],O=!0)},p(g,[T]){T&2&&t.value!==g[1].institution&&V(t,g[1].institution),T&2&&i.value!==g[1].degree&&V(i,g[1].degree),T&2&&V(c,g[1].dateStart),T&2&&V(p,g[1].dateEnd);const y={};T&1&&(y.bullets=ee(g[0],"bulletPoints")),L.$set(y)},i(g){H||(S(L.$$.fragment,g),H=!0)},o(g){D(L.$$.fragment,g),H=!1},d(g){g&&(v(e),v(a),v(r),v(h),v(f),v(o),v(_),v(b)),R(L,g),O=!1,Se(I)}}}function Lt(l,e,n){let t,a=le,r=()=>(a(),a=be(s,c=>n(1,t=c)),s);l.$$.on_destroy.push(()=>a());let{data:s}=e;r();function i(){t.institution=this.value,s.set(t)}function h(){t.degree=this.value,s.set(t)}function f(){t.dateStart=this.value,s.set(t)}function $(){t.dateEnd=this.value,s.set(t)}return l.$$set=c=>{"data"in c&&r(n(0,s=c.data))},[s,t,i,h,f,$]}class At extends oe{constructor(e){super(),ue(this,e,Lt,Pt,ae,{data:0})}}function qe(l,e,n){const t=l.slice();return t[3]=e[n],t[5]=n,t}function Me(l){let e,n;return e=new At({props:{data:ee(l[0],l[5])}}),{c(){F(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){M(e,t,a),n=!0},p(t,a){const r={};a&1&&(r.data=ee(t[0],t[5])),e.$set(r)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function St(l){let e,n,t="Education",a,r,s="Add",i,h,f,$,c=ne(l[1]),o=[];for(let u=0;u<c.length;u+=1)o[u]=Me(qe(l,c,u));const _=u=>D(o[u],1,1,()=>{o[u]=null});return{c(){e=E("section"),n=E("h2"),n.textContent=t,a=C(),r=E("button"),r.textContent=s,i=C();for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=k(u,"SECTION",{class:!0});var p=A(e);n=k(p,"H2",{class:!0,"data-svelte-h":!0}),pe(n)!=="svelte-6eo68q"&&(n.textContent=t),a=P(p),r=k(p,"BUTTON",{class:!0,"data-svelte-h":!0}),pe(r)!=="svelte-14cfj1m"&&(r.textContent=s),i=P(p);for(let b=0;b<o.length;b+=1)o[b].l(p);p.forEach(v),this.h()},h(){m(n,"class","font-bold text-lg mb-2 inline"),m(r,"class","border inline-block"),m(e,"class","mb-4")},m(u,p){U(u,e,p),d(e,n),d(e,a),d(e,r),d(e,i);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(e,null);h=!0,f||($=X(r,"click",l[2]),f=!0)},p(u,[p]){if(p&3){c=ne(u[1]);let b;for(b=0;b<c.length;b+=1){const L=qe(u,c,b);o[b]?(o[b].p(L,p),S(o[b],1)):(o[b]=Me(L),o[b].c(),S(o[b],1),o[b].m(e,null))}for(ce(),b=c.length;b<o.length;b+=1)_(b);he()}},i(u){if(!h){for(let p=0;p<c.length;p+=1)S(o[p]);h=!0}},o(u){o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)D(o[p]);h=!1},d(u){u&&v(e),ke(o,u),f=!1,$()}}}function Nt(l,e,n){let t,a=le,r=()=>(a(),a=be(s,h=>n(1,t=h)),s);l.$$.on_destroy.push(()=>a());let{education:s}=e;r();function i(){const h={institution:"",degree:"",dateStart:"",dateEnd:"",bulletPoints:[]};t.push(h),s.set(t)}return l.$$set=h=>{"education"in h&&r(n(0,s=h.education))},[s,t,i]}class Bt extends oe{constructor(e){super(),ue(this,e,Nt,St,ae,{education:0})}}function ot(l){const[e,n]=l.split("-").map(Number);return!e||!n||n<1||n>12?null:new Date(e,n-1)}function yt(l,e="pt-br"){let t=Intl.DateTimeFormat(e,{year:"numeric",month:"short"}).format(l);return e==="pt-br"&&(t=t.replaceAll(". de "," ")),t}function me(l,e="pt-br"){const n=ot(l);return n===null?"":yt(n,e)}function Be(l){const e=ot(l);return e===null?!1:e>new Date}function Re(l,e="pt-br"){if(e!="pt-br"&&e!="en")throw new Error(`Locale ${e} is not supported.`);return Be(l)?" (est.)":""}function Ye(l){let e,n,t=l[0].location+"",a;return{c(){e=E("p"),n=E("i"),a=Y(t),this.h()},l(r){e=k(r,"P",{class:!0});var s=A(e);n=k(s,"I",{class:!0}),A(n).forEach(v),a=G(s,t),s.forEach(v),this.h()},h(){m(n,"class","fa-solid fa-location-dot aria-hidden mr-1 text-teal-600"),m(e,"class","")},m(r,s){U(r,e,s),d(e,n),d(e,a)},p(r,s){s&1&&t!==(t=r[0].location+"")&&fe(a,t)},d(r){r&&v(e)}}}function Ge(l){let e,n,t=l[0].email+"",a,r;return{c(){e=E("a"),n=E("i"),a=Y(t),this.h()},l(s){e=k(s,"A",{class:!0,href:!0});var i=A(e);n=k(i,"I",{class:!0}),A(n).forEach(v),a=G(i,t),i.forEach(v),this.h()},h(){m(n,"class",l[1].email+" mr-1 text-teal-600"),m(e,"class","text-nowrap"),m(e,"href",r="mailto:"+l[0].email)},m(s,i){U(s,e,i),d(e,n),d(e,a)},p(s,i){i&1&&t!==(t=s[0].email+"")&&fe(a,t),i&1&&r!==(r="mailto:"+s[0].email)&&m(e,"href",r)},d(s){s&&v(e)}}}function ze(l){let e,n,t="in/"+l[0].linkedin,a,r;return{c(){e=E("a"),n=E("i"),a=Y(t),this.h()},l(s){e=k(s,"A",{class:!0,href:!0});var i=A(e);n=k(i,"I",{class:!0}),A(n).forEach(v),a=G(i,t),i.forEach(v),this.h()},h(){m(n,"class",l[1].linkedin+" mr-1 text-teal-600"),m(e,"class","text-nowrap"),m(e,"href",r="https://linkedin.com/in/"+l[0].linkedin)},m(s,i){U(s,e,i),d(e,n),d(e,a)},p(s,i){i&1&&t!==(t="in/"+s[0].linkedin)&&fe(a,t),i&1&&r!==(r="https://linkedin.com/in/"+s[0].linkedin)&&m(e,"href",r)},d(s){s&&v(e)}}}function Je(l){let e,n,t=l[0].phone+"",a,r;return{c(){e=E("a"),n=E("i"),a=Y(t),this.h()},l(s){e=k(s,"A",{class:!0,href:!0});var i=A(e);n=k(i,"I",{class:!0}),A(n).forEach(v),a=G(i,t),i.forEach(v),this.h()},h(){m(n,"class",l[1].phone+" mr-1 text-teal-600"),m(e,"class","text-nowrap"),m(e,"href",r="phone://"+l[0].phone)},m(s,i){U(s,e,i),d(e,n),d(e,a)},p(s,i){i&1&&t!==(t=s[0].phone+"")&&fe(a,t),i&1&&r!==(r="phone://"+s[0].phone)&&m(e,"href",r)},d(s){s&&v(e)}}}function Ke(l){let e,n,t=l[0].website+"",a,r;return{c(){e=E("a"),n=E("i"),a=Y(t),this.h()},l(s){e=k(s,"A",{class:!0,href:!0});var i=A(e);n=k(i,"I",{class:!0}),A(n).forEach(v),a=G(i,t),i.forEach(v),this.h()},h(){m(n,"class",l[1].website+" mr-1 text-teal-600"),m(e,"class","text-nowrap"),m(e,"href",r="https://"+l[0].website)},m(s,i){U(s,e,i),d(e,n),d(e,a)},p(s,i){i&1&&t!==(t=s[0].website+"")&&fe(a,t),i&1&&r!==(r="https://"+s[0].website)&&m(e,"href",r)},d(s){s&&v(e)}}}function Qe(l){let e,n,t=l[0].github+"",a,r;return{c(){e=E("a"),n=E("i"),a=Y(t),this.h()},l(s){e=k(s,"A",{class:!0,href:!0});var i=A(e);n=k(i,"I",{class:!0}),A(n).forEach(v),a=G(i,t),i.forEach(v),this.h()},h(){m(n,"class",l[1].github+" mr-1 text-teal-600"),m(e,"class","text-nowrap"),m(e,"href",r="https://www.github.com/"+l[0].github)},m(s,i){U(s,e,i),d(e,n),d(e,a)},p(s,i){i&1&&t!==(t=s[0].github+"")&&fe(a,t),i&1&&r!==(r="https://www.github.com/"+s[0].github)&&m(e,"href",r)},d(s){s&&v(e)}}}function Dt(l){let e,n,t,a,r,s,i=l[0].location&&l[0].location.length>0&&Ye(l),h=l[0].email&&Ge(l),f=l[0].linkedin&&ze(l),$=l[0].phone&&Je(l),c=l[0].website&&Ke(l),o=l[0].github&&Qe(l);return{c(){e=E("section"),i&&i.c(),n=C(),h&&h.c(),t=C(),f&&f.c(),a=C(),$&&$.c(),r=C(),c&&c.c(),s=C(),o&&o.c(),this.h()},l(_){e=k(_,"SECTION",{class:!0});var u=A(e);i&&i.l(u),n=P(u),h&&h.l(u),t=P(u),f&&f.l(u),a=P(u),$&&$.l(u),r=P(u),c&&c.l(u),s=P(u),o&&o.l(u),u.forEach(v),this.h()},h(){m(e,"class","mb-10 flex max-w-full flex-wrap gap-x-4 gap-y-2 place-content-between text-xs print:mb-2 print:gap-y-1 print:text-[6pt]")},m(_,u){U(_,e,u),i&&i.m(e,null),d(e,n),h&&h.m(e,null),d(e,t),f&&f.m(e,null),d(e,a),$&&$.m(e,null),d(e,r),c&&c.m(e,null),d(e,s),o&&o.m(e,null)},p(_,[u]){_[0].location&&_[0].location.length>0?i?i.p(_,u):(i=Ye(_),i.c(),i.m(e,n)):i&&(i.d(1),i=null),_[0].email?h?h.p(_,u):(h=Ge(_),h.c(),h.m(e,t)):h&&(h.d(1),h=null),_[0].linkedin?f?f.p(_,u):(f=ze(_),f.c(),f.m(e,a)):f&&(f.d(1),f=null),_[0].phone?$?$.p(_,u):($=Je(_),$.c(),$.m(e,r)):$&&($.d(1),$=null),_[0].website?c?c.p(_,u):(c=Ke(_),c.c(),c.m(e,s)):c&&(c.d(1),c=null),_[0].github?o?o.p(_,u):(o=Qe(_),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:le,o:le,d(_){_&&v(e),i&&i.d(),h&&h.d(),f&&f.d(),$&&$.d(),c&&c.d(),o&&o.d()}}}function Ut(l,e,n){const t={phone:"fa-solid fa-phone",email:"fa-solid fa-envelope",linkedin:"fa-brands fa-linkedin",website:"fa-solid fa-globe",location:"fa-solid fa-location-dot",github:"fa-brands fa-github"};let{data:a}=e;return l.$$set=r=>{"data"in r&&n(0,a=r.data)},[a,t]}class jt extends oe{constructor(e){super(),ue(this,e,Ut,Dt,ae,{data:0})}}function Xe(l,e,n){const t=l.slice();return t[4]=e[n],t}function Ze(l,e,n){const t=l.slice();return t[7]=e[n],t}function xe(l,e,n){const t=l.slice();return t[10]=e[n],t}function et(l){let e,n,t,a,r,s;return n=new at({props:{left:l[10].position,center:l[10].employer,right:me(l[10].dateStart,l[1])+"–"+(Be(l[10].dateEnd)?"":me(l[10].dateEnd,l[1]))}}),a=new Ie({props:{bullets:l[10].bulletPoints}}),{c(){e=E("div"),F(n.$$.fragment),t=C(),F(a.$$.fragment),r=C()},l(i){e=k(i,"DIV",{});var h=A(e);q(n.$$.fragment,h),t=P(h),q(a.$$.fragment,h),r=P(h),h.forEach(v)},m(i,h){U(i,e,h),M(n,e,null),d(e,t),M(a,e,null),d(e,r),s=!0},p(i,h){const f={};h&4&&(f.left=i[10].position),h&4&&(f.center=i[10].employer),h&6&&(f.right=me(i[10].dateStart,i[1])+"–"+(Be(i[10].dateEnd)?"":me(i[10].dateEnd,i[1]))),n.$set(f);const $={};h&4&&($.bullets=i[10].bulletPoints),a.$set($)},i(i){s||(S(n.$$.fragment,i),S(a.$$.fragment,i),s=!0)},o(i){D(n.$$.fragment,i),D(a.$$.fragment,i),s=!1},d(i){i&&v(e),R(n),R(a)}}}function tt(l){let e,n,t,a;return e=new at({props:{left:l[7].institution,center:l[7].degree,right:me(l[7].dateStart,l[1])+"–"+me(l[7].dateEnd,l[1])+Re(l[7].dateEnd)}}),t=new Ie({props:{bullets:l[7].bulletPoints}}),{c(){F(e.$$.fragment),n=C(),F(t.$$.fragment)},l(r){q(e.$$.fragment,r),n=P(r),q(t.$$.fragment,r)},m(r,s){M(e,r,s),U(r,n,s),M(t,r,s),a=!0},p(r,s){const i={};s&4&&(i.left=r[7].institution),s&4&&(i.center=r[7].degree),s&6&&(i.right=me(r[7].dateStart,r[1])+"–"+me(r[7].dateEnd,r[1])+Re(r[7].dateEnd)),e.$set(i);const h={};s&4&&(h.bullets=r[7].bulletPoints),t.$set(h)},i(r){a||(S(e.$$.fragment,r),S(t.$$.fragment,r),a=!0)},o(r){D(e.$$.fragment,r),D(t.$$.fragment,r),a=!1},d(r){r&&v(n),R(e,r),R(t,r)}}}function lt(l){let e,n,t,a,r;n=new we({props:{faIcon:"fa-solid fa-wrench",sectionTitle:l[3][l[1]].projects}});let s=ne(l[2].projects),i=[];for(let f=0;f<s.length;f+=1)i[f]=it(Xe(l,s,f));const h=f=>D(i[f],1,1,()=>{i[f]=null});return{c(){e=E("section"),F(n.$$.fragment),t=C(),a=E("div");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=k(f,"SECTION",{class:!0});var $=A(e);q(n.$$.fragment,$),t=P($),a=k($,"DIV",{class:!0});var c=A(a);for(let o=0;o<i.length;o+=1)i[o].l(c);c.forEach(v),$.forEach(v),this.h()},h(){m(a,"class","grid grid-cols-1 gap-2 px-2 print:gap-1"),m(e,"class","mb-6 print:mb-2")},m(f,$){U(f,e,$),M(n,e,null),d(e,t),d(e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(a,null);r=!0},p(f,$){const c={};if($&2&&(c.sectionTitle=f[3][f[1]].projects),n.$set(c),$&4){s=ne(f[2].projects);let o;for(o=0;o<s.length;o+=1){const _=Xe(f,s,o);i[o]?(i[o].p(_,$),S(i[o],1)):(i[o]=it(_),i[o].c(),S(i[o],1),i[o].m(a,null))}for(ce(),o=s.length;o<i.length;o+=1)h(o);he()}},i(f){if(!r){S(n.$$.fragment,f);for(let $=0;$<s.length;$+=1)S(i[$]);r=!0}},o(f){D(n.$$.fragment,f),i=i.filter(Boolean);for(let $=0;$<i.length;$+=1)D(i[$]);r=!1},d(f){f&&v(e),R(n),ke(i,f)}}}function nt(l){let e,n,t=l[4].title+"",a,r,s,i=l[4].description+"",h,f,$,c,o;return $=new Ie({props:{bullets:l[4].bulletPoints}}),{c(){e=E("div"),n=E("h3"),a=Y(t),r=C(),s=E("p"),h=Y(i),f=C(),F($.$$.fragment),c=C(),this.h()},l(_){e=k(_,"DIV",{class:!0});var u=A(e);n=k(u,"H3",{class:!0});var p=A(n);a=G(p,t),p.forEach(v),r=P(u),s=k(u,"P",{class:!0});var b=A(s);h=G(b,i),b.forEach(v),f=P(u),q($.$$.fragment,u),c=P(u),u.forEach(v),this.h()},h(){m(n,"class","font-semibold"),m(s,"class","ml-6 print:leading-snug"),m(e,"class","")},m(_,u){U(_,e,u),d(e,n),d(n,a),d(e,r),d(e,s),d(s,h),d(e,f),M($,e,null),d(e,c),o=!0},p(_,u){(!o||u&4)&&t!==(t=_[4].title+"")&&fe(a,t),(!o||u&4)&&i!==(i=_[4].description+"")&&fe(h,i);const p={};u&4&&(p.bullets=_[4].bulletPoints),$.$set(p)},i(_){o||(S($.$$.fragment,_),o=!0)},o(_){D($.$$.fragment,_),o=!1},d(_){_&&v(e),R($)}}}function it(l){let e,n,t=(l[4].title||l[4].description||l[4].link)&&nt(l);return{c(){t&&t.c(),e=De()},l(a){t&&t.l(a),e=De()},m(a,r){t&&t.m(a,r),U(a,e,r),n=!0},p(a,r){a[4].title||a[4].description||a[4].link?t?(t.p(a,r),r&4&&S(t,1)):(t=nt(a),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(ce(),D(t,1,1,()=>{t=null}),he())},i(a){n||(S(t),n=!0)},o(a){D(t),n=!1},d(a){a&&v(e),t&&t.d(a)}}}function st(l){let e,n,t,a,r;return n=new we({props:{faIcon:"fa-solid fa-certificate",sectionTitle:l[3][l[1]].certifications}}),a=new Ie({props:{bullets:l[2].coursesAndCertifications,gridCols:2}}),{c(){e=E("section"),F(n.$$.fragment),t=C(),F(a.$$.fragment),this.h()},l(s){e=k(s,"SECTION",{class:!0});var i=A(e);q(n.$$.fragment,i),t=P(i),q(a.$$.fragment,i),i.forEach(v),this.h()},h(){m(e,"class","mb-6 print:mb-2")},m(s,i){U(s,e,i),M(n,e,null),d(e,t),M(a,e,null),r=!0},p(s,i){const h={};i&2&&(h.sectionTitle=s[3][s[1]].certifications),n.$set(h);const f={};i&4&&(f.bullets=s[2].coursesAndCertifications),a.$set(f)},i(s){r||(S(n.$$.fragment,s),S(a.$$.fragment,s),r=!0)},o(s){D(n.$$.fragment,s),D(a.$$.fragment,s),r=!1},d(s){s&&v(e),R(n),R(a)}}}function Ot(l){let e,n,t,a=l[2].personalInfo.name+"",r,s,i,h,f,$,c,o,_,u,p,b,L,H,O,I,g,T,y,Z,J,ie,x,se,de;i=new jt({props:{data:l[2].personalInfo}}),$=new we({props:{faIcon:"fa-solid fa-briefcase",sectionTitle:l[3][l[1]].workExperience}});let z=ne(l[2].workExperience),B=[];for(let w=0;w<z.length;w+=1)B[w]=et(xe(l,z,w));const Te=w=>D(B[w],1,1,()=>{B[w]=null});p=new we({props:{faIcon:"fa-solid fa-graduation-cap",sectionTitle:l[3][l[1]].education}});let re=ne(l[2].education),W=[];for(let w=0;w<re.length;w+=1)W[w]=tt(Ze(l,re,w));const Ce=w=>D(W[w],1,1,()=>{W[w]=null});let K=l[2].projects.length>0&&lt(l);I=new we({props:{faIcon:"fa-solid fa-shapes",sectionTitle:l[3][l[1]].skills}}),T=new Ie({props:{bullets:l[2].skills}});let Q=l[2].coursesAndCertifications.length>0&&st(l);return ie=new we({props:{faIcon:"fa-solid fa-comments",sectionTitle:l[3][l[1]].languages}}),se=new Ie({props:{bullets:l[2].languages,gridCols:2}}),{c(){e=E("article"),n=E("section"),t=E("h1"),r=Y(a),s=C(),F(i.$$.fragment),h=C(),f=E("section"),F($.$$.fragment),c=C(),o=E("div");for(let w=0;w<B.length;w+=1)B[w].c();_=C(),u=E("section"),F(p.$$.fragment),b=C();for(let w=0;w<W.length;w+=1)W[w].c();L=C(),K&&K.c(),H=C(),O=E("section"),F(I.$$.fragment),g=C(),F(T.$$.fragment),y=C(),Q&&Q.c(),Z=C(),J=E("section"),F(ie.$$.fragment),x=C(),F(se.$$.fragment),this.h()},l(w){e=k(w,"ARTICLE",{});var N=A(e);n=k(N,"SECTION",{});var te=A(n);t=k(te,"H1",{class:!0});var Pe=A(t);r=G(Pe,a),Pe.forEach(v),te.forEach(v),s=P(N),q(i.$$.fragment,N),h=P(N),f=k(N,"SECTION",{class:!0});var _e=A(f);q($.$$.fragment,_e),c=P(_e),o=k(_e,"DIV",{class:!0});var Le=A(o);for(let j=0;j<B.length;j+=1)B[j].l(Le);Le.forEach(v),_e.forEach(v),_=P(N),u=k(N,"SECTION",{class:!0});var $e=A(u);q(p.$$.fragment,$e),b=P($e);for(let j=0;j<W.length;j+=1)W[j].l($e);$e.forEach(v),L=P(N),K&&K.l(N),H=P(N),O=k(N,"SECTION",{class:!0});var ge=A(O);q(I.$$.fragment,ge),g=P(ge),q(T.$$.fragment,ge),ge.forEach(v),y=P(N),Q&&Q.l(N),Z=P(N),J=k(N,"SECTION",{class:!0});var ve=A(J);q(ie.$$.fragment,ve),x=P(ve),q(se.$$.fragment,ve),ve.forEach(v),N.forEach(v),this.h()},h(){m(t,"class","mb-4 text-center text-4xl font-bold uppercase tracking-wide print:mb-2 print:text-[14pt]"),m(o,"class","grid grid-cols-1 gap-2 print:gap-1"),m(f,"class","mb-6 print:mb-2"),m(u,"class","mb-6 print:mb-2"),m(O,"class","mb-6 print:mb-2"),m(J,"class","mb-6 print:mb-2")},m(w,N){U(w,e,N),d(e,n),d(n,t),d(t,r),d(e,s),M(i,e,null),d(e,h),d(e,f),M($,f,null),d(f,c),d(f,o);for(let te=0;te<B.length;te+=1)B[te]&&B[te].m(o,null);d(e,_),d(e,u),M(p,u,null),d(u,b);for(let te=0;te<W.length;te+=1)W[te]&&W[te].m(u,null);d(e,L),K&&K.m(e,null),d(e,H),d(e,O),M(I,O,null),d(O,g),M(T,O,null),d(e,y),Q&&Q.m(e,null),d(e,Z),d(e,J),M(ie,J,null),d(J,x),M(se,J,null),de=!0},p(w,[N]){(!de||N&4)&&a!==(a=w[2].personalInfo.name+"")&&fe(r,a);const te={};N&4&&(te.data=w[2].personalInfo),i.$set(te);const Pe={};if(N&2&&(Pe.sectionTitle=w[3][w[1]].workExperience),$.$set(Pe),N&6){z=ne(w[2].workExperience);let j;for(j=0;j<z.length;j+=1){const Ae=xe(w,z,j);B[j]?(B[j].p(Ae,N),S(B[j],1)):(B[j]=et(Ae),B[j].c(),S(B[j],1),B[j].m(o,null))}for(ce(),j=z.length;j<B.length;j+=1)Te(j);he()}const _e={};if(N&2&&(_e.sectionTitle=w[3][w[1]].education),p.$set(_e),N&6){re=ne(w[2].education);let j;for(j=0;j<re.length;j+=1){const Ae=Ze(w,re,j);W[j]?(W[j].p(Ae,N),S(W[j],1)):(W[j]=tt(Ae),W[j].c(),S(W[j],1),W[j].m(u,null))}for(ce(),j=re.length;j<W.length;j+=1)Ce(j);he()}w[2].projects.length>0?K?(K.p(w,N),N&4&&S(K,1)):(K=lt(w),K.c(),S(K,1),K.m(e,H)):K&&(ce(),D(K,1,1,()=>{K=null}),he());const Le={};N&2&&(Le.sectionTitle=w[3][w[1]].skills),I.$set(Le);const $e={};N&4&&($e.bullets=w[2].skills),T.$set($e),w[2].coursesAndCertifications.length>0?Q?(Q.p(w,N),N&4&&S(Q,1)):(Q=st(w),Q.c(),S(Q,1),Q.m(e,Z)):Q&&(ce(),D(Q,1,1,()=>{Q=null}),he());const ge={};N&2&&(ge.sectionTitle=w[3][w[1]].languages),ie.$set(ge);const ve={};N&4&&(ve.bullets=w[2].languages),se.$set(ve)},i(w){if(!de){S(i.$$.fragment,w),S($.$$.fragment,w);for(let N=0;N<z.length;N+=1)S(B[N]);S(p.$$.fragment,w);for(let N=0;N<re.length;N+=1)S(W[N]);S(K),S(I.$$.fragment,w),S(T.$$.fragment,w),S(Q),S(ie.$$.fragment,w),S(se.$$.fragment,w),de=!0}},o(w){D(i.$$.fragment,w),D($.$$.fragment,w),B=B.filter(Boolean);for(let N=0;N<B.length;N+=1)D(B[N]);D(p.$$.fragment,w),W=W.filter(Boolean);for(let N=0;N<W.length;N+=1)D(W[N]);D(K),D(I.$$.fragment,w),D(T.$$.fragment,w),D(Q),D(ie.$$.fragment,w),D(se.$$.fragment,w),de=!1},d(w){w&&v(e),R(i),R($),ke(B,w),R(p),ke(W,w),K&&K.d(),R(I),R(T),Q&&Q.d(),R(ie),R(se)}}}function Vt(l,e,n){let t,a=le,r=()=>(a(),a=be(i,f=>n(2,t=f)),i);l.$$.on_destroy.push(()=>a());const s={"pt-br":{education:"Formação Acadêmica",workExperience:"Experiência Profissional",skills:"Habilidades/Competências",certifications:"Certificações",languages:"Idiomas",projects:"Projetos"},en:{education:"Education",workExperience:"Work Experience",skills:"Skills",certifications:"Certificates and Courses",languages:"Languages",projects:"Projects"}};let{data:i}=e;r();let{locale:h="pt-br"}=e;return l.$$set=f=>{"data"in f&&r(n(0,i=f.data)),"locale"in f&&n(1,h=f.locale)},[i,h,t,s]}class Ht extends oe{constructor(e){super(),ue(this,e,Vt,Ot,ae,{data:0,locale:1})}}function Wt(l){let e,n,t,a,r,s;return r=new Ne({props:{bullets:l[1]}}),{c(){e=E("section"),n=E("h2"),t=Y(l[0]),a=C(),F(r.$$.fragment),this.h()},l(i){e=k(i,"SECTION",{class:!0});var h=A(e);n=k(h,"H2",{class:!0});var f=A(n);t=G(f,l[0]),f.forEach(v),a=P(h),q(r.$$.fragment,h),h.forEach(v),this.h()},h(){m(n,"class","font-bold text-lg"),m(e,"class","mb-2")},m(i,h){U(i,e,h),d(e,n),d(n,t),d(e,a),M(r,e,null),s=!0},p(i,[h]){(!s||h&1)&&fe(t,i[0]);const f={};h&2&&(f.bullets=i[1]),r.$set(f)},i(i){s||(S(r.$$.fragment,i),s=!0)},o(i){D(r.$$.fragment,i),s=!1},d(i){i&&v(e),R(r)}}}function Ft(l,e,n){let{title:t}=e,{bullets:a}=e;return l.$$set=r=>{"title"in r&&n(0,t=r.title),"bullets"in r&&n(1,a=r.bullets)},[t,a]}class rt extends oe{constructor(e){super(),ue(this,e,Ft,Wt,ae,{title:0,bullets:1})}}function qt(l){let e,n,t,a,r,s,i,h,f,$,c,o,_,u,p,b,L,H,O;return a=new mt({props:{data:ee(Ee,"personalInfo")}}),s=new wt({props:{workExperience:ee(Ee,"workExperience")}}),h=new Bt({props:{education:ee(Ee,"education")}}),$=new Ct({props:{projects:ee(Ee,"projects")}}),o=new rt({props:{title:"Skills",bullets:ee(Ee,"skills")}}),u=new rt({props:{title:"Languages",bullets:ee(Ee,"languages")}}),L=new Ht({props:{data:Ee}}),{c(){e=E("div"),n=E("div"),t=E("form"),F(a.$$.fragment),r=C(),F(s.$$.fragment),i=C(),F(h.$$.fragment),f=C(),F($.$$.fragment),c=C(),F(o.$$.fragment),_=C(),F(u.$$.fragment),p=C(),b=E("div"),F(L.$$.fragment),H=C(),this.h()},l(I){e=k(I,"DIV",{class:!0});var g=A(e);n=k(g,"DIV",{});var T=A(n);t=k(T,"FORM",{action:!0});var y=A(t);q(a.$$.fragment,y),r=P(y),q(s.$$.fragment,y),i=P(y),q(h.$$.fragment,y),f=P(y),q($.$$.fragment,y),c=P(y),q(o.$$.fragment,y),_=P(y),q(u.$$.fragment,y),y.forEach(v),T.forEach(v),p=P(g),b=k(g,"DIV",{class:!0});var Z=A(b);q(L.$$.fragment,Z),Z.forEach(v),g.forEach(v),H=P(I),ut("svelte-iut7rp",document.head).forEach(v),this.h()},h(){m(t,"action",""),m(b,"class","border"),m(e,"class","grid lg:grid-cols-2"),document.title="MFD - CV Builder Alpha"},m(I,g){U(I,e,g),d(e,n),d(n,t),M(a,t,null),d(t,r),M(s,t,null),d(t,i),M(h,t,null),d(t,f),M($,t,null),d(t,c),M(o,t,null),d(t,_),M(u,t,null),d(e,p),d(e,b),M(L,b,null),U(I,H,g),O=!0},p:le,i(I){O||(S(a.$$.fragment,I),S(s.$$.fragment,I),S(h.$$.fragment,I),S($.$$.fragment,I),S(o.$$.fragment,I),S(u.$$.fragment,I),S(L.$$.fragment,I),O=!0)},o(I){D(a.$$.fragment,I),D(s.$$.fragment,I),D(h.$$.fragment,I),D($.$$.fragment,I),D(o.$$.fragment,I),D(u.$$.fragment,I),D(L.$$.fragment,I),O=!1},d(I){I&&(v(e),v(H)),R(a),R(s),R(h),R($),R(o),R(u),R(L)}}}class Kt extends oe{constructor(e){super(),ue(this,e,null,qt,ae,{})}}export{Kt as component};
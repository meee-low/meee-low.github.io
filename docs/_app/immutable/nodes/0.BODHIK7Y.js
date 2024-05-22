import{s as S,n as v,j as q,o as z,e as B,u as N,g as R,f as G}from"../chunks/scheduler.cozbhhrJ.js";import{S as T,i as I,e as h,c as p,k as O,l as u,g,d as m,s as x,r as A,a as E,f as b,u as C,h as _,v as D,n as k,p as H,w as F}from"../chunks/index.B5TGw0-G.js";const P=!0,se=Object.freeze(Object.defineProperty({__proto__:null,prerender:P},Symbol.toStringTag,{value:"Module"})),$={linkedin:"https://www.linkedin.com/in/mfdrumond/",github:"https://www.github.com/meee-low/",email:"mailto:mat_drumond@hotmail.com",twitter:"https://www.twitter.com/taumesh628",youtube:"https://www.youtube.com/taumesh/"};function U(c){let e,s=`<h2 class="mb-2 text-xl font-bold">About me:</h2> <p>Matheus Ferreira Drumond</p> <p><i class="fa-solid fa-graduation-cap mr-2"></i>UFRGS, Porto Alegre, Brazil</p> <div><h2>Contact:</h2> <div class="flex gap-4"><p><a href="${$.linkedin}" class="hover:underline"><i class="fa-brands fa-linkedin mr-1"></i>in/mfdrumond</a></p> <p><a href="${$.github}"><i class="fa-brands fa-github mr-1"></i>@meee-low</a></p></div></div>`;return{c(){e=h("footer"),e.innerHTML=s,this.h()},l(a){e=p(a,"FOOTER",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-bprjyq"&&(e.innerHTML=s),this.h()},h(){u(e,"class","bg-slate-500 px-[5%] py-3 text-white")},m(a,i){g(a,e,i)},p:v,i:v,o:v,d(a){a&&m(e)}}}class J extends T{constructor(e){super(),I(this,e,null,U,S,{})}}function K(c){let e,s=`<a href="${$.linkedin}"><i class="fa-brands fa-linkedin"></i></a> <a href="${$.twitter}"><i class="fa-brands fa-twitter"></i></a> <a href="${$.github}"><i class="fa-brands fa-github"></i></a> <a href="${$.youtube}"><i class="fa-brands fa-youtube"></i></a> <a href="${$.email}"><i class="fa-solid fa-envelope"></i></a>`;return{c(){e=h("div"),e.innerHTML=s,this.h()},l(a){e=p(a,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1ehohy9"&&(e.innerHTML=s),this.h()},h(){u(e,"id","socials"),u(e,"class","flex flex-wrap items-center gap-3 text-xl text-white")},m(a,i){g(a,e,i)},p:v,i:v,o:v,d(a){a&&m(e)}}}class Q extends T{constructor(e){super(),I(this,e,null,K,S,{})}}function W(c){let e,s,a,i,o,l,f,n='<a class="hover:underline" href="/">Showcase</a> <a class="hover:underline" href="/interactive">Interactive</a> <a class="hover:underline" href="/blog">Blog</a>',t,r,j,y;return r=new Q({}),{c(){e=h("header"),s=h("div"),a=h("img"),o=x(),l=h("div"),f=h("nav"),f.innerHTML=n,t=x(),A(r.$$.fragment),j=x(),this.h()},l(d){e=p(d,"HEADER",{id:!0,class:!0});var w=E(e);s=p(w,"DIV",{class:!0});var M=E(s);a=p(M,"IMG",{src:!0,alt:!0,class:!0}),o=b(M),l=p(M,"DIV",{class:!0});var L=E(l);f=p(L,"NAV",{class:!0,"data-svelte-h":!0}),O(f)!=="svelte-htuxx8"&&(f.innerHTML=n),t=b(L),C(r.$$.fragment,L),L.forEach(m),M.forEach(m),j=b(w),w.forEach(m),this.h()},h(){q(a.src,i="/e8petrie_0.png")||u(a,"src",i),u(a,"alt","Logo"),u(a,"class","m-auto mr-6 max-h-20 max-w-20"),u(f,"class","max-md:grid max-md:grid-cols-1 font-mono text-2xl tracking-wider text-white max-md:mb-4 md:flex md:gap-6"),u(l,"class","flex w-full flex-wrap items-center justify-between"),u(s,"class","flex content-center p-4 px-[5vw]"),u(e,"id","navbar"),u(e,"class","z-50 w-full bg-slate-500 shadow-md ")},m(d,w){g(d,e,w),_(e,s),_(s,a),_(s,o),_(s,l),_(l,f),_(l,t),D(r,l,null),_(e,j),y=!0},p:v,i(d){y||(k(r.$$.fragment,d),y=!0)},o(d){H(r.$$.fragment,d),y=!1},d(d){d&&m(e),F(r)}}}function V(){}function X(c){return z(()=>(window.addEventListener("scroll",V),()=>{window.removeEventListener("scroll",V)})),[]}class Y extends T{constructor(e){super(),I(this,e,X,W,S,{})}}function Z(c){let e,s,a,i,o,l;e=new Y({});const f=c[1].default,n=B(f,c,c[0],null);return o=new J({}),{c(){A(e.$$.fragment),s=x(),a=h("main"),n&&n.c(),i=x(),A(o.$$.fragment),this.h()},l(t){C(e.$$.fragment,t),s=b(t),a=p(t,"MAIN",{class:!0});var r=E(a);n&&n.l(r),r.forEach(m),i=b(t),C(o.$$.fragment,t),this.h()},h(){u(a,"class","flex-grow")},m(t,r){D(e,t,r),g(t,s,r),g(t,a,r),n&&n.m(a,null),g(t,i,r),D(o,t,r),l=!0},p(t,[r]){n&&n.p&&(!l||r&1)&&N(n,f,t,t[0],l?G(f,t[0],r,null):R(t[0]),null)},i(t){l||(k(e.$$.fragment,t),k(n,t),k(o.$$.fragment,t),l=!0)},o(t){H(e.$$.fragment,t),H(n,t),H(o.$$.fragment,t),l=!1},d(t){t&&(m(s),m(a),m(i)),F(e,t),n&&n.d(t),F(o,t)}}}function ee(c,e,s){let{$$slots:a={},$$scope:i}=e;return c.$$set=o=>{"$$scope"in o&&s(0,i=o.$$scope)},[i,a]}class re extends T{constructor(e){super(),I(this,e,ee,Z,S,{})}}export{re as component,se as universal};
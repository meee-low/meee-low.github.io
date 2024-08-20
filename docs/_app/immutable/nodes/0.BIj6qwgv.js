import{s as j,g as re,n as F,c as ae,q as K,v as oe,w as ie,x as ce,y as fe,o as ue}from"../chunks/scheduler.DnytqtHw.js";import{S as z,i as R,e as v,s as L,c as g,a as x,l as D,f as T,d as p,n as c,D as Q,g as C,h as m,E as W,A as le,F as de,k as O,m as P,o as V,p as H,q as A,r as B,t as se,b as ne,C as he}from"../chunks/index.Rbvi9zvH.js";import{d as q}from"../chunks/stores.DUaUQ93u.js";import{e as Y,u as me,d as _e}from"../chunks/each.D8LJpXae.js";import{D as pe}from"../chunks/DynamicPageTitle.BqYglKTL.js";const ve=!0,Pe=Object.freeze(Object.defineProperty({__proto__:null,prerender:ve},Symbol.toStringTag,{value:"Module"})),M={linkedin:"https://www.linkedin.com/in/mfdrumond/",github:"https://www.github.com/meee-low/",email:"mailto:mat_drumond@hotmail.com",twitter:"https://www.twitter.com/taumesh628",youtube:"https://www.youtube.com/taumesh/"};function ge(f){let t,a,e,h='<span class="sr-only">Language</span>',u,n,s,i="English",r,o="Português",l,d;return{c(){t=v("div"),a=v("label"),e=v("i"),e.innerHTML=h,u=L(),n=v("select"),s=v("option"),s.textContent=i,r=v("option"),r.textContent=o,this.h()},l($){t=g($,"DIV",{class:!0});var b=x(t);a=g(b,"LABEL",{});var _=x(a);e=g(_,"I",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-1ww90gv"&&(e.innerHTML=h),u=T(_),n=g(_,"SELECT",{class:!0});var y=x(n);s=g(y,"OPTION",{class:!0,"data-svelte-h":!0}),D(s)!=="svelte-mntvwg"&&(s.textContent=i),r=g(y,"OPTION",{class:!0,"data-svelte-h":!0}),D(r)!=="svelte-1w6vf86"&&(r.textContent=o),y.forEach(p),_.forEach(p),b.forEach(p),this.h()},h(){c(e,"class","fa-solid fa-globe fa-fw absolute left-1 top-1/2 -translate-y-1/2 text-black"),s.__value="en",Q(s,s.__value),c(s,"class","text-black"),s.selected=!0,r.__value="pt-br",Q(r,r.__value),c(r,"class","text-black"),c(n,"class","rounded-full p-1 pl-5 text-black"),f[0]===void 0&&re(()=>f[1].call(n)),c(t,"class","relative")},m($,b){C($,t,b),m(t,a),m(a,e),m(a,u),m(a,n),m(n,s),m(n,r),W(n,f[0],!0),l||(d=le(n,"change",f[1]),l=!0)},p($,[b]){b&1&&W(n,$[0])},i:F,o:F,d($){$&&p(t),l=!1,d()}}}function be(f,t,a){let e;function h(){e=de(this),a(0,e)}return[e,h]}class we extends z{constructor(t){super(),R(this,t,be,ge,j,{})}}function $e(f){let t,a,e="Matheus Ferreira Drumond",h,u,n,s=`<p><i class="fa-solid fa-location-dot fa-fw mr-1"><span class="sr-only">Location</span></i>Brasília, DF - Brazil</p> <div class="flex flex-wrap gap-x-3"><a href="${M.linkedin}" class="hover:underline"><i class="fa-brands fa-linkedin fa-fw mr-1"><span class="sr-only">Linkedin</span> </i>in/mfdrumond</a> <a href="${M.github}" class="hover:underline"><i class="fa-brands fa-github fa-fw mr-1"><span class="sr-only">GitHub</span> </i>@meee-low</a> <a href="/my-cv" class="hover:underline"><i class="fa-solid fa-file-lines fa-fw mr-1"></i>Resume</a></div>`,i,r,o,l,d,$,b,_,y="Dark theme toggle",w,E,S,N;return o=new we({}),{c(){t=v("footer"),a=v("h4"),a.textContent=e,h=L(),u=v("div"),n=v("div"),n.innerHTML=s,i=L(),r=v("div"),O(o.$$.fragment),l=L(),d=v("button"),$=v("i"),_=v("span"),_.textContent=y,this.h()},l(k){t=g(k,"FOOTER",{class:!0});var I=x(t);a=g(I,"H4",{class:!0,"data-svelte-h":!0}),D(a)!=="svelte-12ja8ha"&&(a.textContent=e),h=T(I),u=g(I,"DIV",{class:!0});var U=x(u);n=g(U,"DIV",{class:!0,"data-svelte-h":!0}),D(n)!=="svelte-6mgu4m"&&(n.innerHTML=s),i=T(U),r=g(U,"DIV",{class:!0});var G=x(r);P(o.$$.fragment,G),l=T(G),d=g(G,"BUTTON",{role:!0,"aria-checked":!0,class:!0});var J=x(d);$=g(J,"I",{class:!0}),x($).forEach(p),_=g(J,"SPAN",{class:!0,"data-svelte-h":!0}),D(_)!=="svelte-1fg25qe"&&(_.textContent=y),J.forEach(p),G.forEach(p),U.forEach(p),I.forEach(p),this.h()},h(){c(a,"class","mb-2 text-base"),c(n,"class","text-sm"),c($,"class",b="fa-solid fa-fw text-base "+(f[0]?"fa-moon":"fa-sun")+" rounded-full bg-gray-300"),c(_,"class","sr-only"),c(d,"role","switch"),c(d,"aria-checked",f[0]),c(d,"class",w="h-fit w-11 rounded-full bg-white dark:bg-black "+(f[0]?"text-right":"text-left")+" border-2 border-transparent text-gray-800 hover:border-gray-800"),c(r,"class","flex flex-wrap place-content-center gap-2"),c(u,"class","flex place-content-between content-end"),c(t,"class","bg-slate-500 px-[2.5vw] py-2 text-sm text-white")},m(k,I){C(k,t,I),m(t,a),m(t,h),m(t,u),m(u,n),m(u,i),m(u,r),V(o,r,null),m(r,l),m(r,d),m(d,$),m(d,_),E=!0,S||(N=le(d,"mousedown",f[1]),S=!0)},p(k,[I]){(!E||I&1&&b!==(b="fa-solid fa-fw text-base "+(k[0]?"fa-moon":"fa-sun")+" rounded-full bg-gray-300"))&&c($,"class",b),(!E||I&1)&&c(d,"aria-checked",k[0]),(!E||I&1&&w!==(w="h-fit w-11 rounded-full bg-white dark:bg-black "+(k[0]?"text-right":"text-left")+" border-2 border-transparent text-gray-800 hover:border-gray-800"))&&c(d,"class",w)},i(k){E||(H(o.$$.fragment,k),E=!0)},o(k){A(o.$$.fragment,k),E=!1},d(k){k&&p(t),B(o),S=!1,N()}}}function xe(f,t,a){let e;return ae(f,q,u=>a(0,e=u)),[e,()=>{K(q,e=!e,e)}]}class ke extends z{constructor(t){super(),R(this,t,xe,$e,j,{})}}function X(f,t,a){const e=f.slice();return e[1]=t[a],e}function Z(f,t){let a,e,h,u,n,s="Link to my "+t[1].title,i,r;return{key:f,first:null,c(){a=v("li"),e=v("a"),h=v("i"),u=L(),n=v("span"),i=se(s),r=L(),this.h()},l(o){a=g(o,"LI",{class:!0});var l=x(a);e=g(l,"A",{href:!0,class:!0});var d=x(e);h=g(d,"I",{role:!0,class:!0,title:!0}),x(h).forEach(p),u=T(d),n=g(d,"SPAN",{class:!0});var $=x(n);i=ne($,s),$.forEach(p),d.forEach(p),r=T(l),l.forEach(p),this.h()},h(){c(h,"role","presentation"),c(h,"class",t[1].icon+" hover:scale-[120%]"),c(h,"title",t[1].title),c(n,"class","sr-only"),c(e,"href",t[1].link),c(e,"class","hover:text-teal-100"),c(a,"class","inline-block"),this.first=a},m(o,l){C(o,a,l),m(a,e),m(e,h),m(e,u),m(e,n),m(n,i),m(a,r)},p(o,l){t=o},d(o){o&&p(a)}}}function ye(f){let t,a,e=[],h=new Map,u=Y(f[0]);const n=s=>s[1];for(let s=0;s<u.length;s+=1){let i=X(f,u,s),r=n(i);h.set(r,e[s]=Z(r,i))}return{c(){t=v("div"),a=v("ul");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=g(s,"DIV",{id:!0,class:!0});var i=x(t);a=g(i,"UL",{class:!0});var r=x(a);for(let o=0;o<e.length;o+=1)e[o].l(r);r.forEach(p),i.forEach(p),this.h()},h(){c(a,"class","flex flex-wrap items-center gap-3"),c(t,"id","socials"),c(t,"class","text-xl text-white")},m(s,i){C(s,t,i),m(t,a);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(a,null)},p(s,[i]){i&1&&(u=Y(s[0]),e=me(e,i,n,1,s,u,h,a,_e,Z,null,X))},i:F,o:F,d(s){s&&p(t);for(let i=0;i<e.length;i+=1)e[i].d()}}}function Ee(f){return[[{title:"LinkedIn",icon:"fa-brands fa-linkedin",link:M.linkedin},{title:"GitHub",icon:"fa-brands fa-github",link:M.github},{title:"Twitter",icon:"fa-brands fa-twitter",link:M.twitter},{title:"YouTube",icon:"fa-brands fa-youtube",link:M.youtube},{title:"Email",icon:"fa-solid fa-envelope",link:M.email}]]}class Le extends z{constructor(t){super(),R(this,t,Ee,ye,j,{})}}function ee(f,t,a){const e=f.slice();return e[1]=t[a],e}function te(f){let t,a,e,h,u=f[1].title+"",n,s;return{c(){t=v("li"),a=v("a"),e=v("span"),h=v("i"),n=se(u),s=L(),this.h()},l(i){t=g(i,"LI",{class:!0});var r=x(t);a=g(r,"A",{class:!0,href:!0});var o=x(a);e=g(o,"SPAN",{class:!0});var l=x(e);h=g(l,"I",{class:!0,"aria-hidden":!0}),x(h).forEach(p),n=ne(l,u),l.forEach(p),o.forEach(p),s=T(r),r.forEach(p),this.h()},h(){c(h,"class",f[1].faTag+" mr-1 text-sm min-[0px]:max-[420px]:hidden"),c(h,"aria-hidden","true"),c(e,"class","flex items-center"),c(a,"class","flex h-full items-center hover:text-teal-100"),c(a,"href",f[1].link),c(t,"class","inline-block h-full px-2 hover:bg-black/10 svelte-1ofcm26")},m(i,r){C(i,t,r),m(t,a),m(a,e),m(e,h),m(e,n),m(t,s)},p:F,d(i){i&&p(t)}}}function Te(f){let t,a,e,h='<img src="/e8petrie_0.webp" alt="Logo" class="ml-2 mr-6 max-h-20 max-w-20 md:max-h-14 md:max-w-14"/> <span class="sr-only">Logo</span>',u,n,s,i,r,o,l,d,$=Y(f[0]),b=[];for(let _=0;_<$.length;_+=1)b[_]=te(ee(f,$,_));return o=new Le({}),{c(){t=v("header"),a=v("div"),e=v("a"),e.innerHTML=h,u=L(),n=v("div"),s=v("nav"),i=v("ul");for(let _=0;_<b.length;_+=1)b[_].c();r=L(),O(o.$$.fragment),l=L(),this.h()},l(_){t=g(_,"HEADER",{id:!0,class:!0});var y=x(t);a=g(y,"DIV",{class:!0});var w=x(a);e=g(w,"A",{href:!0,class:!0,"data-svelte-h":!0}),D(e)!=="svelte-nq4d6l"&&(e.innerHTML=h),u=T(w),n=g(w,"DIV",{class:!0});var E=x(n);s=g(E,"NAV",{class:!0});var S=x(s);i=g(S,"UL",{class:!0});var N=x(i);for(let k=0;k<b.length;k+=1)b[k].l(N);N.forEach(p),S.forEach(p),r=T(E),P(o.$$.fragment,E),E.forEach(p),w.forEach(p),l=T(y),y.forEach(p),this.h()},h(){c(e,"href","/"),c(e,"class","m-auto"),c(i,"class","max-md:mb-4 max-md:grid max-md:grid-cols-1 md:flex md:gap-2 svelte-1ofcm26"),c(s,"class","flex content-center items-center font-mono text-2xl tracking-wider text-white svelte-1ofcm26"),c(n,"class","flex w-full flex-wrap place-content-between content-center items-center gap-x-6 align-middle"),c(a,"class","flex content-center py-2 pl-4 pr-[2.5vw]"),c(t,"id","navbar"),c(t,"class","z-50 w-full bg-slate-500 shadow-md")},m(_,y){C(_,t,y),m(t,a),m(a,e),m(a,u),m(a,n),m(n,s),m(s,i);for(let w=0;w<b.length;w+=1)b[w]&&b[w].m(i,null);m(n,r),V(o,n,null),m(t,l),d=!0},p(_,[y]){if(y&1){$=Y(_[0]);let w;for(w=0;w<$.length;w+=1){const E=ee(_,$,w);b[w]?b[w].p(E,y):(b[w]=te(E),b[w].c(),b[w].m(i,null))}for(;w<b.length;w+=1)b[w].d(1);b.length=$.length}},i(_){d||(H(o.$$.fragment,_),d=!0)},o(_){A(o.$$.fragment,_),d=!1},d(_){_&&p(t),he(b,_),B(o)}}}function Ie(f){return[[{title:"Highlights",link:"/",faTag:"fa-solid fa-eye"},{title:"Interactive",link:"/interactive",faTag:"fa-solid fa-dice"},{title:"Blog",link:"/blog",faTag:"fa-solid fa-blog"}]]}class Ce extends z{constructor(t){super(),R(this,t,Ie,Te,j,{})}}function Me(f){let t,a,e,h,u,n,s,i;t=new pe({}),e=new Ce({});const r=f[1].default,o=oe(r,f,f[0],null);return s=new ke({}),{c(){O(t.$$.fragment),a=L(),O(e.$$.fragment),h=L(),u=v("main"),o&&o.c(),n=L(),O(s.$$.fragment),this.h()},l(l){P(t.$$.fragment,l),a=T(l),P(e.$$.fragment,l),h=T(l),u=g(l,"MAIN",{class:!0});var d=x(u);o&&o.l(d),d.forEach(p),n=T(l),P(s.$$.fragment,l),this.h()},h(){c(u,"class","max-w-[100vw] flex-grow overflow-auto")},m(l,d){V(t,l,d),C(l,a,d),V(e,l,d),C(l,h,d),C(l,u,d),o&&o.m(u,null),C(l,n,d),V(s,l,d),i=!0},p(l,[d]){o&&o.p&&(!i||d&1)&&ie(o,r,l,l[0],i?fe(r,l[0],d,null):ce(l[0]),null)},i(l){i||(H(t.$$.fragment,l),H(e.$$.fragment,l),H(o,l),H(s.$$.fragment,l),i=!0)},o(l){A(t.$$.fragment,l),A(e.$$.fragment,l),A(o,l),A(s.$$.fragment,l),i=!1},d(l){l&&(p(a),p(h),p(u),p(n)),B(t,l),B(e,l),o&&o.d(l),B(s,l)}}}function De(f,t,a){let e;ae(f,q,n=>a(2,e=n));let{$$slots:h={},$$scope:u}=t;return ue(()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?K(q,e=!0,e):K(q,e=!1,e)}),f.$$set=n=>{"$$scope"in n&&a(0,u=n.$$scope)},[u,h]}class Ve extends z{constructor(t){super(),R(this,t,De,Me,j,{})}}export{Ve as component,Pe as universal};
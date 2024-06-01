import{s as S,n as H,r as X,e as Z,u as ee,g as te,f as ae}from"../chunks/scheduler.BAYkwi34.js";import{S as V,i as j,e as v,c as g,k as J,l as f,g as y,d as u,a as $,h as p,q as K,s as E,t as Q,f as L,b as W,y as le,A as z,r as C,u as F,v as N,n as A,p as M,w as O}from"../chunks/index.xQNbFCU6.js";import{e as D}from"../chunks/each.CPNeyX6x.js";const se=!0,$e=Object.freeze(Object.defineProperty({__proto__:null,prerender:se},Symbol.toStringTag,{value:"Module"})),I={linkedin:"https://www.linkedin.com/in/mfdrumond/",github:"https://www.github.com/meee-low/",email:"mailto:mat_drumond@hotmail.com",twitter:"https://www.twitter.com/taumesh628",youtube:"https://www.youtube.com/taumesh/"};function ne(o){let e,a=`<p class="mb-2">Matheus Ferreira Drumond</p> <div class="text-sm"><p><i class="fa-solid fa-location-dot fa-fw mr-1"><span class="sr-only">Location</span></i>Brasília, DF - Brazil</p> <div class="flex flex-wrap gap-x-3"><a href="${I.linkedin}" class="hover:underline"><i class="fa-brands fa-linkedin fa-fw mr-1"><span class="sr-only">Linkedin</span> </i>in/mfdrumond</a> <a href="${I.github}" class="hover:underline"><i class="fa-brands fa-github fa-fw mr-1"><span class="sr-only">GitHub</span> </i>@meee-low</a> <a href="/my-cv" class="hover:underline"><i class="fa-solid fa-file-lines fa-fw mr-1"><span class="sr-only">Resume/CV</span> </i>Resume</a></div></div>`;return{c(){e=v("footer"),e.innerHTML=a,this.h()},l(t){e=g(t,"FOOTER",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-1jlginy"&&(e.innerHTML=a),this.h()},h(){f(e,"class","bg-slate-500 px-[2.5vw] py-2 text-white")},m(t,i){y(t,e,i)},p:H,i:H,o:H,d(t){t&&u(e)}}}class ie extends V{constructor(e){super(),j(this,e,null,ne,S,{})}}function G(o,e,a){const t=o.slice();return t[2]=e[a],t}function P(o){let e,a,t,i,l,c="Link to my "+o[2].title,n,r,s,h;return{c(){e=v("li"),a=v("a"),t=v("i"),i=E(),l=v("span"),n=Q(c),r=E(),this.h()},l(x){e=g(x,"LI",{class:!0});var b=$(e);a=g(b,"A",{href:!0,class:!0});var w=$(a);t=g(w,"I",{role:!0,class:!0,style:!0,title:!0}),$(t).forEach(u),i=L(w),l=g(w,"SPAN",{class:!0});var _=$(l);n=W(_,c),_.forEach(u),w.forEach(u),r=L(b),b.forEach(u),this.h()},h(){f(t,"role","presentation"),f(t,"class",o[2].icon),le(t,"--fa-animation-iteration-count","1"),f(t,"title",o[2].title),f(l,"class","sr-only"),f(a,"href",o[2].link),f(a,"class","hover:text-teal-100"),f(e,"class","inline-block")},m(x,b){y(x,e,b),p(e,a),p(a,t),p(a,i),p(a,l),p(l,n),p(e,r),s||(h=[z(t,"mouseenter",oe),z(t,"mouseleave",o[1])],s=!0)},p:H,d(x){x&&u(e),s=!1,X(h)}}}function re(o){let e,a,t=D(o[0]),i=[];for(let l=0;l<t.length;l+=1)i[l]=P(G(o,t,l));return{c(){e=v("div"),a=v("ul");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){e=g(l,"DIV",{id:!0,class:!0});var c=$(e);a=g(c,"UL",{class:!0});var n=$(a);for(let r=0;r<i.length;r+=1)i[r].l(n);n.forEach(u),c.forEach(u),this.h()},h(){f(a,"class","flex flex-wrap items-center gap-3"),f(e,"id","socials"),f(e,"class","text-xl text-white")},m(l,c){y(l,e,c),p(e,a);for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(a,null)},p(l,[c]){if(c&1){t=D(l[0]);let n;for(n=0;n<t.length;n+=1){const r=G(l,t,n);i[n]?i[n].p(r,c):(i[n]=P(r),i[n].c(),i[n].m(a,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=t.length}},i:H,o:H,d(l){l&&u(e),K(i,l)}}}const oe=o=>{o.toElement.classList.add("fa-shake")};function ce(o){return[[{title:"LinkedIn",icon:"fa-brands fa-linkedin",link:I.linkedin},{title:"GitHub",icon:"fa-brands fa-github",link:I.github},{title:"Twitter",icon:"fa-brands fa-twitter",link:I.twitter},{title:"YouTube",icon:"fa-brands fa-youtube",link:I.youtube},{title:"Email",icon:"fa-solid fa-envelope",link:I.email}],t=>{setTimeout(()=>t.fromElement.classList.remove("fa-shake"),250)}]}class fe extends V{constructor(e){super(),j(this,e,ce,re,S,{})}}function U(o,e,a){const t=o.slice();return t[1]=e[a],t}function Y(o){let e,a,t,i=o[1].title+"",l,c;return{c(){e=v("li"),a=v("a"),t=v("i"),l=Q(i),c=E(),this.h()},l(n){e=g(n,"LI",{class:!0});var r=$(e);a=g(r,"A",{class:!0,href:!0});var s=$(a);t=g(s,"I",{class:!0,"aria-hidden":!0}),$(t).forEach(u),l=W(s,i),c=L(s),s.forEach(u),r.forEach(u),this.h()},h(){f(t,"class",o[1].faTag+" mr-1 text-sm min-[0px]:max-[420px]:hidden"),f(t,"aria-hidden","true"),f(a,"class","flex items-center hover:text-teal-100"),f(a,"href",o[1].link),f(e,"class","inline-block")},m(n,r){y(n,e,r),p(e,a),p(a,t),p(a,l),p(a,c)},p:H,d(n){n&&u(e)}}}function ue(o){let e,a,t,i='<img src="/e8petrie_0.webp" alt="Logo" class="ml-2 mr-6 max-h-20 max-w-20 md:max-h-14 md:max-w-14"/> <span class="sr-only">Logo</span>',l,c,n,r,s,h,x,b,w=D(o[0]),_=[];for(let m=0;m<w.length;m+=1)_[m]=Y(U(o,w,m));return h=new fe({}),{c(){e=v("header"),a=v("div"),t=v("a"),t.innerHTML=i,l=E(),c=v("div"),n=v("nav"),r=v("ul");for(let m=0;m<_.length;m+=1)_[m].c();s=E(),C(h.$$.fragment),x=E(),this.h()},l(m){e=g(m,"HEADER",{id:!0,class:!0});var k=$(e);a=g(k,"DIV",{class:!0});var d=$(a);t=g(d,"A",{href:!0,class:!0,"data-svelte-h":!0}),J(t)!=="svelte-nq4d6l"&&(t.innerHTML=i),l=L(d),c=g(d,"DIV",{class:!0});var T=$(c);n=g(T,"NAV",{class:!0});var R=$(n);r=g(R,"UL",{class:!0});var q=$(r);for(let B=0;B<_.length;B+=1)_[B].l(q);q.forEach(u),R.forEach(u),s=L(T),F(h.$$.fragment,T),T.forEach(u),d.forEach(u),x=L(k),k.forEach(u),this.h()},h(){f(t,"href","/"),f(t,"class","m-auto"),f(r,"class","max-md:mb-4 max-md:grid max-md:grid-cols-1 md:flex md:gap-6"),f(n,"class","font-mono text-2xl tracking-wider text-white "),f(c,"class","flex w-full flex-wrap items-center justify-between"),f(a,"class","flex content-center py-2 pl-4 pr-[5vw]"),f(e,"id","navbar"),f(e,"class","z-50 w-full bg-slate-500 shadow-md")},m(m,k){y(m,e,k),p(e,a),p(a,t),p(a,l),p(a,c),p(c,n),p(n,r);for(let d=0;d<_.length;d+=1)_[d]&&_[d].m(r,null);p(c,s),N(h,c,null),p(e,x),b=!0},p(m,[k]){if(k&1){w=D(m[0]);let d;for(d=0;d<w.length;d+=1){const T=U(m,w,d);_[d]?_[d].p(T,k):(_[d]=Y(T),_[d].c(),_[d].m(r,null))}for(;d<_.length;d+=1)_[d].d(1);_.length=w.length}},i(m){b||(A(h.$$.fragment,m),b=!0)},o(m){M(h.$$.fragment,m),b=!1},d(m){m&&u(e),K(_,m),O(h)}}}function he(o){return[[{title:"Highlights",link:"/",faTag:"fa-solid fa-eye"},{title:"Interactive",link:"/interactive",faTag:"fa-solid fa-dice"},{title:"Blog",link:"/blog",faTag:"fa-solid fa-blog"}]]}class me extends V{constructor(e){super(),j(this,e,he,ue,S,{})}}function de(o){let e,a,t,i,l,c;e=new me({});const n=o[1].default,r=Z(n,o,o[0],null);return l=new ie({}),{c(){C(e.$$.fragment),a=E(),t=v("main"),r&&r.c(),i=E(),C(l.$$.fragment),this.h()},l(s){F(e.$$.fragment,s),a=L(s),t=g(s,"MAIN",{class:!0});var h=$(t);r&&r.l(h),h.forEach(u),i=L(s),F(l.$$.fragment,s),this.h()},h(){f(t,"class","flex-grow")},m(s,h){N(e,s,h),y(s,a,h),y(s,t,h),r&&r.m(t,null),y(s,i,h),N(l,s,h),c=!0},p(s,[h]){r&&r.p&&(!c||h&1)&&ee(r,n,s,s[0],c?ae(n,s[0],h,null):te(s[0]),null)},i(s){c||(A(e.$$.fragment,s),A(r,s),A(l.$$.fragment,s),c=!0)},o(s){M(e.$$.fragment,s),M(r,s),M(l.$$.fragment,s),c=!1},d(s){s&&(u(a),u(t),u(i)),O(e,s),r&&r.d(s),O(l,s)}}}function _e(o,e,a){let{$$slots:t={},$$scope:i}=e;return o.$$set=l=>{"$$scope"in l&&a(0,i=l.$$scope)},[i,t]}class we extends V{constructor(e){super(),j(this,e,_e,de,S,{})}}export{we as component,$e as universal};

import{n as A,B as Fe,i as Ae,s as Y,c as N,u as re,w as Oe,x as xe,y as Be,z as Ge,r as Re,C as Ue,d as ie,D as O,E as Le}from"../chunks/scheduler.BlDD8Q_K.js";import{F as Ve,d as w,G as ze,S as Z,i as ee,e as y,c as $,a as j,n as p,g as D,t as B,s as I,b as G,f as E,h as _,A as z,j as R,l as He,I as Ne,J as qe,p as U,q as L,K as Je,k as K,m as Q,o as W,C as je,r as X,y as Ke,w as Qe}from"../chunks/index.4RJwwkEs.js";import{D as We}from"../chunks/DynamicPageTitle.BvK_I02D.js";import{e as x,u as Pe,f as Xe,a as Ye}from"../chunks/each.CIJQEqNP.js";import{p as H,f as Me,a as Ze,b as et}from"../chunks/stores.DLcgDeKh.js";const Ie=typeof window<"u";let tt=Ie?()=>window.performance.now():()=>Date.now(),ce=Ie?a=>requestAnimationFrame(a):A;const q=new Set;function Ee(a){q.forEach(e=>{e.c(a)||(q.delete(e),e.f())}),q.size!==0&&ce(Ee)}function lt(a){let e;return q.size===0&&ce(Ee),{promise:new Promise(t=>{q.add(e={c:a,f:t})}),abort(){q.delete(e)}}}const te=new Map;let le=0;function st(a){let e=5381,t=a.length;for(;t--;)e=(e<<5)-e^a.charCodeAt(t);return e>>>0}function at(a,e){const t={stylesheet:ze(e),rules:{}};return te.set(a,t),t}function ot(a,e,t,s,r,o,l,c=0){const i=16.666/s;let u=`{
`;for(let k=0;k<=1;k+=i){const m=e+(t-e)*o(k);u+=k*100+`%{${l(m,1-m)}}
`}const f=u+`100% {${l(t,1-t)}}
}`,n=`__svelte_${st(f)}_${c}`,h=Ve(a),{stylesheet:d,rules:g}=te.get(h)||at(h,a);g[n]||(g[n]=!0,d.insertRule(`@keyframes ${n} ${f}`,d.cssRules.length));const b=a.style.animation||"";return a.style.animation=`${b?`${b}, `:""}${n} ${s}ms linear ${r}ms 1 both`,le+=1,n}function rt(a,e){const t=(a.style.animation||"").split(", "),s=t.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=t.length-s.length;r&&(a.style.animation=s.join(", "),le-=r,le||it())}function it(){ce(()=>{le||(te.forEach(a=>{const{ownerNode:e}=a.stylesheet;e&&w(e)}),te.clear())})}function Te(a,e,t,s){if(!e)return A;const r=a.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return A;const{delay:o=0,duration:l=300,easing:c=Fe,start:i=tt()+o,end:u=i+l,tick:f=A,css:n}=t(a,{from:e,to:r},s);let h=!0,d=!1,g;function b(){n&&(g=ot(a,0,1,l,o,c,n)),o||(d=!0)}function k(){n&&rt(a,g),h=!1}return lt(m=>{if(!d&&m>=i&&(d=!0),d&&m>=u&&(f(1,0),k()),!h)return!1;if(d){const F=m-i,C=0+1*c(F/l);f(C,1-C)}return!0}),b(),f(0,1),k}function Se(a){const e=getComputedStyle(a);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,r=a.getBoundingClientRect();a.style.position="absolute",a.style.width=t,a.style.height=s,nt(a,r)}}function nt(a,e){const t=a.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(a),r=s.transform==="none"?"":s.transform;a.style.transform=`${r} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function ct(a){const e=a-1;return e*e*e+1}function Ce(a,{from:e,to:t},s={}){const r=getComputedStyle(a),o=r.transform==="none"?"":r.transform,[l,c]=r.transformOrigin.split(" ").map(parseFloat),i=e.left+e.width*l/t.width-(t.left+l),u=e.top+e.height*c/t.height-(t.top+c),{delay:f=0,duration:n=d=>Math.sqrt(d)*120,easing:h=ct}=s;return{delay:f,duration:Ae(n)?n(Math.sqrt(i*i+u*u)):n,easing:h,css:(d,g)=>{const b=g*i,k=g*u,m=d+g*e.width/t.width,F=d+g*e.height/t.height;return`transform: ${o} translate(${b}px, ${k}px) scale(${m}, ${F});`}}}function ge(a,e,t){const s=a.slice();return s[5]=e[t],s[7]=t,s}function he(a,e){let t,s=e[5].label+"",r,o,l,c,i,u=A,f,n;function h(){return e[3](e[7])}return{key:a,first:null,c(){t=y("button"),r=B(s),o=I(),this.h()},l(d){t=$(d,"BUTTON",{class:!0,"aria-pressed":!0});var g=j(t);r=G(g,s),o=E(g),g.forEach(w),this.h()},h(){p(t,"class",l=(!e[1]||e[5].filterEnabled?"border-gray-700 bg-gray-100 text-black":"border-gray-400 bg-gray-100 text-gray-400")+" rounded-full border px-4 py-2 hover:bg-gray-300"),p(t,"aria-pressed",c=e[5].filterEnabled),this.first=t},m(d,g){D(d,t,g),_(t,r),_(t,o),f||(n=z(t,"mousedown",h),f=!0)},p(d,g){e=d,g&1&&s!==(s=e[5].label+"")&&R(r,s),g&3&&l!==(l=(!e[1]||e[5].filterEnabled?"border-gray-700 bg-gray-100 text-black":"border-gray-400 bg-gray-100 text-gray-400")+" rounded-full border px-4 py-2 hover:bg-gray-300")&&p(t,"class",l),g&1&&c!==(c=e[5].filterEnabled)&&p(t,"aria-pressed",c)},r(){i=t.getBoundingClientRect()},f(){Se(t),u()},a(){u(),u=Te(t,i,Ce,{delay:0,duration:e[4]})},d(d){d&&w(t),f=!1,n()}}}function ut(a){let e,t=[],s=new Map,r=x(a[0]);const o=l=>l[5].label;for(let l=0;l<r.length;l+=1){let c=ge(a,r,l),i=o(c);s.set(i,t[l]=he(i,c))}return{c(){e=y("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=$(l,"DIV",{class:!0});var c=j(e);for(let i=0;i<t.length;i+=1)t[i].l(c);c.forEach(w),this.h()},h(){p(e,"class","mb-4 mt-2 flex gap-2 overflow-x-auto")},m(l,c){D(l,e,c);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null)},p(l,[c]){if(c&7){r=x(l[0]);for(let i=0;i<t.length;i+=1)t[i].r();t=Pe(t,c,o,1,l,r,s,e,Xe,he,null,ge);for(let i=0;i<t.length;i+=1)t[i].a()}},i:A,o:A,d(l){l&&w(e);for(let c=0;c<t.length;c+=1)t[c].d()}}}function ft(a,e,t){let s,r;N(a,H,i=>t(0,s=i)),N(a,Me,i=>t(1,r=i));function o(i){if(re(H,s[i].filterEnabled=!s[i].filterEnabled,s),s[i].filterEnabled){let u=Math.max(...s.map(f=>f.orderClicked));re(H,s[i].orderClicked=u+1,s)}re(H,s=s.sort((u,f)=>!u.filterEnabled&&!f.filterEnabled?u.baseOrder>=f.baseOrder?0:-1:u.filterEnabled===f.filterEnabled?0:u.filterEnabled?-1:1),s)}return[s,r,o,i=>o(i),i=>Math.min(Math.sqrt(i)*40,400)]}class dt extends Z{constructor(e){super(),ee(this,e,ft,ut,Y,{})}}const gt=[{id:1,title:"py_flags",description:"CLI flags parser library for python.",skills:["Object-Oriented Programming (OOP)","Strict typing in python, using mypy to check","API design for dev tools"],languagesAndFrameworks:["Python"],additionalInfo:"",projectUrl:"https://github.com/meee-low/py_flags",imagePath:"/img/projects/py_flags_cropped.webp",highlighted:!1,hidden:!1,filterableTags:["Python"]},{id:2,title:'Better "Daily Drive" for Spotify',description:"Grabs tracks and podcast episodes from various sources and merges them in a single playlist. The goal is to approximate a radio station, with different themed blocks.",skills:["Direct interaction with RESTful API"],languagesAndFrameworks:["Python","SpotifyAPI"],additionalInfo:"",projectUrl:"https://github.com/meee-low/spotify-api",imagePath:"/img/projects/betterspotifydailydrive.webp",highlighted:!1,hidden:!1,filterableTags:["Python","Backend/CLI"]},{id:3,title:"Web of Marvel Characters",description:"Visualizes a network of Marvel characters based on their common appearances in the comics.",skills:["Web scraping","Data cleaning and processing","Graph network visualization"],languagesAndFrameworks:["Python","BeautifulSoup4","Pandas","Jupyter Notebook"],additionalInfo:"",projectUrl:"https://github.com/meee-low/web-of-marvel-characters",imagePath:"/img/projects/web-of-marvel_cropped.webp",highlighted:!0,hidden:!1,filterableTags:["Python","Data","Business"]},{id:4,title:"Portfolio",description:"The website you are probably reading right now!",skills:["Front-end design","Semantic HTML"],languagesAndFrameworks:["TypeScript","React","HTML","CSS"],additionalInfo:"",projectUrl:"https://github.com/meee-low/new-portfolio",imagePath:"/img/projects/youarehere.webp",highlighted:!1,hidden:!1,filterableTags:["Other"]},{id:5,title:"Exploration of Biases in Critics vs. Public Movie Reviews",description:"",skills:["Data analysis"],languagesAndFrameworks:["Python","Pandas","Jupyter Notebook"],additionalInfo:"",projectUrl:"https://www.kaggle.com/milofd/rottentomatoes-critics-vs-audiences-reviews",imagePath:"/img/projects/kaggle-movies-critics-genre_cropped.webp",highlighted:!0,hidden:!1,filterableTags:["Python","Data","Business"]},{id:6,title:"Other Small Projects",description:"Projects too small for their own repo. Usually mathematical visualization, competitive programming problems or exploring new programming languages.",skills:["Mathematical visualization","Problem solving and algorithms","Exploring new tools","Adapting to new problems and tools"],languagesAndFrameworks:["Python","Rust","C++","Golang","Julia","Matplotlib","Numpy","PyGame"],additionalInfo:"",projectUrl:"https://github.com/meee-low/challenges",imagePath:"/img/projects/challenges_mandelbrot-removebg-preview_cropped.webp",highlighted:!1,hidden:!1,filterableTags:["Other","Fun"]},{id:7,title:"Video Game Market Tracker",description:"A spreadsheet that gathers user input on the market prices, graphs trends and recommends actions related to production.",skills:["Pivot tables","Advanced spreadsheet manipulation","Data visualization","Operational recommendations"],languagesAndFrameworks:["MS Excel","Google Sheets","Google Forms"],additionalInfo:"",projectUrl:"",imagePath:"/img/projects/spreadsheeet.webp",highlighted:!1,hidden:!1,filterableTags:["Business"]},{id:8,title:"Jurnalo",description:"A CLI journal, mood tracker and habit tracker built in Rust (WIP).",skills:["ORM - Object Relational Mapping","Backend development","SQL Relational Databases","Serialization and deserialization"],languagesAndFrameworks:["Rust","Diesel","Serde","SQLite"],additionalInfo:"",projectUrl:"https://github.com/meee-low/jurnalo/",imagePath:"/img/projects/jurnalo-mock.webp",highlighted:!0,hidden:!1,filterableTags:["Backend/CLI"]}];function ht(a){let e,t,s,r='<i class="fa-solid fa-xmark text-xl" title="Close"><span class="sr-only">Close modal</span></i>',o,l,c,i;const u=a[4].default,f=Oe(u,a,a[3],null);return{c(){e=y("dialog"),t=y("div"),s=y("button"),s.innerHTML=r,o=I(),f&&f.c(),this.h()},l(n){e=$(n,"DIALOG",{class:!0});var h=j(e);t=$(h,"DIV",{});var d=j(t);s=$(d,"BUTTON",{class:!0,"data-svelte-h":!0}),He(s)!=="svelte-14j07j7"&&(s.innerHTML=r),o=E(d),f&&f.l(d),d.forEach(w),h.forEach(w),this.h()},h(){p(s,"class","absolute -right-3 -top-3 h-10 w-10 rounded-full border bg-white"),p(e,"class","mx-auto overflow-visible p-0 lg:max-w-[80vw] xl:max-w-[60vw] svelte-2gmbsh")},m(n,h){D(n,e,h),_(e,t),_(t,s),a[6](s),_(t,o),f&&f.m(t,null),a[8](e),l=!0,c||(i=[z(s,"click",a[7]),z(t,"click",Ne(a[5])),z(e,"close",a[9]),z(e,"click",qe(a[10]))],c=!0)},p(n,[h]){f&&f.p&&(!l||h&8)&&xe(f,u,n,n[3],l?Ge(u,n[3],h,null):Be(n[3]),null)},i(n){l||(U(f,n),l=!0)},o(n){L(f,n),l=!1},d(n){n&&w(e),a[6](null),f&&f.d(n),a[8](null),c=!1,Re(i)}}}function pt(a,e,t){let{$$slots:s={},$$scope:r}=e,{showModal:o}=e,l,c;function i(g){Ue.call(this,a,g)}function u(g){ie[g?"unshift":"push"](()=>{c=g,t(2,c)})}const f=()=>l.close();function n(g){ie[g?"unshift":"push"](()=>{l=g,t(1,l)})}const h=()=>t(0,o=!1),d=()=>l.close();return a.$$set=g=>{"showModal"in g&&t(0,o=g.showModal),"$$scope"in g&&t(3,r=g.$$scope)},a.$$.update=()=>{a.$$.dirty&3&&l&&o&&l.showModal()},[o,l,c,r,s,i,u,f,n,h,d]}class mt extends Z{constructor(e){super(),ee(this,e,pt,ht,Y,{showModal:0})}}function ne(a,e){for(let t=0;t<a.length;t++)if(e.includes(a[t]))return!0;return!1}function _t(a){return a?1:0}const pe={BeautifulSoup4:"img/toolbadges/beautifulsoup_cropped_shrunk.png","C++":"img/toolbadges/cpp_cropped_shrunk.png",CSS:"img/toolbadges/css_cropped_shrunk.png",Diesel:"img/toolbadges/diesel.jpeg",GitHub:"img/toolbadges/GitHub-Mark-removebg-preview_cropped_shrunk.png",Golang:"img/toolbadges/golang-removebg-preview_cropped_shrunk.png","Google Forms":"img/toolbadges/forms_cropped_shrunk.png","Google Sheets":"img/toolbadges/sheets-removebg-preview_cropped_shrunk.png",HTML:"img/toolbadges/html3.webp",Julia:"img/toolbadges/julia-removebg-preview_cropped_shrunk.png","Jupyter Notebook":"img/toolbadges/jupyter_cropped_shrunk.png",Kaggle:"img/toolbadges/189_Kaggle-512.webp",Matplotlib:"img/toolbadges/matplotlib.png","MS Excel":"img/toolbadges/msexcel-removebg-preview_cropped_shrunk.png",Numpy:"img/toolbadges/numpybetter.png",Pandas:"img/toolbadges/pandas_cropped_shrunk.png",PyGame:"img/toolbadges/pygame1_cropped_shrunk.png",Python:"img/toolbadges/python-logo-only_cropped_shrunk.png",React:"img/toolbadges/react_cropped_shrunk.png",Rust:"img/toolbadges/rust_cropped_shrunk.png",Serde:"img/toolbadges/serde.png",SQLite:"img/toolbadges/sqlitepngwing.com.png",SpotifyAPI:"img/toolbadges/spotify_cropped_shrunk.png",TypeScript:"img/toolbadges/typescript_cropped_shrunk.png"};function se(a){const e=a;return pe.hasOwnProperty(a)?pe[e]:""}function me(a,e,t){const s=a.slice();return s[6]=e[t],s}function _e(a,e,t){const s=a.slice();return s[6]=e[t],s}function be(a){let e,t,s,r,o,l;return{c(){e=y("div"),t=y("img"),l=I(),this.h()},l(c){e=$(c,"DIV",{class:!0});var i=j(e);t=$(i,"IMG",{class:!0,src:!0,alt:!0,title:!0}),l=E(i),i.forEach(w),this.h()},h(){p(t,"class","m-auto max-h-full max-w-full"),O(t.src,s=se(a[6]))||p(t,"src",s),p(t,"alt",r=a[6]),p(t,"title",o=a[6]),p(e,"class","max-h-12 max-w-12")},m(c,i){D(c,e,i),_(e,t),_(e,l)},p(c,i){i&2&&!O(t.src,s=se(c[6]))&&p(t,"src",s),i&2&&r!==(r=c[6])&&p(t,"alt",r),i&2&&o!==(o=c[6])&&p(t,"title",o)},d(c){c&&w(e)}}}function ve(a){let e,t=x(a[1]),s=[];for(let r=0;r<t.length;r+=1)s[r]=we(me(a,t,r));return{c(){e=y("ul");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=$(r,"UL",{class:!0});var o=j(e);for(let l=0;l<s.length;l+=1)s[l].l(o);o.forEach(w),this.h()},h(){p(e,"class","mb-6 md:grid md:grid-cols-2 md:place-content-around")},m(r,o){D(r,e,o);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null)},p(r,o){if(o&2){t=x(r[1]);let l;for(l=0;l<t.length;l+=1){const c=me(r,t,l);s[l]?s[l].p(c,o):(s[l]=we(c),s[l].c(),s[l].m(e,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=t.length}},d(r){r&&w(e),je(s,r)}}}function we(a){let e,t,s,r,o,l=a[6]+"",c,i;return{c(){e=y("li"),t=y("div"),s=y("img"),o=I(),c=B(l),i=I(),this.h()},l(u){e=$(u,"LI",{class:!0});var f=j(e);t=$(f,"DIV",{class:!0});var n=j(t);s=$(n,"IMG",{class:!0,src:!0,alt:!0}),n.forEach(w),o=E(f),c=G(f,l),i=E(f),f.forEach(w),this.h()},h(){p(s,"class","m-auto max-h-full max-w-full"),O(s.src,r=se(a[6]))||p(s,"src",r),p(s,"alt",""),p(t,"class","mr-2 max-h-8 max-w-8"),p(e,"class","mb-2 flex align-middle")},m(u,f){D(u,e,f),_(e,t),_(t,s),_(e,o),_(e,c),_(e,i)},p(u,f){f&2&&!O(s.src,r=se(u[6]))&&p(s,"src",r),f&2&&l!==(l=u[6]+"")&&R(c,l)},d(u){u&&w(e)}}}function ke(a){let e,t=a[3].portfolio.portfoliocard.sourcecode+"",s,r;return{c(){e=y("a"),s=B(t),this.h()},l(o){e=$(o,"A",{class:!0,href:!0});var l=j(e);s=G(l,t),l.forEach(w),this.h()},h(){p(e,"class","text-blue-600 visited:text-purple-600 hover:text-blue-800 hover:underline"),p(e,"href",r=a[0].projectUrl)},m(o,l){D(o,e,l),_(e,s)},p(o,l){l&8&&t!==(t=o[3].portfolio.portfoliocard.sourcecode+"")&&R(s,t),l&1&&r!==(r=o[0].projectUrl)&&p(e,"href",r)},d(o){o&&w(e)}}}function bt(a){let e,t,s,r,o,l=a[0].title+"",c,i,u,f=a[0].description+"",n,h,d,g=a[1].length>0&&ve(a),b=a[0].projectUrl&&ke(a);return{c(){e=y("div"),t=y("img"),r=I(),o=y("h2"),c=B(l),i=I(),u=y("p"),n=B(f),h=I(),g&&g.c(),d=I(),b&&b.c(),this.h()},l(k){e=$(k,"DIV",{class:!0});var m=j(e);t=$(m,"IMG",{src:!0,alt:!0,class:!0}),r=E(m),o=$(m,"H2",{class:!0});var F=j(o);c=G(F,l),F.forEach(w),i=E(m),u=$(m,"P",{class:!0});var C=j(u);n=G(C,f),C.forEach(w),h=E(m),g&&g.l(m),d=E(m),b&&b.l(m),m.forEach(w),this.h()},h(){O(t.src,s=a[0].imagePath)||p(t,"src",s),p(t,"alt",""),p(t,"class","mx-auto mb-4 max-h-[40vh]"),p(o,"class","mb-2 text-center text-xl font-bold"),p(u,"class","mb-6"),p(e,"class","max-h-[90vh] max-w-[80vw] overflow-auto px-[5%] py-6 lg:min-w-[30vw] lg:max-w-[40vw]")},m(k,m){D(k,e,m),_(e,t),_(e,r),_(e,o),_(o,c),_(e,i),_(e,u),_(u,n),_(e,h),g&&g.m(e,null),_(e,d),b&&b.m(e,null)},p(k,m){m&1&&!O(t.src,s=k[0].imagePath)&&p(t,"src",s),m&1&&l!==(l=k[0].title+"")&&R(c,l),m&1&&f!==(f=k[0].description+"")&&R(n,f),k[1].length>0?g?g.p(k,m):(g=ve(k),g.c(),g.m(e,d)):g&&(g.d(1),g=null),k[0].projectUrl?b?b.p(k,m):(b=ke(k),b.c(),b.m(e,null)):b&&(b.d(1),b=null)},d(k){k&&w(e),g&&g.d(),b&&b.d()}}}function vt(a){let e,t,s,r,o,l,c,i=a[0].title+"",u,f,n,h=a[0].description+"",d,g,b,k,m,F,C,ae,ue,V=x(a[1]),M=[];for(let v=0;v<V.length;v+=1)M[v]=be(_e(a,V,v));function De(v){a[5](v)}let fe={$$slots:{default:[bt]},$$scope:{ctx:a}};return a[2]!==void 0&&(fe.showModal=a[2]),m=new mt({props:fe}),ie.push(()=>Je(m,"showModal",De)),{c(){e=y("button"),t=y("img"),o=I(),l=y("div"),c=y("h3"),u=B(i),f=I(),n=y("p"),d=B(h),g=I(),b=y("div");for(let v=0;v<M.length;v+=1)M[v].c();k=I(),K(m.$$.fragment),this.h()},l(v){e=$(v,"BUTTON",{class:!0,"aria-haspopup":!0,tabindex:!0});var P=j(e);t=$(P,"IMG",{src:!0,alt:!0,class:!0}),o=E(P),l=$(P,"DIV",{class:!0});var T=j(l);c=$(T,"H3",{class:!0});var S=j(c);u=G(S,i),S.forEach(w),f=E(T),n=$(T,"P",{class:!0});var J=j(n);d=G(J,h),J.forEach(w),g=E(T),b=$(T,"DIV",{class:!0});var de=j(b);for(let oe=0;oe<M.length;oe+=1)M[oe].l(de);de.forEach(w),T.forEach(w),P.forEach(w),k=E(v),Q(m.$$.fragment,v),this.h()},h(){O(t.src,s=a[0].imagePath)||p(t,"src",s),p(t,"alt",r="Thumbnail for '"+a[0].title+"'"),p(t,"class","col-span-2 m-auto xl:col-span-1"),p(c,"class","mb-4 cursor-auto text-lg font-bold"),p(n,"class","mb-8 cursor-auto"),p(b,"class","flex flex-wrap justify-around gap-6"),p(l,"class","relative col-span-3 p-4 text-left xl:col-span-1"),p(e,"class","grid h-full min-h-[230px] w-full select-text grid-cols-5 items-stretch gap-3 overflow-clip rounded-lg border shadow-lg hover:shadow-xl xl:grid-cols-2"),p(e,"aria-haspopup","dialog"),p(e,"tabindex","0")},m(v,P){D(v,e,P),_(e,t),_(e,o),_(e,l),_(l,c),_(c,u),_(l,f),_(l,n),_(n,d),_(l,g),_(l,b);for(let T=0;T<M.length;T+=1)M[T]&&M[T].m(b,null);D(v,k,P),W(m,v,P),C=!0,ae||(ue=z(e,"click",a[4]),ae=!0)},p(v,[P]){if((!C||P&1&&!O(t.src,s=v[0].imagePath))&&p(t,"src",s),(!C||P&1&&r!==(r="Thumbnail for '"+v[0].title+"'"))&&p(t,"alt",r),(!C||P&1)&&i!==(i=v[0].title+"")&&R(u,i),(!C||P&1)&&h!==(h=v[0].description+"")&&R(d,h),P&2){V=x(v[1]);let S;for(S=0;S<V.length;S+=1){const J=_e(v,V,S);M[S]?M[S].p(J,P):(M[S]=be(J),M[S].c(),M[S].m(b,null))}for(;S<M.length;S+=1)M[S].d(1);M.length=V.length}const T={};P&2059&&(T.$$scope={dirty:P,ctx:v}),!F&&P&4&&(F=!0,T.showModal=v[2],Le(()=>F=!1)),m.$set(T)},i(v){C||(U(m.$$.fragment,v),C=!0)},o(v){L(m.$$.fragment,v),C=!1},d(v){v&&(w(e),w(k)),je(M,v),X(m,v),ae=!1,ue()}}}function wt(a,e,t){let s;N(a,Ze,u=>t(3,s=u));let{projectInfo:r}=e,o=[];r&&r.languagesAndFrameworks&&(o=r.languagesAndFrameworks);let l=!1;const c=()=>{const u=window.getSelection();u&&u.toString()||t(2,l=!0)};function i(u){l=u,t(2,l)}return a.$$set=u=>{"projectInfo"in u&&t(0,r=u.projectInfo)},[r,o,l,s,c,i]}class kt extends Z{constructor(e){super(),ee(this,e,wt,vt,Y,{projectInfo:0})}}function ye(a,e,t){const s=a.slice();return s[6]=e[t],s}function $e(a,e){let t,s,r,o,l,c=A,i;return s=new kt({props:{projectInfo:e[6]}}),{key:a,first:null,c(){t=y("div"),K(s.$$.fragment),r=I(),this.h()},l(u){t=$(u,"DIV",{class:!0});var f=j(t);Q(s.$$.fragment,f),r=E(f),f.forEach(w),this.h()},h(){p(t,"class",o="border-2 rounded-lg "+(e[2]&&ne(e[6].filterableTags,e[1])?"border-teal-500":"border-transparent ")),this.first=t},m(u,f){D(u,t,f),W(s,t,null),_(t,r),i=!0},p(u,f){e=u;const n={};f&1&&(n.projectInfo=e[6]),s.$set(n),(!i||f&7&&o!==(o="border-2 rounded-lg "+(e[2]&&ne(e[6].filterableTags,e[1])?"border-teal-500":"border-transparent ")))&&p(t,"class",o)},r(){l=t.getBoundingClientRect()},f(){Se(t),c()},a(){c(),c=Te(t,l,Ce,{duration:300})},i(u){i||(U(s.$$.fragment,u),i=!0)},o(u){L(s.$$.fragment,u),i=!1},d(u){u&&w(t),X(s)}}}function yt(a){let e,t,s,r,o,l=[],c=new Map,i;s=new dt({});let u=x(a[0]);const f=n=>n[6].title;for(let n=0;n<u.length;n+=1){let h=ye(a,u,n),d=f(h);c.set(d,l[n]=$e(d,h))}return{c(){e=y("div"),t=y("div"),K(s.$$.fragment),r=I(),o=y("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=$(n,"DIV",{class:!0});var h=j(e);t=$(h,"DIV",{class:!0});var d=j(t);Q(s.$$.fragment,d),d.forEach(w),r=E(h),o=$(h,"DIV",{class:!0});var g=j(o);for(let b=0;b<l.length;b+=1)l[b].l(g);g.forEach(w),h.forEach(w),this.h()},h(){p(t,"class","sticky"),p(o,"class","3xl:grid-cols-3 grid grid-cols-1 gap-4 lg:grid-cols-2"),p(e,"class","mx-auto p-4 px-[5vw]")},m(n,h){D(n,e,h),_(e,t),W(s,t,null),_(e,r),_(e,o);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(o,null);i=!0},p(n,[h]){if(h&7){u=x(n[0]),Ke();for(let d=0;d<l.length;d+=1)l[d].r();l=Pe(l,h,f,1,n,u,c,o,Ye,$e,null,ye);for(let d=0;d<l.length;d+=1)l[d].a();Qe()}},i(n){if(!i){U(s.$$.fragment,n);for(let h=0;h<u.length;h+=1)U(l[h]);i=!0}},o(n){L(s.$$.fragment,n);for(let h=0;h<l.length;h+=1)L(l[h]);i=!1},d(n){n&&w(e),X(s);for(let h=0;h<l.length;h+=1)l[h].d()}}}function $t(a,e,t){let s,r,o;N(a,et,i=>t(1,s=i)),N(a,H,i=>t(3,r=i)),N(a,Me,i=>t(2,o=i));let l=[...gt];function c(){let i=f=>Math.max(...r.filter(n=>f.filterableTags.includes(n.label)&&n.filterEnabled).map(n=>n.orderClicked),0),u=f=>f.id-_t(ne(f.filterableTags,s))*1e4-i(f)*100;t(0,l=l.sort((f,n)=>u(f)-u(n)))}return H.subscribe(c),[l,s,o]}class jt extends Z{constructor(e){super(),ee(this,e,$t,yt,Y,{})}}function Pt(a){let e,t,s,r;return e=new jt({}),s=new We({}),{c(){K(e.$$.fragment),t=I(),K(s.$$.fragment)},l(o){Q(e.$$.fragment,o),t=E(o),Q(s.$$.fragment,o)},m(o,l){W(e,o,l),D(o,t,l),W(s,o,l),r=!0},p:A,i(o){r||(U(e.$$.fragment,o),U(s.$$.fragment,o),r=!0)},o(o){L(e.$$.fragment,o),L(s.$$.fragment,o),r=!1},d(o){o&&w(t),X(e,o),X(s,o)}}}class Ct extends Z{constructor(e){super(),ee(this,e,null,Pt,Y,{})}}export{Ct as component};

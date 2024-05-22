import{n as _,D as ne,i as se,s as D,c as C,B as A}from"../chunks/scheduler.BNGhfCF4.js";import{H as oe,d as p,I as ce,S as R,i as U,e as w,c as $,a as P,l as v,g as F,t as de,s as z,b as fe,f as L,h as j,A as he,j as ge,r as G,u as V,v as q,x as ue,o as pe,n as I,p as x,w as N}from"../chunks/index.KCDMxWQV.js";import{e as O,u as Y,f as me,a as be}from"../chunks/each.BK1sEs2y.js";import{d as Z,w as _e}from"../chunks/index.DDoxRep_.js";import{P as ye,h as B,b as ke}from"../chunks/ProjectCard.Bqbke2FC.js";const ee=typeof window<"u";let ve=ee?()=>window.performance.now():()=>Date.now(),J=ee?a=>requestAnimationFrame(a):_;const E=new Set;function te(a){E.forEach(e=>{e.c(a)||(E.delete(e),e.f())}),E.size!==0&&J(te)}function we(a){let e;return E.size===0&&J(te),{promise:new Promise(t=>{E.add(e={c:a,f:t})}),abort(){E.delete(e)}}}const T=new Map;let S=0;function $e(a){let e=5381,t=a.length;for(;t--;)e=(e<<5)-e^a.charCodeAt(t);return e>>>0}function Pe(a,e){const t={stylesheet:ce(e),rules:{}};return T.set(a,t),t}function je(a,e,t,r,s,f,i,g=0){const l=16.666/r;let c=`{
`;for(let b=0;b<=1;b+=l){const y=e+(t-e)*f(b);c+=b*100+`%{${i(y,1-y)}}
`}const h=c+`100% {${i(t,1-t)}}
}`,n=`__svelte_${$e(h)}_${g}`,d=oe(a),{stylesheet:o,rules:u}=T.get(d)||Pe(d,a);u[n]||(u[n]=!0,o.insertRule(`@keyframes ${n} ${h}`,o.cssRules.length));const m=a.style.animation||"";return a.style.animation=`${m?`${m}, `:""}${n} ${r}ms linear ${s}ms 1 both`,S+=1,n}function Ee(a,e){const t=(a.style.animation||"").split(", "),r=t.filter(e?f=>f.indexOf(e)<0:f=>f.indexOf("__svelte")===-1),s=t.length-r.length;s&&(a.style.animation=r.join(", "),S-=s,S||Ce())}function Ce(){J(()=>{S||(T.forEach(a=>{const{ownerNode:e}=a.stylesheet;e&&p(e)}),T.clear())})}function re(a,e,t,r){if(!e)return _;const s=a.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return _;const{delay:f=0,duration:i=300,easing:g=ne,start:l=ve()+f,end:c=l+i,tick:h=_,css:n}=t(a,{from:e,to:s},r);let d=!0,o=!1,u;function m(){n&&(u=je(a,0,1,i,f,g,n)),f||(o=!0)}function b(){n&&Ee(a,u),d=!1}return we(y=>{if(!o&&y>=l&&(o=!0),o&&y>=c&&(h(1,0),b()),!d)return!1;if(o){const M=y-l,H=0+1*g(M/i);h(H,1-H)}return!0}),m(),h(0,1),b}function ae(a){const e=getComputedStyle(a);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:r}=e,s=a.getBoundingClientRect();a.style.position="absolute",a.style.width=t,a.style.height=r,Ie(a,s)}}function Ie(a,e){const t=a.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const r=getComputedStyle(a),s=r.transform==="none"?"":r.transform;a.style.transform=`${s} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function xe(a){const e=a-1;return e*e*e+1}function le(a,{from:e,to:t},r={}){const s=getComputedStyle(a),f=s.transform==="none"?"":s.transform,[i,g]=s.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*i/t.width-(t.left+i),c=e.top+e.height*g/t.height-(t.top+g),{delay:h=0,duration:n=o=>Math.sqrt(o)*120,easing:d=xe}=r;return{delay:h,duration:se(n)?n(Math.sqrt(l*l+c*c)):n,easing:d,css:(o,u)=>{const m=u*l,b=u*c,y=o+u*e.width/t.width,M=o+u*e.height/t.height;return`transform: ${f} translate(${m}px, ${b}px) scale(${y}, ${M});`}}}let k=_e([{label:"Python",filterEnabled:!1,baseOrder:1,orderClicked:0},{label:"Data",filterEnabled:!1,baseOrder:2,orderClicked:0},{label:"Business",filterEnabled:!1,baseOrder:3,orderClicked:0},{label:"Backend/CLI",filterEnabled:!1,baseOrder:4,orderClicked:0},{label:"Other",filterEnabled:!1,baseOrder:5,orderClicked:0},{label:"Fun",filterEnabled:!1,baseOrder:6,orderClicked:0}]),ie=Z(k,a=>a.some(e=>e.filterEnabled));function Oe(a){const e=a.some(r=>r.filterEnabled);let t=[];for(let r of a)(!e||r.filterEnabled)&&t.push(r.label);return t}let Te=Z(k,a=>Oe(a));function W(a,e,t){const r=a.slice();return r[5]=e[t],r[7]=t,r}function Q(a,e){let t,r=e[5].label+"",s,f,i,g,l=_,c,h;function n(){return e[3](e[7])}return{key:a,first:null,c(){t=w("button"),s=de(r),f=z(),this.h()},l(d){t=$(d,"BUTTON",{class:!0});var o=P(t);s=fe(o,r),f=L(o),o.forEach(p),this.h()},h(){v(t,"class",i=(!e[1]||e[5].filterEnabled?"border-gray-700 bg-gray-100 text-black":"border-gray-400 bg-gray-100 text-gray-400")+" rounded-full border px-4 py-2 hover:bg-gray-300"),this.first=t},m(d,o){F(d,t,o),j(t,s),j(t,f),c||(h=he(t,"mousedown",n),c=!0)},p(d,o){e=d,o&1&&r!==(r=e[5].label+"")&&ge(s,r),o&3&&i!==(i=(!e[1]||e[5].filterEnabled?"border-gray-700 bg-gray-100 text-black":"border-gray-400 bg-gray-100 text-gray-400")+" rounded-full border px-4 py-2 hover:bg-gray-300")&&v(t,"class",i)},r(){g=t.getBoundingClientRect()},f(){ae(t),l()},a(){l(),l=re(t,g,le,{delay:0,duration:e[4]})},d(d){d&&p(t),c=!1,h()}}}function Se(a){let e,t=[],r=new Map,s=O(a[0]);const f=i=>i[5].label;for(let i=0;i<s.length;i+=1){let g=W(a,s,i),l=f(g);r.set(l,t[i]=Q(l,g))}return{c(){e=w("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=$(i,"DIV",{class:!0});var g=P(e);for(let l=0;l<t.length;l+=1)t[l].l(g);g.forEach(p),this.h()},h(){v(e,"class","mb-4 mt-2 flex gap-2 overflow-x-auto")},m(i,g){F(i,e,g);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p(i,[g]){if(g&7){s=O(i[0]);for(let l=0;l<t.length;l+=1)t[l].r();t=Y(t,g,f,1,i,s,r,e,me,Q,null,W);for(let l=0;l<t.length;l+=1)t[l].a()}},i:_,o:_,d(i){i&&p(e);for(let g=0;g<t.length;g+=1)t[g].d()}}}function Fe(a,e,t){let r,s;C(a,k,l=>t(0,r=l)),C(a,ie,l=>t(1,s=l));function f(l){if(A(k,r[l].filterEnabled=!r[l].filterEnabled,r),r[l].filterEnabled){let c=Math.max(...r.map(h=>h.orderClicked));A(k,r[l].orderClicked=c+1,r)}A(k,r=r.sort((c,h)=>!c.filterEnabled&&!h.filterEnabled?c.baseOrder>=h.baseOrder?0:-1:c.filterEnabled===h.filterEnabled?0:c.filterEnabled?-1:1),r)}return[r,s,f,l=>f(l),l=>Math.min(Math.sqrt(l)*40,400)]}class Me extends R{constructor(e){super(),U(this,e,Fe,Se,D,{})}}const Ae=[{id:1,title:"py_flags",description:"CLI flags parser library for python.",skills:["Object-Oriented Programming (OOP)","Strict typing in python, using mypy to check","API design for dev tools"],languagesAndFrameworks:["Python"],additionalInfo:"",projectUrl:"https://github.com/meee-low/py_flags",imagePath:"/img/projects/py_flags_cropped.png",highlighted:!1,hidden:!1,filterableTags:["Python"]},{id:2,title:'Better "Daily Drive" for Spotify',description:"Grabs tracks and podcast episodes from various sources and merges them in a single playlist. The goal is to approximate a radio station, with different themed blocks.",skills:["Direct interaction with RESTful API"],languagesAndFrameworks:["Python","SpotifyAPI"],additionalInfo:"",projectUrl:"https://github.com/meee-low/spotify-api",imagePath:"/img/projects/betterspotifydailydrive.png",highlighted:!1,hidden:!1,filterableTags:["Python","Backend/CLI"]},{id:3,title:"Web of Marvel Characters",description:"Visualizes a network of Marvel characters based on their common appearances in the comics.",skills:["Web scraping","Data cleaning and processing","Graph network visualization"],languagesAndFrameworks:["Python","BeautifulSoup4","Pandas","Jupyter Notebook"],additionalInfo:"",projectUrl:"https://github.com/meee-low/web-of-marvel-characters",imagePath:"/img/projects/web-of-marvel_cropped.png",highlighted:!0,hidden:!1,filterableTags:["Python","Data","Business"]},{id:4,title:"Portfolio",description:"The website you are probably reading right now!",skills:["Front-end design","Semantic HTML"],languagesAndFrameworks:["TypeScript","React","HTML","CSS"],additionalInfo:"",projectUrl:"https://github.com/meee-low/new-portfolio",imagePath:"/img/projects/youarehere.png",highlighted:!1,hidden:!1,filterableTags:["Other"]},{id:5,title:"Exploration of Biases in Critics vs. Public Movie Reviews",description:"",skills:["Data analysis"],languagesAndFrameworks:["Python","Pandas","Jupyter Notebook"],additionalInfo:"",projectUrl:"https://www.kaggle.com/milofd/rottentomatoes-critics-vs-audiences-reviews",imagePath:"/img/projects/kaggle-movies-critics-genre_cropped.png",highlighted:!0,hidden:!1,filterableTags:["Python","Data","Business"]},{id:6,title:"Other Small Projects",description:"Projects too small for their own repo. Usually mathematical visualization, competitive programming problems or exploring new programming languages.",skills:["Mathematical visualization","Problem solving and algorithms","Exploring new tools","Adapting to new problems and tools"],languagesAndFrameworks:["Python","Rust","C++","Golang","Julia","Matplotlib","Numpy","PyGame"],additionalInfo:"",projectUrl:"https://github.com/meee-low/challenges",imagePath:"/img/projects/challenges_mandelbrot-removebg-preview_cropped.png",highlighted:!1,hidden:!1,filterableTags:["Other","Fun"]},{id:7,title:"Video Game Market Tracker",description:"A spreadsheet that gathers user input on the market prices, graphs trends and recommends actions related to production.",skills:["Pivot tables","Advanced spreadsheet manipulation","Data visualization","Operational recommendations"],languagesAndFrameworks:["MS Excel","Google Sheets","Google Forms"],additionalInfo:"",projectUrl:"",imagePath:"/img/projects/spreadsheeet.png",highlighted:!1,hidden:!1,filterableTags:["Business"]},{id:8,title:"Jurnalo",description:"A CLI journal, mood tracker and habit tracker built in Rust (WIP).",skills:["ORM - Object Relational Mapping","Backend development","SQL Relational Databases","Serialization and deserialization"],languagesAndFrameworks:["Rust","Diesel","Serde","SQLite"],additionalInfo:"",projectUrl:"https://github.com/meee-low/jurnalo/",imagePath:"/img/projects/jurnalo-mock.png",highlighted:!0,hidden:!1,filterableTags:["Backend/CLI"]}];function K(a,e,t){const r=a.slice();return r[6]=e[t],r}function X(a,e){let t,r,s,f,i,g=_,l;return r=new ye({props:{projectInfo:e[6]}}),{key:a,first:null,c(){t=w("div"),G(r.$$.fragment),s=z(),this.h()},l(c){t=$(c,"DIV",{class:!0});var h=P(t);V(r.$$.fragment,h),s=L(h),h.forEach(p),this.h()},h(){v(t,"class",f="border-2 "+(e[2]&&B(e[6].filterableTags,e[1])?"border-teal-500":"border-transparent ")),this.first=t},m(c,h){F(c,t,h),q(r,t,null),j(t,s),l=!0},p(c,h){e=c;const n={};h&1&&(n.projectInfo=e[6]),r.$set(n),(!l||h&7&&f!==(f="border-2 "+(e[2]&&B(e[6].filterableTags,e[1])?"border-teal-500":"border-transparent ")))&&v(t,"class",f)},r(){i=t.getBoundingClientRect()},f(){ae(t),g()},a(){g(),g=re(t,i,le,{duration:300})},i(c){l||(I(r.$$.fragment,c),l=!0)},o(c){x(r.$$.fragment,c),l=!1},d(c){c&&p(t),N(r)}}}function Be(a){let e,t,r,s,f,i=[],g=new Map,l;r=new Me({});let c=O(a[0]);const h=n=>n[6].title;for(let n=0;n<c.length;n+=1){let d=K(a,c,n),o=h(d);g.set(o,i[n]=X(o,d))}return{c(){e=w("div"),t=w("div"),G(r.$$.fragment),s=z(),f=w("div");for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=$(n,"DIV",{class:!0});var d=P(e);t=$(d,"DIV",{class:!0});var o=P(t);V(r.$$.fragment,o),o.forEach(p),s=L(d),f=$(d,"DIV",{class:!0});var u=P(f);for(let m=0;m<i.length;m+=1)i[m].l(u);u.forEach(p),d.forEach(p),this.h()},h(){v(t,"class","sticky"),v(f,"class","3xl:grid-cols-3 grid grid-cols-1 gap-4 lg:grid-cols-2"),v(e,"class","mx-auto p-4 px-[5vw]")},m(n,d){F(n,e,d),j(e,t),q(r,t,null),j(e,s),j(e,f);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(f,null);l=!0},p(n,[d]){if(d&7){c=O(n[0]),ue();for(let o=0;o<i.length;o+=1)i[o].r();i=Y(i,d,h,1,n,c,g,f,be,X,null,K);for(let o=0;o<i.length;o+=1)i[o].a();pe()}},i(n){if(!l){I(r.$$.fragment,n);for(let d=0;d<c.length;d+=1)I(i[d]);l=!0}},o(n){x(r.$$.fragment,n);for(let d=0;d<i.length;d+=1)x(i[d]);l=!1},d(n){n&&p(e),N(r);for(let d=0;d<i.length;d+=1)i[d].d()}}}function De(a,e,t){let r,s,f;C(a,Te,l=>t(1,r=l)),C(a,k,l=>t(3,s=l)),C(a,ie,l=>t(2,f=l));let i=[...Ae];function g(){let l=h=>Math.max(...s.filter(n=>h.filterableTags.includes(n.label)&&n.filterEnabled).map(n=>n.orderClicked),0),c=h=>h.id-ke(B(h.filterableTags,r))*1e4-l(h)*100;t(0,i=i.sort((h,n)=>c(h)-c(n)))}return k.subscribe(g),[i,r,f]}class Re extends R{constructor(e){super(),U(this,e,De,Be,D,{})}}function Ue(a){let e,t;return e=new Re({}),{c(){G(e.$$.fragment)},l(r){V(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:_,i(r){t||(I(e.$$.fragment,r),t=!0)},o(r){x(e.$$.fragment,r),t=!1},d(r){N(e,r)}}}class Ne extends R{constructor(e){super(),U(this,e,null,Ue,D,{})}}export{Ne as component};
import{d as w}from"./Nlh6b-u8.js";import{h as b}from"./Bx6vS9cK.js";function p(a,u,e,r){var t,f,l=!1,y=e.length>=2,g=(s,i,d)=>{if(t=i,y&&(f=s),!l){let n=u(s,i,d);if(u.length<2)i(n);else return n}l=!1},v=w(a,g,r),D=!Array.isArray(a);function A(s){var i=e(s,f);D?(l=!0,a.set(i)):i.forEach((d,n)=>{l=!0,a[n].set(d)}),l=!1}var o=!1;function h(s){var i,d,n,c;if(o){c=s(b(v)),t(c);return}var S=v.subscribe(V=>{o?i?d=!0:i=!0:n=V});c=s(n),o=!0,t(c),S(),o=!1,d&&(c=b(v)),i&&A(c)}return{subscribe:v.subscribe,set(s){h(()=>s)},update:h}}function O(a,u){if(Array.isArray(u)){let e=u.concat();return p(a,r=>{for(let t=0;t<e.length;++t)r=r[e[t]];return r},(r,t)=>{let f=t;for(let l=0;l<e.length-1;++l)f=f[e[l]];return f[e[e.length-1]]=r,t})}else return p(a,e=>e[u],(e,r)=>(r[u]=e,r))}export{O as p};

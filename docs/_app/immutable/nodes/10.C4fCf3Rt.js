var ct=Object.defineProperty;var ut=(a,s,e)=>s in a?ct(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var m=(a,s,e)=>ut(a,typeof s!="symbol"?s+"":s,e);import{s as re,n as K,r as ht,i as dt,C as I,q as mt,c as Ge,o as pt,B as ft,d as Qe}from"../chunks/scheduler.Qsv3XV_C.js";import{S as ae,i as oe,e as C,t as te,s as x,c as q,a as H,b as se,f as S,d as A,k as F,g as le,h as f,z as ne,w as Ae,j as ie,F as gt,o as E,n as Ee,p as M,G as Ue,q as O,l as R,m as D,u as X,I as bt}from"../chunks/index.4hiSCMsU.js";import{V as T,M as yt,a as vt,b as _t,c as $t,S as wt,O as xt,W as St,C as Bt}from"../chunks/three.module.DzU_tVEa.js";import{a as Oe}from"../chunks/utils.B7PvQ2PK.js";import{w as Pt}from"../chunks/index.CvpvIyaw.js";import{p as P}from"../chunks/index.CPNNWcJa.js";function qe(a,s){const e={},t={},i={$$scope:1};let n=a.length;for(;n--;){const o=a[n],h=s[n];if(h){for(const l in o)l in h||(t[l]=1);for(const l in h)i[l]||(e[l]=h[l],i[l]=1);a[n]=h}else for(const l in o)i[l]=1}for(const o in t)o in e||(e[o]=void 0);return e}function Me(a,s){const e=a.x-s.x,t=a.y-s.y;return e*e+t*t}class We{}class L extends We{constructor(e,t,i,n){super();m(this,"centerX");m(this,"centerY");m(this,"width");m(this,"height");this.centerX=e,this.centerY=t,this.width=i,this.height=n}static fromTopLeft(e,t,i,n){return new L(e+i/2,t+n/2,i,n)}leftX(){return this.centerX-this.width/2}rightX(){return this.centerX+this.width/2}topY(){return this.centerY-this.height/2}bottomY(){return this.centerY+this.height/2}debugDirections(){return{left:this.leftX(),right:this.rightX(),top:this.topY(),bottom:this.bottomY()}}contains(e){const t=e.x,i=e.y;return this.leftX()<=t&&this.rightX()>=t&&this.topY()<=i&&this.bottomY()>=i}intersects(e){if(e instanceof L)return!(this.leftX()>e.rightX()||e.leftX()>this.rightX()||this.topY()>e.bottomY()||e.topY()>this.bottomY());if(e instanceof j){if(this.contains(e.center))return!0;const t={x:Math.max(this.leftX(),Math.min(this.rightX(),e.center.x)),y:Math.max(this.topY(),Math.min(this.bottomY(),e.center.y))};return Me(e.center,t)<e.radius*e.radius}Oe(e)}closestBoundaryPointToPoint(e,t){t.x=Math.max(this.leftX(),Math.min(e.x,this.rightX())),t.y=Math.max(this.topY(),Math.min(e.y,this.bottomY()))}sqDistanceToPoint(e){const t={x:0,y:0};this.closestBoundaryPointToPoint(e,t);const i=e.x-t.x,n=e.y-t.y;return i*i+n*n}}class j extends We{constructor(e,t){super();m(this,"center");m(this,"radius");this.center=e,this.radius=t}contains(e){return Me(this.center,e)<this.radius*this.radius}intersects(e){if(e instanceof j){const t=this.radius+e.radius,i=t*t;return Me(this.center,e.center)<i}if(e instanceof L)return e.intersects(this);Oe(e)}closestBoundaryPointToPoint(e,t){const i=e.x-this.center.x,n=e.y-this.center.y,o=Math.sqrt(i*i+n*n);o<=1e-4&&(t.x=this.center.x,t.y=this.center.y);const h=this.radius/o;t.x=this.center.x+e.x*h,t.y=this.center.y+e.y*h}sqDistanceToPoint(e){const t=e.x-this.center.x,i=e.y-this.center.y,n=t*t+i*i;return Math.pow(Math.sqrt(n)-this.radius,2)}}class Je{}class ze extends Je{constructor(e){super();m(this,"elements",[]);m(this,"accessFunc");this.accessFunc=e}push(e){this.elements.push(e)}query(e){return this.elements.filter(t=>e.contains(this.accessFunc(t)))}queryAll(){return this.elements}rebalance(){}}class W extends Je{constructor(e,t,i){super();m(this,"elements",[]);m(this,"accessFunc");m(this,"capacity");m(this,"boundaryBox");m(this,"subdivisions");this.accessFunc=t,this.capacity=i,this.boundaryBox=e}push(e){if(!this.subdivisions&&this.elements.length<=this.capacity){this.elements.push(e);return}this.subdivide();const t=this.pushToChild(e);console.assert(t,`Error: Could not add this element ${this.accessFunc(e)} to this quadtree ${JSON.stringify({left:this.boundaryBox.leftX(),right:this.boundaryBox.rightX(),top:this.boundaryBox.topY(),bottom:this.boundaryBox.bottomY()})}.`)}subdivide(){typeof this.subdivisions>"u"&&(this.subdivisions={ne:new W(new L((this.boundaryBox.centerX+this.boundaryBox.rightX())/2,(this.boundaryBox.centerY+this.boundaryBox.topY())/2,this.boundaryBox.width/2,this.boundaryBox.height/2),this.accessFunc,this.capacity),nw:new W(new L((this.boundaryBox.centerX+this.boundaryBox.leftX())/2,(this.boundaryBox.centerY+this.boundaryBox.topY())/2,this.boundaryBox.width/2,this.boundaryBox.height/2),this.accessFunc,this.capacity),se:new W(new L((this.boundaryBox.centerX+this.boundaryBox.rightX())/2,(this.boundaryBox.centerY+this.boundaryBox.bottomY())/2,this.boundaryBox.width/2,this.boundaryBox.height/2),this.accessFunc,this.capacity),sw:new W(new L((this.boundaryBox.centerX+this.boundaryBox.leftX())/2,(this.boundaryBox.centerY+this.boundaryBox.bottomY())/2,this.boundaryBox.width/2,this.boundaryBox.height/2),this.accessFunc,this.capacity)});let e=!0;this.elements.forEach(t=>{const i=this.pushToChild(t);e=e&&i}),this.elements=[],console.assert(e,"Could not transfer all the elements to the children.")}pushToChild(e){if(this.subdivisions){let t=this.accessFunc(e).x<this.boundaryBox.centerX,i=this.accessFunc(e).y<this.boundaryBox.centerY;return t&&i?(this.subdivisions.nw.push(e),!0):!t&&i?(this.subdivisions.ne.push(e),!0):t&&!i?(this.subdivisions.sw.push(e),!0):!t&&!i?(this.subdivisions.se.push(e),!0):(console.error("Exhaustive check failed while pushing to child. Assumption broken."),!1)}return!0}query(e){if(!e.intersects(this.boundaryBox))return[];let t=[];return this.elements.filter(i=>e.contains(this.accessFunc(i))).forEach(i=>t.push(i)),this.subdivisions&&(this.subdivisions.ne.query(e).filter(i=>e.contains(this.accessFunc(i))).forEach(i=>t.push(i)),this.subdivisions.nw.query(e).filter(i=>e.contains(this.accessFunc(i))).forEach(i=>t.push(i)),this.subdivisions.se.query(e).filter(i=>e.contains(this.accessFunc(i))).forEach(i=>t.push(i)),this.subdivisions.sw.query(e).filter(i=>e.contains(this.accessFunc(i))).forEach(i=>t.push(i))),t}queryAll(){let e=[];return this.elements.forEach(t=>e.push(t)),this.subdivisions&&(this.subdivisions.ne.queryAll().forEach(t=>e.push(t)),this.subdivisions.nw.queryAll().forEach(t=>e.push(t)),this.subdivisions.se.queryAll().forEach(t=>e.push(t)),this.subdivisions.sw.queryAll().forEach(t=>e.push(t))),e}rebalance(e){let t=e??this;if(this.elements.forEach((i,n)=>{this.boundaryBox.contains(this.accessFunc(i))||(this.elements.splice(n,1),t.push(i))}),this.subdivisions&&(this.subdivisions.ne.rebalance(t),this.subdivisions.nw.rebalance(t),this.subdivisions.se.rebalance(t),this.subdivisions.sw.rebalance(t)),this.subdivisions){let i=this.subdivisions.ne.elements.length+this.subdivisions.nw.elements.length+this.subdivisions.se.elements.length+this.subdivisions.sw.elements.length,n=typeof this.subdivisions.ne.subdivisions>"u"&&typeof this.subdivisions.nw.subdivisions>"u"&&typeof this.subdivisions.se.subdivisions>"u"&&typeof this.subdivisions.sw.subdivisions>"u";i===0&&n&&(delete this.subdivisions,this.subdivisions=void 0)}}}const Re={maxSpeed:3,minSpeed:2,neighborRange:20,protectedRange:2.5,obstacleRange:50,cohesionFactor:5e-4,separationFactor:.05,alignmentFactor:.05,turnFactor:.25,speedScale:1},Ze={...Re,numberOfBoids:300,spatialStructure:"quadtree",quadtreeCapacity:20};let w=Pt({...Ze});function Ft(a,s){const e={};for(const t in s)a.hasOwnProperty(t)&&s.hasOwnProperty(t)&&a[t]!==s[t]&&(e[t]=s[t]);return e}function Ct(a,s){const e={};for(const t in s)t in a&&(e[t]=a[t]);return e}class qt{constructor(s,e,t,i={}){m(this,"tooCloseBBox");m(this,"neighborsBBox");m(this,"position");m(this,"heading");m(this,"futureHeadingOffset");m(this,"params");m(this,"id");this.id=s,this.position=e,this.heading=t,this.futureHeadingOffset=t.clone(),this.params={...Re,...i},this.tooCloseBBox=new j(e,this.params.protectedRange),this.neighborsBBox=new j(e,this.params.neighborRange)}move(s){this.heading.copy(this.futureHeadingOffset).clampLength(this.params.minSpeed,this.params.maxSpeed).multiplyScalar(this.params.speedScale),this.position.addScaledVector(this.heading,s*60),this.tooCloseBBox.center=this.position,this.neighborsBBox.center=this.position}calculateNewHeading(s){this.futureHeadingOffset.copy(this.heading);let e=s.boidsQt.query(this.neighborsBBox),t=e.filter(l=>this.tooCloseBBox.contains(l.getPosition())),i=new T(0,0);t.forEach(l=>{i.add(this.position).sub(l.position)});let n=new T(0,0);e.length>0&&(e.forEach(l=>{n.add(l.heading)}),n.divideScalar(e.length));let o=new T(0,0);e.length>0&&(e.forEach(l=>{o.add(l.position)}),o.divideScalar(e.length));let h=new T;s.obstacles.forEach(l=>{let g=this.position.distanceToSquared(l.position),u=Math.pow(g,-l.inverseDistance)*l.attractiveStrength,$=this.position.clone().sub(l.position);h.addScaledVector($,-u)}),this.futureHeadingOffset.addScaledVector(i,this.params.separationFactor),this.futureHeadingOffset.addScaledVector(n,this.params.alignmentFactor),this.futureHeadingOffset.addScaledVector(o,this.params.cohesionFactor),this.futureHeadingOffset.add(h),this.futureHeadingOffset.clampLength(this.params.minSpeed,this.params.maxSpeed)}getPosition(){return this.position}getVelocity(){return this.heading}updateParams(s){s.neighborRange&&(this.neighborsBBox.radius=s.neighborRange),s.protectedRange&&(this.tooCloseBBox.radius=s.protectedRange),this.params={...this.params,...s}}}class At{constructor(s,e,t,i){m(this,"boidsQt");m(this,"boidsSprites",[]);m(this,"worldArea");m(this,"worldParams",Ze);m(this,"frameCount",0);m(this,"obstacles",[]);m(this,"curId",0);this.worldArea=new L(s,e,t*2,i*2),this.boidsQt=new W(this.worldArea,n=>n.getPosition(),this.worldParams.quadtreeCapacity),this.addObstacle({position:new T(s,e),attractiveStrength:6e-8,inverseDistance:-1}),this.addObstacle({position:new T(s-t/6,e),attractiveStrength:-1e-9,inverseDistance:1}),this.addObstacle({position:new T(s+t/6,e),attractiveStrength:-1e-9,inverseDistance:1})}addBoid(s,e){let t=new qt(this.curId++,s,e);this.boidsQt.push(t);let i=Et();const n=new yt({color:16777215,opacity:.6,transparent:!0});let o=new vt(i,n);o.position.x=s.x,o.position.y=s.y,o.rotateZ(e.angle()),this.boidsSprites.push(o)}getSprites(){return this.boidsSprites}updateHeadings(){this.boidsQt.queryAll().forEach(s=>{s.calculateNewHeading(this)})}move(s){if(this.frameCount++,this.boidsQt.queryAll().forEach(e=>{e.move(s),this.boidsSprites[e.id].position.x=e.getPosition().x,this.boidsSprites[e.id].position.y=e.getPosition().y,this.boidsSprites[e.id].rotation.z=e.getVelocity().angle()}),this.frameCount%180===0){let e=this.boidsQt.queryAll();this.boidsQt=new W(this.worldArea,t=>t.getPosition(),this.worldParams.quadtreeCapacity),e.forEach(t=>this.boidsQt.push(t))}else this.boidsQt.rebalance()}update(s){this.updateHeadings(),this.move(s)}addObstacle(s){this.obstacles.push(s)}destroy(){this.boidsQt=new ze(s=>s.getPosition()),this.boidsSprites=[]}updateParams(s){let e=!1;for(Ft(this.worldParams,s),this.worldParams=s;s.numberOfBoids>this.curId;){e=!0;let i=Math.random()*this.worldArea.width+this.worldArea.leftX(),n=Math.random()*this.worldArea.height+this.worldArea.topY(),o=new T(i,n);this.addBoid(o,new T(Math.random(),Math.random()))}if(s.numberOfBoids<this.curId){e=!0;let i=this.boidsQt.queryAll().filter(n=>n.id<s.numberOfBoids);this.reconstructSpace(i),this.boidsSprites=this.boidsSprites.slice(0,s.numberOfBoids),this.curId=s.numberOfBoids}(s.spatialStructure!==this.worldParams.spatialStructure||s.numberOfBoids!==this.worldParams.numberOfBoids)&&this.reconstructSpace(this.boidsQt.queryAll());const t=Ct(s,Re);return this.boidsQt.queryAll().forEach(i=>{i.updateParams(t)}),e}reconstructSpace(s){let e;this.worldParams.spatialStructure==="array"?e=new ze(t=>t.getPosition()):this.worldParams.spatialStructure==="quadtree"?e=new W(this.worldArea,t=>t.getPosition(),this.worldParams.quadtreeCapacity):Oe(this.worldParams.spatialStructure),s.forEach(t=>e.push(t)),this.boidsQt=e}}function Et(){let a=new _t;const s=-.8,e=Math.sin(Math.acos(s)),t=1;let i=new T(1,0).multiplyScalar(t),n=new T(s,e).multiplyScalar(t),o=new T(s,-e).multiplyScalar(t);return a.moveTo(i.x,i.y),a.lineTo(n.x,n.y),a.lineTo(o.x,o.y),new $t(a)}function Mt(a,s,e,t=2){let i=new wt;const n=a/s,o=s/t;let h=new xt(-o*n/2,o*n/2,o/2,-o/2,1,1e3);h.position.z=10;let l=new St({canvas:e});return l.setSize(a,s),{scene:i,camera:h,renderer:l}}function Ot(a,s,e,t,i){const n=()=>{requestAnimationFrame(n);let o=i.getDelta();a({camera:t,scene:e,renderer:s,deltatime:o}),s.render(e,t)};return n}function Rt(a){let s,e=`${a[0]}: ${a[5].toFixed(a[6])}`,t,i,n,o,h=a[1].toFixed(a[6])+"",l,g,u,$,_,c=a[2].toFixed(a[6])+"",y,B,v;return{c(){s=C("label"),t=te(e),i=x(),n=C("div"),o=C("span"),l=te(h),g=x(),u=C("input"),$=x(),_=C("span"),y=te(c),this.h()},l(d){s=q(d,"LABEL",{class:!0});var b=H(s);t=se(b,e),i=S(b),n=q(b,"DIV",{});var k=H(n);o=q(k,"SPAN",{});var Y=H(o);l=se(Y,h),Y.forEach(A),g=S(k),u=q(k,"INPUT",{type:!0,min:!0,max:!0,step:!0}),$=S(k),_=q(k,"SPAN",{});var J=H(_);y=se(J,c),J.forEach(A),k.forEach(A),b.forEach(A),this.h()},h(){F(u,"type","range"),F(u,"min",a[1]),F(u,"max",a[2]),F(u,"step",a[4]),F(s,"class","block")},m(d,b){le(d,s,b),f(s,t),f(s,i),f(s,n),f(n,o),f(o,l),f(n,g),f(n,u),ne(u,a[5]),f(n,$),f(n,_),f(_,y),B||(v=[Ae(u,"change",a[7]),Ae(u,"input",a[7])],B=!0)},p(d,[b]){b&33&&e!==(e=`${d[0]}: ${d[5].toFixed(d[6])}`)&&ie(t,e),b&2&&h!==(h=d[1].toFixed(d[6])+"")&&ie(l,h),b&2&&F(u,"min",d[1]),b&4&&F(u,"max",d[2]),b&16&&F(u,"step",d[4]),b&32&&ne(u,d[5]),b&4&&c!==(c=d[2].toFixed(d[6])+"")&&ie(y,c)},i:K,o:K,d(d){d&&A(s),B=!1,ht(v)}}}function Dt(a,s,e){let t,i=K,n=()=>(i(),i=dt(g,c=>e(5,t=c)),g);a.$$.on_destroy.push(()=>i());let{label:o}=s,{min:h}=s,{max:l}=s,{value:g}=s;n();let{step:u}=s,$=Math.ceil(-Math.log10(u));function _(){t=gt(this.value),g.set(t)}return a.$$set=c=>{"label"in c&&e(0,o=c.label),"min"in c&&e(1,h=c.min),"max"in c&&e(2,l=c.max),"value"in c&&n(e(3,g=c.value)),"step"in c&&e(4,u=c.step)},[o,h,l,g,u,t,$,_]}class V extends ae{constructor(s){super(),oe(this,s,Dt,Rt,re,{label:0,min:1,max:2,value:3,step:4})}}function Xt(a){let s,e,t,i="Array",n,o="Quadtree",h,l,g,u,$,_,c,y,B,v,d,b,k,Y,J,N,ce,Q,ue,U,he,z,de,G,ee,me,De;const Xe=[{label:"numberOfBoids",min:0,max:1e3,step:1,value:P(w,"numberOfBoids")}];let pe={};for(let r=0;r<Xe.length;r+=1)pe=I(pe,Xe[r]);l=new V({props:pe});const Te=[{label:"quadtreeCapacity",min:1,max:100,step:1,value:P(w,"quadtreeCapacity")}];let fe={};for(let r=0;r<Te.length;r+=1)fe=I(fe,Te[r]);u=new V({props:fe});const Ye=[{label:"speedScale",min:.1,max:10,step:.1,value:P(w,"speedScale")}];let ge={};for(let r=0;r<Ye.length;r+=1)ge=I(ge,Ye[r]);_=new V({props:ge});const be=[{label:"minSpeed",min:.5,max:a[0].maxSpeed,step:.01,value:P(w,"minSpeed")}];let ye={};for(let r=0;r<be.length;r+=1)ye=I(ye,be[r]);y=new V({props:ye});const ve=[{label:"maxSpeed",min:a[0].minSpeed,max:5,value:P(w,"maxSpeed"),step:.01}];let _e={};for(let r=0;r<ve.length;r+=1)_e=I(_e,ve[r]);v=new V({props:_e});const ke=[{label:"neighborRange",min:1,max:50,step:.01,value:P(w,"neighborRange")}];let $e={};for(let r=0;r<ke.length;r+=1)$e=I($e,ke[r]);b=new V({props:$e});const we=[{label:"protectedRange",min:1,max:a[0].neighborRange*.9,step:.01,value:P(w,"protectedRange")}];let xe={};for(let r=0;r<we.length;r+=1)xe=I(xe,we[r]);Y=new V({props:xe});const Ie=[{label:"obstacleRange",min:0,max:100,step:.01,value:P(w,"obstacleRange")}];let Se={};for(let r=0;r<Ie.length;r+=1)Se=I(Se,Ie[r]);N=new V({props:Se});const Ve=[{label:"cohesionFactor",min:0,max:.001,step:1e-6,value:P(w,"cohesionFactor")}];let Be={};for(let r=0;r<Ve.length;r+=1)Be=I(Be,Ve[r]);Q=new V({props:Be});const He=[{label:"separationFactor",min:0,max:.5,step:1e-4,value:P(w,"separationFactor")}];let Pe={};for(let r=0;r<He.length;r+=1)Pe=I(Pe,He[r]);U=new V({props:Pe});const Le=[{label:"alignmentFactor",min:0,max:.5,step:1e-4,value:P(w,"alignmentFactor")}];let Fe={};for(let r=0;r<Le.length;r+=1)Fe=I(Fe,Le[r]);z=new V({props:Fe});const Ne=[{label:"turnFactor",min:0,max:1,step:.01,value:P(w,"turnFactor")}];let Ce={};for(let r=0;r<Ne.length;r+=1)Ce=I(Ce,Ne[r]);return G=new V({props:Ce}),{c(){s=C("div"),e=C("select"),t=C("option"),t.textContent=i,n=C("option"),n.textContent=o,h=x(),E(l.$$.fragment),g=x(),E(u.$$.fragment),$=x(),E(_.$$.fragment),c=x(),E(y.$$.fragment),B=x(),E(v.$$.fragment),d=x(),E(b.$$.fragment),k=x(),E(Y.$$.fragment),J=x(),E(N.$$.fragment),ce=x(),E(Q.$$.fragment),ue=x(),E(U.$$.fragment),he=x(),E(z.$$.fragment),de=x(),E(G.$$.fragment),this.h()},l(r){s=q(r,"DIV",{});var p=H(s);e=q(p,"SELECT",{class:!0,name:!0,id:!0});var Z=H(e);t=q(Z,"OPTION",{"data-svelte-h":!0}),Ee(t)!=="svelte-6i4yu4"&&(t.textContent=i),n=q(Z,"OPTION",{"data-svelte-h":!0}),Ee(n)!=="svelte-1ktt5v1"&&(n.textContent=o),Z.forEach(A),h=S(p),M(l.$$.fragment,p),g=S(p),M(u.$$.fragment,p),$=S(p),M(_.$$.fragment,p),c=S(p),M(y.$$.fragment,p),B=S(p),M(v.$$.fragment,p),d=S(p),M(b.$$.fragment,p),k=S(p),M(Y.$$.fragment,p),J=S(p),M(N.$$.fragment,p),ce=S(p),M(Q.$$.fragment,p),ue=S(p),M(U.$$.fragment,p),he=S(p),M(z.$$.fragment,p),de=S(p),M(G.$$.fragment,p),p.forEach(A),this.h()},h(){t.__value="array",ne(t,t.__value),n.__value="quadtree",ne(n,n.__value),n.selected=!0,F(e,"class","rounded-sm border border-black"),F(e,"name","spatial-structure"),F(e,"id","spatial-structure"),a[0].spatialStructure===void 0&&mt(()=>a[1].call(e))},m(r,p){le(r,s,p),f(s,e),f(e,t),f(e,n),Ue(e,a[0].spatialStructure,!0),f(s,h),O(l,s,null),f(s,g),O(u,s,null),f(s,$),O(_,s,null),f(s,c),O(y,s,null),f(s,B),O(v,s,null),f(s,d),O(b,s,null),f(s,k),O(Y,s,null),f(s,J),O(N,s,null),f(s,ce),O(Q,s,null),f(s,ue),O(U,s,null),f(s,he),O(z,s,null),f(s,de),O(G,s,null),ee=!0,me||(De=Ae(e,"change",a[1]),me=!0)},p(r,[p]){p&1&&Ue(e,r[0].spatialStructure);const Z={};l.$set(Z);const Ke={};u.$set(Ke);const je={};_.$set(je);const et=p&1?qe(be,[{label:"minSpeed",min:.5,max:r[0].maxSpeed,step:.01,value:P(w,"minSpeed")}]):{};y.$set(et);const tt=p&1?qe(ve,[{label:"maxSpeed",min:r[0].minSpeed,max:5,value:P(w,"maxSpeed"),step:.01}]):{};v.$set(tt);const st={};b.$set(st);const it=p&1?qe(we,[{label:"protectedRange",min:1,max:r[0].neighborRange*.9,step:.01,value:P(w,"protectedRange")}]):{};Y.$set(it);const nt={};N.$set(nt);const rt={};Q.$set(rt);const at={};U.$set(at);const ot={};z.$set(ot);const lt={};G.$set(lt)},i(r){ee||(R(l.$$.fragment,r),R(u.$$.fragment,r),R(_.$$.fragment,r),R(y.$$.fragment,r),R(v.$$.fragment,r),R(b.$$.fragment,r),R(Y.$$.fragment,r),R(N.$$.fragment,r),R(Q.$$.fragment,r),R(U.$$.fragment,r),R(z.$$.fragment,r),R(G.$$.fragment,r),ee=!0)},o(r){D(l.$$.fragment,r),D(u.$$.fragment,r),D(_.$$.fragment,r),D(y.$$.fragment,r),D(v.$$.fragment,r),D(b.$$.fragment,r),D(Y.$$.fragment,r),D(N.$$.fragment,r),D(Q.$$.fragment,r),D(U.$$.fragment,r),D(z.$$.fragment,r),D(G.$$.fragment,r),ee=!1},d(r){r&&A(s),X(l),X(u),X(_),X(y),X(v),X(b),X(Y),X(N),X(Q),X(U),X(z),X(G),me=!1,De()}}}function Tt(a,s,e){let t;Ge(a,w,n=>e(0,t=n));function i(){t.spatialStructure=bt(this),w.set(t)}return[t,i]}class Yt extends ae{constructor(s){super(),oe(this,s,Tt,Xt,re,{})}}class kt{constructor(s){m(this,"capacity");m(this,"head",0);m(this,"tail",0);m(this,"array");m(this,"occupancy",0);this.capacity=s,this.array=new Array(s)}push(s){this.occupancy===this.capacity&&(this.occupancy-=1,this.head=(this.head+1)%this.capacity),this.array[this.tail]=s,this.tail=(this.tail+1)%this.capacity,this.occupancy+=1}pop(){if(this.occupancy===0)return null;const s=this.array[this.head];return this.head=(this.head+1)%this.capacity,this.occupancy-=1,s}peek(){return this.occupancy===0?null:this.array[this.head]}map(s){let e=this.head,t=new Array(this.occupancy);for(let i=0;i<this.occupancy;++i)t[i]=s(this.array[e]),e=(e+1)%this.capacity;return t}reduce(s,e){let t=this.head;for(let i=0;i<this.occupancy;++i)e=s(e,this.array[t]),t=(t+1)%this.capacity;return e}toArray(){return[...this.array.slice(this.head),...this.array.slice(void 0,this.tail)]}}class It extends kt{constructor(){super(...arguments);m(this,"_sum",0)}mean(){return this.occupancy>0?this.sum()/this.occupancy:null}sum(){return this.reduce((e,t)=>e+t,0)}}function Vt(a){let s,e=Math.round(1/(a[0].mean()??-1))+"",t;return{c(){s=C("div"),t=te(e)},l(i){s=q(i,"DIV",{});var n=H(s);t=se(n,e),n.forEach(A)},m(i,n){le(i,s,n),f(s,t)},p(i,[n]){n&1&&e!==(e=Math.round(1/(i[0].mean()??-1))+"")&&ie(t,e)},i:K,o:K,d(i){i&&A(s)}}}function Ht(a,s,e){let t=new It(10);function i(n){t.push(n),e(0,t)}return[t,i]}class Lt extends ae{constructor(s){super(),oe(this,s,Ht,Vt,re,{pushDeltatime:1})}get pushDeltatime(){return this.$$.ctx[1]}}function Nt(a){let s,e,t,i,n,o,h="",l,g,u,$,_={};return i=new Lt({props:_}),a[2](i),u=new Yt({}),{c(){s=C("div"),e=C("div"),t=C("div"),E(i.$$.fragment),n=x(),o=C("canvas"),o.innerHTML=h,l=x(),g=C("div"),E(u.$$.fragment),this.h()},l(c){s=q(c,"DIV",{class:!0});var y=H(s);e=q(y,"DIV",{class:!0});var B=H(e);t=q(B,"DIV",{class:!0});var v=H(t);M(i.$$.fragment,v),v.forEach(A),n=S(B),o=q(B,"CANVAS",{"data-svelte-h":!0}),Ee(o)!=="svelte-111mg3k"&&(o.innerHTML=h),B.forEach(A),l=S(y),g=q(y,"DIV",{class:!0});var d=H(g);M(u.$$.fragment,d),d.forEach(A),y.forEach(A),this.h()},h(){F(t,"class","absolute z-10 select-none text-white"),F(e,"class","relative overflow-auto md:col-span-6 lg:col-span-8"),F(g,"class","md:col-span-6 lg:col-span-4"),F(s,"class","md:grid md:grid-cols-12 md:gap-2")},m(c,y){le(c,s,y),f(s,e),f(e,t),O(i,t,null),f(e,n),f(e,o),a[3](o),f(s,l),f(s,g),O(u,g,null),$=!0},p(c,[y]){const B={};i.$set(B)},i(c){$||(R(i.$$.fragment,c),R(u.$$.fragment,c),$=!0)},o(c){D(i.$$.fragment,c),D(u.$$.fragment,c),$=!1},d(c){c&&A(s),a[2](null),X(i),a[3](null),X(u)}}}function Qt(a,s,e){let t;Ge(a,w,v=>e(11,t=v));let i,n,o,h,l,g;const u=t.numberOfBoids;let $,_,c;pt(()=>{$=800,_=600;try{({camera:n,renderer:o,scene:h}=Mt($,_,i,2))}catch(d){window.alert(`ERROR: Could not start the ThreeJS WebGL Canvas: 
  '${d}' 

Maybe try a different browser or check your settings.`);return}console.log("camera boundaries: ",{top:n.top,bottom:n.bottom,left:n.left,right:n.right}),c=new At(0,0,n.right-n.left,n.top-n.bottom);for(let d=0;d<u;++d){let b=Math.random()*(n.right-n.left)+n.left,k=Math.random()*(n.top-n.bottom)+n.bottom,Y=new T(b,k);c.addBoid(Y,new T(Math.random(),Math.random()))}h.add(...c.boidsSprites),l=new Bt,w.subscribe(d=>{console.log(d),c.updateParams(d)&&(h.clear(),h.add(...c.getSprites()))}),Ot(d=>{d.deltatime>0&&(g.pushDeltatime(d.deltatime),c.update(Math.min(d.deltatime,1/15)))},o,h,n,l)()}),ft(()=>{c&&c.destroy(),h&&h.clear(),l&&l.stop()});function y(v){Qe[v?"unshift":"push"](()=>{g=v,e(1,g)})}function B(v){Qe[v?"unshift":"push"](()=>{i=v,e(0,i)})}return[i,g,y,B]}class jt extends ae{constructor(s){super(),oe(this,s,Qt,Nt,re,{})}}export{jt as component};

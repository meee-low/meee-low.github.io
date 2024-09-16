var C=Object.defineProperty;var X=(o,s,t)=>s in o?C(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t;var r=(o,s,t)=>(X(o,typeof s!="symbol"?s+"":s,t),t);import{s as Y,n as b,o as A,e as F,b as H}from"../chunks/scheduler.C8BV80jB.js";import{S as T,i as D,e as R,c as O,a as Q,d as S,g as V}from"../chunks/index.BA0eRUQJ.js";import{V as d,M as E,a as _,b as I,c as L,S as k,O as z,W as N,C as G}from"../chunks/three.module.DzU_tVEa.js";import{a as B}from"../chunks/utils.B7PvQ2PK.js";function x(o,s){const t=o.x-s.x,e=o.y-s.y;return t*t+e*e}class M{}class m extends M{constructor(t,e,i,n){super();r(this,"centerX");r(this,"centerY");r(this,"width");r(this,"height");this.centerX=t,this.centerY=e,this.width=i,this.height=n}static fromTopLeft(t,e,i,n){return new m(t+i/2,e+n/2,i,n)}leftX(){return this.centerX-this.width/2}rightX(){return this.centerX+this.width/2}topY(){return this.centerY-this.height/2}bottomY(){return this.centerY+this.height/2}debugDirections(){return{left:this.leftX(),right:this.rightX(),top:this.topY(),bottom:this.bottomY()}}contains(t){const e=t.x,i=t.y;return this.leftX()<=e&&this.rightX()>=e&&this.topY()<=i&&this.bottomY()>=i}intersects(t){if(t instanceof m)return!(this.leftX()>t.rightX()||t.leftX()>this.rightX()||this.topY()>t.bottomY()||t.topY()>this.bottomY());if(t instanceof p){if(this.contains(t.center))return!0;const e={x:Math.max(this.leftX(),Math.min(this.rightX(),t.center.x)),y:Math.max(this.topY(),Math.min(this.bottomY(),t.center.y))};return x(t.center,e)<t.radius*t.radius}B(t)}closestBoundaryPointToPoint(t,e){e.x=Math.max(this.leftX(),Math.min(t.x,this.rightX())),e.y=Math.max(this.topY(),Math.min(t.y,this.bottomY()))}sqDistanceToPoint(t){const e={x:0,y:0};this.closestBoundaryPointToPoint(t,e);const i=t.x-e.x,n=t.y-e.y;return i*i+n*n}}class p extends M{constructor(t,e){super();r(this,"center");r(this,"radius");this.center=t,this.radius=e}contains(t){return x(this.center,t)<this.radius*this.radius}intersects(t){if(t instanceof p){const e=this.radius+t.radius,i=e*e;return x(this.center,t.center)<i}if(t instanceof m)return t.intersects(this);B(t)}closestBoundaryPointToPoint(t,e){const i=t.x-this.center.x,n=t.y-this.center.y,a=Math.sqrt(i*i+n*n);a<=1e-4&&(e.x=this.center.x,e.y=this.center.y);const h=this.radius/a;e.x=this.center.x+t.x*h,e.y=this.center.y+t.y*h}sqDistanceToPoint(t){const e=t.x-this.center.x,i=t.y-this.center.y,n=e*e+i*i;return Math.pow(Math.sqrt(n)-this.radius,2)}}class W{}class w extends W{constructor(t){super();r(this,"elements",[]);r(this,"accessFunc");this.accessFunc=t}push(t){this.elements.push(t)}query(t){return this.elements.filter(e=>t.contains(this.accessFunc(e)))}queryAll(){return this.elements}rebalance(){}}const j={maxSpeed:3,minSpeed:2,neighborRange:20,protectedRange:2,obstacleRange:50,cohesionFactor:5e-4,separationFactor:.05,alignmentFactor:.05,turnFactor:.25,speedScale:.8};class ${constructor(s,t,e,i={}){r(this,"tooCloseBBox");r(this,"neighborsBBox");r(this,"position");r(this,"heading");r(this,"futureHeadingOffset");r(this,"params");r(this,"id");this.id=s,this.position=t,this.heading=e,this.futureHeadingOffset=e.clone(),this.params={...j,...i},this.tooCloseBBox=new p(t,this.params.protectedRange),this.neighborsBBox=new p(t,this.params.neighborRange)}move(s){this.heading.copy(this.futureHeadingOffset).clampLength(this.params.minSpeed,this.params.maxSpeed).multiplyScalar(this.params.speedScale),this.position.add(this.heading.clone().multiplyScalar(s*60)),this.tooCloseBBox.center=this.position,this.neighborsBBox.center=this.position}calculateNewHeading(s){this.futureHeadingOffset.copy(this.heading);let t=s.boidsQt.query(this.tooCloseBBox),e=s.boidsQt.query(this.neighborsBBox).filter(c=>!t.includes(c)),i=new d(0,0);t.forEach(c=>{i.add(this.position).sub(c.position)});let n=new d(0,0);e.length>0&&(e.forEach(c=>{n.add(c.heading)}),n.divideScalar(e.length));let a=new d(0,0);e.length>0&&(e.forEach(c=>{a.add(c.position)}),a.divideScalar(e.length));let h=new d;s.obstacles.forEach(c=>{let f=this.position.distanceToSquared(c.position),l=Math.pow(f,c.inverseDistance)*c.attractiveStrength,g=this.position.clone().sub(c.position);h.addScaledVector(g,-l)}),this.futureHeadingOffset.addScaledVector(i,this.params.separationFactor),this.futureHeadingOffset.addScaledVector(n,this.params.alignmentFactor),this.futureHeadingOffset.addScaledVector(a,this.params.cohesionFactor),this.futureHeadingOffset.add(h),this.futureHeadingOffset.clampLength(this.params.minSpeed,this.params.maxSpeed)}getPosition(){return this.position}getVelocity(){return this.heading}updateParams(s){s.neighborRange&&(this.neighborsBBox.radius=s.neighborRange),s.protectedRange&&(this.tooCloseBBox.radius=s.protectedRange),this.params={...this.params,...s}}}class U{constructor(s,t,e,i){r(this,"QT_CAPACITY",3);r(this,"boidsQt");r(this,"boidsSprites",[]);r(this,"worldArea");r(this,"obstacles",[]);r(this,"curId",0);this.worldArea=new m(s,t,e,i),this.boidsQt=new w(n=>n.getPosition()),this.obstacles.push({position:new d(s,t),attractiveStrength:5e-8,inverseDistance:1})}addBoid(s,t){let e=new $(this.curId++,s,t);this.boidsQt.push(e);let i=Z();const n=new E({color:16711680,opacity:.6,transparent:!0});let a=new _(i,n);a.position.x=s.x,a.position.y=s.y,a.rotateZ(t.angle()),this.boidsSprites.push(a)}updateHeadings(){this.boidsQt.queryAll().forEach(s=>{s.calculateNewHeading(this)})}move(s){this.boidsQt.queryAll().forEach(t=>{t.move(s),this.boidsSprites[t.id].position.x=t.getPosition().x,this.boidsSprites[t.id].position.y=t.getPosition().y,this.boidsSprites[t.id].rotation.z=t.getVelocity().angle()}),this.boidsQt.rebalance()}update(s){this.updateHeadings(),this.move(s)}destroy(){this.boidsQt=new w(s=>s.getPosition()),this.boidsSprites=[]}}function Z(){let o=new I;const s=-.8,t=Math.sin(Math.acos(s)),e=1;let i=new d(1,0).multiplyScalar(e),n=new d(s,t).multiplyScalar(e),a=new d(s,-t).multiplyScalar(e);return o.moveTo(i.x,i.y),o.lineTo(n.x,n.y),o.lineTo(a.x,a.y),new L(o)}function J(o,s,t,e=2){let i=new k;const n=o/s,a=s/e;let h=new z(-a*n/2,a*n/2,a/2,-a/2,1,1e3);h.position.z=10;let c=new N({canvas:t});return c.setSize(o,s),{scene:i,camera:h,renderer:c}}function K(o,s,t,e,i){const n=()=>{requestAnimationFrame(n);let a=i.getDelta();o({camera:e,scene:t,renderer:s,deltatime:a}),s.render(t,e)};return n}function tt(o){let s;return{c(){s=R("canvas")},l(t){s=O(t,"CANVAS",{}),Q(s).forEach(S)},m(t,e){V(t,s,e),o[1](s)},p:b,i:b,o:b,d(t){t&&S(s),o[1](null)}}}function et(o,s,t){let e,i,n,a,h,c,f,l;A(()=>{c=1200,f=600,{camera:i,renderer:n,scene:a}=J(c,f,e,2),console.log("camera boundaries: ",{top:i.top,bottom:i.bottom,left:i.left,right:i.right}),l=new U(0,0,i.right-i.left,i.top-i.bottom);for(let u=0;u<100;++u){let v=Math.random()*(i.right-i.left)+i.left,P=Math.random()*(i.top-i.bottom)+i.bottom,q=new d(v,P);l.addBoid(q,new d(Math.random(),Math.random()))}a.add(...l.boidsSprites),h=new G,K(u=>{u.deltatime>0&&(console.log(u.deltatime),l.update(u.deltatime))},n,a,i,h)()}),F(()=>{l&&l.destroy(),a&&a.clear(),h&&h.stop()});function g(y){H[y?"unshift":"push"](()=>{e=y,t(0,e)})}return[e,g]}class rt extends T{constructor(s){super(),D(this,s,et,tt,Y,{})}}export{rt as component};
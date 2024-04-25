import{S as k,P as W,W as G,T as F,a as S,M as E,b as x,c as O,A as T,d as q,D as N,e as V,G as X,f as g,g as D,V as a,C as Y,B as I,L as Z,h as J,R as K,i as Q,j as P}from"./GLTFLoader-b98d9eb5.js";const U="/lrs-live/assets/hogwarts-3a150042.jpg",o=new k,c=new W(75,window.innerWidth/window.innerHeight,.1,1e3),r=new G({canvas:document.querySelector("#bg")});r.setPixelRatio(window.devicePixelRatio);r.setSize(window.innerWidth,window.innerHeight);c.position.setZ(30);r.render(o,c);let u=null,i=null,f,y,m;const _=new F().load(U);o.background=_;const $=new S(window.innerWidth,window.innerHeight),ee=new E({color:0,transparent:!0,opacity:.5}),M=new x($,ee);M.position.z=-30;o.add(M);const A=new O(16777215,100,100);A.position.set(1,10,2);o.add(A);const ne=new T(16777215);o.add(ne);new q(A,1);const j=new N(16777215,5);j.position.copy(c.position);o.add(j);const t=new V(16777215,0);o.add(t);const l=new X;l.load("models/snitch2/scene.gltf",function(e){e.scene.scale.set(.01,.01,.01),f=new g(e.scene);const n=e.animations,s=D.findByName(n,"Alas|Action");f.clipAction(s).play(),u=e.scene,o.add(e.scene)},void 0,function(e){console.error(e)});l.load("models/traveler/scene.gltf",function(e){i=e.scene,i.rotation.y=-1,i.position.z=-2,i.position.x=25,i.position.y=-55,i.scale.set(5,5,5),y=new g(i);const n=e.animations,s=D.findByName(n,"Animation");y.clipAction(s).play(),o.add(i)},void 0,function(e){console.error(e)});const w=[],b=new a,v=new a,L=new a;l.load("models/suitcase/scene.gltf",function(e){e.scene.scale.set(.25,.25,.25),e.scene.position.y=-143,e.scene.position.x=-29,e.scene.rotation.y=.7,w.push(e.scene),e.scene.traverse(function(n){n instanceof x&&(n.userData.type="suitcase")}),b.copy(e.scene.position),o.add(e.scene)},void 0,function(e){console.error(e)});l.load("models/potion/scene.gltf",function(e){e.scene.scale.set(5.5,5.5,5.5),e.scene.position.y=-135,e.scene.position.x=0,e.scene.rotation.y=.7,m=new g(e.scene);const n=e.animations,s=D.findByName(n,"Take 001");m.clipAction(s).play(),w.push(e.scene),o.add(e.scene),e.scene.traverse(function(C){C instanceof x&&(C.userData.type="potion")}),v.copy(e.scene.position),o.add(e.scene)},void 0,function(e){console.error(e)});l.load("models/beens/scene.gltf",function(e){e.scene.scale.set(3,3,3),e.scene.position.y=-136,e.scene.position.x=28,e.scene.position.z=-3,w.push(e.scene),e.scene.traverse(function(n){n instanceof x&&(n.userData.type="beens")}),L.copy(e.scene.position),o.add(e.scene),o.add(e.scene)},void 0,function(e){console.error(e)});const te=[new a(-40,15,0),new a(-25,-5,0),new a(40,0,0),new a(5,-20,0),new a(10,0,0)],z=new Y(te,!0),oe=new I().setFromPoints(z.getPoints(50)),ie=new Z({color:16711680});new J(oe,ie);function B(){const e=document.body.getBoundingClientRect().top;i&&i.position.x==25&&(i.rotation.y+=.01),c.position.y=e*.09}document.body.onscroll=B;B();const h=new K,p=new Q;function se(e){var n=r.domElement.getBoundingClientRect();p.x=(e.clientX-n.left)/(n.width-n.left)*2-1,p.y=-((e.clientY-n.top)/(n.bottom-n.top))*2+1}window.addEventListener("mousemove",se);function R(){h.setFromCamera(p,c);const e=h.intersectObjects(w);if(e.length>0){const n=e[0].object;document.body.style.cursor="pointer",t.angle=Math.PI/5,t.penumbra=.2,t.distance=30,t.decay=0,t.position.x+=15,n.userData.type==="suitcase"?(t.position.copy(b),t.position.y+=20,t.position.z+=10,t.intensity=25,t.target.position.copy(b),o.add(t.target),t.color.setHex(16777215)):n.userData.type==="potion"?(t.position.copy(v),t.position.y+=10,t.position.z+=10,t.intensity=50,t.color.setHex(9951639),t.target.position.copy(v),o.add(t.target)):n.userData.type==="beens"&&(t.position.copy(L),t.position.y+=10,t.position.z+=5,t.position.x-=3,t.intensity=15,t.color.setHex(16777215),t.target.position.copy(L),o.add(t.target))}else t.intensity=0,document.body.style.cursor="auto"}window.addEventListener("click",e=>{var n=r.domElement.getBoundingClientRect();p.x=(e.clientX-n.left)/(n.width-n.left)*2-1,p.y=-((e.clientY-n.top)/(n.bottom-n.top))*2+1,h.setFromCamera(p,c);const s=h.intersectObjects(w);if(s.length>0){const d=s[0].object;d.userData.type==="suitcase"?window.location.href="level1.html":d.userData.type==="potion"?window.location.href="level2.html":d.userData.type==="beens"&&(window.location.href="level3.html")}});window.requestAnimationFrame(R);function ce(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",ce);const ae=new P,re=new P,de=new P;function H(){f&&f.update(ae.getDelta()),y&&y.update(re.getDelta()),m&&m.update(de.getDelta());const n=Date.now()/1500%6/6,s=z.getPointAt(n);u&&(u.position.copy(s),u.lookAt(c.position)),R(),requestAnimationFrame(H),r.render(o,c)}H();
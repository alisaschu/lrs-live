import{S as x,P as k,W as C,A as E,D,T as S,a as L,M as A,b as B,G as q,f as m,g as u,n as N,R as T,i as M,j as R}from"./GLTFLoader-b98d9eb5.js";const P="/lrs-live/assets/forest-5b4ca2ca.jpg",n=new x,c=new k(75,window.innerWidth/window.innerHeight,.1,1e3),s=new C({canvas:document.querySelector("#bg")});s.setPixelRatio(window.devicePixelRatio);s.setSize(window.innerWidth,window.innerHeight);c.position.setZ(30);s.render(n,c);const W=new E(0);n.add(W);const w=new D(16777215,5);w.position.copy(c.position);n.add(w);const _=new S().load(P);n.background=_;const G=new L(window.innerWidth,window.innerHeight),j=new A({color:0,transparent:!0,opacity:.7}),g=new B(G,j);g.position.z=-10;n.add(g);let r,i;const z=new q;z.load("models/dragon/scene.gltf",function(t){t.scene.scale.set(900,900,900),t.scene.rotation.y=-1.2,t.scene.position.y=-5,t.scene.position.x=25,r=new m(t.scene),i=new m(t.scene);const e=t.animations,o=u.findByName(e,"Dargon_anyingxunlong_anim_stand"),b=u.findByName(e,"Dargon_anyingxunlong_anim_death"),v=r.clipAction(o),l=i.clipAction(b);v.play(),l.setLoop(N),l.clampWhenFinished=!0,l.play(),n.add(t.scene)},void 0,function(t){console.error(t)});new T;const p=new M;function H(t){var e=s.domElement.getBoundingClientRect();p.x=(t.clientX-e.left)/(e.width-e.left)*2-1,p.y=-((t.clientY-e.top)/(e.bottom-e.top))*2+1}window.addEventListener("mousemove",H);const f=document.getElementById("drop-target"),F=document.querySelectorAll(".letters");f.addEventListener("dragover",function(t){t.preventDefault(),t.dataTransfer.dropEffect="move"});f.addEventListener("drop",function(t){if(t.preventDefault(),this.querySelector("p").textContent!=" "){const o=this.querySelector("p").textContent;V(o)}const e=t.dataTransfer.getData("text/plain");this.querySelector("p").textContent=e,O(e)});var a=!1;function O(t){var e;switch(t){case"e":e=document.getElementsByClassName("e-letter"),e[0].style.display="none",a=!0;break;case"a":e=document.getElementsByClassName("a-letter"),e[0].style.display="none",a=!1;break;case"i":e=document.getElementsByClassName("i-letter"),e[0].style.display="none",a=!1;break;case"ou":e=document.getElementsByClassName("ou-letter"),e[0].style.display="none",a=!1;break}}function V(t){var e;switch(t){case"e":e=document.getElementsByClassName("e-letter"),e[0].style.display="block";break;case"a":e=document.getElementsByClassName("a-letter"),e[0].style.display="block";break;case"i":e=document.getElementsByClassName("i-letter"),e[0].style.display="block";break;case"ou":e=document.getElementsByClassName("ou-letter"),e[0].style.display="block";break}}F.forEach(t=>{t.addEventListener("dragstart",function(e){e.dataTransfer.setData("text/plain",this.textContent)})});var d=!1;function I(){const t=document.querySelector(".info-answer");var e=t.querySelector("strong");e||(e=document.createElement("strong"),t.appendChild(e)),a?(e.textContent="Richtige Antwort",d=!0,J()):e.textContent="Versuchs nochmal"}function J(){const t=document.querySelector(".lev2");var e=document.createElement("strong");e.innerHTML="Super gemacht! Du hast den Drachen mit einem Schlafzauber belegt. <br>Jetzt aber schnell weg, bevor er wieder aufwacht!",t.appendChild(e);var o=document.querySelector(".lev1");o.style.display="inline-block"}document.querySelector(".check-answer").addEventListener("click",I);const y=new R;function h(){r&&!d&&r.update(y.getDelta()),i&&a&&d&&i.update(y.getDelta()),requestAnimationFrame(h),s.render(n,c)}h();

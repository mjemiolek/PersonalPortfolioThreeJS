import{S as e,P as s,W as n,a as t,A as o,G as i,T as a,M as d,b as c,c as p,B as l,d as r,D as w,e as g}from"./vendor.6031a7ef.js";const m=new e,f=new s(70,2,.1,1e3),b=new n({canvas:document.querySelector("#bg")});b.render(m,f);const u=new t(16777215);u.position.set(5,5,5);const x=new o(16777215);m.add(u,x);const y=new i;var h,S,z,k;y.load("assets/bmwE34gltf/scene.gltf",(function(e){e.scene,m.add(e.scene)})),y.load("assets/target/scene.gltf",(function(e){(h=e.scene).position.setX(-40),h.position.setZ(22.5),h.position.setY(8),m.add(e.scene)})),y.load("assets/F18/scene.gltf.glb",(function(e){(S=e.scene).position.setX(7),S.position.setZ(35),S.position.setY(5),m.add(e.scene)})),y.load("assets/bench/scene.gltf.glb",(function(e){(z=e.scene).position.setX(-3),z.position.setZ(9),z.position.setY(1),z.scale.set(.01,.01,.01),m.add(e.scene)})),y.load("assets/Dumbles/scene.gltf.glb",(function(e){(k=e.scene).position.setX(-3.5),k.position.setZ(10),k.position.setY(3),k.scale.set(.01,.01,.01),m.add(e.scene)}));const v=(new a).load("assets/img/mars.png"),M=(new a).load("assets/img/mars_normal.png"),X=new d(new c(3,32,32),new p({map:v,normalMap:M}));m.add(X),X.position.x=24,X.position.z=12,X.position.y=-5;var Y=new d(new l(950,950,950),new g([new r({map:(new a).load("assets/Skybox/back.png"),side:w}),new r({map:(new a).load("assets/Skybox/front.png"),side:w}),new r({map:(new a).load("assets/Skybox/top.png"),side:w}),new r({map:(new a).load("assets/Skybox/bottom.png"),side:w}),new r({map:(new a).load("assets/Skybox/right.png"),side:w}),new r({map:(new a).load("assets/Skybox/left.png"),side:w})]));function Z(){const e=document.body.getBoundingClientRect().top;e>=-400&&e<=0?(f.position.x=-.005*e,f.position.z=-.002*e-.8):e>=-800&&e<-400?(f.position.x=2,f.position.z=-.007*(e+400)):e>=-1200&&e<-800?(f.position.x=.003*(e+800)+2,f.position.z=-.006*(e+800)+2.8):e>=-2e3&&e<-1200?(f.position.x=.8,f.position.z=-.003*(e+1200)+5.2):(f.position.x=.8,f.position.z=7.6),f.rotation.z=2e-4*e,f.rotation.y=.002*e+180*Math.PI/180,f.position.y=1.1}m.add(Y),document.body.onscroll=Z,Z(),function e(){if(requestAnimationFrame(e),X.rotation.y+=.005,function(e){const s=e.domElement,n=s.clientWidth,t=s.clientHeight,o=s.width!==n||s.height!==t;return o&&e.setSize(n,t,!1),o}(b)){const e=b.domElement;f.aspect=e.clientWidth/e.clientHeight,f.updateProjectionMatrix()}b.render(m,f)}();
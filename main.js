import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Setup

const scene = new THREE.Scene();

const fov = 70;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//const viewSize = 900;
//const aspectRatio = window.innerWidth / window.innerHeight;
//const camera = new THREE.OrthographicCamera(-aspectRatio * viewSize / 2, aspectRatio * viewSize / 2, viewSize / 2, -viewSize / 2, -1000, 1000);

const canvas = document.querySelector('#bg');
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.render(scene, camera);

//Responsivness
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//BMW

const loader = new GLTFLoader();

var bmwobj;
loader.load("assets/bmwE34gltf/scene.gltf", function (gltf) {
  bmwobj = gltf.scene;
  scene.add(gltf.scene);
});

//target

var targetobj;
loader.load("assets/target/scene.gltf", function (gltf) {
  targetobj = gltf.scene;
  targetobj.position.setX(-40);
  targetobj.position.setZ(22.5);
  targetobj.position.setY(8);

  scene.add(gltf.scene);
});

// F18

var f18obj;
loader.load("assets/F18/scene.gltf.glb", function (gltf) {
  f18obj = gltf.scene;
  f18obj.position.setX(7);
  f18obj.position.setZ(35);
  f18obj.position.setY(5);
  scene.add(gltf.scene);
});

//bench

var benchobj;
loader.load("assets/bench/scene.gltf.glb", function (gltf) {
  benchobj = gltf.scene;
  benchobj.position.setX(-3);
  benchobj.position.setZ(9);
  benchobj.position.setY(1);
  benchobj.scale.set(0.01, 0.01, 0.01);

  scene.add(gltf.scene);
});

//dumbels

var dumblesobj;
loader.load("assets/Dumbles/scene.gltf.glb", function (gltf) {
  dumblesobj = gltf.scene;
  dumblesobj.position.setX(-3.5);
  dumblesobj.position.setZ(10);
  dumblesobj.position.setY(3);
  dumblesobj.scale.set(0.01, 0.01, 0.01);

  scene.add(gltf.scene);
});


//Planet

const planetTexture = new THREE.TextureLoader().load("assets/img/mars.png");
const normalTexture = new THREE.TextureLoader().load("assets/img/mars_normal.png");


const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: planetTexture,
    normalMap: normalTexture
  })
)

scene.add(earth);

earth.position.x = 24;
earth.position.z = 12;
earth.position.y = -5;


//Skybox

var geometry = new THREE.BoxGeometry(950, 950, 950);
var cubeMaterials =
  [
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("assets/Skybox/back.png"), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("assets/Skybox/front.png"), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("assets/Skybox/top.png"), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("assets/Skybox/bottom.png"), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("assets/Skybox/right.png"), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("assets/Skybox/left.png"), side: THREE.DoubleSide })
  ];

var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
var cube = new THREE.Mesh(geometry, cubeMaterial);
scene.add(cube);

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  //camera movement
  if (t >= -400 && t <= 0) {
    camera.position.x = t * -0.005;
    camera.position.z = t * -0.002 - 0.8;
  } else if (t >= -800 && t < -400) {
    camera.position.x = 2.0;
    camera.position.z = (t + 400) * -0.007;
  } else if (t >= -1200 && t < -800) {
    camera.position.x = (t + 800) * 0.003 + 2.0;
    camera.position.z = (t + 800) * -0.006 + 2.8;
  } else if (t >= -2000 && t < -1200) {
    camera.position.x = 0.8;
    camera.position.z = (t + 1200) * -0.003 + 5.2;
  } else {
    camera.position.x = 0.8;
    camera.position.z = 7.6;
  }

  camera.rotation.z = t * 0.0002;
  camera.rotation.y = t * 0.002 + 180 * Math.PI / 180;
  camera.position.y = 1.1;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  earth.rotation.y += 0.005;

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera);
}

animate();

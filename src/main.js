import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, 12);
const material = new THREE.MeshStandardMaterial({
  map: loader.load("textures/earth-daymap.jpg"),
});
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

const light = new THREE.HemisphereLight(0xffffff, 0x000000);
scene.add(light);

function animate() {
  earth.rotation.x += 0.001;
  earth.rotation.y += 0.001;

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { earth, illumination, clouds } from "./earth";
import { stars } from "./stars";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

const earthGroup = new THREE.Group();
earthGroup.add(earth, illumination, clouds);
earthGroup.rotation.z = -23.4 * (Math.PI / 180);
scene.add(earthGroup);

const light = new THREE.DirectionalLight(0xffffff, 2.0);
light.position.set(-2, 0.5, 1.5);
scene.add(light);

scene.add(stars);

function animate() {
  earth.rotation.y += 0.001;
  illumination.rotation.y += 0.001;
  clouds.rotation.y += 0.0015;
  stars.rotation.y -= 0.001;

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", handleWindowResize, false);

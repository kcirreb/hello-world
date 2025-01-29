import * as THREE from "three";

const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, 12);

const earth = new THREE.Mesh(
  geometry,
  new THREE.MeshStandardMaterial({
    map: loader.load("textures/earth-daymap.jpg"),
  })
);

const illumination = new THREE.Mesh(
  geometry,
  new THREE.MeshStandardMaterial({
    map: loader.load("textures/earth-nightmap.jpg"),
    blending: THREE.AdditiveBlending,
  })
);

const clouds = new THREE.Mesh(
  geometry,
  new THREE.MeshStandardMaterial({
    map: loader.load("textures/earth-clouds.jpg"),
    blending: THREE.AdditiveBlending,
  })
);
clouds.scale.setScalar(1.005);

export { earth, illumination, clouds };

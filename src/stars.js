import * as THREE from "three";

const createVertex = () => {
  const radius = Math.random() * 25 + 25;
  const theta = Math.random() * 2 * Math.PI;
  const phi = Math.acos(2 * Math.random() - 1);

  return {
    x: radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.sin(phi) * Math.sin(theta),
    z: radius * Math.cos(phi),
  };
};

const color = new THREE.Color().setHSL(0.6, 0.2, Math.random());

const vertices = [];
const colors = [];
for (let i = 0; i < 1000; i++) {
  const { x, y, z } = createVertex();
  vertices.push(x, y, z);
  colors.push(color.r, color.g, color.b);
}

const loader = new THREE.TextureLoader();

const geometry = new THREE.BufferGeometry();
geometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(vertices, 3)
);
geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
  size: 0.2,
  vertexColors: true,
  map: loader.load("textures/star.png"),
});

const stars = new THREE.Points(geometry, material);

export { stars };

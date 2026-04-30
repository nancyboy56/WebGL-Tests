import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// this is for displaying errors on the webpage
window.onerror = function(message, source, lineno, colno, error) {
  const display = document.getElementById('error-display');
  display.style.display = 'block';
  display.innerHTML = `<strong>Error:</strong> ${message} <br> 
                      <strong>File:</strong> ${source} <br> 
                      <strong>Line:</strong> ${lineno}`;
  return false; // Prevents the error from showing in the console
};

// in public/static folder we put textures, audio, 3d models that are made outside of website
// install node.js
//instakk three.js and vite
// but can important from the web i think thats easier
// have to import the gltfloader and orbitcontrols, not automatic


main();

// feel strange not writing my code in a fuciton
// so ill put it in main
function main() {
  const scene = new THREE.Scene();

  // should i keep them all as const?
  // i feel like fov couldn change but ill leave for now
  const fov = 75;

  //ascept ratio
  const aspect = window.innerWidth / window.innerHeight;

  // other values can get you better performace
  const near = 0.1;
  const far = 1000;

  //there are differnt kinda of cameras
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  const renderer = new THREE.WebGLRenderer();

  // if you want to render at a lower resolution but keep the same siz in the browser
  //renderer.setSize(window.innerWidth/2, window.innerHeight/2, false)
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

}

function add_cube(){
  const size = 1;
  const box = new THREE.BoxGeometry(size,size,size);
  const box_material = new THREE.Mes
}
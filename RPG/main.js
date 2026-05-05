import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


//idk why my old code was not working

// this is for displaying errors on the webpage
window.onerror = function (message, source, lineno, colno, error) {
    const display = document.getElementById('error-display');
    display.style.display = 'block';
    display.innerHTML = `<strong>Error:</strong> ${message} <br> 
                      <strong>File:</strong> ${source} <br> 
                      <strong>Line:</strong> ${lineno}`;
    return false; // Prevents the error from showing in the console
};

function main() {

    //render
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //scene
    const scene = new THREE.Scene();

    //camera
    const fov = 75;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 5;

    //resizing window
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })


    //camera controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    //stats
    // const stats = Stats();
    // document.body.appendChild(stats.dom);

    //lights

    const sun = new THREE.DirectionalLight();
    sun.position.set(1, 2, 3);
    scene.add(sun);

    const ambient = new THREE.AmbientLight();
    ambient.intensity = 0.5;
    scene.add(ambient);

    //cube
    const c = add_cube();
    scene.add(c);


    function animate(time) {
        controls.update();
        c.rotation.x = time / 2000;
        c.rotation.y = time / 1000;
        renderer.render(scene, camera);
        // stats.update();
    }

    renderer.setAnimationLoop(animate);

}

function add_cube() {
    const size = 1;
    const box = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(box, material);
    return cube;

}

main();


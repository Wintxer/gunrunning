import * as THREE from "../../node_modules/three/build/three.module.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { FBXLoader } from "../../node_modules/three/examples/jsm/loaders/FBXLoader.js";
// scene
const scene = new THREE.Scene();

// camera
/* const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(50, aspect, 1, 5000);
camera.position.set(0, 0, 8); */
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(100, aspect, 1, 5000);
camera.position.set(0, 10, 0);
// ...

// renderer
const renderer = new THREE.WebGLRenderer({
  alpha: true
});
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth / 2, window.innerHeight / 1.5);
document.querySelector(".airsoftend").appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
//controls.enableZoom = false;
controls.enablePan = true;

// Light
/* const light = new THREE.DirectionalLight(0xffffff, 0.7);
light.position.set(5, 5, 5)
scene.add(light);

const ambient = new THREE.AmbientLight(0x505050);
scene.add(ambient); */
const light1 = new THREE.DirectionalLight(0xFFFFFF, 0.3);
light1.position.set(10, 5, 0);
scene.add(light1);
const light2 = new THREE.DirectionalLight(0xFFFFFF, 0.3);
light2.position.set(10, -5,0);
const light3 = new THREE.DirectionalLight(0xFFFFFF, 0.3);
light3.position.set(-10, 5, 0);
scene.add(light3);
const light4 = new THREE.DirectionalLight(0xFFFFFF, 0.3);
light4.position.set(-10, -5, 0);
scene.add(light4);
scene.add(light2);
const ambientlight = new THREE.AmbientLight(0xffffFF, 1);
scene.add(ambientlight);


/* // Shapes
const geometrycube = new THREE.BoxBufferGeometry();
const materialcube = new THREE.MeshPhongMaterial( { color: 0x00a1ff } );
const geometrytorus = new THREE.TorusGeometry(1, 0.3, 16, 100);
const materialtorus = new THREE.MeshPhongMaterial( { color: 0xa1ff00 } );
const geometrycone = new THREE.ConeGeometry(0.7,1,4);
const materialcone = new THREE.MeshLambertMaterial( {color: 0xff00a1} );
const nbCube = 10;

for(let j=0; j<nbCube; j++){
  const cube = new THREE.Mesh( geometrycube, materialcube );
  cube.position.set(Math.random()*10 - 5, Math.random()*10 - 5, 0);
  cube.rotation.set(Math.random(), Math.random(), 0);
  
  const torus = new THREE.Mesh( geometrytorus, materialtorus );
  torus.position.set(Math.random()*10 - 5, Math.random()*10 - 5, 0);
  torus.rotation.set(Math.random(), Math.random(), 0);

  
  const cone = new THREE.Mesh( geometrycone, materialcone );
  cone.position.set(Math.random()*10 - 5, Math.random()*10 - 5, 0);
  cone.rotation.set(Math.random(), Math.random(), 0);
  scene.add( torus );
  scene.add(cube);
  scene.add( cone ); 
}*/



// instantiate a loader
const loader = new FBXLoader();
let mesh = []
// load a resource
loader.load(
  // resource URL
  '../assets/models/fbx/gunSoftTexture.fbx',
  // called when resource is loaded
  function (object) {
    scene.add(object);

    var box = new THREE.Box3().setFromObject(object);
    box.center(object.position); // this re-sets the mesh position
    object.position.multiplyScalar(-1);
    /*     var pivot = new THREE.Group();
        scene.add( pivot );
        pivot.add( object ); */
    mesh.push(object);
  },
  // called when loading is in progresses
  function (xhr) {

    console.log((xhr.loaded / xhr.total * 100) + '% loaded');

  },
  // called when loading has errors
  function (error) {

    console.log('An error happened');

  }
);


// const animate = function () {
//     requestAnimationFrame(animate);
//     for (let i = 0; i < (scene.children.length); i++) {
//         scene.children[i].rotation.x += 0.002;
//         scene.children[i].rotation.y += 0.002;
//         scene.children[i].rotation.z += 0.002;
//     }
//     renderer.render(scene, camera);
// };

// animate();

/* const domEvents = new THREEx.DomEvents(camera, renderer.domElement)

domEvents.addEventListener(mesh[0], 'click', event => {
  console.log("clicked")
}) */


const render = function () {
  //raycaster.setFromCamera( mouse, camera );
  // calculate objects intersecting the picking ray
  //const intersects = raycaster.intersectObjects( scene.children );
  //for ( let i = 0; i < intersects.length; i ++ ) {
  //intersects[i].object.material.color.set( 0xff0000 );
  //}
  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  controls.update;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}


render();
let THREE = require('three');
let Stats = require('stats.js');
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
let parabola = require('../lib/parabola.js');
let dat = require('dat.gui');

let step = 0;
let kelven = 10000;
let stats_fps = new Stats()
stats_fps.showPanel( 0 );

let _add = scene.add;

scene.add = (subItem, name) =>{
  _add.call(scene, subItem);
  if(!scene.subDict) {
    scene.subDict = {}
  } 
  name && (scene.subDict[name] = subItem);
}

let parabolaCompute = parabola(50, 45, 60);


addItem(scene);
setLight(scene, kelven);
adjustCamera(camera);
setRenderer(renderer);
animate();


/**
 * 
 * @param {*} scene 
 * @param {*} kelven 
 */
function setLight(scene, kelven) {
  let { colorTemperature2rgb } = require('../lib/color-temperature.js');
  let spotLightColor = colorTemperature2rgb(kelven);
  let spotLight = new THREE.SpotLight(transRGBToHex(spotLightColor.red, spotLightColor.blue, spotLightColor.green));
  spotLight.position.set(-40, 60, -10);
  scene.add(spotLight, 'spotLight');

  function transRGBToHex(r, g, b) {
    r = r < 10 ? '0' + r.toString(16) : r.toString(16);
    g = g < 10 ? '0' + g.toString(16) : g.toString(16);
    b = b < 10 ? '0' + b.toString(16) : b.toString(16);

    return '0x' + r + g + b;
  }
}

function setRenderer(renderer) {
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement );
  document.body.appendChild( stats_fps.dom );
}

function adjustCamera(camera) {
  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 30;
  camera.lookAt(scene.position);
}

function addItem(scene) {
  let axes = new THREE.AxisHelper(20);
  scene.add(axes, 'axes');

  // create the ground plane
  let planeGeometry = new THREE.PlaneGeometry(60, 20);
  let planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
  let plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;

  // add the plane to the scene
  scene.add(plane, 'plane');

  // create a cube
  let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  let cubeMaterial = new THREE.MeshLambertMaterial({color: 0x5e3d50});
  let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = true;

  // position the cube
  cube.position.x = -4;
  cube.position.y = 3;
  cube.position.z = 0;

  // add the cube to the scene
  scene.add(cube, 'cube');

  let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  let sphereMaterial = new THREE.MeshLambertMaterial({color: 0x268785});
  let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  // position the sphere
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  sphere.castShadow = true;


  scene.add(sphere, 'sphere');
}

function animate() {
  stats_fps.begin();
  let sphere = scene.subDict['sphere'];
  let spotLight = scene.subDict['spotLight'];
  camera.lookAt(scene.position);

  step += 0.04;
  sphere.position.x = 20 + ( 10 * (Math.cos(step)));
  sphere.position.y = 2 + ( 10 * Math.abs(Math.sin(step)));
  // let [offsetx, offsetY] = parabolaCompute();
  // if(offsetY > 0) {  
  //   sphere.position.x = offsetx;
  //   sphere.position.y = offsetY;
  // }

  // console.log(offsetx, offsetY)
	// monitored code goes here
  stats_fps.end();

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}



// if (WEBGL.isWebGLAvailable()) {
//   // Initiate function or other initializations here
//   animate();
// } else {
//   let warning = WEBGL.getWebGLErrorMessage();
//   document.getElementById('container').appendChild(warning);
// }
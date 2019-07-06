import {WebGLRenderer} from 'three'
import OrbitControls from 'threejs-orbit-controls'
import scene from '../scene/SceneCreate'
import camera from '../camera/index'

let renderer = new WebGLRenderer();
let height = window.innerHeight;
let width = window.innerWidth;

renderer.setSize(width,height);
renderer.setClearColor(0xb9d3ff, 1);
document.body.appendChild(renderer.domElement);
function render() {
  renderer.render(scene,camera)
}
let controls= new OrbitControls(camera,renderer.domElement);
controls.addEventListener('change',render);

export default render
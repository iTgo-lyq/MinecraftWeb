import {PerspectiveCamera} from 'three'

let width=window.innerWidth;
let height=window.innerHeight;
let k=width/height;

let camera= new PerspectiveCamera(90,k,1,2000);

camera.position.set(200,300,500);
camera.lookAt({x:0,y:0,z:0});

export default camera
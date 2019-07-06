import {Scene,CubeTextureLoader} from 'three'
import render from '../render/index'

    let scene = new Scene();
    let loader = new CubeTextureLoader();
    
    loader.setPath('./SkyboxImages/')
    let cubeTexture = loader.load([
      'tidepool_posx.jpg','tidepool_negx.jpg',
      'tidepool_posy.jpg','tidepool_negy.jpg',
      'tidepool_posz.jpg','tidepool_negz.jpg',
    ],()=>{
      render();
    })
    console.log(scene)
    scene.background = cubeTexture;

export default scene
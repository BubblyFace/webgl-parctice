/** 
 * @author: shwbubbly 
 * @since: 2019-08-05 09:26:18  
 */

const THREE = require('three')

function addLights(scene, type, options) {
  let light;

  switch (type) {
    case 'ambient':
      // 包围光，感觉可以用来制造色温效果
      light = new THREE.AmbientLight(options);
      break;
    case 'point':
      light = new THREE.PointLight(options);
      break
    case 'spot':
      light = new THREE.SpotLight(options);
      break
    default:
      break;
  }

  scene.add(light)
}





module.exports = addLights 
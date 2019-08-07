import getWebGlContext from '../utils/get-webgL-context';
import createCanvas from '../utils/create-canvas';
import cleanCanvasWithBg from '../utils/clean-canvas-with-background-color'
import fHader from '../public/GLSL/FSHADER_SOURCE/f_index.vert';
import vHader from '../public/GLSL/VSHADER_SOURCE/v_index.vert';

let gl = getWebGlContext(createCanvas('canvas-gl'));
console.log(gl);

console.log(fHader);
console.log(vHader);


cleanCanvasWithBg(gl, [0, 0, 0, 1]);



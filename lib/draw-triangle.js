import getWebGlContext from '../utils/get-webgL-context';
import createCanvas from '../utils/create-canvas';
import cleanCanvasWithBg from '../utils/clean-canvas-with-background-color'
import fshader from '../public/GLSL/FSHADER_SOURCE/f_index.vert';
import vshader from '../public/GLSL/VSHADER_SOURCE/v_index.vert';
import initShaders from '../utils/init-shaders';
import initVertexBuffers from '../utils/init-vertexBuffers';
import initVextexColor from '../utils/init-vextex-color';

main()

function main() {
  let gl = getWebGlContext(createCanvas('canvas-gl'));
  initShaders(gl, vshader, fshader);
  initVextexColor(gl);
  initVertexBuffers(gl, 3, new Float32Array([
    0.0, 0.5,   -0.5, -0.5,   0.5, -0.5
  ]));
  cleanCanvasWithBg(gl, [1.0, 0.0, 0.0, 1.0]);
  gl.drawArrays(gl.LINE_LOOP, 0, 3);
}

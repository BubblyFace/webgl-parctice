import cleanCanvasWithBg from './clean-canvas-with-background-color'
import fshader from '../public/GLSL/FSHADER_SOURCE/f_index.vert';
import vshader from '../public/GLSL/VSHADER_SOURCE/v_index.vert';
import initShaders from './init-shaders';
import { setVertexBuffers } from './vertex-buffer-manager';
import initVextexColor from './init-vextex-color';

/**
 * 
 * @param {*} gl 
 * @param {*} type 
 * @param {Float32Array} data Float32Array, data
 * @param {Array} color 
 */
export default function draw(gl, type, data, color,shouldReFrash, background) {
  initShaders(gl, vshader, fshader);
  shouldReFrash && cleanCanvasWithBg(gl, background);

  let length = data && data.length / 2;

  if(!length) {
    console.error(`Error input data`)
  }
  
  setVertexBuffers(gl, length, data);
  initVextexColor(gl, color);
  gl.drawArrays(gl[type], 0, length);
}


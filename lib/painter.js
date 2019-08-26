import cleanCanvasWithBg from '../utils/clean-canvas-with-background-color';
import initVextexColor from '../utils/init-vextex-color';
import { setVertexBuffers, setTextureBuffers } from '../utils/vertex-buffer-manager';
import initShaders from '../utils/init-shaders';
import { default as defaultFshader } from '../public/GLSL/FSHADER_SOURCE/f_index.vert';
import { default as defaultVshader }from '../public/GLSL/VSHADER_SOURCE/v_index.vert';


class Painter {
  constructor(gl, vshader, fshader) {

    this._gl = gl;
    this._offsetX = 0;
    this._offsetY = 0;
    this._offsetZ = 0;
    this._rotateAngle = 0;
    this._vshader = vshader || defaultVshader;
    this._fshader = fshader || defaultFshader

    this.clean([0.0, 0.0, 0.0, 1.0])
    initShaders(gl, this._vshader, this._fshader);
  }

  clean(background) {
    cleanCanvasWithBg(this._gl, background)
  }

  draw(input, type) {
    let data, length;
    if(input) [data, length] = this._handleInput(input, type);

    data = data || this._data;
    length = length || this._length;
    
    if(!data) {
      console.error(`Error Input`);
      return
    }

    this._data = data;
    this._length = length;
    this._type = type || this._type;
    
    // debugger
    setVertexBuffers(this._gl, length, data, this._matrix);
    // initVextexColor(this._gl, [1.0, 0.0, 0.0, 1]);
    this._gl.drawArrays(this._gl[this._type], 0, length);
  }


  /**
   * 
   * @param {*} source  
   * @param {*} coord 
   */
  addTexture(source, coord) {
    let coordBufferData = new Float32Array(coord);
    setTextureBuffers(this._gl, coordBufferData);
    this.drawArrays(this._gl.TRIANGLE_STRIP, 0, 4);
  }

  /**
   * @desc 旋转
   */
  rotate(angle) {
    angle = angle || 0;
    let radian = 2 * Math.PI / 360 * angle;
    let sin = Math.sin(radian);
    let cos = Math.cos(radian);

    this._matrix = new Float32Array([
      cos,  sin, 0.0, 0.0,
      -sin, cos, 0.0, 0.0,
      0.0,  0.0, 1.0, 0.0,
      0.0,  0.0, 0.0, 1.0
    ]);

    this.draw();
  } 

  /**
   * @desc 位移
   * @todo has problem
   */  
  displacement(offsetX, offsetY, offsetZ) {
    offsetX = offsetX || 0.0;
    offsetY = offsetY || 0.0;
    offsetZ = offsetZ || 0.0;
    this._matrix = new Float32Array([
      1.0,  0.0, 0.0, 0.0,
      0.0,  1.0, 0.0, 0.0,
      0.0,  0.0, 1.0, 0.0,
      offsetX,  offsetY, offsetZ, 1.0
    ]);
    this.draw();
  }


  /**
   * @desc 变形
   */ 
  transform(x, y, z) { 
    x = x || 1.0;
    y = y || 1.0;
    z = z || 1.0;
    this._matrix = new Float32Array([
      x,   0.0, 0.0, 0.0,
      0.0, y,   0.0, 0.0,
      0.0, 0.0, z,   0.0,
      0.0, 0.0, 0.0, 1.0
    ]);
    this.draw();
  }

  /**
   * @todo
   * @desc 输入处理 处理定点和色彩数据
   */ 
  _handleInput(input) {
    let length = input.length,
        data = [];
    for(  let i = 0; i < length; i ++ ) {
      data = data.concat(...input[i].data)
      let color = input[i].color || [1.0, 1.0, 1.0, 1.0];
      data = data.concat(...color);
    }
    
    data = new Float32Array(data);
    return [data, length]
  }
}

export default Painter
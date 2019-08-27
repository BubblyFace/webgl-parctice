import getWebGlContext from '../utils/get-webgL-context';
import createCanvas from '../utils/create-canvas';
import resize from '../utils/resize';
import Painter from '../lib/painter';

import fShader from '../public/GLSL/FSHADER_SOURCE/f_texture.vert'
import vShader from '../public/GLSL/VSHADER_SOURCE/v_texture.vert'


main()

function main() {
  let canvas = createCanvas('canvas-gl');
  let gl = getWebGlContext(canvas);

  resize(gl);
  gl.viewport(0, 0, canvas.width, canvas.height);

  let painter = new Painter(gl, vShader, fShader);

  // painter.draw([{
  //  data: [-0.1, 0.1, 10.0],
  //  color: [1.0, 0.0, 0.0]
  // },
  // {
  //   data: [0.1, 0.1, 20.0],
  //   color: [0.0, 0.0, 1.0]
  //  },
  //  {
  //   data: [-0.1, -0.1, 40.0],
  //   color: [1.0, 0.0, 1.0]
  //  },
  //  {
  //   data: [0.1, -0.2, 30.0],
  //   color: [1.0, 1.0, 0.0]
  //  } 
  // ], 'TRIANGLE_STRIP');

  painter.addTexture(
    './public/images/1566475180348-image.png',
    [ // 实际区域坐标
      -1.0, 1.0, -0.5, 0.5, 
      1.0, 1.0, 0.5, 0.5, 
      1.0, -1.0, 0.5, -0.5,
      -1.0, -1.0,-0.5, -0.5 
    ]
  );
}


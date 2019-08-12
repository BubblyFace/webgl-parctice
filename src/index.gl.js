import getWebGlContext from '../utils/get-webgL-context';
import createCanvas from '../utils/create-canvas';
import cleanCanvasWithBg from '../utils/clean-canvas-with-background-color'
import fshader from '../public/GLSL/FSHADER_SOURCE/f_index.vert';
import vshader from '../public/GLSL/VSHADER_SOURCE/v_index.vert';
import initShaders from '../utils/init-shaders';
import { setVertexBuffers } from '../utils/vertex-buffer-manager';
import initVextexColor from '../utils/init-vextex-color';
import draw from '../utils/draw'

main()

function main() {
  let gl = getWebGlContext(createCanvas('canvas-gl'));

  draw(gl, 'TRIANGLE_FAN', 
    new Float32Array([-0.1, 0.1,  0.1, 0.1,   0.1, -0.1,  -0.1, -0.1]),
    [1.0, 0.0, 0.0, 1],
    true,
    [0.0, 0.0, 0.0, 1.0]
  );

  draw(gl, 'LINE_LOOP', 
    new Float32Array([-0.2, 0.2,  0.2, 0.2,   0.2, -0.2,  -0.2, -0.2]),
    [1.0, 1.0, 1.0, 1]
  );
}


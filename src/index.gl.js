import getWebGlContext from '../utils/get-webgL-context';
import createCanvas from '../utils/create-canvas';
import resize from '../utils/resize';
import draw from '../utils/draw';

main()

function main() {
  let canvas = createCanvas('canvas-gl');
  let gl = getWebGlContext(canvas);

  resize(gl);
  gl.viewport(0, 0, canvas.width, canvas.height);


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
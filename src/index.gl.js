import getWebGlContext from '../utils/get-webgL-context';
import createCanvas from '../utils/create-canvas';
import resize from '../utils/resize';
import Painter from '../lib/painter';

main()

function main() {
  let canvas = createCanvas('canvas-gl');
  let gl = getWebGlContext(canvas);

  resize(gl);
  gl.viewport(0, 0, canvas.width, canvas.height);

  let painter = new Painter(gl);

  painter.draw([[-0.1, 0.1, 10.0],  [0.1, 0.1, 20.0],   [0.1, -0.2, 30.0],  [-0.1, -0.1, 40.0]], 'POINTS');
  // transform(-1.)
  // painter.displacement(0.1);
  // painter.transform(0.0, 2.0);
  // let angle = 1;
  // setInterval(() => {
  //   painter.clean([0.0, 0.0, 0.0, 1.0]);
  //   painter.rotate(angle);
  //   angle += 1;
  // }, 50)
}


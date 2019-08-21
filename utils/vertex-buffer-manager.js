/** 
 * @author: shwbubbly 
 * @since: 2019-08-08 10:14:56 
 * @desc: 创建定点数据 
 */

export default function initVertexBuffers(gl, n, data) {
  if (!n || !(data instanceof Float32Array)) {
    return null
  }

  // create
  let vertexBuffer = gl.createBuffer();
  if(!vertexBuffer) {
    console.log('Failed to create vertexBuffer')
    return null
  }

  gl._vertexBuffer = vertexBuffer;

  setVertexBuffers(gl, n, data)
}


export function setVertexBuffers(gl, n, data, matrix) {
  // data = new Float32Array([-0.1, 0.1, 10.0,  0.1, 0.1, 20.0,   0.1, -0.2, 30.0,  -0.1, -0.1, 40.0])

  if(gl && !gl._vertexBuffer) {
    initVertexBuffers(gl, n, data)
  }

  const FSIZE = data.BYTES_PER_ELEMENT;

  let vertexBuffer = gl._vertexBuffer;

  matrix = matrix || new Float32Array([
    1.0,  0.0, 0.0, 0.0,
    0.0,  1.0, 0.0, 0.0,
    0.0,  0.0, 1.0, 0.0,
    0.0,  0.0, 0.0, 1.0
  ]);
  
  // bind
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  
  // write
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  let u_formMatrix = gl.getUniformLocation(gl.program, 'u_formMatrix');

  gl.uniformMatrix4fv(u_formMatrix, false, matrix);
  
  let a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  let a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');

  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }

  // set
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 3, 0);
  // link
  gl.enableVertexAttribArray(a_Position);
  // set size 
  gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, FSIZE * 3, FSIZE * 2);
  // link size
  gl.enableVertexAttribArray(a_PointSize);

  return;
}
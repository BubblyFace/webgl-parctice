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
  // bind
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  

  // write
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  let a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }

  // set
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

  // link
  gl.enableVertexAttribArray(a_Position);

  return;

}
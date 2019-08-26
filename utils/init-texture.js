/** 
 * @author: shwbubbly 
 * @since: 2019-08-26 20:13:59
 * @desc: init texture 
 */

function initTexture(gl, n, imageUrl) {
  let texture = gl.createTexture();
  let u_Sample = gl.getUniformLocation(gl.program, 'u_Sampler');
  let image = new Image();

  image.onload = () => {
      loadTexture(gl, n, texture, u_Sample, image);
  }
}


function loadTexture(gl, n, texture, u_Sample, image) {
  // y 轴反转
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);

  // 开启纹理单元
  gl.activeTexture(gl.TEXTURE0);
  
  // 绑定纹理对象
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // 配置纹理参数
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  // 配置纹理图像
  gl.textImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

  // 将0号纹理传递给着色器
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);
}
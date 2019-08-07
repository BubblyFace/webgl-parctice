/** 
 * @author: shwbubbly 
 * @since: 2019-08-07 17:38:23  
 */


export default function(gl, color) {
  // TODO: 后续引入color包
  gl.clearColor(...color);

  /**
   *  COLOR_BUFFER_BIT: 颜色缓冲区
   *  DEPTH_BUFFER_BIT: 深度缓冲区
   *  STENCIL_BUFFER_BIT: 模版缓冲区
   */
  gl.clear(gl.COLOR_BUFFER_BIT);
}
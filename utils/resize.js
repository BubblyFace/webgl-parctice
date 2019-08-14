/** 
 * @since: 2019-08-14 19:45:15  
 */
export default function (gl) {
  if(!gl || !gl.canvas) {
    return 
  }
  let realToCSSPixels = window.devicePixelRatio;

  // 获取浏览器显示的画布的CSS像素值
  // 然后计算出设备像素设置drawingbuffer
  var displayWidth  = Math.floor(gl.canvas.clientWidth  * realToCSSPixels);
  var displayHeight = Math.floor(gl.canvas.clientHeight * realToCSSPixels);

  // 检查画布尺寸是否相同
  if (gl.canvas.width  !== displayWidth ||
      gl.canvas.height !== displayHeight) {

    // 设置为相同的尺寸
    gl.canvas.width  = displayWidth;
    gl.canvas.height = displayHeight;
  }
}
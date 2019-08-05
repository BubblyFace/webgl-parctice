/** 
 * @author: shwbubbly 
 * @since: 2019-08-02 11:43:58  
 */
const GRAVITY_ACCERLERATION = 9.8;

module.exports = (v, angle, frameRate) => {
  let offset_x = 0, offset_y = 0;
  let step = 0;
  // default 60fps
  frameRate = frameRate || 60;  

  return () => {
    let v_x = v * Math.cos(angle);
    let v_y = v * Math.sin(angle) - step * GRAVITY_ACCERLERATION / frameRate;
    step += 1;
    offset_x = v_x * step / frameRate;
    offset_y = v_y * step / frameRate;
    return [offset_x, offset_y]
  }
}
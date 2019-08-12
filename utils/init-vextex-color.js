export default function initVextexColor(gl, color) {
  let u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
  if(u_FragColor < 0) {
    console.log('Location Color Error')
    return -1
  }

  gl.uniform4f(u_FragColor, ...color)
}
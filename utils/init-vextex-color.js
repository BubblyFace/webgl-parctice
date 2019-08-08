export default function initVextexColor(gl, color) {
  let u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
  gl.uniform4f(u_FragColor, 1.0, 0.0, 0,0, 1.0);
}
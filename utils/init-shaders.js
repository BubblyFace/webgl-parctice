function loaderShader(gl, type, source) {
  let shader = gl.createShader(type);
  if (shader == null) {
    console.log('无法创建着色器');
    return null;
  }

  // 设置着色器源代码
  gl.shaderSource(shader, source);
  // 编译着色器
  gl.compileShader(shader);
  // 检查着色器的编译状态
  let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
      let error = gl.getShaderInfoLog(shader);
      console.log('Failed to compile shader: ' + error);
      gl.deleteShader(shader);
      return null;
  }
  return shader;
}

function createProgram(gl, vshader, fshader)  {
  let vertexShader = loaderShader(gl, gl.VERTEX_SHADER, vshader);
  let fragmentShader = loaderShader(gl, gl.FRAGMENT_SHADER, fshader);

  if (!vertexShader || !fragmentShader) {
    return null;
  }

  let program = gl.createProgram();

  if (!program) {
    return null;
  }

  // 为程序对象分配顶点着色器和片元着色器
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  // 连接着色器
  gl.linkProgram(program);

  let linked = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (!linked) {
    let error = gl.getProgramInfoLog(program);
    console.log('无法连接程序对象: ' + error);
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    return null;
  }

  return program
}

export default function (gl, vshader, fshader) {
  let program = createProgram(gl, vshader, fshader);
  console.assert(program, 'Can not create program');
  gl.useProgram(program);
  gl.program = program;

  return true
}
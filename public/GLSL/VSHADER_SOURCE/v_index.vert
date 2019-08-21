attribute vec4 a_Position;
attribute float a_PointSize;
uniform mat4 u_formMatrix;
void main() {
  gl_Position = u_formMatrix * a_Position;
  gl_PointSize = a_PointSize;
}
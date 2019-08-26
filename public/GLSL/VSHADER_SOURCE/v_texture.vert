attribute vec4 a_Position;
attribute float a_PointSize;
attribute vec4 a_PointColor;
uniform mat4 u_formMatrix;
varying vec4 v_PointColor;
attribute vec2 a_TextCoord;
varying vec2 v_TextCoord;

void main() {
  gl_Position = u_formMatrix * a_Position;
  gl_PointSize = a_PointSize;
  v_PointColor = a_PointColor;
  v_TextCoord = a_TextCoord;
}
precision mediump float;
varying vec4 v_PointColor;
uniform sampler2D u_Sampler;
varying vec2 v_TextCoord;

void main() {
  gl_FragColor = v_PointColor;
  gl_FragColor = texture2D(u_Sampler, v_TextCoord);
}
export default function(id, isF) {
  let dom = document.getElementById(id);

  if(dom) {
    return dom
  }

  dom = document.createElement('canvas');
  dom.id = id;
  dom.style = `
    position:fixed;
    width:100%;
    height:100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index:2;
  `

  document.body.appendChild(dom);
  return dom
}
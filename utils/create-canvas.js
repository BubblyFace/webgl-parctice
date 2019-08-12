export default function(id, isF) {
  let dom = document.getElementById(id);

  if(dom) {
    return dom
  }

  dom = document.createElement('canvas');
  dom.id = id;
  dom.style.width = '400px';
  dom.style.height = '400px';


  document.body.appendChild(dom);
  return dom
}
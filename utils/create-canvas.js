export default function(id, isF) {
  let dom = document.getElementById(id);

  if(dom) {
    return dom
  }

  dom = document.createElement('canvas');
  dom.id = id;
  dom.style.width = '100vw';
  dom.style.height = '100vh';


  document.body.appendChild(dom);
  return dom
}


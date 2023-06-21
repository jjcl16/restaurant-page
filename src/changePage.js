export function changePage() {
  const body = document.querySelector('.body');
  while(body.childNodes.length){
    body.removeChild(body.lastChild);
  }  
}
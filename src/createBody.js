export default function createBody() {
  const body =  document.createElement('div');
  body.classList.add('body');
  body.textContent = "Hola";
  return body;
}

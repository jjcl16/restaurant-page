import {CreateBodyFor} from "./createBody";

const createHeaders = () => {
  const selections = ["Barriots", "Location", "Menu", "Reserve"]
  const headers = document.createElement('div');
  headers.classList.add("headerMenu");

  selections.forEach(element => {
    const selection = document.createElement('div');
    selection.classList.add("selection");
    selection.classList.add(element);
    selection.textContent = element;
    headers.appendChild(selection);

    selection.addEventListener('click', callBody)
  });

  return headers;
}

export {
  createHeaders
};


function callBody (e){
  const bodyToCall = e.target.textContent;
  CreateBodyFor(bodyToCall);
}

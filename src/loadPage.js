import {createHeaders} from "./createHeader";
import {createBody} from "./createBody";
import createFooter from "./createFooter";
import './style.css';

const loadPages = () => {
  const content =  document.querySelector("#content");
  content.appendChild(createHeaders());
  content.appendChild(createBody());
  content.appendChild(createFooter());
}

export { loadPages };
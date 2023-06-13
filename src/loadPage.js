import createHeader from "./createHeader";
import createBody from "./createBody";
import createFooter from "./createFooter";
import './style.css';

export default function loadPage() {
  console.log("arrancamos");
  const content =  document.querySelector("#content");
  content.appendChild(createHeader());
  content.appendChild(createBody());
  content.appendChild(createFooter());
  
  console.log("terminamos");
}

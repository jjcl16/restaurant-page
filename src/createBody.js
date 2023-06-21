import {changePage} from "./changePage";

const createBody = () => {
  const body =  document.createElement('div');
  body.classList.add('body');  
  const bodyContent = document.createElement('div');
  bodyContent.textContent = "Hola";  
  body.appendChild(bodyContent);
  return body;
}

const CreateBodyFor = (selection) => {
  if (selection == "Location"){
    createBodyForLocation();
  } else if (selection == "Menu")
  {
    createBodyForMenu();
  } else if (selection == "Reserve"){
    createBodyForReserve();
  }
  else {    
    createBodyForHome();
  }
}

const createBodyForHome = () => {
  changePage();
  const body =  document.querySelector('.body');
  body.appendChild(createBody());
}


const createBodyForReserve = () => {
  changePage();
  const body =  document.querySelector('.body');
  body.classList.add('body');  
  const bodyContent = document.createElement('div');
  bodyContent.textContent = "Reserve";
  body.appendChild(bodyContent);
}


const createBodyForMenu = () => {
  changePage();
  const body =  document.querySelector('.body');
  body.classList.add('body');  
  const bodyContent = document.createElement('div');
  bodyContent.textContent = "MENU";
  body.appendChild(bodyContent);
}

const createBodyForLocation = () => {
  changePage();
  const body =  document.querySelector('.body');
  body.classList.add('body');  
  const bodyContent = document.createElement('iframe');
  bodyContent.src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d532.5656813768844!2d-58.4511505118026!3d-34.5709008751924!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1686678371793!5m2!1ses!2sar";
  bodyContent.referrerPolicy = "no-referrer-when-downgrade;"
  bodyContent.width = "350";
  bodyContent.height = "280";
  bodyContent.style = "border-radius: 10px";  
  bodyContent.allowFullscreen = "false";
  bodyContent.loading = "eager";
  body.appendChild(bodyContent);
}


export { 
  createBody, 
  CreateBodyFor 
}
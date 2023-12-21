import { home } from "./modules/home";

const bodyContainer = document.createElement("div");
bodyContainer.classList.add("container");
const headerElement = home();

bodyContainer.appendChild(headerElement);
document.body.appendChild(bodyContainer);

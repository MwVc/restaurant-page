import { header } from "./modules/home";

const bodyContainer = document.createElement("div");
bodyContainer.classList.add("container");
const headerElement = header();
bodyContainer.appendChild(headerElement);

document.body.appendChild(bodyContainer);

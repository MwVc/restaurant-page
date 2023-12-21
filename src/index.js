import { home } from "./modules/home";

const homePage = home();

const content = document.querySelector(".content");

content.appendChild(homePage);

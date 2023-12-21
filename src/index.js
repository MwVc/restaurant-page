import "./CSS/style.css";
import "./CSS/materialize.min.css";
import home from "./modules/home.js";

const content = document.querySelector(".content");

const homePage = home();

content.appendChild(homePage);

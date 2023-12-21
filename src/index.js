import "./CSS/style.css";
import "./CSS/materialize.min.css";

import { navBar } from "./modules/home";

const navSection = navBar();

const content = document.querySelector(".content");

content.appendChild(navSection);

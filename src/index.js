import "./CSS/style.css";
import home from "./modules/home.js";
import menu from "./modules/menu.js";
import contact from "./modules/contact.js";

document.addEventListener("DOMContentLoaded", function () {
  const contentContainer = document.querySelector(".content");

  function switchPage(page) {
    contentContainer.innerHTML = "";

    contentContainer.appendChild(page());
  }

  switchPage(home);

  const homePage = document.getElementById("home-page");
  const menuPage = document.getElementById("menu-page");
  const contactPage = document.getElementById("contact-page");

  homePage.addEventListener("click", switchPage(home));
  menuPage.addEventListener("click", switchPage(menu));
  contactPage.addEventListener("click", switchPage(contact));
});

// parallax effect function
document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const parallaxElement = document.querySelector(".parallax-effect");
  parallaxElement.style.backgroundPositionY = scrollPosition * 0.2 + "px";
});

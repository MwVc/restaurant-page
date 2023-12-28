import "./CSS/style.css";
import loadHome from "./modules/home.js";
import menu from "./modules/menu.js";
import loadContact from "./modules/contact.js";
import generateNav from "./modules/navigationBar.js";

const initializePage = function () {
  const contentContainer = document.querySelector(".content");

  contentContainer.parentNode.insertBefore(generateNav(), contentContainer);
  contentContainer.appendChild(loadHome());

  const homeBtn = document.querySelector("#home-btn");
  const menuBtn = document.querySelector("#menu-btn");
  const contactBtn = document.querySelector("#contact-btn");

  console.log(homeBtn);
  console.log(menuBtn);
  console.log(contactBtn);

  homeBtn.addEventListener("click", function () {
    contentContainer.textContent = "";
    contentContainer.appendChild(loadHome());
  });

  menuBtn.addEventListener("click", function () {
    contentContainer.textContent = "";
    contentContainer.appendChild(menu());
  });

  contactBtn.addEventListener("click", function () {
    contentContainer.textContent = "";
  });
};

initializePage();

// parallax effect function
document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const parallaxElement = document.querySelector(".parallax-effect");
  parallaxElement.style.backgroundPositionY = scrollPosition * 0.05 + "px";
});

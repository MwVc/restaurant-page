import "./CSS/style.css";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";

const generateNav = function () {
  const navigationBar = document.createElement("nav");
  const container = document.createElement("div");
  const logo = document.createElement("h1");
  const menuContainer = document.createElement("div");
  const menuItems = generateMenuItems();

  menuItems.classList.add("menu-items");
  logo.classList.add("logo");
  container.classList.add("container");

  logo.textContent = "Soufi's";

  menuContainer.appendChild(menuItems);
  container.appendChild(logo);
  container.appendChild(menuContainer);
  navigationBar.appendChild(container);
  return navigationBar;
};

const generateMenuItems = function () {
  const navListItems = ["HOME", "MENU", "CONTACT"];
  const menuItems = document.createElement("ul");

  // loop through navList array creating li element and appending to ulElement
  for (let i = 0; i < navListItems.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<a href=# id="${navListItems[
      i
    ].toLowerCase()}-page">${navListItems[i]}</a>`;
    menuItems.appendChild(listItem);
  }
  return menuItems;
};

function init() {
  const contentContainer = document.querySelector(".content");
  contentContainer.appendChild(generateNav());
  contentContainer.appendChild(loadHome());

  return { contentContainer };
}

// parallax effect function
document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const parallaxElement = document.querySelector(".parallax-effect");
  parallaxElement.style.backgroundPositionY = scrollPosition * 0.1 + "px";
});

// Show fullScreenImage
function showFullScreenImage() {
  // Get the full-screen image element
  const fullscreenImage = document.getElementById("fullscreenImage");
  // Toggle the display of the full-screen image
  fullscreenImage.style.display === "none"
    ? (fullscreenImage.style.display = "block")
    : (fullscreenImage.style.display = "none");
}

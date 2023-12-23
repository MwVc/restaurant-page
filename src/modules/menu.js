import { generateMenuItems } from "./home";

export default function loadMenu() {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  const menuPage = menu();

  contentContainer.appendChild(menuPage);
}

function menu() {
  const menuPage = document.createElement("div");
  const nav = generateNav();
  const footer = generateFooter();

  menuPage.appendChild(nav);
  menuPage.appendChild(footer);

  return menuPage;
}

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

const generateFooter = function () {
  const footer = document.createElement("footer");
  const container = document.createElement("div");
  const footerContent = document.createElement("p");

  container.classList.add("container");

  footerContent.innerHTML = "&copy; 2023 All rights reserved";

  container.appendChild(footerContent);
  footer.appendChild(container);

  return footer;
};
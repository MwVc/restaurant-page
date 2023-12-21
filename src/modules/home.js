const home = function () {
  //create html element
  const nav = document.createElement("nav");
  const container = document.createElement("div");
  const logo = document.createElement("a");

  // Add attributes to elements
  nav.classList.add("nav-wraper");
  container.classList.add("container");
  logo.classList.add("brand-logo");

  logo.setAttribute("href", "#");

  logo.textContent = "RamRachem";

  // appending elements
  container.appendChild(logo);
  container.appendChild(desktopNavigation());
  nav.appendChild(container);

  return nav;
};

const generateNavList = function () {
  const navListItems = ["HOME", "MENU", "CONTACTS"];

  const navList = document.createElement("ul");

  // loop through navList array creating li element and appending to ulElement
  for (let i = 0; i < navListItems.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<a href=#>${navListItems[i]}</a>`;
    navList.appendChild(listItem);
  }

  return navList;
};

//  Desktop Navigation Menu
const desktopNavigation = function () {
  const ulElement = generateNavList();
  ulElement.classList.add("right", "hide-on-med-and-down");

  return ulElement;
};

// Mobile Navigation Menu
const mobileNavigation = function () {
  const ulElement = generateNavList();

  // mobile menu elements
  const menuBarIcon = document.createElement("a");
  const iconElement = document.createElement("i");

  menuBarIcon.classList.add("sidenav-trigger");
  iconElement.classList.add("material-icons");

  menuBarIcon.setAttribute("href", "#");
  menuBarIcon.setAttribute("data-target", "mobile-links");

  iconElement.textContent = "menu";

  // add attributes
  ulElement.classList.add("sidenav");
  ulElement.setAttribute("id", "mobile-links");

  return ulElement;
};

export { home };

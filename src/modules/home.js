export default function home() {
  const home = document.createElement("div");
  home.setAttribute("id", "home-container");
  home.appendChild(nav());
  home.appendChild(section());

  return home;
}

const nav = function () {
  //create html element
  const nav = document.createElement("nav");
  const container = document.createElement("div");
  const logo = document.createElement("a");

  logo.setAttribute("href", "#");

  logo.textContent = "Soufi's";

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
    listItem.innerHTML = `<a href=# class="black-text">${navListItems[i]}</a>`;
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

const section = function () {
  return showcase;
};

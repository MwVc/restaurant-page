// nav
//  div class "nav-wrapper"
//    a class brand logo
//      ul id nav-mobile class right hide on med and down
//        li a
//        li a
//        li a

const home = function () {
  //create html element
  const nav = document.createElement("nav");
  const navWrapper = document.createElement("div");

  // Add class name of "nav-wrapper" to div
  navWrapper.classList.add("nav-wrapper");

  const logo = document.createElement("a");
  logo.classList.add("brand-logo");
  logo.setAttribute("href", "#");
  logo.textContent = "MwVc";

  // appending elements
  navWrapper.appendChild(logo);
  navWrapper.appendChild(navigation());
  nav.appendChild(navWrapper);

  return nav;
};

const navigation = function () {
  const navlist = ["HOME", "MENU", "CONTACTS"];

  const ulElement = document.createElement("ul");
  ulElement.classList.add("right");
  ulElement.setAttribute("id", "nav-mobile");

  // loop through navList array creating li element and appending to ulElement
  for (let i = 0; i < navlist.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<a href=#>${navlist[i]}</a>`;
    ulElement.appendChild(listItem);
  }

  return ulElement;
};

export { home };

// HEADER
//  heading
//  nav
//    div
//      ul
//        li
//        li
//        li

const header = function () {
  //create html element
  const headerElement = document.createElement("header");
  const heading = document.createElement("h1");

  heading.textContent = "MwVc";
  headerElement.appendChild(heading);
  headerElement.appendChild(navigation());

  return headerElement;
};

const navigation = function () {
  const navlist = ["HOME", "MENU", "CONTACTS"];

  const navElement = document.createElement("nav");

  const navContainer = document.createElement("div");
  navContainer.classList.add("nav-container");

  const ulElement = document.createElement("ul");

  for (let i = 0; i < navlist.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = navlist[i];
    navContainer.appendChild(listItem);
  }

  ulElement.appendChild(navContainer);
  navElement.appendChild(navContainer);

  return navElement;
};

export { header };

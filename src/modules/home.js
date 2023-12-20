const header = function () {
  //create header element
  const headerElement = document.createElement("header");
  const heading = document.createElement("h1");
  heading.textContent = "MwVc";
  headerElement.appendChild(heading);

  return headerElement;
};

export { header };

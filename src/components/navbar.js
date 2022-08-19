const navbar = (onTabClick) => {
  const content = document.getElementById("content");
  const links = ["Home", "Menu", "Our Team"];

  const navbarContainer = document.createElement("div");
  navbarContainer.classList.add("navbar");

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  const logoImg = document.createElement("img");
  logoImg.classList.add("navbar-logo");
  logoImg.src = "/src/assets/menuPage/logo.png"
  logoContainer.appendChild(logoImg);

  const logoContainerSpan = document.createElement("span");
  logoContainerSpan.textContent = "90's Cafe";
  logoContainer.appendChild(logoContainerSpan);

  const navbarLinkContainer = document.createElement("div");
  navbarLinkContainer.classList.add("navbar-link-container");
  links.forEach((link) => {
    const navLink = document.createElement("a");
    navLink.addEventListener("click", () => onTabClick(link));
    navLink.textContent = link;
    navbarLinkContainer.appendChild(navLink);
  });

  navbarContainer.appendChild(logoContainer);
  navbarContainer.appendChild(navbarLinkContainer);
  content.appendChild(navbarContainer);
};



export default navbar;

const landingBG = (page, title) => {
  const content = document.getElementById("content");
  const landingBackground = document.createElement("div");
  landingBackground.classList.add("landingBackground");
  landingBackground.style.backgroundImage =
    `url('/src/assets/menuPage/${page}BG.gif')`;
  const landingTitle = document.createElement("h1");
  landingTitle.textContent = title;
  landingTitle.classList.add("landing-title");

  landingBackground.appendChild(landingTitle);

  content.appendChild(landingBackground);
};



export default landingBG;

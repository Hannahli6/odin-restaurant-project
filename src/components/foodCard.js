const foodCard = () => {
  const content = document.getElementById("content");

  const landingBackground = document.createElement("div");
  landingBackground.classList.add("landingBackground");
  landingBackground.style.backgroundImage =
    "url('/src/assets/menuPage/menuBG.gif')";

  const landingTitle = document.createElement("h1");
  landingTitle.textContent = "Menu";
  landingTitle.classList.add("landing-title");

  landingBackground.appendChild(landingTitle);

  const centerSection = document.createElement("div");
  centerSection.classList.add("center-section");

  content.appendChild(landingBackground);
  content.appendChild(centerSection);
};

export default foodCard;

{/* <div class="food-card">
  <img src="/src/assets/menuPage/meal/33_curry_dish.png"></img>
  <span>spaghetti</span>
  <span>$10</span>
</div>; */}

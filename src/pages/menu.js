
const menu = () => {
  const content = document.getElementById("content");

  const landingBackground = document.createElement("div");
  landingBackground.classList.add("landingBackground");
  landingBackground.style.backgroundImage = "url('/src/assets/menuPage/menuBG.gif')";

  const landingTitle = document.createElement("h1");
  landingTitle.textContent = "Menu";
  landingTitle.classList.add("landing-title");

  landingBackground.appendChild(landingTitle);

  const centerSection = document.createElement("div");
  centerSection.classList.add("center-section");


  content.appendChild(landingBackground);
  content.appendChild(centerSection);
};

export default menu;


{/* 
    
    <div class="menu-section">
      <div class="menu-button-container">
        <button class="menu-button">meal</button>
        <button>snacks</button>
        <button>dessert</button>
      </div>
      <div class="menu-food-container">
        <div class="food-card">
          <img src="/src/assets/menuPage/meal/33_curry_dish.png"></img>
          <span>spaghetti</span>
          <span>$10</span>
        </div>
        <div class="food-card">
          <img src="/"></img>
          <span>spaghetti</span>
          <span>$10</span>
        </div>
        <div class="food-card">
          <img src="/"></img>
          <span>spaghetti</span>
          <span>$10</span>
        </div>
        <div class="food-card">
          <img src="/"></img>
          <span>spaghetti</span>
          <span>$10</span>
        </div>
        <div class="food-card">
          <img src="/"></img>
          <span>spaghetti</span>
          <span>$10</span>
        </div>
        <div class="food-card">
          <img src="/"></img>
          <span>spaghetti</span>
          <span>$10</span>
        </div>
        <div class="food-card">
          <img src="/"></img>
          <span>spaghetti</span>
          <span>$10</span>
        </div>
        <div class="food-card">
          <img src="/"></img>
          <span>spaghetti</span>
          <span>$10</span>
        </div>
      </div>
    </div> */}
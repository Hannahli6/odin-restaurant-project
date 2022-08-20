import landingBG from "../components/landingBG";
import foodCard from "../components/foodCard";
import foodData from "../foodData";
const menu = () => {
  landingBG("menu", "menu");

  const centerSection = document.createElement("div");
  centerSection.classList.add("center-section");

  const buttons = ["meal", "snack", "dessert"];
  let currentTab = buttons[0];

  const menuButtonContainer = document.createElement("div");
  menuButtonContainer.classList.add("menu-button-container");

  buttons.forEach((button) => {
    const menuBtn = document.createElement("button");
    menuBtn.style.color = button === currentTab? "#FF914D" : null;
    menuBtn.addEventListener("click", (e) => {
      currentTab = button;
      Array.from(menuButtonContainer.childNodes).forEach((buttonEl)=>{
        buttonEl.style.color = buttonEl.textContent === currentTab? "#FF914D" : null;
      })
      menuFoodContainer.innerHTML = "";
      foodData[0][currentTab].forEach((food) => {
        foodCard(food.name, food.imgSrc, food.price, currentTab);
      });
    });
    menuBtn.textContent = button;
    menuBtn.style.backgroundImage =
    `url('/src/assets/menuPage/menuBtn_${button}.png')`;
    menuButtonContainer.appendChild(menuBtn);
  });
 
  const menuFoodContainer = document.createElement("div");
  menuFoodContainer.classList.add("menu-food-container");

  centerSection.appendChild(menuButtonContainer);
  centerSection.appendChild(menuFoodContainer);
  content.appendChild(centerSection);

  // initial render
  foodData[0][currentTab].forEach((food) => {
    foodCard(food.name, food.imgSrc, food.price, currentTab);
  });
};

export default menu;

const foodCard = (name, imgSrc, price, currentTab) => {
  const menuFoodContainer = document.getElementsByClassName("menu-food-container")[0];

  const foodCardContainer = document.createElement("div");
  foodCardContainer.classList.add("food-card");

  const foodImg = document.createElement("img")
  foodImg.src = `/src/assets/menuPage/${currentTab}/${imgSrc}`
  foodCardContainer.appendChild(foodImg);

  const foodTitle = document.createElement("span")
  foodTitle.textContent = name;
  foodCardContainer.appendChild(foodTitle);

  const priceTitle = document.createElement("span")
  priceTitle.textContent = "$ " + price;
  foodCardContainer.appendChild(priceTitle);

  menuFoodContainer.appendChild(foodCardContainer)
};

export default foodCard;



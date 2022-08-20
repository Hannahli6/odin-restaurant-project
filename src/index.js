import navbar from "./components/navbar";
import home from "./pages/home";
import menu from "./pages/menu";
import team from "./pages/team";

const clear = function () {
  const content = document.getElementById("content");
  content.innerHTML = "";
};

const onTabClick = (link) => {
  switch (link) {
    case "Home":
      clear();
      navbar(onTabClick);
      home();
      break;
    case "Menu":
      clear();
      navbar(onTabClick);
      menu();
      break;
    case "Our Team":
      clear();
      navbar(onTabClick);
      team();
      break;
  }
};

const content = document.getElementById("content");
const initialPageLoad = () => {
  navbar(onTabClick);
  home();
}
initialPageLoad();

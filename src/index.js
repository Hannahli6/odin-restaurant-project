import navbar from "./components/navbar";
import home from "./pages/home";
import menu from "./pages/menu";
import team from "./pages/team";

const render = function () {
  const content = document.getElementById("content");
  content.style = "";
  while (content.children.length > 1) {
    content.children[1].remove();
  }
};

const onTabClick = (link) => {
  switch (link) {
    case "Home":
      render();
      home();
      break;
    case "Menu":
      render();
      menu();
      break;
    case "Our Team":
      render();
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

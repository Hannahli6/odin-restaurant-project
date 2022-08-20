
import landingBG from "../components/landingBG";

const home = () => {
  const content = document.getElementById("content");
  landingBG("home", "90's cafe");
 
  const centerSection = document.createElement("div");
  centerSection.classList.add("center-section");

  const aboutUsText = document.createElement("h3");
  aboutUsText.textContent =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  aboutUsText.classList.add("about-us-text");


  const hourContainer = document.createElement("div");
  hourContainer.classList.add("store-info-container");

  const locationContainer = document.createElement("div");
  locationContainer.classList.add("store-info-container");

  const hourTitleText = document.createElement("h1");
  hourTitleText.textContent = "Hours";
  hourContainer.appendChild(hourTitleText)

  const hourInfoText = document.createElement("h2");
  hourInfoText.innerHTML = `Sunday: 8am - 8pm <br> Monday: 6am - 6pm <br> Tuesday: 6am - 6pm <br> Wednesday: 6am - 6pm <br> Thursday: 6am - 10pm <br> Friday: 6am - 10pm <br> Saturday: 8am - 10pm`;
  hourContainer.appendChild(hourInfoText);

  const locationTitleText = document.createElement("h1");
  locationTitleText.textContent = "Location";
  locationContainer.appendChild(locationTitleText)

  const locationInfoText = document.createElement("h2");
  locationInfoText.innerHTML = `123 Forest Drive, Forestville, Maine`;
  locationContainer.appendChild(locationInfoText);

  centerSection.appendChild(aboutUsText);
  centerSection.appendChild(hourContainer);
  centerSection.appendChild(locationContainer);
  content.appendChild(centerSection);
};

export default home;


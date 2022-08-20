import landingBG from "../components/landingBG";
import teamMemberCard from "../components/teamMemberCard";
import teamData from "../teamData";
const team = () => {
  landingBG("team", "Our Team");

  const aboutUsText = document.createElement("h3");
  aboutUsText.textContent =
    "Here in 90's cafe, we hire our professional team to provide a wonderful experience to our customers and guarantee to deliver the best quality food to you! Meet our team!";
  aboutUsText.classList.add("about-us-text");

  const centerSection = document.createElement("div");
  centerSection.classList.add("center-section");
  centerSection.appendChild(aboutUsText);

  const teamContainer = document.createElement("div");
  teamContainer.classList.add("team-container");
  centerSection.appendChild(teamContainer);
  content.appendChild(centerSection);


  teamData.forEach((member) => {
    console.log(member);
    teamMemberCard(member.name, member.role, member.experience, member.imgSrc);
  });
};

export default team;

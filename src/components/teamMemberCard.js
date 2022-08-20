const teamMemberCard = (name, role, experience, imgSrc) => {
  const teamContainer = document.getElementsByClassName("team-container")[0];

  const memeberCardContainer = document.createElement("div");
  memeberCardContainer.classList.add("member-card");

  const memberImg = document.createElement("img")
  memberImg.src = `/src/assets/menuPage/team/${imgSrc}`
  memeberCardContainer.appendChild(memberImg);

  const memberName = document.createElement("span")
  memberName.textContent = name;
  memeberCardContainer.appendChild(memberName);

  const memberRole = document.createElement("span")
  memberRole.textContent = role;
  memeberCardContainer.appendChild(memberRole);

  teamContainer.appendChild(memeberCardContainer)
};

export default teamMemberCard;



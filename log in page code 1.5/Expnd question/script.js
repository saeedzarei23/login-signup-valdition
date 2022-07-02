document.addEventListener("click", (e) => {
  if (!e.target.matches(".expand-button")) return;

  const achievement = e.target.closest(".achievement");

  const achievementBody = achievement.querySelector(".achievement-body");

  achievementBody.classList.toggle("show");
  if (e.target.innerText === "+") {
    e.target.innerText = "-";
  } else {
    e.target.innerText = "+";
  }
});

script.js
const popups = document.querySelectorAll(".popup");
const startBtn = document.getElementById("startBtn");
const leftContent = document.getElementById("leftContent");
const rightContent = document.querySelector(".right");
const branches = document.getElementById("learningBranches");

// Попапи
document.querySelectorAll("[data-popup]").forEach(btn => {
  btn.addEventListener("click", () => {
    popups.forEach(p => p.classList.remove("active"));
    document.getElementById(btn.dataset.popup).classList.add("active");
  });
});

// Закриття попапів при mouseleave
popups.forEach(popup => {
  popup.addEventListener("mouseleave", () => {
    popup.classList.remove("active");
  });
});

// Кнопка Главная повертає на home
document.getElementById("homeBtn").addEventListener("click", () => {
  popups.forEach(p => p.classList.remove("active"));
  leftContent.style.display = "block";
  rightContent.style.display = "flex";
  branches.classList.remove("active");
  window.scrollTo({ top:0, behavior:"smooth" });
});

// Начать обучение
startBtn.addEventListener("click", ()=>{
  leftContent.style.display="none";
  rightContent.style.display="none";
  branches.classList.add("active");
});
const snow = document.createElement("div");
snow.className = "snow";
document.body.appendChild(snow);

for (let i = 0; i < 60; i++) {
  const s = document.createElement("span");
  s.style.left = Math.random() * 100 + "vw";
  s.style.width = 4 + Math.random()*6 + "px";
  s.style.height = s.style.width;
  s.style.opacity = 0.3 + Math.random()*0.7;
  s.style.animationDuration = 5 + Math.random()*10 + "s";
  s.style.animationDelay = Math.random()*10 + "s";
  snow.appendChild(s);
}
// Клік по веткам обучения
document.querySelectorAll(".branch[data-popup]").forEach(branch => {
  branch.addEventListener("click", () => {
    popups.forEach(p => p.classList.remove("active"));
    document.getElementById(branch.dataset.popup).classList.add("active");
  });
});
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const reponse = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  reponse.classList.add("show-response");
  reponse.style.background = "green";
});

btn2.addEventListener("click", () => {
  reponse.classList.add("show-response");
  reponse.style.background = "red";
});

//------------------------------------------------ 1h
//Mouse Events

const mousemove = document.querySelector(".mousemove");

//window au dessus de document dans le DOM, c'est toute la fenêtre ^^
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

//mousemove, on réupère l'événement (e) et on l'injecte e.
//bien utiliser pageX et pageY

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});
// différent de click

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0, 0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(0,0,0, 0.8)";
});

reponse.addEventListener("mouseover", () => {
  reponse.style.transform = "rotate(2deg)";
});
//sympa ça, quand la souris passe dur l'élemnt, il "tombe"

//-------------------------------------------------------------------

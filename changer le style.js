//change le style d'un élément avec .style.ceQuOnVeutChanger = "CommentOnVeutLeChanger" après l'avoir identifié 
//(voir les variantes pour récup données, QueryS, GetElement...

document.querySelector("h4").style.color = "red";

//meilleur pour selectionné un élément, la constante

const h4 = document.querySelector("h4");

h4.style.color = " green";

//on change les tiret en kamelCase:

const questionContainer = document.querySelector(".click-event");
//dans le doc il y a une div ayant la class click-event

questionContainer.style.borderRadius = "150px";

//si plusieurs éléments à transformer créer une classe spécifique liée à un événement
questionContainer.addEventListener("click", () => {
  questionContainer.classList.add("question-clicked");
});
//.question-clicked défini dans le fichir css
//add et remove pour retirer

//mmieux utilisation de toggle, add la class si pas, remove si  class mise

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});


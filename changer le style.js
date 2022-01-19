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

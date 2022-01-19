//création de fonction
function faireQuelqueChose() {
  console.log("je fais un truc !");
  console.log("trop cool");
}

//appel de la fonction
faireQuelqueChose();

//fléchée
const faireUneTache = (tache) => {
  console.log("je fais : " + tache);
};

//tache sera alors remplacé par tout ce qu'on veut

faireUneTache("les courses");

//return fin de fonction

function calc(x, y) {
  return x + y;
}

console.log(calc(5, 8));

//la fonction qui se jour seule

(function () {
  console.log("Je me joue toute seule");
})();

//fonction entre parenthèses puis après ()
//comme quand fonctionAppelée()
//on défini et appel la fonction en une fois
//marche avec ou sans nom

(testSeule = () => {
  console.log("seule et fléchée ^^");
})();

//fonction unique qui se joue immédiatement pas besoin de nom ?

testSeule();

//nom utile si besoin de la rappeler ensuite sinon

(() => {
  console.log("Hello there !");
})();

/*variables et fonctions
si besoin d'une variable dans plusieurs fonction
la définie au dessus, sinon dedans c'est très bien

js lis le script de haut en bas, toujours définir la variable avant de l'utiliser ^^

const puis let puis fonctions
*/

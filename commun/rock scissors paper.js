const rps = (p1, p2) => {

  if (p1 === p2) return "Draw!";
//var rules et une variable et un tableau devenu objet (pas possible d'utiliser les méthode avec array ici)
  var rules = {
      rock: "scissors", 
      paper: "rock", 
      scissors: "paper"
    };
//la propriété est l'lélément qui gagne, la valeur l'élément perdant
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
//et donc si p2 == la valeur de la propriété de p1, 1 gagne
  else {
    return "Player 2 won!";
  }
};
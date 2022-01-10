//function, contructeur de fonction

function Dog(name, color) {
    this.name =name;
    this.color = color;
    this.autreChose = "Tout ce qu'on veut comme propriétés fixes pour les futurs Dog"
}

let terrier = new Dog("Vlade", "marron et noir");
console.log(terrier);
//pour afficher

//instanceOf, vérifier que x est une instance de y

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  
  let myHouse = new House(5);
  
  myHouse instanceof House;
  //true or false, ici true

  //les proriétés propres d'une fonction
  //for...in + hasOwnProperty + push

  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  
  for(let property in canary) {
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }

  //résultat : un tableau avec les propriétés propres (pas leur valeurs)

  //prototype, une propriétés qui sera commune à toutes les instances de la fonction
  //Il suffit de changer la valeur du prototype pour changer la valeur dans toutes les instances

  function Dog(name) {
    this.name = name;
    Dog.prototype.numLegs = 4;
  }
  
  let beagle = new Dog("Snoopy");
  let terrier = new Dog("Vlade");
  
  console.log(beagle); //renvoie 4
  console.log(terrier);//renvoie 4
  
  Dog.prototype.numLegs = 3;
  
  console.log(beagle); //renvoie 3
  console.log(terrier);//renvoie 3
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for(let property in beagle) {
  if(Dog.hasOwnProperty(property)){
    ownProps.push(property);
  } else {
  prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);


//fonction dans prototype (d'objet)

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
numLegs: 4,
eat: function() {
  console.log("nom nom nom");
},
describe: function() {
  console.log("My name is " + this.name);
}
};
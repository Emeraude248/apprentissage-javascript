"use strict";
/*ce code fonctionne de manière moderne

pour utiliser les nouvelles fonctionnalités de ES5 
(sinon elles entrent en conflict avec ancien code)*/

let admin;
let name = 'John';
admin = name;
alert(admin);

//ajout différence object et tableau mais object ^^

let obj = {
  prénom: "Aude",
  age: 33,
  ville: "Arras",
};

console.log(typeof obj);

let arr = ["je", "suis", "fatiguée", "><"];

console.log(typeof arr);

//object et tableau = object dans js

console.log(typeof obj.age);

console.log(typeof arr[0]);

//différence de traitement néanmoins pour récup données


//penser à log un maximum les variabes au fur et à mesure, tester un maximum les lignes de code

var paragraphe = document.getElementById("paragraphe");
alert(paragraphe.innerHTML);

paragraphe.innerHTML += "Du texte plus long...";
//modifie le texte affiché sur le page mais pas celui de l'alerte
//si "" efface tout le texte
//+= ajout du script HTML et javascript

var pseudo = prompt("Quel est ton pseudo ?");
var bonjour = document.getElementById('bonjour');
bonjour.innerHTML += pseudo + " !";

var image = document.getElementById("image");
//alert(image.getAttribute('src'));
var srcImage = image.getAttribute('src');
//get pour récupérer qq ch
//set pour modifier
//raccourci image.src

var source = document.getElementById("image-src");
source.innerHTML = 'La source de l\'image est : ' + srcImage;

//image.setAttribute('src', 'new-york.jpg')
image.src = "new-york.jpg";
//remplace l'image, la source du src étant modifiée

alert(image.className);
image.className = "petit";
//changemnt class de l'image
alert(image.className);

image.className = prompt("veuilles entrer une class CSS : \"grand\" ou \"petit\"");
//l'utilisateur choisi la taille de la photo ^^

console.log(image.classList);
//affiche un tableau des class dispo (rentrée avec prompt)

image.classList.add('bords');
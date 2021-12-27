/*
let paragraphes = document.querySelectorAll(".paragraphe")
//querySelector pour un seul élément, querySelectorAll plusieurs
//utilise sélecteur CSS

console.log(paragraphes);
alert(paragraphes);

for (let i = 0; i < paragraphes.length; i++) {
    console.log(paragraphes[i].innerHTML);
    alert(paragraphes[i].innerHTML);
}
*/

let para = document.querySelectorAll("#test .paragraphe")

console.log(para);
alert(para);

for (let i = 0; i < para.length; i++) {
    console.log(para[i].innerHTML);
    alert(para[i].innerHTML);
}
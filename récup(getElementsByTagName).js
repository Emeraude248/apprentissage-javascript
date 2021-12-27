
alert(paragraphes);

var paragraphes = document.getElementsByTagName("p");
console.log(paragraphes);

for (let i = 0; i < paragraphes.length; i++) {
    console.log(paragraphes[i].innerHTML);
    alert(paragraphes[i].innerHTML);
}
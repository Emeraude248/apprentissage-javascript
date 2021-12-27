
alert(input);

var input = document.getElementsByName("pseudo");
console.log(input);

for (let i = 0; i < input.length; i++) {
    console.log(input[i].value);
    alert(input[i].value);
}
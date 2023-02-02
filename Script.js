const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const ide = document.querySelector("#ide");
const input = document.querySelector("input");

console.log({
    h1,
    p,
    parrafito,
    ide,
    input,
});

//Escribiendo HTML desde JavaScript

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

ide.innerHTML = "";
ide.appendChild(img);
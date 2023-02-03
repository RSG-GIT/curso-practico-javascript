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

h1.innerHTML = 'AUTEC <br> Automatización Tecnológica';
h1.innerText = 'AUTEC <br> Automatización Tecnológica';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "Su Empresa de Tecnología"

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

ide.innerHTML = ""; //de esta manera borro o modifico el <p id="ide">Esto es un parrafo con id</p> que esta en nuestro documento HTML//
ide.appendChild(img);
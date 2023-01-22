¿Qué es una variable y para que sirve?

## Es la representación de un espacio en memoria. 

¿Cuál es la diferencia entre declarar e inicializar una variable?

- Una variable se declara para indicarle al programa a partir de qué lugar empieza a existir, qué nombre tendrá y qué tipo de datos almacenará. La asignación de un valor inicial se llama inicialización.[1] Para declarar una variable usaremos una instrucción compuesta del nombre del tipo de datos de la variable, el nombre de la variable y opcionalmente un operador de asignación y un valor inicial. 

¿Cuál es la diferencia entre sumar números y concatenar strings? 

- Sumar números es una operación matemática y concatenar es unir strings uno tras otro.

¿Cuál operador me permite sumar o concatenar? +

- Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

-Nombre “String”
-Apellido “String”
-Nombre de usuario en Platzi “String”
-Edad “Number”
-Correo electrónico “String”
-Mayor de edad “Boolean”
-Dinero ahorrado “Number”
-Deudas “Number”

Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
var name = "Renso";
var lastName = "Solerti";
var user_name = "Renso";
var age = 42;
var mail = "solerti@gmail.com"
var adult = true;
var savedMoney = 800;
var debtMoney = 80000;

```
Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)

```
let name = "Renso";
let lastName = "Solerti";
console.log(`Mi nombre completo es ${name} ${lastName}`);

```

¿Qué es una función?

- un conjunto de instrucciones que realiza una tarea o calcula un valor

¿Cuándo me sirve usar una función en mi código?

- Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida

¿Cuál es la diferencia entre parámetros y argumentos de una función?

- los parámetros son los nombres que aparecen en la definición de una función. Por su parte, los argumentos son los valores que le pasamos (y que, por tanto, recibe) una función

Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

// Solucion 

function presentandome(name, lastName, nickName){
    return console.log(`Mi nombre completo es ${name} ${lastName}, pero prefiero que me digas ${nickName}.`);
  }
  presentandome("Juan David", "Castro Gallego", "juandc");

  ¿Qué es un condicional?
  Es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if

  ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
  JavaScript ofrece un total de cuatro instrucciones para procesar código de acuerdo a condiciones determinadas por el programador: if, switch, for y while

  Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

  const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//Solucion

var tipoDeSuscripcion2 = "Basic";

if (tipoDeSuscripcion2 == "Free") {
	console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion2 == "Basic") {
	 console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion2 == "Expert") {
	 console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion2 == "ExpertPlus") {
	 console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
	 console.log("No tienes ninguna suscripción");
}

¿Qué es un ciclo?

Un bucle (loop) o ciclo repetitivo es una estructura de control que te permite realizar una o varias instrucciones mientras una condición sea verdadera.

¿Qué tipos de ciclos existen en JavaScript?

Loops: For while

¿Qué es un ciclo infinito y por qué es un problema?

Un ciclo infinito es cuando la condición es infinita, nunca se cumple y, por lo tanto, no existe termino al proceso, por consecuencia nuestro código puede fallar y ralentizar nuestras computadoras.

¿Puedo mezclar ciclos y condicionales?

Sí, podemos condicionar un ciclo para que se repita todas las veces hasta que se cumplan una condición

Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//Solucion

var numero = 0

while ( numero < 5 ){
    console.log(numero)
    numero++
}

var numero = 10

while ( numero >= 2 ){
    console.log(numero)
    numero--
}

Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

let num = 2;
let num2 = 2;
const result = num + num2;
let questions = {
  q1: `Cuanto es ${num} + ${num2}`
}
function Test() {
  let userInput = prompt(questions.q1);
  if (userInput == result) {
    alert("Felicitaciones, respondiste correctamente el desafio");
  } else {
    alert("lamentablemente, tu respuesta es incorrecta, sigue practicando!");
  }
}
Test();

¿Qué es un array?

Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

¿Qué es un objeto?

Un objeto es una estructura de datos que permite almacenar valores mediante propiedad - valor a través de la sintaxis de llaves ({}) y separados por comas.

¿Cuándo es mejor usar objetos o arrays?

Los arrays se usan para series que poseen valores simples, mientras que los objetos son utilizadas para las series en que hay distintos objetos y propiedades con diferentes valores

¿Puedo mezclar arrays con objetos o incluso objetos con arrays? si

Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

var myArray = ['Computador', 'Monitor', 'Teclado', 'Raton', 'Lapiz', 'Cuaderno'];
function readArray(array){
	console.log(array[0])
}
readArray(myArray);

Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

let myArray = ['Computador', 'Monitor', 'Teclado', 'Raton', 'Lapiz', 'Cuaderno'];
function readArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} ${array[i]}`)
  }
}
readArray(myArray);

Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let Carro = {
    marca: 'Tesla',
    modelo: 'x3',
    año: 2020
  };
  function readObject(object) {
    for (let key in object) {
      console.log(object[key]);
       }
   }
  readObject(Carro);

## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

```¿Qué es una variable y para qué sirve?```

    Cajitas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje)

```¿Cuál es la diferencia entre declarar e inicializar una variable?```

    Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

```¿Cuál es la diferencia entre sumar números y concatenar strings?```
```¿Cuál operador me permite sumar o concatenar?```

//Respondamos las dos preguntas

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando los usamos con strings, lo que hace es unir (concatenar, así se dice) ambos strings.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: strig (@fulanito)
- Edad: number
- Correo electrónico: string (lala@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Juan David';
let apellido = 'Catro Gallego';
let username = 'juandc';
let edad = 19;
let mail = 'juanito@alcachofa.xyz';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```


## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

```¿Qué es una función?```

- R/ Las funciones nos permiten encapsular (guardar) bloques de codigo para reutilizarlos y ademas ejecutarlos en el futuro

```¿Cuándo me sirve usar una función en mi código?```

- R/ Nos sirve cuando tenemos variables o bloques de codigo muy parecidos (con cambios que podrian ser parametros o argumentos) que podemos encapsular para relutilizar mas de una vez en el futuro

Tambien nos sirve para ordenar y mejorar la legibilidad de nuestro codigo

```¿Cuál es la diferencia entre parámetros y argumentos de una función?```

-R/ Las funciones reciben parametros cuando las creamos y les enviamos argumentos cunado las ejecutamos

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```js
function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
}

function saludo(name, lastname, username) {
    const completeName = nombreCompleto(name, lastname);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");  
}
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

```¿Qué es un condicional?```

R/ Son la forma en que ejecutomos un blouqe de codigo u otro dependiendo de alguna condicion o validacion 

```¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?```

R/ IF (else y else if), Switch
El condicional if (con else y else if) nos permite hacer validaciones totalmente distintas (si asi queremos) en cada validacion o condicional. En cambio en el switch todos los cases se comparan con la misma variable o condicion que definimos en el swith


```¿Puedo combinar funciones y condicionales?```

R/ Si, las funciones pueden encapsular cualquier bloque de codigo incluyendo condicionales.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
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
```
Respuesta:

```js
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
  } else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un a;o");
  } else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  } else if(tipoDeSuscripcion == "ExpertDuo") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  } else {
    console.log("No puedes tomar nungun curso");
  }
```
### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

Respuesta

```js
      function conseguirTipoDeSuscripcion(suscripcion) {
          if (suscripcion == "Free") {
              console.log("Solo puedes tomar los cursos gratis");
              return;
          }
          if (suscripcion == "Basic") {
              console.log("Puedes tomar casi todos los cursos de Platzi durante un a;o");
              return;
          }
          if (suscripcion == "Expert") {
              console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
              return;
          }
          if(suscripcion == "ExpertDuo") {
              console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
              return;
          } 
          console.warn("Este tipo de siscripcion no existe")
        }
  ```

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```js
      const tiposDeSuscripciones = {
        free: 'Solo puedes tomar los cursos gratis',
        basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
        expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
        expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
    };

      function conseguirTipoSuscripcion(suscripcion) {
        if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
      }

     console.warn('Ese tipo de suscripción no existe')
  }

    conseguirTipoSuscripcion("free")
```

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

```¿Qué es un ciclo?```

R/
  Es la forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion.

```¿Qué tipos de ciclos existen en JavaScript?```

R/
  While, Do While y For

  While: Primero valida el codigo
  Do While: Primero ejecuta el codigo despues lo valida
  For: Nos obliga a ver que pasa al principio y al final de cada ejecucion de codigo

```¿Qué es un ciclo infinito y por qué es un problema?```

R/
  Es cuando la validacion de nuestros condicionales nunca se cumplen y termina dañando la plaicación (e.j. cuando el navegador ya no puede más de tanta ejecución de ese bloque de codigo).

```¿Puedo mezclar ciclos y condicionales?```

R/
  Si, aunque los cciclos son una especie de condicionales, nada nos impide agregar más condicionales dentro de un ciclo.


### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
```

Respuesta

```js
let i = 0;

while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}
```

```js
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

Respuesta

```js
let i = 10;

while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Respuesta

```js
  let respuesta;

  while (respuesta != "4") {
    let pregunta = prompt("Cuanto es 2 + 2?")
    respuesta = pregunta;
  }
```

> 💡 Pista: puedes usar la función prompt de JavaScript.


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

```¿Qué es un array?```

R/ Es una losta de elementos. Ejemplo: 
```js
      const array = [2, "jajaja", true, false];
```

```¿Qué es un objeto?```

R/ Es una losta de elementos, PERO cada elemento tiene un nombre clave. Ejemplo
```js
      const obj = {
        nombre: 'Fulanito',
        edad: 3,
        comidasFavoritas: ['Pollo frito', 'vegetales'],
      };
```

```¿Cuándo es mejor usar objetos o arrays?```

R/ Array es cuando lo que haremos en un elemento es lo mismo que en todos los demas (esta regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

```¿Puedo mezclar arrays con objetos o incluso objetos con arrays?```

R/ Si, los array pueden guardar objetos o incluso objetos con arrays

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

Respuesta

```js
      function imprimirPrimerElemento Array(arr) {
        console.log(arr[1])
      }
``` 

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

Respuesta

```js
      function imprimirElementoPorElemento(arr) {
        for (let i = 0; i < arr.length; i++) {
          console.log(arr[i])
        }
      }
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

Respuesta

```js
      const obj = {
        nombre: 'Fulanito',
        edad: 3,
        comidasFavoritas: ['Pollo frito', 'vegetales'],
      };

     function imprimirElementoPorElementoObjeto(obj) {
        const arr = Object.values(obj);
        for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
      }
    }

    imprimirElementoPorElementoObjeto(obj) 
```


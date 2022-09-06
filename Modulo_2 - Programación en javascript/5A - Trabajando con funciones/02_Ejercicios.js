/* Ejercicio 1: Declarar funciones
Empecemos a practicar cómo crear funciones.
Nuestra tarea es crear una función que se va a llamar ejemplo y tiene que devolver un String diciendo "hola, soy una función". */
function ejemplo() {
  return "hola, soy una función";
}

/* Ejercicio 2: Declarando funciones en variables
¡Vamos a crear una función y asignarla a una variable!
Primero creamos una variable con el nombre  ejemplo y le asignamos como valor una función. La misma debe retornar un String que diga: "hola, soy una función expresada". */

const ejemplo = function ejemplo() {
  return "hola, soy una función expresada";
};

/* Ejercicio 3: JS_funciones_parametros_a_la_función
En el ejemplo que presentamos hay una función que ya está creada, pero sucede que cuando la invocamos, no funciona. Eso es porque la función necesita ciertos parámetros y no los tiene.
Debemos modificar el código que ya está escrito para agregarle los parámetros que la función necesita. */

function saludar(nombre, apellido) {
  return "Hola, " + nombre + " " + apellido + "!";
}

/* Ejercicio 4: Declarando tres funciones
¿Se acuerdan cuando declarábamos variables para poder utilizarlas luego? Bueno, aquí podemos hacer algo similar, pero en lugar de declarar variables (estructuras que contienen información) podemos declarar funciones (estructuras que procesan información).

Escribir las siguientes tres funciones:

anterior: recibe un número como parámetro y devuelve ese número menos uno.
triple: recibe un número como parámetro y devuelve el triple de ese número.
anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, tendrá que devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).
Aclaración: este ejercicio conlleva cierta complejidad. Es normal que se tarde en llegar a la solución. */

function anterior(num1) {
  return num1 - 1;
}

function triple(num2) {
  return num2 * 3;
}

function anteriorDelTriple(num3) {
  return anterior(triple(num3));
}

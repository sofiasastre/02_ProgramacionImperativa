//* Ejercicio 1
// Crear un algoritmo que permita identificar el número mayor. Utilizar condicionales como el if, else, o else if.
// Escribir el código en el siguiente sandbox, se puede hacer directamente aquí, o presionar el botón de “abrir sandbox” el cual redirige al sitio web de Code Sandbox
//con el mismo ejercicio. Les recomendamos esta opción para que puedan guardar automáticamente el ejercicio en sus cuentas de Sandbox.

// Dado los siguientes numeros:

let num1 = 43;
let num2 = 78;
let num3 = 14;

// Crea un algoritmo que te permita identificar el numero mayor. Utiliza condicionales como el if, else, o else if.

// Escribe tu código debajo de estas lineas, y observa los resultados por la consola. especificamente para este conjunto de datos
// deberias ver por consola el numero 78, adicional, cambia los valores de num1, num2 y num3 para verificar que tu algoritmo funcione con
// cualquiera 3 valores.

function mayor3(num1, num2, num3) {
  let aux;
  if (num1 >= num2 && num1 >= num3) {
    aux = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    aux = num2;
  } else {
    aux = num3;
  }
  return aux;
}
//console.log(mayor3(num1, num2, num3));

//* Ejercicio 2
//Ahora vamos a refactorizar nuestro código con la siguiente indicación.

//Dados 4 números reales (enteros, decimales, positivos y/o negativos), ¿cómo podemos identificar el número mayor y mostrarlo por la consola? Modifiquemos el código para que ahora acepte 4 números.

// Ahora bien. dado los siguientes numeros:

let num4 = 13;
let num5 = 1663;
let num6 = 3363;
// agrega una variable mas, llamada num4 con un valor numerico

// Crea un algoritmo que te permita identificar el numero mayor de los 4 anteriores.

// Escribe tu código debajo de esta linea, y observa los resultados por la consola.
// Adicional, cambia los valores de los 4 numeros para ver que algoritmo funciona con cualquier conjunto de 4 numeros.
function mayor4(num1, num2, num3, num4) {
  let aux;
  if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
    aux = num1;
  } else if (num2 >= num1 && num2 >= num3 && num2 >= num4) {
    aux = num2;
  } else if (num3 >= num1 && num3 >= num2 && num3 >= num4) {
    aux = num2;
  }else {
    aux = num3;
  }
  return aux;
}
//console.log(mayor4(num3, num4, num5, num6));

//*Ejercicio 3
//Finalmente, vamos a crear un código que cumpla con la misma condición pero con cualquier cantidad de ingresos.

//Dada una lista de números reales, ¿cómo podemos determinar el mayor de entre ellos? Realicemos los pasos necesarios para poder encontrar al número mayor de entre una lista o arreglo.
/**
 * Extra: que puedes hacer para identificar el numero mayor de una lista de numeros, como la siguiente? Utiliza Javascript.
 *
 * Tip: es valido buscar en google :)
 *
 * Adicional: al terminar tu algoritmo, cambia los valores de la lista, bien sea agregando o removiendo, y asegurate
 * que tu algoritmo funcione con cualquier lista de numeros
 */

 const numeros = [5, 12, 2, 40, 33, 2, 80];

 function mayorAbsoluto(array){
    let aux = 0;
    for (let i = 0; i < array.length; i++) {
       if (array[i]>aux) {
        aux = array[i];
        console.log(`el número actual es ${array[i]}`);
       }
    }
    return aux;
 }
 console.log(mayorAbsoluto(numeros));

 
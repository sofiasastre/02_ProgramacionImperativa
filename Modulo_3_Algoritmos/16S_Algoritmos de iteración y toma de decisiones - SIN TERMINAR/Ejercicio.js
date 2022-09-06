/**
 * Escribir un programa que muestre por consola los números del 1 al 100, sustituyendo los
 * múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos
 * de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.
 *
 * Por ejemplo:
 *
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 */

function FizzBuzz() {
  let var1 = [];
  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      var1.push("FizzBuzz");
    } else if (i % 3 == 0) {
      var1.push("Fizz");
    } else if (i % 5 == 0) {
      var1.push("Buzz");
    } else {
      var1.push(i);
    }
  }
  return var1;
}
//console.log(FizzBuzz());

/**
 * Escriba una función que reciba dos parámetros: una array y un índice. La función mostrar por consola
 * el valor del elemento en la posición dada (basado en uno). Por ejemplo, dado el siguiente array:
 */
let array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

/**
 * Y el siguiente indice:
 */

let indice = 10;

/**
 * La funcion debera mostrar por consola el numero 6.
 */

// Extra: que pasa si cambias el valor de la variable indice a 10?
// Si tu función esta bien, deberias ver el numero 17 por consola.

// Escribe tu función debajo de esta linea.

// Invoca tu función debajo de esta linea.

function funciona(array, indice) {
  console.log(array[indice]);
}
//funciona(array, indice);

/**
 * Escribir una función que dado un número de mes devuelva la cantidad de días de ese mes (suponiendo que no es un año bisiesto).
 *
 * Por ejemplo, si invocamos la función:
 *
 * diasDelMes(1);
 *
 * Esta debera retornar el numero 31, ya que Enero tiene 31 dias.
 */

// Escribe tu función aquí:
function diasDelMes(numeroMes) {
	return 0;
}

// E invocala:
console.log(diasDelMes());
// Por ahora, la función retorna 0.
// Modifica el codigo para que retorne
// los datos correctos.
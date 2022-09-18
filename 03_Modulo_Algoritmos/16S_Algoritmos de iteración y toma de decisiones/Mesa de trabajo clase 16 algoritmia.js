//* Ejercicio 1)
//Escribir un programa que muestre por consola los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra“fizzbuzz”.
/* Por ejemplo:

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
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

//* Ejercicio 2) 
//Escriba una función que reciba dos parámetros: una array y un índice. La función mostrar por consola el valor del elemento en la posición dada (basado en uno). Por ejemplo, dado el siguiente array:

let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,100];

function posicion(array, indice) {
  let a = array[indice];
  return a;
}
//console.log(posicion(array, 8));

//* Ejercicio 3) 
//Escribir una función que, dado un número de mes, devuelva la cantidad de días de ese mes —suponiendo que no es un año bisiesto—.

function diasDelMes(numeroMes) {
  let aux;
  //*FORMA 1
	// if (numeroMes == 1 ||  numeroMes == 3 ||  numeroMes == 5 ||  numeroMes == 7 ||  numeroMes == 8 ||  numeroMes == 10 ||  numeroMes == 12) {
  //   aux = 31;
  // }else if (numeroMes == 4 ||  numeroMes == 6 ||  numeroMes == 9 ||  numeroMes == 11) {
  //   aux = 30;
  // }else{
  //   aux = 29;
  // }

  //*FORMA 2
  meses = [31,28,31,30,31,30,31,31,30,31,30,31]
  aux = meses[numeroMes-1];

  return aux;
}
console.log(diasDelMes(4));

//* Ejercicio 4)
// Escribir una función de JavaScript que invierta un número. Por ejemplo, si x = 32443, la salida debería ser 34423.
num1 = 32443;

function invertir(num1) {
  let aux;
  //aux = num.toString().split("").reverse().join("");
  aux = num1.toString().split("");
  let aux2 = []
  for (let i = 0; i < aux.length; i++) {
    aux2.unshift(aux[i])      
  }
  aux2 = aux2.join("");
  return aux2;
}
//console.log(invertir(num1));

//* Ejercicio 5)
//Escribir una función que reciba una array y solo imprima los valores que se repiten. Por ejemplo, dada la siguiente array e índice, la función imprimirá '6,23,33,100'.
let array2 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function repetidos(array) {

  //*FORMA 1
  /*
  let aux = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-1; j++) {
      if (array[j]>array[j+1]) {
        let aux2 = array[j];
        array[j] = array[j+1];
        array[j+1] = aux2;
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i]==array[i+1]) {
      aux.push(array[i])
    }
  }
  return aux;
  */
 //*FORMA 2
 function repetidos(array) {
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== i) {
      console.log(array[i]);
    }
  }
}
repetidos(array);
}

//console.log(repetidos(array2));
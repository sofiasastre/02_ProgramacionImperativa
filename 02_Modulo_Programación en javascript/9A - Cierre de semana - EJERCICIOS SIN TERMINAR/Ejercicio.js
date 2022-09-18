//*1) Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola. Recordá que para pedirle al usuario que escriba una frase debés utilizar el método prompt() y para escribir en la consola debés utilizar el método console.log(). */

// const prompt = require("prompt-sync")({ sigint: true });
// console.log(prompt('Ingresa una frase: '))

//* 2) Escribí un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación. Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".*/

// const prompt = require('prompt-sync')();
// const nombre = prompt('Ingresa tu nombre: ');
// console.log(`Hola ${nombre}!`);

//*3) Escribí un programa que le pida al usuario ingresar un número,luego le pida un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.*/

// const prompt = require('prompt-sync')();
// const num1 = parseInt(prompt('Ingresa un numero: '));
// const num2 = parseInt(prompt('Ingresa otro numero: '));

// console.log(num1+num2);

//*4) Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años" (siendo X la cantidad de años). Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999, el programa debe imprimir en la consola: “Tienes 20 años”. */

// const prompt = require('prompt-sync')();
// const num1 = parseInt(prompt('Ingresa tu año de nacimiento: '));

// var currentTime = new Date();
// var anio = currentTime.getFullYear();

// let resultado = anio - num1;
// console.log(`Tienes ${resultado} años`);

//* 5) Escribí un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario, debe imprimir "Lo siento, intenta nuevamente!" */

// function numSecreto() {
//   //llamo al prompt
//   const prompt = require("prompt-sync")({ sigint: true });

//   //Creo un número secreto
//   numeroSecret = Math.floor(Math.random() * 10 + 1);
//   console.log(`Numero secreto ${numeroSecret}`);

//   //Creo una variable, que va juntando las chances
//   let chances = 0;

//   //Creo una variable que va a cambiar cuando acierte
//   let acierto = false;

//   //Me fijo que no se le hayan terminado las chances
//   while (acierto == false) {
//     let num10 = prompt("Ingrese un número del 1 al 10 ");
//     chances = chances + 1;
//     //Me fijo si son iguales
//     if (chances <= 10) {
//       if (numeroSecret == num10) {
//         console.log(`Felicitaciones! El número que ingresaste era el correcto`);
//         console.log(`Lo conseguiste en ${chances} intentos`);
//         acierto = true;
//       } else {
//         console.log(`No acertaste, llevás ${chances} intentos`);
//       }
//     } else {
//       console.log(`Lo siento, se te terminaron las oportunidades`);
//     }
//   }
// }
// numSecreto();


//* 6) Escribí un programa que imprima los números pares del 0 al 100. */
// function paresDelCeroAlCien() {
//     for (let i = 0; i < 101; i++) {
//         if (i%2 == 0) {
//             console.log(i);
//         }
//     }
    
// }
// paresDelCeroAlCien();
/*



7) Escribí un programa que itere sobre el arreglo nombres e
imprima cada uno en la consola: const nombres = ["Pedro",
"Pablo", "Maria", "Juan", "Diana"];
8) Construí un pseudocódigo que permita ingresar un número, si
el número es mayor de 500, se debe calcular y mostrar en
pantalla el 18% de este.
9) Escribí una función llamada elemento que recibe un arreglo
como parámetro. La función debe devolver el valor que se
encuentra en la tercera posición. Si el arreglo no tiene al menos
3 elementos deberá retornar -1.
10) Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras.
11) Hacer un algoritmo que muestre el promedio de varias
notas o de N notas ingresadas, se debe definir el valor de N
para conocer la cantidad de notas a ingresar.
12) Hacer un programa que calcule la suma de los N primeros
números naturales, dónde N es el número límite ingresado por
teclado.

*/

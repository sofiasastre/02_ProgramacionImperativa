//*1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.*/

//NO ANDA
// const prompt = require("prompt-sync")({ sigint: true });
// function diezNumerosSiguientes() {
//     let num1 = prompt ("Ingrese un número");
//     for (i = 0; i <= i+10; i++) {
//         console.log(`Imprimo ${num1}`);
//         num1++;
//     }
// }
// diezNumerosSiguientes()

// function diezNumerosSiguientes(numero) {
//     for (i = numero; i <= numero + 10; i ++)
//     {
// 		console.log(i);
// 	}
// }
// diezNumerosSiguientes(15);

//* 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.*/
// function tresEnTres(){
// 	for (let index = 5; index <= 20; index = index + 3) {
// 		console.log(index);
// 	}
// }
// tresEnTres();

//*3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100 */

// function deCeroaCien (){
// 	let suma = 0;
// 	for (let i = 0; i <= 100; i++) {
//         suma = suma + i;
//         console.log(suma);
// 	}
// }
// deCeroaCien();

//*4) Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número. */

// function factoria (num){
// 	let res = 1;
// 	if (num > 0 && Number.isInteger(num)) {
// 		for (let i = 1; i <= num; i++){
//             console.log(`res antes ${res}`);
// 			res = res * i;
//             console.log(`res es ${res} y i es ${i}`);
// 		}
// 	}
// 	console.log(res);
// }
// factoria(4);

//*5) Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.*/

// function fibonacci(num) {
// 	let a = 0;
// 	let b = 1; 
// 	let total=0;
// 	console.log(a);
// 	console.log(b);
// 	for (let i = 0; i < num; i++) {
// 		console.log("este es el i: " + i);
// 		if(total<num)
// 		{
// 			total =a+b;
// 			a=b;
// 			b=total;
// 			console.log("esto es el total: " + a + " + " + b + " = " + total)
// 		}
// 	}
// }
// fibonacci(40);
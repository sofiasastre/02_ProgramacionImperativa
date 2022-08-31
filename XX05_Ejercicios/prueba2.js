function noParesDeContarImparesHasta(numero){
	let variable = 0;
    for (let index = 0; index <= numero; index++) {
		if(index % 2!==0){
			variable =  variable+1;
		}
    }
	console.log(variable);
}
noParesDeContarImparesHasta(8);

/*Ejercicio1 
Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log().*/


const prompt = require('prompt-sync')();
console.log(prompt('Ingresa una frase: '))


/*2) Escribí un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de
exclamación. Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".
*/
const prompt = require('prompt-sync')();
const nombre = prompt('Ingresa tu nombre: ');

console.log(`Hola ${nombre}!`);

function tablaDeMultiplicar(numero) {
	let i = 0;
	while (i<=10) {
		let a = numero * i;
		console.log(i + " * " + numero + " = " + a);

		i ++;
	}
	}
tablaDeMultiplicar(1);

ARRAYS
let nombres = ["Nacho", "Darío" , "Javier"];
let edades = [34, 57, 48];
let valoresDeVerdad = [true, false, false];
let variados = ["Nacho", 56, true, false, edades]; 

console.log(valoresDeVerdad);
console.log(valoresDeVerdad[2]);
console.log(variados[4]);
console.log(variados[4][1]);


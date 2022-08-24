// let dia = 'jueves'
// function finDeSemana (dia) 
// {
// 	switch((dia))
// 	{	
// 	case 'lunes':	
//     	console.log('tenés clases');
// 		break;
// 	case 'miercoles':
//     	console.log('tenés clases');
// 		break;
//     case 'viernes':
//         console.log('tenés clases');
//         break;
// 	default:
//     	console.log('no tenés clases');
			
// 	}
// }
// function loro (variable)
// {
//     for (let index = 0; index < 5; index++) {
//         console.log(variable);	
//     }
// }

// loro ("hola como estas");
/*
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
*/
/*
function tresEnTres(){
	for (let index = 5; index < 20; index = index + 3) {
		console.log(index);
	}
}
tresEnTres();
*/
/*
function diezNumerosSiguientes(numero) {
    for (i = numero; i <= numero + 10; i ++)
    {
		console.log(i);
	}
}
diezNumerosSiguientes(10);
*/
/*
function deCeroaCien (){
	let suma = 0;
	for (let i = 0; i <= 100; i++) {
	  suma = suma + i;
	}
	console.log(suma);
}
deCeroaCien();
*/
/*
function factoria (num){
	let res = 1;
	if (num > 0 && Number.isInteger(num)) {
		for (let i = 1; i <= num; i++){
			res = res + i;
		}
		
	}
	console.log(res);
}
factoria(10);
*/

//const prompt = require('prompt-sync')();

/*
function fibonacci(num) {
	let a = 0;
	let b = 1; 
	let total=0;
	console.log(a);
	console.log(b);
	for (let i = 0; i < num; i++) {
		console.log("este es el i: " + i);
		if(total<num)
		{
			total =a+b;
			a=b;
			b=total;
			console.log("esto es el total: " + a + " + " + b + " = " + total)
		}
	}
}
fibonacci(40);*/

/*Ejercicio1 
Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log().*/
/*
const prompt = require('prompt-sync')();
console.log(prompt('Ingresa una frase: '))
*/

/*2) Escribí un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de
exclamación. Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".
*/
/*
const prompt = require('prompt-sync')();
const nombre = prompt('Ingresa tu nombre: ');

console.log(`Hola ${nombre}!`);
*/
/*
function tablaDeMultiplicar(numero) {
	let i = 0;
	while (i<=10) {
		let a = numero * i;
		console.log(i + " * " + numero + " = " + a);

		i ++;
	}
	}
tablaDeMultiplicar(1);
*/
/*ARRAYS
let nombres = ["Nacho", "Darío" , "Javier"];
let edades = [34, 57, 48];
let valoresDeVerdad = [true, false, false];
let variados = ["Nacho", 56, true, false, edades]; 

console.log(valoresDeVerdad);
console.log(valoresDeVerdad[2]);
console.log(variados[4]);
console.log(variados[4][1]);
*/

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


/*2) Escribí un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de
exclamación. Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".
*/


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


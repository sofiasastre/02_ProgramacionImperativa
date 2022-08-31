//*Ejercicio 1: Estructura for1 - Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite! La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola. */

function loro (texto)
{
    for (let index = 0; index < 5; index++) {
        console.log(texto);	
    }
}

//*Ejercicio 2: Estructura for 2 ¡Vamos a crear una función interesante! - En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for . */

function noParesDeContarImparesHasta(numero){
	let variable = 0;
    for (let index = 0; index <= numero; index++) {
		if(index % 2!==0){
			variable =  variable+1;
		}
    }
    return variable;
}


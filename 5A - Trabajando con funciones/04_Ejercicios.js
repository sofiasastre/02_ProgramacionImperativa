/* Ejercicio 1: convertir a arrow
Empecemos por practicar la sintaxis de una arrow function que no recibe parámetros.
Para este ejercicio vamos a dar tres funciones ya definidas. Nuestro trabajo será cambiarle la sintaxis y volver a escribirlas para que sean funciones de tipo arrow. */
let dameCinco =()=> [1,2,3,4,5];
let multiplicarPorDos = () => 123 * 2 ;
let mostrarNombre = () => "Mi nombre es Hernán";

/* Ejercicio 2: convertir a arrow 2 (con parámetro)
Ahora nuestro trabajo será refactorizar la función saludar() que recibe un parámetro, es decir, escribirla con la sintaxis necesaria para convertirla en una arrow function. */
let saludar = nombre => 'Hola, ' + nombre + '!';

/* Ejercicio 3: convertir a arrow 2 (con mas parámetros)
¡Vamos a pasar nuestra función declarada a una arrow!

Y sí, solo nos falta practicar la sintaxis de una arrow function que reciba más de un parámetro. Tomemos la función saludar(), que esta vez recibe un nombre y un apellido, y veamos de convertirla en una arrow function. */

let  saludar2 = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';


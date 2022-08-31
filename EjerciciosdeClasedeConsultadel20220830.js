//* Ejercicio 1 - Crear una función que reciba un número por parámetro. La función tendrá que verificar que ese número sea múltiplo de 5 y además que sea un número par, si eso se cumple, retornar verdadero, de lo contrario falso */

// //TIPO DE FUNCIÓN DECLARADA
//     function verificarNumero( num ) {
//         //IF ELSE 
//         if(num % 2 == 0 && num % 5 == 0 ){
//             console.log(`El número ${num} es par y múltiplo de 5`);
//             return true
//         }else{
//             console.log(`El número ${num} no es par, ni múltiplo de 5`);
//             return false
//         }
//     }

// //guardo el resultado en una variable
//     let resultadoNumero = verificarNumero (10)
//     console.log(`=== Hecho con el IF ELSE ===`);
//     console.log(resultadoNumero);

// //TIPO DE FUNCIÓN FLECHA
//     const verificador = num => {
//         //IF TERNARIO
//         // CONDICION / TRUE / FALSE
//         return num % 2 == 0 && num % 5 == 0 ? true : false
//     }
// //guardo el resultado en una variable
//     let resultadoConFlecha = verificador(4)
//     console.log(`=== Hecho con el IF ternario ===`);
//     console.log(resultadoConFlecha);
// //DECLARAR UN NUMERO PAR
//     let numero = 11
//     console.log(`=== Muestro si ${numero} es par ===`);
//     console.log(numero % 2 == 0)

// //DECLARAR UN NUMERO IMPAR
//     let numero2 = 12
//     console.log(`=== Muestro si ${numero2} es impar ===`);
//     console.log(numero2 % 2 !== 0)

// //MULTIPLO DE 5
//     let numero3 = 10
//     console.log(`=== Muestro si ${numero3} es impar ===`);
//     console.log(numero3 % 5 == 0);

// //EJEMPLO DE IF TERNARIO
//     let clima = "lluvioso"
//     let mamaSalgoConParaguas = clima === "lluvioso" ? "si, llevalo" : "no, no hace falta";
//     console.log(`==== Ejemplo de If Ternario ===`);
//     console.log(mamaSalgoConParaguas);

//* Ejercicio 2 - Crear una función que reciba un string por parámetros, luego trabajaremos con ese string para que la función nos diga si la palabra es corta, mediana o larga. Las palabras cortas son aquellas que tienen menos de 4 letras. Las palabras medianas son aquellas que tienen 4 o más letras pero menos que 8 y las palabras largas son aquellas que tienen 8 o más letras */

// a la funciones flechas, las guardo en una variable para poder invocarlas nuevamente, al igual que a las funciones expresadas. No así con las funciones declaradas, que ya en su estructura tienen el nombre para poder invocarla luego

// const verificarPalabra = ( str ) => {
//     if ( str.length < 4 ) {
//         return 'La palabra es corta'
//     } else if ( str.length < 8){
//         return 'La palabra es mediana'
//     }else{
//         return 'La palabra es larga'
//     }
// }
// let tipoPalabra = verificarPalabra ('hola')
// console.log(tipoPalabra);


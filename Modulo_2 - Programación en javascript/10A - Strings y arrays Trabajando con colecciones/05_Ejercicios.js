//* Ejercicio 1: JS Funciones URL completa - Debemos crear una función llamada dominio que recibirá un string como "digitalhouse.com.ar" y su función será retornar: "http://www.digitalhouse.com.ar". */

// function dominio(url){
//     console.log('http://www.'+url);
// }
// dominio('digitalhouse.com.ar')

//* Ejercicio 2: JS_funciones_contar_caracteres - Lo primero que necesitamos es declarar una variable llamada texto, asignándole como valor un texto (string), el que queramos. Luego, utilizando la propiedad length, tendremos que imprimir en consola el total de caracteres que contiene la frase. */

// let texto = 'Hola mundo!';
// console.log(texto.length);

//* Ejercicio 3: JS_funciones_reemplazo_fast_fast - Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:
/*
1. Un texto.

2. La palabra que vamos a buscar para reemplazar.

3. La palabra que vamos a usar para reemplazar.

La función deberá devolver el texto con la palabra reemplazada.

Ejemplo:

let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones) //'Este texto es buena onda' */

function remplazoFastFast(texto, palabra, remplazo) {
    let textoModificado = texto.replace(palabra,remplazo);
    return (textoModificado);
}

//* Ejercicio 4: JS_funciones_estan_hablando_de_mi - Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto menciona una palabra en particular. Para lograrlo, tendremos que crear una función llamada menciona, que recibirá dos parámetros: un texto —que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se menciona en el texto—. La misma función retorna true en el caso de encontrar la palabra. */

function menciona(texto,palabra){
    let esta = texto.includes(palabra);
    return esta;
}
menciona("Hola mundo","Hola");

//* Ejercicio 5: JS Funciones solo el nombre - Teniendo como punto de partida la cadena de texto '¡Hola!, soy Carli', almacenada en la variable 'frase' deberemos recortarla para poder obtener el nombre 'Carli' en una nueva variable llamada licenciada. IMPORTANTE: Para la resolución tendremos que usar la función slice(). */

// let frase = 'Hola!, soy Carli';
// let licenciada = frase.slice(11);
// console.log(licenciada);
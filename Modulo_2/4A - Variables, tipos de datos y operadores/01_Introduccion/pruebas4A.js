/* Para instalar el promp tirar la linea "npm i prompt-sync" en la consola */

const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt ("Ingrese su nombre");
console.log(`Hola ${nombre}!!!`);

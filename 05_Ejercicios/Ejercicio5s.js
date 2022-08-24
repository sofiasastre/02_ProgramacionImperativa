//Micro Desafio 1

function test1(x,y){
    return y-x;
}

console.log(test1(10,40));

//Micro Desafio 2
function test2(x,y){
    return x*2;
    console.log(x)
    return x/2
}

console.log(test2(10))

//Funciones Simples 1
function centimetro (pulgada){
    return 2.54 * pulgada;
}
console.log(centimetro(2));
//Misma función pero modo arrow
const centimetros = (pulgada) => 2.54 * pulgada;
console.log(centimetros(1));

//Funciones Simples 2
const url = (nombre) => 'http://www.' + nombre + '.com';
console.log(url("sofia"));

//Funciones Simples 3
const admiracion = (frase) => frase + '!';
console.log(admiracion("En un lugar de la mancha"));

//Funciones Simples 4
const miEdadPerro = (edad) => edad*7;
console.log(miEdadPerro(31));

//Funciones Simples 5
const valorHoraTrabajo = (sueldo) => {
    const horasLaborales = 40;
    let valorHora = sueldo / horasLaborales;
    return valorHora;
}
console.log(valorHoraTrabajo(10000));

//Funciones Simples 6
const calculadorIMC = (altura,peso) => peso/((altura/100)^2); 
console.log(calculadorIMC(160,71));

//Funciones Extra 7
const convEnMayus = (frase2) => frase2.toUpperCase();
console.log(convEnMayus("un sueño soñaba anoche"));

//Funciones Extra 8
const queTipoEs = (elemento) => typeof(elemento);
console.log(queTipoEs(2));
console.log(queTipoEs("hola"));
console.log(queTipoEs(new Date()));
console.log(queTipoEs(valorHoraTrabajo));
console.log(queTipoEs(true));

//Funciones Extra 9
const circunferencia = (radio) => 2*Math.PI*radio;
console.log(circunferencia(2));

const prompt = require("prompt-sync")({sigint: true});

let nombre = prompt("Ingrese su nombre");
console.log ("Hola" +" "+ nombre);
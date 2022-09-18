//* Ejercicios - */
//* 1. A partir de el siguiente array de edades nos solicitan realizar lo siguiente: */

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

//*  a. Obtener en un nuevo array las edades menores a 18 */
//Funcion que me va a guardar los elementos del array edades en un nuevo array llamado ArrayMenores
function agrupoEdadesMenores(array1) {
  // creo una variable array para ir guardando los elementos menores a 18
  let arrayMenores = [];

  //Hago un for para reccorrer 1 a 1 los valores del array
  for (let i = 0; i < array1.length; i++) {
    //Me fijo si el valor actual es menor que 18
    if (array1[i] < 18) {
      //Si lo es, lo sumo al arrayMenores
      arrayMenores.push(array1[i]);
    }
  }
  console.log(`=== El arrayMenores quedó así: === `);
  console.log(arrayMenores);
}
// agrupoEdadesMenores(edades);

//* b. Obtener en un nuevo array las edades mayor o igual a 18 */
function agrupoEdadesMayores(array1) {
  // creo una variable array para ir guardando los elementos menores a 18
  let arrayMayores = [];

  //Hago un for para reccorrer 1 a 1 los valores del array
  for (let i = 0; i < array1.length; i++) {
    //Me fijo si el valor actual es menor que 18
    if (array1[i] >= 18) {
      //Si lo es, lo sumo al arrayMenores
      arrayMayores.push(array1[i]);
    }
  }
  console.log(`=== El arrayMayores quedó así: === `);
  console.log(arrayMayores);
}
// agrupoEdadesMayores(edades);

//* c. Obtener en un nuevo array las edades igual a 18 */
function igualesA(array1) {
  // creo una variable array para ir guardando los elementos menores a 18
  let arrayIguales = [];

  //Hago un for para reccorrer 1 a 1 los valores del array
  for (let i = 0; i < array1.length; i++) {
    //Me fijo si el valor actual es igual a 18
    if (array1[i] == 18) {
      //Si lo es, lo sumo a la variable cantidad
      arrayIguales.push(array1[i]);
    }
  }
  console.log(`=== Cantidad de personas con edad = 18 === `);
  console.log(arrayIguales);
}
//igualesA(edades);

//* d. Obtener el menor. */
function obtenerMenor(array1) {
  let acumulador = 0;
  for (let i = 0; i < array1.length; i++) {
    acumulador = array1[0];
    if (acumulador > array1[i]) {
      acumulador = array1[i];
    }
  }
  console.log(`=== El valor menor es === `);
  return acumulador;
}
//let resultado2 = obtenerMenor(edades)
//console.log(resultado2);

//* e. Obtener el mayor. */
function obtenerMayor(array1) {
  let acumulador = 0;
  for (let i = 0; i < array1.length; i++) {
    if (acumulador < array1[i]) {
      acumulador = array1[i];
    }
  }
  console.log(`=== El valor mayor es === `);
  return acumulador;
}
// let resultado = obtenerMayor(edades)
// console.log(resultado);

//* f. Obtener el promedio de edades*/
function promedioEdades(array) {
  let contador = 0;

  for (let i = 0; i < array.length; i++) {
    contador = contador + array[i];
  }
  console.log(`el promedio es: ${contador / array.length}`);
}
//promedioEdades(edades)

//* g. Incrementar en 1 todas las edades. */
function incrementarEnUno(array) {
  for (let i = 0; i < array.length; i++) {
    //array[i]= array[i]+1;
    array[i] += 1;
  }
  console.log(`=== El array incrementado es === `);
  console.log(array);
}
//incrementarEnUno(edades)

//* PARTE 2 */
const edadesGrupo1 = [21, 12, 15, 18, 25];
const edadesGrupo2 = [2, 11, 54, 63, 24];

/*
Observamos que es un array por su sintaxis que comienza y termina con corchetes []
y sus elementos tienen la sintaxis de objetos literales {}
Entonces, podemos decir que tenemos una array de objetos literales,
o una colección de objetos literales
*/
const arrayDeObjetosLiterales = [{}, {}, {}, {}];

//* Ejercicio 2 */

const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: "$3,253.40",
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: "$3,229.45",
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: "$1,360.19",
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: "$3,627.12",
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: "$1,616.52",
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: "$1,408.68",
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];
//*  a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
function edadesMenoresTreinta(array) {
    let arrayMenorTreinta = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular<30) {
            arrayMenorTreinta.push(array[i])
        }
    }
    return arrayMenorTreinta;
}
// let resultado3 = edadesMenoresTreinta(arrayCuentas)
// console.log(resultado3);

//* b. Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30
function edadesMayoresTreinta(array) {
    let arrayMayorTreinta = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular>=30) {
            arrayMayorTreinta.push(array[i])
        }
    }
    return arrayMayorTreinta;
}
// let resultado3 = edadesMayoresTreinta(arrayCuentas)
// console.log(resultado3);
let array = [ 
    { 
        'nombre': 'Lean', 
        'edad': 27
    }, 
    { 
        'nombre': 'Eze', 
        'edad': 49
    } 
]


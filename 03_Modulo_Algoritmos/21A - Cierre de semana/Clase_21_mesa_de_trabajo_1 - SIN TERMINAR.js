//* 1. Desarrollar una función que reciba un array e indique si se encuentran ordenados de menor a mayor o no.
/* a. si están ordenados retornar true
/* b. caso contrario retorna false 
/* ejemplos de arrays
/* [4,9,2,5,6,7,1,2] // false
/* [1,2,3,4,5,6,7,8] // true
*/
arraya = [4, 9, 2, 5, 6, 7, 1, 2];
arrayb = [1, 2, 3, 4, 5, 6, 7, 8];

function ordenados(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}
let a = ordenados(arraya);
//console.log(a);

//* 2. Desarrollar una función que genere una matriz, deberá recibir por parámetros la
//* cantidad de filas y columnas y retornar con valores secuenciales numéricos

function generarMatriz(a, b) {
  let matriz = [];
  let contador = 1;
  for (let i = 0; i < a; i++) {
    matriz.push([]);
    for (let j = 0; j < b; j++) {
      matriz[i].push(contador);
      contador++;
    }
  }
  return matriz;
}
//console.table(generarMatriz(3,4));

//* 3. Dado él siguiente array de personas
const personas = [
  {
    nombre: "Arlene Barr",
    legajo: 3955,
    edad: 33,
  },
  {
    nombre: "Roslyn Torres",
    legajo: 3925,
    edad: 27,
  },
  {
    nombre: "Cleo Lopez",
    legajo: 1965,
    edad: 34,
  },
  {
    nombre: "Daniel Malone",
    legajo: 3925,
    edad: 30,
  },
  {
    nombre: "Ethel Leon",
    legajo: 1915,
    edad: 34,
  },
  {
    nombre: "Harding Mitchell",
    legajo: 1905,
    edad: 25,
  },
];
/*
- Desarrollar una función llamada orderAscLegajo que reciba por parámetro él array de personas y realice un ordenamiento de forma ascendente
- Desarrollar una función llamada orderDescLegajo que reciba por parámetro él array de personas y realice un ordenamiento de forma descendente
- Pensar de qué forma se puede realizar los dos ítems anteriores en una sola función
- Desarrollar una función llamada orderAscLegajo que reciba por parámetro él array de personas y realice un ordenamiento de forma ascendente
- Desarrollar una función llamada orderDescLegajo que reciba por parámetro él array de personas y realice un ordenamiento de forma descendente
- Pensar de qué forma se puede realizar los dos ítems anteriores en una sola función
*/
function swap(array, j) {
  let aux = array[j];
  array[j] = array[j + 1];
  array[j + 1] = aux;
}

function orderLegajo(array, propiedad, orden) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (orden === "desc") {
        if (array[j][propiedad] < array[j + 1][propiedad]) {
          swap(array, j);
        }
      } else if (orden === "asc") {
        if (array[j][propiedad] > array[j + 1][propiedad]) {
          swap(array, j);
        }
      }
    }
  }
}


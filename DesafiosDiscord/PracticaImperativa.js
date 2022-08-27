//* A - Nivel 1
//? 1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos
let suma = (num1, num2) => num1 + num2;
let res = suma(5, 4);

//? 2 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos, si el primer parametro es mayor,
//?    caso contrario retornar la resta.
function sumaOResta(num3, num4) {
  if (num3 > num4) {
    return num3 + num4;
  } else {
    return num3 - num4;
  }
}
let res2 = sumaOResta(4, 5);

//? 3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total si el resultado es mayor o igual a 7,
//?    retornar 'Aprobado', caso contrario retornar 'otra chance '.
function ejercicioTres(num5, num6, num7, num8) {
  let res3 = num5 + num6 + num7 + num8;
  if (res3 >= 7) {
    return "Aprobado";
  } else {
    return "otra chance";
  }
}

//? 4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total si el el resultado es par, retornar
//?    la mitad del total, caso contrario retornar el doble del total.

function ejercicioCuatro(num9, num10, num11, num12) {
  let res4 = num9 + num10 + num11 + num12;
  if (res4 % 2 == 0) {
    return res4 / 2;
  } else {
    return res4 * 2;
  }
}

//* B  Nivel 2

//? Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:
let edades = [10, 9, 8];
let edades1 = [22, 55, 80];
let edades2 = [5, 63, 29];
//? 1 - Funcion que reciba un array de edades y retorne el promedio
function promedioArrays(array1) {
  let contador = 0;
  for (let i = 0; i < array1.length; i++) {
    contador = contador + array1[i];
  }
  return contador;
}
//? 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80
function maxArrays(array1) {
  let res4 = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i]>res4) {
        res4 = array1[i];
    }
    else{
        return res4;
    }
    console.log("res4 = "+res4);
    console.log("array1[i] = "+array1[i]);
    return res4;
  }
}
maxArrays(edades1);
//? 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5
//? 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
//? 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario
//? 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
/*  {
      edadesMenor : "// edades menor a 18",  
      edadesMayor : "// edades menor a 18"
   }
/*
//* C  Nivel 3

1 - Desarrollar un objeto literal que contenga 5 propiedades que sean del siguiente tipo:
   - 2 String   
   - 1 Boolean
   - 1 Number
   - 1 Array
   - 1 Metodo que retorne un saludito
    * por ejemplo:
    
     let canHijo = {
       nombre : 'Negrito',
       color  : 'Negrito',
       estaVacunado : true,
       edad : 10,
       vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
       saludo: function(){
           return 'wouf wouf wouf..'
       } 
     }
    
  - Luego desarrollar una funcion que liste individualmente los elementos de la propiedad del tipo Array 


2 - Dado el Siguiente array de personas desarrollar funciones:
  - Funcion que reciba el array de personas y liste el nombre de cada una. 
  - Funcion que reciba el array de personas y retorne en un array los que son programadores.
  - Funcion que reciba el array de personas y un id a buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null
  - Funcion que reciba el array de personas y un id a buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null 


[
    {
      "id": 0,
      "isProgrammer": true,
      "age": 28,
      "name": "Harrington Curry",
      "company": "TRANSLINK",
      "favoriteFruit": "strawberry"
    },
    {
      "id": 1,
      "isProgrammer": false,
      "age": 38,
      "name": "Greta Morton",
      "company": "PYRAMI",
      "favoriteFruit": "apple"
    },
    {
      "id": 2,
      "isProgrammer": false,
      "age": 32,
      "name": "Hester Bowen",
      "company": "TURNABOUT",
      "favoriteFruit": "apple"
    },
    {
      "id": 3,
      "isProgrammer": false,
      "age": 25,
      "name": "Melendez Mcfarland",
      "company": "XSPORTS",
      "favoriteFruit": "strawberry"
    },
    {
      "id": 4,
      "isProgrammer": false,
      "age": 31,
      "name": "Kimberly Matthews",
      "company": "KNOWLYSIS",
      "favoriteFruit": "banana"
    },
    {
      "id": 5,
      "isProgrammer": false,
      "age": 36,
      "name": "Hardin Sims",
      "company": "SEALOUD",
      "favoriteFruit": "banana"
    },
    {
      "id": 6,
      "isProgrammer": false,
      "age": 29,
      "name": "Natalia Huff",
      "company": "ENERSOL",
      "favoriteFruit": "apple"
    }
  ]


Tips

* Es para que practiquen sintaxis ademas del pensamiento computacional, piensen tipo de datos posibles.
* Desarrollen y lean enunciados en voz alta, utilicen abstracción, vean las alternativas de llegar al mismo resultado de diferentes formas


nota : Se recomienda utilizar estructuras y conceptos vistos en la materia
*/

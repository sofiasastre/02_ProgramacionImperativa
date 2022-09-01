/*  
* Dejo Desafío para quien quiera practicar, 
- En caso de resolverlo sin problemas reaccionar con :white_check_mark:, 
- Caso  contrario,  consultar en este canal la duda acompañada con algo  código, *`Buen código`*```js

A - Nivel 1

1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos 
*/

const nivel_1_A = (a, b) => a + b;

console.log('Nivel 1 A Resultado', nivel_1_A(8, 2));
/* 
2 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos, si el primer parametro es mayor, caso contrario retornar la resta. 
*/

const nivel_2_A = (a, b) => a > b ? a + b : a - b;

console.log('Nivel 2 A Resultado ', nivel_2_A(2, 5));

/* 3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total si el el resultado es mayor o igual a 7, retornar 'Aprobado', caso contrario retornar 'otra chance '.
 */

const nivel_3_A = (n1, n2, n3, n4) => (n1 + n2 + n3 + n4) > 7 ? 'Aprobado' : 'Otra chance';

console.log('Nivel 3 A Resultado ', nivel_3_A(1, 2, 3, 4));

/*      
4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total si el el resultado es par, retornar la mitad del total, caso contrario retornar el doble del total.
*/

const nivel_4_A = (n1, n2, n3, n4) => ((n1 + n2 + n3 + n4) % 2) === 0 ? (n1 + n2 + n3 + n4) / 2 : (n1 + n2 + n3 + n4) * 2;

console.log('Nivel 4 A Resultado ', nivel_4_A(1, 2, 3, 4));

/* B  Nivel 2
    - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9], luego desarrollar las siguientes funciones:

1 - Funcion que reciba un array de edades y retorne el promedio
2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80
3 - Funcion que reciba un array de edades y retorne el menor elemento // 5
4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario
6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
{
    edadesMenor: "// edades menor a 18",
        edadesMayor : "// edades menor a 18"
}
 */

const primerArray = [];
const segundoArray = [];
const tercerArray = [];

for (let index = 0; index < 10; index++) {
    primerArray.push(Math.floor(Math.random() * 100));
    segundoArray.push(Math.floor(Math.random() * 100));
    tercerArray.push(Math.floor(Math.random() * 100));
}

/* 1 - Funcion que reciba un array de edades y retorne el promedio */
const nivel_1_B = (array) => {
    console.log('Nivel 1 B Array');
    console.table(array);
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }

    return ` El promedio es de ${total / array.length}`;
}

console.log('Nivel 1 B Resultado ', nivel_1_B(primerArray));



/* 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80 */
const nivel_2_B = (array) => {
    console.log('Nivel 2 B Array');
    console.table(array);
    let mayorElemento = 0;

    for (let i = 0; i < array.length; i++) {
        if (mayorElemento < array[i]) mayorElemento = array[i];
    }

    return mayorElemento;
}

console.log('Nivel 2 B Resultado ', nivel_2_B(segundoArray));



/* 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5 */
const nivel_3_B = (array) => {
    console.log('Nivel 3 B Array');
    console.table(array);
    let menorElemento = 100;

    for (let i = 0; i < array.length; i++) {
        if (menorElemento > array[i]) menorElemento = array[i];
    }

    return menorElemento;
}

console.log('Nivel 3 B Resultado ', nivel_3_B(tercerArray));




/* 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario */
const nivel_4_B = (array) => {
    console.log('Nivel 4 B Array');
    console.table(array);
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return [true, array[i], array[j]];
            }
        }
    }
    return false;
}

console.log('Nivel 4 B Resultado ', nivel_4_B(primerArray));




/* 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario */
const nivel_5_B = (array, buscarEdad) => {
    console.log('Nivel 5 B Array');
    console.table(array);

    const resultado = array.indexOf(buscarEdad);

    return resultado !== -1 ? resultado : null;
}

console.log('Nivel 5 B Resultado ', nivel_5_B(segundoArray, 20));



/* 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array */
const nivel_6_B = (array) => {
    console.log('Nivel 6 B Array');
    console.table(array);

    const edadesMenor = [];
    const edadesMayor = [];

    for (let i = 0; i < array.length; i++) {
        array[i] >= 18 ? edadesMayor.push(array[i]) : edadesMenor.push(array[i]);
    }

    return {
        edadesMenor: edadesMenor,
        edadesMayor: edadesMayor
    }
}

console.log('Nivel 6 B Resultado ', nivel_6_B(tercerArray));


/* C  Nivel 3

1 - Desarrollar un objeto literal que contenga 5 propiedades que sean del siguiente tipo:
- 2 String
    - 1 Boolean
        - 1 Number
            - 1 Array
                - 1 Metodo que retorne un saludito
                    * por ejemplo:

                - Luego desarrollar una funcion que liste individualmente los elementos de la propiedad del tipo Array
                */

const canHijo = {
    nombre: 'Negrito',
    color: 'Negrito',
    estaVacunado: true,
    edad: 10,
    vacunas: ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
    saludo: function () {
        return 'wouf wouf wouf..'
    }
}

function listaCadaPropiedad(object) {
    for (let i = 0; i < object.vacunas.length; i++) {
        return object.vacunas[i];
    }
}
console.log('Nivel 1 C es >> ', listaCadaPropiedad(canHijo));


/* 
2 - Dado el Siguiente array de personas desarrollar funciones:
- Funcion que reciba el array de personas y liste el nombre de cada una. 
  - Funcion que reciba el array de personas y retorne en un array los que son programadores.
  - Funcion que reciba el array de personas y un id a buscar,
    retorne la persona en caso de encontrar,
        caso contrario retorne null
            - Funcion que reciba el array de personas y un id a buscar,
                retorne la persona en caso de encontrar,
                    caso contrario retorne null
                    */
const ultimoArray = [
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



function listaDeNombres(array) {

    for (let i = 0; i < array.length; i++) {
        return array[i].name;
    }

}
console.log('Nivel 2 C Resultado Primer Funcion es >> ', listaDeNombres(ultimoArray));



function losProgramadores(array) {

    const arrayDeProgramadores = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i].isProgrammer === true) arrayDeProgramadores.push(array[i])

    }

    console.log(arrayDeProgramadores);

    return arrayDeProgramadores;
}
console.log('Nivel 2 C Resultado Segunda Funcion ', losProgramadores(ultimoArray));




function encontrarUsuario(array, id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return array[i];
    }
}
console.log('Nivel 2 C Resultado Tercer Funcion ', encontrarUsuario(ultimoArray, 3));


/* Tips

    * Es para que practiquen sintaxis ademas del pensamiento computacional, piensen tipo de datos posibles.
* Desarrollen y lean enunciados en voz alta, utilicen abstracción, vean las alternativas de llegar al mismo resultado de diferentes formas


nota: Se recomienda utilizar estructuras y conceptos vistos en la materia
 */
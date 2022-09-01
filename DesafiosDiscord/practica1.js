//* Desarrollar una función que reciba el array por parametro y retorne un objeto como indica el siguiente código */

let numeros = [1, 2, 3, 4, 5, 6];

//desarrolle la función
function separador(array) {
    let todo = { 
        pares: [],
        impares: []
    };
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 == 0) {
            todo.pares.push(array[i]);
        }else{
            todo.impares.push(array[i]);
        }
    }
    return todo;
}
console.table(separador(numeros));

//retorno esperado de la funcion
/*
{
    impares: [1,3,5]
    pares:   [2,4,6]
}
*/


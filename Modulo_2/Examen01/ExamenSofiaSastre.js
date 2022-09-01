//* Ejercicio 1
function restarPares(num1, num2) {
  let resta;
  if (num1 % 2 == 0 && num2 % 2 == 0) {
    resta = num2 - num1;
    return resta;
  } else {
    return "Lo siento, uno de los parámetros no es par";
  }
}
// let res = restarPares( 2,6)
// console.log(res);

//*Ejercicio 2
function controlRecital(edad, ticket) {
  if (ticket == true && edad >= 18) {
    return true;
  } else if (ticket == true && edad < 18) {
    return "Sólo puedes acceder con un adulto acompañante";
  } else if (ticket == false) {
    return false;
  }
}

// let res = controlRecital(18,false);
// console.log(res);

//*Ejercicio 3

let productos = [
  {
    producto: "remera",
    tipo: "indumentaria",
    precio: 2100,
  },
  {
    producto: "notebook",
    tipo: "tecnologia",
    precio: 200000,
  },
  {
    producto: "celular",
    tipo: "tecnologia",
    precio: 27000,
  },
  {
    producto: "protector solar",
    tipo: "cosmetica",
    precio: 2500,
  },
  {
    producto: "pantalon",
    tipo: "indumentaria",
    precio: 7500,
  },
  {
    producto: "tablet",
    tipo: "tecnologia",
    precio: 60000,
  },
];

function tecnoMayorIgualaCincoMil(array) {
  let resultadoFinal = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].tipo == "tecnologia" && array[i].precio >= 50000) {
      resultadoFinal.push(array[i]);
    }
  }
  return resultadoFinal;
}

// let res = tecnoMayorIgualaCincoMil(productos);
// console.table(res);


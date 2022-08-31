//Agregá caminos

// let edad = 20;
// if (edad >= 0) {
//   if (edad < 18) {
//     console.log("No puede pasar al bar.");
//   } else if (edad < 21) {
//     console.log("Puede pasar al bar, pero no puede tomar alcohol.");
//   } else {
//     console.log("Puede pasar al bar y tomar alcohol");
//     console.log("Felicitaciones por su mayoría de edad");
//   }
//   if (edad % 2 !== 0) {
//     console.log("¿Sabías que tu edd es impar?");
//   }
// } else {
//   console.log("Error, edad inválida. Por favor ingrese un número válido.");
// }

// // totalAPagar()

// function totalAPagar(vehiculo, litrosConsumidos) {
//   let precioPorLitro;
//   let precioTotal;

//   if (vehiculo == "coche") {
//     precioPorLitro = 86;
//   } else if (vehiculo == "moto") {
//     precioPorLitro = 70;
//   } else if ((vehiculo = "autobus")) {
//     precioPorLitro = 55;
//   }

//   if (litrosConsumidos <= 25 && litrosConsumidos >= 0) {
//     precioTotal = precioPorLitro * litrosConsumidos + 50;
//   } else {
//     precioTotal = precioPorLitro * litrosConsumidos + 25;
//   }
//   console.log(
//     "Es un " +
//       vehiculo +
//       " que gasta por litro " +
//       precioPorLitro +
//       " y en total " +
//       precioTotal
//   );
//   return precioTotal;
// }
// console.log(totalAPagar("autobus", 30));

//Local de sándwiches
function tipoBasefun(tipoBase) {
  let costoBase;
  switch (tipoBase) {
    case "pollo":
      costoBase = 150;
      break;
    case "carne":
      costoBase = 200;
      break;
    case "veggie":
      costoBase = 100;
      break;
    default:
      console.log("Seleccione un tipo de base");
      break;
  }
  return costoBase;
}
function tipoPanfun(tipoPan) {
  let costoDelPan;
  switch (tipoPan) {
    case "blanco":
      costoDelPan = 50;
      console.log("El costo es de " + costoDelPan);
      break;
    case "negro":
      costoDelPan = 60;
      console.log("El costo es de " + costoDelPan);
      break;
    case "s/gluten":
      costoDelPan = 75;
      console.log("El costo es de " + costoDelPan);
      break;
    default:
      console.log("Seleccione un tipo de Pan");
      break;
  }
  return costoDelPan;
}

function adicionales(add1, add2, add3, add4, add5, add6) {
  let costoAdd1 = 0,
    costoAdd2 = 0,
    costoAdd3 = 0,
    costoAdd4 = 0,
    costoAdd5 = 0,
    costoAdd6 = 0,
    costoAddTotal = 0;
  if (add1 == 1) {
    costoAdd1 = 20;
  }
  if (add2 == 1) {
    costoAdd2 = 15;
  }
  if (add3 == 1) {
    costoAdd3 = 10;
  }
  if (add4 == 1) {
    costoAdd4 = 15;
  }
  if (add5 == 1) {
    costoAdd5 = 5;
  }
  if (add6 == 1) {
    costoAdd6 = 5;
  }
  costoAddTotal =
    costoAdd1 + costoAdd2 + costoAdd3 + costoAdd4 + costoAdd5 + costoAdd6;
  return costoAddTotal;
}

function localSandwich() {
  //llama al promt
  const prompt = require("prompt-sync")({ sigint: true });
  //inicializo variables
  let sumatoria = 0;
  //solicito el tipo de base
  let tipoBase = prompt("Ingrese el tipo de base ");

  //sumo valor de base
  sumatoria = tipoBasefun(tipoBase);

  //solicito el tipo de pan
  let tipoPan = prompt("Ingrese el tipo de pan ");
  //Sumo valor del pan
  sumatoria += tipoPanfun(tipoPan);

  //Consulto por los aderesos
  let add1 = prompt("Ingrese 1 si desea agregarle queso ");
  let add2 = prompt("Ingrese 1 si desea agregarle tomate ");
  let add3 = prompt("Ingrese 1 si desea agregarle lechuga ");
  let add4 = prompt("Ingrese 1 si desea agregarle cebolla ");
  let add5 = prompt("Ingrese 1 si desea agregarle mayonesa ");
  let add6 = prompt("Ingrese 1 si desea agregarle mostaza ");

  //Sumo aderezos
  console.log(adicionales(add1, add2, add3, add4, add5, add6));
  sumatoria += adicionales(add1, add2, add3, add4, add5, add6);
  console.log(
    `Usted pidió un sandwich de ${tipoBase}, 
    Con tipo de pan ${tipoPan}, 
    y los siguientes aderesos: 
    Queso ${add1}, 
    Tomate ${add2},
    Lechuga ${add3},
    Cebolla ${add4}, 
    Mayonesa ${add5},
    Mostaza ${add6}
    usted tiene que pagar ${sumatoria}`
  );
}
localSandwich();

// //Funcion secreta
// function numSecreto() {
//   //llamo al prompt
//   const prompt = require("prompt-sync")({ sigint: true });

//   //Creo un número secreto
//   numeroSecret = Math.floor(Math.random() * 10 + 1);
//   console.log(`Numero secreto ${numeroSecret}`);

//   //Creo una variable, que va juntando las chances
//   let chances = 0;

//   //Creo una variable que va a cambiar cuando acierte
//   let acierto = false;

//   //Me fijo que no se le hayan terminado las chances
//   while (acierto == false) {
//     let num10 = prompt("Ingrese un número del 1 al 10 ");
//     chances = chances + 1;
//     //Me fijo si son iguales
//     if (chances <= 10) {
//       if (numeroSecret == num10) {
//         console.log(`Felicitaciones! El número que ingresaste era el correcto`);
//         console.log(`Lo conseguiste en ${chances} intentos`);
//         acierto = true;
//       } else {
//         console.log(`No acertaste, llevás ${chances} intentos`);
//       }
//     } else {
//       console.log(`Lo siento, se te terminaron las oportunidades`);
//     }
//   }
// }
// numSecreto();

//? Falta el del paracaidas, duda en la letra

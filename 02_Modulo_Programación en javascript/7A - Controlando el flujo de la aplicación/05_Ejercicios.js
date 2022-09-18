/* Ejercicio 1: Fin de semana
El objetivo de este ejercicio es imprimir en consola un texto que irá variando según el día que contenga la variable dia. Para esto, ya presentamos un código hecho con if/else que tendremos que modificar y convertirlo a un switch, manteniendo el mismo resultado. */

let dia = "jueves";
function finDeSemana(dia) {
  switch (dia) {
    case "viernes":
      console.log("buen finde");
      break;
    case "lunes":
      console.log("buena semana");
      break;
    default:
      console.log("buen dia");
  }
}

/* Ejercicio 2: Tengo clases
El objetivo de este ejercicio es imprimir en pantalla un texto que estará condicionado de la siguiente manera. Utilizando switch deberemos evaluar si la variable "día" es lunes, miércoles o viernes; y, en ese caso, debe imprimir el texto "tenés clases". Para cualquier otro caso debe imprimir "no tenés clases". */

function tengoClases(dia) {
  switch (dia) {
    case "lunes":
      console.log("tenés clases");
      break;
    case "miércoles":
      console.log("tenés clases");
      break;
    case "viernes":
      console.log("tenés clases");
      break;
    default:
      console.log("no tenés clases");
  }
}

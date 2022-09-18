//1. Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
//Función declarada
function pulgadasAcentimetros(numEnCentimetros) {
  return numEnCentimetros * 2.54;
}
//Misma función pero modo arrow
const pulgadasAcentimetrosA = (numEnCentimetrosA) => 2.54 * numEnCentimetrosA;

//2. Crear una función que recibe un string y lo convierte en una URL. Ej: “pepito” es devuelto como “http://www.pepito.com”
const url = (nombre) => "http://www." + nombre + ".com";

// 3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.
const admiracion = (frase) => frase + "!";

// 4. Crear una función que calcule la edad de los perros considerando que 1 año para nosotros son 7 de ellos.
const miEdadPerro = (edad) => edad * 7;

// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. PD: considerá que tu mes de trabajo tiene 40 horas.
const valorHoraTrabajo = (sueldo) => {
  const horasLaborales = 40;
  let valorHora = sueldo / horasLaborales;
  return valorHora;
};

// 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.
const calculadorIMC = (altura,peso) => peso/((altura/100)^2);

//7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. Investigá qué hace el método de strings .toUpperCase()
const convEnMayus = (frase2) => frase2.toUpperCase();

// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. Pista: te servirá revisar qué hace la palabra reservada typeof.
const queTipoEs = (elemento) => typeof(elemento);
console.log(queTipoEs(2));
console.log(queTipoEs("hola"));
console.log(queTipoEs(new Date()));
console.log(queTipoEs(valorHoraTrabajo));
console.log(queTipoEs(true));

// 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia. Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.
const circunferencia = (radio) => 2*Math.PI*radio;
console.log(circunferencia(2));
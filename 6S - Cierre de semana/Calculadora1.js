let num1;
let num2;

let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;
let multiplicar = (num1, num2) => num1 * num2;
let dividir = (num1, num2) => num1 / num2;

console.log(
  "-------------- Testeo de Operaciones / Calculadora --------------"
);

let cuadradoDeUnNumero = (num1) => num1 ** 2;
console.log(cuadradoDeUnNumero(5));

let promedioDeTresNumeros = (a, b, c) => (a + b + c) / 3;
console.log(promedioDeTresNumeros(5, 4, 5));

let calcularPorcentaje = (num1, num2) => (num1 * num2) / 100;
console.log(calcularPorcentaje(200, 20));

// Calculadora nivel 1
let num1;
let num2;

let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;
let multiplicar = (num1, num2) => num1 * num2;
let dividir = (num1, num2) => num1 / num2;

console.log(
  "-------------- Testeo de Operaciones / Calculadora --------------"
);

console.log("La suma de 3 + 5 = " +sumar(3,5));
console.log("La resta de 5 - 3 = "+restar(5,3));
console.log("La multiplicación de 5 x 3 = "+multiplicar(5,3));
console.log("La división de 5 / 3 = "+dividir(5,3));
console.log("La división de 5 / 0 = "+dividir(5,0));
console.log("La división de 0 / 3 = "+dividir(0,3));

//Calculadora nivel 2
let cuadradoDeUnNumero = (num1) => multiplicar(num1,num1);
console.log(cuadradoDeUnNumero(5));

let promedioDeTresNumeros = (a, b, c) => dividir((a + b + c), 3);
console.log(promedioDeTresNumeros(5, 4, 5));

let calcularPorcentaje = (num1, num2) => dividir(multiplicar(num1,num2),100);
console.log(calcularPorcentaje(300, 15));

let GeneradorDePorcentaje = (num1, num2)=>multiplicar(dividir(num1,num2),100);
console.log(GeneradorDePorcentaje(2,200));
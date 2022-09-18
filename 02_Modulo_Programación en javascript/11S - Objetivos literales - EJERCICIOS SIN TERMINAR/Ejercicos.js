//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

  //Objeto literal banco
let banco = 
{ 
  clientes: arrayCuentas,
  consultarCliente: function(titular){
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta == titular) {
          return this.clientes[i];
      }
    }        
  } 
}
console.log(banco.consultarCliente('Ansel Ardley'));


//* Propiedad única - Crear una función llamada propiedadUnica que reciba un arreglo de objetos como parámetro y un string.Esta deberá retornar un nuevo arreglo de objetos,teniendo como parámetro la propiedad que fue pasada como string */

function propiedadUnica(array, str) {
  let newArray = []
  for (let i = 0; i < array.length; i++) { 
     newArray.push({[str]: array[i][str]})
  }
  //console.log(str);
  return newArray
}
// let resultado = propiedadUnica(array,'nombre');
// console.log(resultado);
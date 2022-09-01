
// 😃 BIENVENID@S A LA CLASE DE REPASO 😃


// LINK 
    // FUNCIONES - CONDICIONALES - CICLOS - ARREGLOS - OBJETOS

    let numero = 14

    // SI ES PAR
    console.log( numero % 2  === 0 )

    // SI ES IMPAR
    console.log( numero % 2  !== 0 )

    // SI ES MULTIPLO DE 7
    console.log( numero % 7 === 0)


// TODO :
     // Ejercicio 1):
        // Crear una funcion que reciba un numero por parametros
        // la funcion tendra que verificar que ese numero sea multiplo de 5 
        // y ademas que sea un numero par, si eso se cumple retornar verdadero
        // de lo contrario retornar falso

        
       console.log("Ejercicio 1")
       console.log("=========")

       function verificarNumero( num ){

            if( (num % 5 === 0) && (num % 2 === 0) ){
                return true
            }else{
                return false
            }

       }

       let resultadoNumero = verificarNumero(20)
       console.log( resultadoNumero )

       

    // Ejercicio 2):
        // Crear una funcion que reciba un string por parametros,
        // luego trabajaeremos con ese string para que la funcion nos diga si la palabra
        // es corta, mediana o larga
        // las palabras cortas son aquellas que tienen menos de 4 letras
        // las palabras medianas son aquellas que tienen 4 o mas letras pero menos que 8
        // y las palabras largas son aquellas que tienen 8 o mas letras

        console.log("Ejercicio 2")
        console.log("=========")

        const verificadorPalabra = ( str )=>{

            if( str.length < 4 ){
                return "La palabra es corta"
            }else if( str.length < 8){
                return "La palabra es mediana"
            }else{
                return "La palabra es larga"
            }

        }

        let tipoPalabra = verificadorPalabra("holaaaaaaaaa")
        console.log( tipoPalabra )


    // Ejercicio 3):
        // Vamos a simular un E-commerce
        // Para eso, necesitamos crear un arreglo que contendra los productos
        // Cada producto tendra ( nombre, descripcion, precio, cantidad,)
        // Ahora, como dueño de la empresa, queremos saber cuanto dinero nos 
        // ingresaria si se venden todos los productos que tenemos en stock
        // Ademas de eso, nos dimos cuenta que nuestros productos no tienen ID
        // para ello deberemos tambien recorrer el arreglo y agregarle a cada producto 
        // un ID que empieze en 1 y que vaya incrementando
        // Por ultimo nos piden que si hay algun producto que sea "notebook", 
        // debemos aumenta el precio en un 30%

        console.log("Ejercicio 3")
        console.log("=========")

        let productosPepito = [
            {
                nombre: "celular",
                descripcion: "Es un celular",
                precio: 200,
                cantidad: 10
            },
            {
                nombre: "notebook",
                descripcion: "Es una notebook",
                precio: 300,
                cantidad: 5
            },
            {
                nombre: "zapatilla",
                descripcion: "Es una zapatilla",
                precio: 50,
                cantidad: 7
            },

        ]

        // 3850

        const calcularTotal = ( array )=>{

            let acumulador = 0 // 2000 // 3500 // 3850

            for( let i = 0 ; i < array.length ; i++ ){

                acumulador = acumulador + ( array[i].precio * array[i].cantidad )
                // acumulador += ( array[i].precio * array[i].cantidad )
            }

            return acumulador
        }

        let ventaTotalPepito = calcularTotal(productosPepito)
        console.log( ventaTotalPepito )


        function generadorDeId( array ){

            for(let i = 0; i < array.length; i++){

                array[i].id = i + 1

            }

        }

        generadorDeId(productosPepito)

        console.log(productosPepito)


        // let productosMaria = [
        //     {
        //         nombre: "celular",
        //         descripcion: "Es un celular",
        //         precio: 200,
        //         cantidad: 10
        //     },
        //     {
        //         nombre: "notebook",
        //         descripcion: "Es una notebook",
        //         precio: 300,
        //         cantidad: 5
        //     },
            

        // ]

        // let ventaTotalMaria = calcularTotal( productosMaria )
        // console.log( ventaTotalMaria )
        





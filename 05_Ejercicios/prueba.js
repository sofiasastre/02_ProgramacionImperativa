
/*let dia = 'jueves'
function finDeSemana (dia) {	
	switch(dia){
		case 'viernes':
    		console.log("buen finde");
			break
		case 'lunes':
    		console.log("buen dia");
			break
		default:
		break
	}
}
finDeSemana(dia)*/

function totalAPagar(vehiculo,litrosConsumidos) {
	let precioPorLitro;
	let precioParcial;
	let precioTotal;

	if (vehiculo == "coche") {
		precioPorLitro = 86;
		precioTotal = precioPorLitro;
			
	}else if (vehiculo=="moto") {
		precioPorLitro = 70;
		precioTotal = precioPorLitro;
		
	} else if(vehiculo="autobus") {
		precioPorLitro = 55;
		precioTotal = precioPorLitro;
	}
	
	if (litrosConsumidos<=25) {
		precioParcial= precioPorLitro*litrosConsumidos;	
		precioTotal=precioParcial+50;		
		
	} else {
		precioParcial= precioPorLitro*litrosConsumidos;	
		precioTotal = precioParcial+25;	
		console.log("aca");	
	}
	return precioTotal;
}
console.log(totalAPagar("autobus",25));
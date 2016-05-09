// Escribe aquí tu codigo Javascript
function circulo(){
	var radio=parseInt(prompt("Ingresa el Radio del Circulo: "));
	var area=(radio*(Math.pow(Math.PI,2))).toFixed(2);
	alert("El área del circulo es: "+area);
}
circulo();


// Escribe aquí tu codigo Javascript
var letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
var dni=parseInt(prompt("Ingrese su Numero de DNI: "));
var resto;
if(dni<0||dni>99999999||dni.length>8){
	aletr("Lo sentimos el numero de DNI no es Valido!");
} else {
	var texto=prompt("Ingresse la letra correspondiente: ").toUpperCase();
	resto=dni%23;
	if(letras[resto]==texto){
		alert("El numero y letra del DNI son correctos.!");
	} else {
		alert("La letra indicada no es correcta, "+"\n la letra correcta es: "+letras[resto]);
	}
}


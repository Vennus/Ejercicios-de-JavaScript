// Escribe aquí tu codigo Javascript
function escalar(){
	var a=parseInt(prompt("Ingrese el valor X del vecto 1 : "));
	var b=parseInt(prompt("Ingrese el valor Y del vecto 1 : "));
	var c=parseInt(prompt("Ingrese el valor X del vecto 2 : "));
	var d=parseInt(prompt("Ingrese el valor Y del vecto 2 : "));
	var valorX=[a,b];
	var valorY=[c,d];
	var resultado=(a*c)+(b*d);
	alert("El resultados de la Escala de Vectores es: "+"\n"+valorX+" y "+valorY+" "+resultado)
}
escalar();

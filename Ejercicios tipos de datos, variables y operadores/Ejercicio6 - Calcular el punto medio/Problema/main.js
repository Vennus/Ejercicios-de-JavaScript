// Escribe aquí tu codigo Javascript
function segmento(){
	var a =parseInt(prompt("Ingrese el valor X de la cordenada 1: "));
	var b =parseInt(prompt("Ingrese el valor Y de la cordenada 1: "));
	var c =parseInt(prompt("Ingrese el valor X de la cordenada 2: "));
	var d =parseInt(prompt("Ingrese el valor Y de la cordenada 2: "));
	var valorX=[a,b];
	var valorY=[c,d];
	var x=(a+c)/2;
	var y=(b+d)/2;
	var resultado=[x,y];
	alert("El punto medio de segmento es: "+"\n"+"( "+valorX+")"+" y "+"("+valorY+" )"+" es "+"( "+resultado+" )");
}
segmento();


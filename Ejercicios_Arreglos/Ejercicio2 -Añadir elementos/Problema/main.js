// Escribe aquí tu codigo Javascript
function nombres(){
	var lista=[["Katy"],["Carol"],["Stefanny"]];
	var cantidad=prompt("¿Cuantos nombres quieres en tu lista?");
	for(var i=4;i<=cantidad;i++){
		var nombre=prompt("Falta este nombre en tu lista"+" "+i+" , vamos agregarlo");
		lista.push(nombre);
	}
	return nombre;
}
alert("Estos son los nombres: "+nombres());




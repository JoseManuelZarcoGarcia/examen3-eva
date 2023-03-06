var nombreDePila;
var apellidos2
var edad20;
	
// Función para pedir el nombre
function nombre(){
	var nombreDePila = window.prompt("Escriba su nombre de pila","Alfonso")
		
}

// Función para pedir los 2 apellidos
function apellidos(){
	var apellidos2 = window.prompt("Escriba sus 2 apellidos","Fernández Romera")
		
}

// Función para pedir la edad como string y lo transforma a number
function edad(){
	let edad = window.prompt("Escriba su edad","20")
	var edad20 = Number(edad)
		
}


// Función para mostrar la imformción recivida
function mostrar(){
	// Variables que luego concatenaremos
	var nombreDePila;
	var apellidos2
	var edad20;	
	
	// Funciones para rellenar las variabes
	nombre();
	apellidos();
	edad();
		
		/*
		Imprimir por pantalla los datos concatenados.
		
		No sé porque no se muestran los resultados ni como texto ni como alerta.
		*/
		document.write("Nombre y apellidos: "+ apellidos2 + "," + nombreDePila + "."<br>"Edad: " + edad + " años." <br> "Edad es un tipo: " + typeof(edad20));

		alert("Nombre y apellidos: "+ apellidos2 + "," + nombreDePila + "."<br>"Edad: " + edad + " años." <br> "Edad es un tipo: " + typeof(edad20));
		
		
		
}


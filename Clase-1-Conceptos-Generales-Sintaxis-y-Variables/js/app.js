// Declaración de variables
let declaracion
// Asignando valor
declaracion = "esto es una declaracion"

// TIPOS DE DATOS
// string -> cadena de texto (comillas dobles o simples)
let nombre = "Natalia"
let apellido = "Machado"
let numeroString = "2"
// integer -> numeros 
let num1 = 3
let num2 = 2

// Para mostrar por consola CONSOLE.LOG
console.log("La profe se llama: " + nombre + " " + apellido)
console.log(`También puede escribirse asi: ${nombre} ${apellido}`)
console.log(parseInt(numeroString)) //Lo que hace el PARSE es modificarle el tipo de dato a una variable
// Concatenacion
console.log(numeroString + num1) //Como uno de los tipos de datos involucrados es un string los va a concatenar

// Operacion //Ocurrirán si los tipos de datos son enteros 
// Suma
console.log(num1 + num2)
// Multiplicación
console.log(num1 * num2)


// Para pedir un valor por ventana emergente PROMPT
let nombreUsuario = prompt("Ingrese su nombre:")
// Para mostrar por ventana emergente ALERT
alert("El nombre ingresado es: " + nombreUsuario)

num1 = prompt("Ingrese un número:")
num2 = prompt("Ingrese otro número:")
alert(`Los números ingresados son ${num1} y ${num2}`)

// Para convertir el tipo de dato a NUMBER y mostrarlos por consola
console.log(Number(num1))
console.log(Number(num2))















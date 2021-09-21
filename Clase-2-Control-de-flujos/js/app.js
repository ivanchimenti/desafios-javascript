// = asignación
let num1 = 1
let num2 = 1
let num3 = "1"

// == igualdad
if (num1 == num2) {
    console.log("Los dos datos son iguales")
}

// === igualdad estricta
if (num1 === num3) {
    console.log("Los dos datos son iguales")
} else {
    console.log("Los datos son de distinto tipo")
}

// CONDICIONES COMPUESTAS CON &&
// Es requisito que todas las comparaciones sean verdaderas para que la condicion compuesta sea verdadera

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")

if ((nombre != "") && (apellido !="")) {
    alert(`Hola ${nombre} ${apellido}`)
    console.log(`El nombre ingresado es ${nombre} y el apellido es ${apellido}`)

} else {
    alert("No se ha ingresado ningun nombre válido")
    console.log("No se ha ingresado ningun nombre válido")
}

// CONDICIONES COMPUESTAS CON ||
// Una condicion puede ser verdadera y la otra no para que la condicion compuesta sea verdadera

if ((nombre != "") || (apellido !="")) {
    alert(`Hola ${nombre} ${apellido}`)
    console.log(`El nombre ingresado es ${nombre} y el apellido es ${apellido}`)

} else {
    alert("No se ha ingresado ningun nombre válido")
    console.log("No se ha ingresado ningun nombre válido")
}
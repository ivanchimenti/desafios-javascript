let nro = parseInt(prompt("Ingrese un número"))
for (let i = 0; i <= 10; i++) {
    console.log(`${nro} x ${i} = ${nro*i}`)
}

for (let i = 1; i <= 20; i++) {
    let nombre = prompt("Ingrese su nombre")
    alert(`Turno N°${i} Nombre: ${nombre}`)
    if (nombre.toLowerCase() == "null") {
        break;
    }
}

while (nro == 19) {
    alert(`Hola Iván`)
    break
}

let entrada = prompt("Ingrese un dato")
do {
    alert(`El usuario ingresó: ${entrada}`)
    entrada = prompt("Ingrese otro dato")

} while (entrada.toUpperCase() != "ESC")

let nro1 = parseInt(prompt("Ingrese un número para hacer una operación"))
let op = prompt("Ingrese la operación que desea realizar")
let nro2 = parseInt(prompt("Ingrese otro número para hacer la operación que eligió"))
switch (op) {
    case '+':
        suma = nro1 + nro2
        alert("Usted eligió la operacion SUMA")
        alert(`${nro1} ${op} ${nro2} = ${suma}`)
        break;
    
    case '-':
        resta= nro1 - nro2
        alert("Usted eligió la operacion RESTA")
        alert(`${nro1} ${op} ${nro2} = ${resta}`)
        break;

    case '*':
        por = nro1 * nro2
        alert("Usted eligió la operacion MULTIPLICACIÓN")
        alert(`${nro1} ${op} ${nro2} = ${por}`)
        break;

    case '/':
        div = nro1 / nro2
        alert("Usted eligió la operacion DIVISIÓN")
        alert(`${nro1} ${op} ${nro2} = ${div}`)
        break;

    default:
        alert("Usted no ha ingresado un operador válido")
        break;
}

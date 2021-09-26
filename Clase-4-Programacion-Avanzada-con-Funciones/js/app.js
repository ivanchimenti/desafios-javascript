function saludar (parametro) {
    alert(`Hola ${parametro}`)
    document.write(`${parametro} está leyendo esto`)
}

let nombre = prompt("Ingrese su nombre");
saludar (nombre);

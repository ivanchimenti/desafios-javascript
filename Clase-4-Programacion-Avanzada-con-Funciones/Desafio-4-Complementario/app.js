function ingresarPrecio () {
    let precioIngresado = Number(prompt("Ingrese el precio del que desea calcular el IVA"));
    alert(`El precio ingresado es $${precioIngresado}`);
    return precioIngresado;
}

function calcularIVA (valorOriginal) {
    let iva = ((valorOriginal * 21)/100);
    return iva;
}

function agregarIVA (valorOriginal, valorIva) {
    let precioConIVA = valorOriginal + valorIva;
    return precioConIVA;
}

function mostrarResultado (valorOriginal, valorIVA, nuevoValor) {
    document.write(`CALCULADORA DE IVA <br/>
        Precio del producto: $${valorOriginal}<br/>
        IVA: $${valorIVA}<br/>
        Total: $${nuevoValor}  `)
}


alert("CALCULADORA DE IVA")

let precio = ingresarPrecio();
let iva = calcularIVA(precio);
let precioConIva = agregarIVA (precio, iva);
mostrarResultado (precio, iva, precioConIva);
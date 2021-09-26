let precioTotalProducto = 0
let precioTotalCompra = 0

document.write("TICKET: <br/>")
do {
    let nombreProducto = prompt("Ingrese el nombre del producto que desea llevar")
    let cantidadProducto = Number(prompt("Ingrese la cantidad del producto que desea llevar"))
    let precioProducto = parseFloat(prompt("Ingrese el precio unitario del producto"))
    precioTotalProducto = cantidadProducto * precioProducto
    precioTotalCompra = precioTotalCompra + precioTotalProducto

    document.write(`<br>
                    Producto: ${nombreProducto}<br>
                    Cantidad: ${cantidadProducto}<br>
                    Precio Total: $${precioTotalProducto}<br>`)

    fin = prompt("¿Quiere finalizar su compra?")

}while (fin.toLowerCase() !== "si")

document.write(`<br>TOTAL COMPRA: $${precioTotalCompra}`)


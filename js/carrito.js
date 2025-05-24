export class Carrito {
    constructor(catalogo) {
        this.catalogo = catalogo;
        this.productos = [];
    }

    // Buscar producto en el carrito por el id usando for
    buscarEnCarrito(id) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].producto.id === id) {
                return this.productos[i];
            }
        }
        return null;
    }

    // Mostrar catalogo
    mostrarCatalogo() {
        let mensaje = "Catalogo de productos \n";
        this.catalogo.forEach((p) => {
            mensaje += `ID: ${p.id} | ${p.nombre} | $${p.precio} | Stock: ${p.cantidad}\n`;
        });
        alert(mensaje);
    }

    // Agregar producto al carrito 
    agregarAlCarrito() {
        this.mostrarCatalogo();
        let idIngresado = prompt("Ingrese el ID del producto que desea agregar (o '0' para cancelar):")
        if (idIngresado === null || idIngresado === "0") return;

        const id = Number(idIngresado);
        let producto = null;

        for (let i = 0; i < this.catalogo.length; i++) {
            if (this.catalogo[i].id === id) {
                producto = this.catalogo[i];
                break;
            }
        }

        if (!producto) {
            alert("ID invalido.");
            return;
        }

        let maxCantidad = producto.cantidad;
        let cantidadIngresada = prompt(`Cuantas unidades de "${producto.nombre}" desea agregar? (Maximo: ${producto.cantidad})`)
        if (cantidadIngresada === null) return;
        const cantidad = Number(cantidadIngresada);

        if (isNaN(cantidad) || cantidad < 1 || cantidad > maxCantidad) {
            alert("Cantidad Invalida.");
            return;
        }

        let item = this.buscarEnCarrito(producto.id);
        if (item) {
            if (item.cantidad + cantidad > maxCantidad) {
                alert("No hay suficiente stock para agregar esa cantidad");
                return;
            }
            item.cantidad += cantidad;
        } else {
            this.productos.push({ producto, cantidad });
        }
        alert(`Agregaste ${cantidad} x ${producto.nombre} al carrito`);
    }

    // Mostrar carrito y total
    mostrarCarrito() {
        if (this.productos.length === 0) {
            alert("El carrito esta vacio");
            return;
        }
        let mensaje = "Carrito:\n"
        let total = 0;
        this.productos.forEach((item, i) => {
            mensaje += `${i + 1}. ${item.producto.nombre} (${item.producto.marca}) x ${item.cantidad} = $${item.cantidad * item.producto.precio}\n`;
            total += item.cantidad * item.producto.precio;
        });
        mensaje += `\nTotal: ${total}`;
        alert(mensaje);
    }

    // menu principal
    menu() {
        let opcion;
        do {
            opcion = prompt(
                "Tienda (simulación)\n" +
                "1. Ver catalogo\n" +
                "2. Agregar producto al carrito\n" +
                "3. Ver Carrito\n" +
                "4. Finalizar compra (salir)"
            );
            switch (opcion) {
                case "1":
                    this.mostrarCatalogo();
                    break;
                case "2":
                    this.agregarAlCarrito();
                    break
                case "3":
                    this.mostrarCarrito();
                    break
                case "4":
                    alert("Gracias por tu compra!");
                    this.mostrarCarrito();
                    break

                default:
                    alert("Opcion no valida")
                    break;
            }
        } while (opcion != "4");
    }
}
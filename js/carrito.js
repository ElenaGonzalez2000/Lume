export class Carrito {
    constructor(catalogo) {
        this.catalogo = catalogo;
        this.productos = [];
    }

    buscarEnCarrito(id) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].producto.id === id) {
                return this.productos[i];
            }
        }
        return null;
    }

    agregarProducto(id, cantidad) {
        const producto = this.catalogo.buscarPorId(id);
        if (!producto || cantidad < 1 || cantidad > producto.cantidad) {
            return { exito: false, mensaje: "Producto no válido o cantidad fuera de rango." };
        }

        let item = this.buscarEnCarrito(id);
        if (item) {
            if (item.cantidad + cantidad > producto.cantidad) {
                return { exito: false, mensaje: "No hay suficiente stock." };
            }
            item.cantidad += cantidad;
        } else {
            this.productos.push({ producto, cantidad });
        }
        return { exito: true, mensaje: `Agregaste ${cantidad} x ${producto.nombre} al carrito.` };
    }

    obtenerCarrito() {
        return this.productos.map(item => ({
            nombre: item.producto.nombre,
            marca: item.producto.marca,
            cantidad: item.cantidad,
            precio: item.producto.precio,
            subtotal: item.producto.precio * item.cantidad
        }));
    }

    calcularTotal() {
        return this.productos.reduce((acc, item) => acc + (item.cantidad * item.producto.precio), 0);
    }
}
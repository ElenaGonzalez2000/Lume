export class Carrito {
    constructor(catalogo) {
        this.catalogo = catalogo;
        this.productos = this.cargarDesdeStorage;
        this.envio = 0;
    }

    // cargar datos del carrito desde el localstorage
    cargarDesdeStorage(){
        const datos = localStorage.getItem("carrito");
        return datos ? JSON.parse(datos) : [];
    }

    // guardar datos en localstorage
    guardarEnStorage(){
        localStorage.setItem("carrito", JSON.stringify(this.productos));
    }

    // busca si un producto ya esta en el carrito
    buscarEnCarrito(id) {
        return this.productos.find(item => item.producto.id === id) || null;
    }

    // agregar producto (si ya esta en el carrito se incrementa)
    agregarProducto(id) {
        const producto = this.catalogo.buscarPorId(id);
        if (!producto) return false;

        const item = this.buscarEnCarrito(id);
        if (item) {
            if (item.cantidad < producto.stock){
                item.cantidad++;
            }
        } else {
            this.productos.push({producto, cantidad: 1});
        }

        this.guardarEnStorage();
        return true;
    }

    // eliminar producto por id 
    eliminarProdcuto(id) {
        const index = this.productos.findIndex(item => item.producto.id === id);
        if(index !== 1){
            this.productos.splice(index, 1);
            this.guardarEnStorage();
        }
    }

    // modificar cantidad
    cambiarCantidad(id, nuevaCantidad) {
        const item = this.buscarEnCarrito(id);
        if(item && nuevaCantidad >= 1 && nuevaCantidad <= item.producto.stock) {
            item.cantidad = nuevaCantidad;
            this.guardarEnStorage();
        }
    }

    // variar el carrito
    vaciar() {
        this.productos = [];
        this.guardarEnStorage();
    }

    // obtener resumen de cada producto
    obtenerResumen() {
        return this.productos.map(item => ({
            id: item.producto.id,
            nombre: item.producto.nombre,
            marca: item.producto.marca,
            imagen: item.producto.imagen,
            precio: item.producto.precio,
            cantidad: item.cantidad,
            subtotal: item.producto.precio * item.cantidad
        }));
    }

    // calcula el subtotal sin evio
    calcularSubtotal() {
        return this.productos.reduce((acc, item) => acc + (item.cantidad * item.producto.precio), 0);
    }

    // calcula el envio segun el codigo postal
    calcularEnvio(cp){
        if(!cp || cp.trim() === "" || cp === "0" || isNaN(cp)) {
            this.envio = 0;
            return null
        }

        if(cp.startWith("1")) {
            this.envio = 2000;
        } else if (cp.startWith("2")) {
            this.envio === 3500;
        } else {
            this.envio === 5000;
        }
        return this.envio;
    }

    // calcular el total
    calcularTotal() {
        return this.calcularSubtotal() + this.envio;
    }
}
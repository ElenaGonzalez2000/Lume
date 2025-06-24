import { Producto } from "./producto.js";

export class Catalogo {
    constructor() {
        this.productos = [
            new Producto(1, "Calming Foam Cleanser", 5200, 8, "mixta", "mañana", "SKIN1004", "limpiador"),
            new Producto(2, "Low pH Good Morning Gel Cleanser", 4800, 10, "grasa", "mañana", "COSRX", "limpiador"),
            new Producto(3, "Rice Toner", 6200, 5, "seca", "todo el día", "I'm From", "tónico"),
            new Producto(4, "Snail Mucin Essence", 6900, 6, "mixta", "todo el día", "COSRX", "esencia"),
            new Producto(5, "Birch Juice Moisturizing Cream", 7200, 4, "seca", "noche", "ROUND LAB", "crema"),
            new Producto(6, "Sun Project Water Sun Cream SPF50", 8000, 7, "mixta", "mañana", "Thank You Farmer", "protector solar"),
            new Producto(7, "Heartleaf 77% Soothing Toner", 5900, 9, "sensible", "todo el día", "Anua", "tónico"),
            new Producto(8, "Rice Relief Cream", 6500, 6, "sensible", "noche", "I'm From", "crema"),
            new Producto(9, "Propolis Light Ampoule", 7400, 3, "normal", "noche", "COSRX", "ampolla"),
            new Producto(10, "Deep Clean Foam Cleanser", 3500, 10, "grasa", "mañana", "Neutrogena", "limpiador"),
            new Producto(11, "Cica Sleeping Mask", 6000, 5, "seca", "noche", "Laneige", "mascarilla"),
            new Producto(12, "Real Barrier Aqua Soothing Ampoule", 7000, 4, "sensible", "todo el día", "Atopalm", "ampolla")
        ];
    }

    mostrarCatalogo() {
        return this.productos;
    }

    buscarPorId(id) {
        return this.productos.find(p => p.id === id);
    }

    verificarStock(id, cantidad) {
        const producto = this.buscarPorId(id);
        if (!producto) return false;
        return producto.cantidad >= cantidad;
    }
}

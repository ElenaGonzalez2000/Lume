export class Producto {
    constructor(id, nombre, precio, cantidad, categoria, uso, marca, tipo) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria; // piel: seca, mixta, grasa, normal, sensible
        this.uso = uso; // mañana, noche, todo el día
        this.marca = marca;
        this.tipo = tipo; // crema, limpiador, etc
    }
}
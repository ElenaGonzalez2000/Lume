export class Producto {
    constructor({id, nombre, precio, stock, piel, uso, marca, categoria, descripcion, imagen}) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.piel = piel; // tipo de piel
        this.uso = uso; // mañana, noche, todo el día
        this.marca = marca;
        this.categoria = categoria; // piel: seca, mixta, grasa, normal, sensible
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}
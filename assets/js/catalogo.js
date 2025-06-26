import { Producto } from "./producto.js";

export class Catalogo {
    constructor() {
        this.productos = [];
    }

    async cargarCatalogo(ruta = '../api/catalogo.json') {
        try {
            const respuesta = await fetch(ruta)
            if(!respuesta.ok) throw new Error('Error al cargar el JSON');
            const data = await respuesta.json();
            this.productos = data.map(p => new Producto(p));
        } catch (error) {
            console.error('No se puede cargar el catalogo', error);
        }
    }

    mostrarCatalogo() {
        return this.productos;
    }

    buscarPorId(id) {
        return this.productos.find((p) => p.id === id);
    }

    verificarStock(id, cantidad){
        const producto = this.buscarPorId(id);
        return producto && producto.stock >= cantidad;
    }

    // filtros

    filtrarPorTipoPiel(piel){
        return this.productos.filter((p) => p.piel.includes(piel.toLowerCase()));
    }

    filtrarPorCategoria(categoria){
        return this.productos.filter((p) => p.categoria.toLowerCase() === categoria.toLowerCase());
    }

    filtrarPorRangoPrecio(min, max){
        return this.productos.filter((p) => p.precio >= min && p.precio <= max);
    }

    ordenarPorPrecio(ascendente = true){
        return [...this.productos].sort((a,b) => ascendente ? a.precio - b.precio : b.precio - a.precio);
    }

    buscarPorInput(texto){
        const t = texto.toLowerCase();
        return this.productos.filter((p) => 
            p.nombre.toLowerCase().includes(t) ||
            p.descripcion.toLowerCase().includes(t) ||
            p.categoria.toLowerCase().includes(t) ||
            p.uso.toLowerCase().includes(t)
        );
    }
}

export class Producto {
    constructor(nombre, precio, cantidad, categoria, uso, marca, tipo) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria; // piel: seca, mixta, grasa, normal, sensible
        this.uso = uso; // mañana, noche, todo el día
        this.marca = marca;
        this.tipo = tipo; // crema, limpiador, etc
    }
}

// Array de productos

export const catalogo = [
    new Producto(
        "Calming Foam Cleanser",
        5200,
        8,
        "mixta",
        "mañana",
        "SKIN1004",
        "limpiador"
    ),
    new Producto(
        "Low pH Good Morning Gel Cleanser",
        4800,
        10,
        "grasa",
        "mañana",
        "COSRX",
        "limpiador"
    ),
    new Producto(
        "Rice Toner",
        6200,
        5,
        "seca",
        "todo el día",
        "I'm From",
        "tónico"
    ),
    new Producto(
        "Snail Mucin Essence",
        6900,
        6,
        "mixta",
        "todo el día",
        "COSRX",
        "esencia"
    ),
    new Producto(
        "Birch Juice Moisturizing Cream",
        7200,
        4,
        "seca",
        "noche",
        "ROUND LAB",
        "crema"
    ),
    new Producto(
        "Sun Project Water Sun Cream SPF50",
        8000,
        7,
        "mixta",
        "mañana",
        "Thank You Farmer",
        "protector solar"
    ),
    new Producto(
        "Heartleaf 77% Soothing Toner",
        5900,
        9,
        "sensible",
        "todo el día",
        "Anua",
        "tónico"
    ),
    new Producto(
        "Rice Relief Cream",
        6500,
        6,
        "sensible",
        "noche",
        "I'm From",
        "crema"
    ),
    new Producto(
        "Propolis Light Ampoule",
        7400,
        3,
        "normal",
        "noche",
        "COSRX",
        "ampolla"
    ),
    new Producto(
        "Deep Clean Foam Cleanser",
        3500,
        10,
        "grasa",
        "mañana",
        "Neutrogena",
        "limpiador"
    ),
    new Producto(
        "Cica Sleeping Mask",
        6000,
        5,
        "seca",
        "noche",
        "Laneige",
        "mascarilla"
    ),
    new Producto(
        "Real Barrier Aqua Soothing Ampoule",
        7000,
        4,
        "sensible",
        "todo el día",
        "Atopalm",
        "ampolla"
    ),
];
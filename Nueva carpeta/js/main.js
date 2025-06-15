import { Test } from "./testPiel.js";
import { preguntas } from "./preguntas.js";
import { Carrito } from "./carrito.js"
import { catalogo } from "./catalogo.js"

const test = new Test(preguntas);
const carrito = new Carrito(catalogo);


function menuPrincipal() {
    let salir = false;
    while (!salir) {
        const opcion = prompt(
            "Bienvenida/o\n" +
            "¿Qué quieres hacer?\n\n" +
            "1. Realizar test de tipo de piel\n" +
            "2. Usar la tienda de productos (carrito)\n" +
            "3. Salir"
        );
        switch (opcion) {
            case "1":
                test.ejecutar(); 
                break;
            case "2":
                carrito.menu();
                break;
            case "3":
                alert("Gracias por su visita!");
                salir = true;
                break;
            default:
                if (opcion !== null) {
                    alert("Opción no válida.");
                } else {
                    salir = true;
                }
        }
    }
}

menuPrincipal();

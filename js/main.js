import { ejecutarTestPorPrompt } from "./testPiel.js";
import { menuCarrito } from "./carrito.js";

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
                ejecutarTestPorPrompt();
                break;
            case "2":
                menuCarrito();
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

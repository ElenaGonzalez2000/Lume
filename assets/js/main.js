import { Test } from "./testPiel.js";
import { preguntas } from "./preguntas.js";
import { Carrito } from "./carrito.js"
import { Catalogo } from "./catalogo.js"

const test = new Test(preguntas);
const catalogo = new Catalogo();
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
                const preguntas = test.obtenerPreguntas();
                for (let i = 0; i < preguntas.length; i++) {
                    const pregunta = preguntas[i];
                    let mensaje = `${pregunta.texto}\n`;
                    pregunta.opciones.forEach((op, j) => {
                        mensaje += `${j + 1}. ${op.texto}\n`;
                    });

                    let respuesta = prompt(mensaje);

                    while (respuesta !== null) {
                        respuesta = respuesta.trim();
                        const indice = Number(respuesta) - 1;
                        if (
                            respuesta !== "" &&
                            !isNaN(indice) &&
                            indice >= 0 &&
                            indice < pregunta.opciones.length
                        ) {
                            test.procesarRespuesta(i, indice);
                            break;
                        } else {
                            respuesta = prompt("Opción no válida. Por favor, ingresa un número:\n" + mensaje);
                        }
                    }
                }
                const resultado = test.obtenerResultadoFinal();
                alert(`✨ Tu tipo de piel es: ${resultado ? resultado.toUpperCase() : "NO DEFINIDO"}`);
                break;

            case "2":
                let opcionTienda;
                do {
                    opcionTienda = prompt(
                        "Tienda (simulación)\n" +
                        "1. Ver catálogo\n" +
                        "2. Agregar producto al carrito\n" +
                        "3. Ver carrito\n" +
                        "4. Volver al menú principal"
                    );
                    switch (opcionTienda) {
                        case "1":
                            let mensaje = "Catálogo de productos:\n";
                            catalogo.mostrarCatalogo().forEach(p => {
                                mensaje += `ID: ${p.id} | ${p.nombre} | $${p.precio} | Stock: ${p.cantidad}\n`;
                            });
                            alert(mensaje);
                            break;
                        case "2":
                            const idIngresado = prompt("Ingrese el ID del producto que desea agregar (o '0' para cancelar):");
                            if (idIngresado === null || idIngresado === "0") break;

                            const id = Number(idIngresado);
                            const producto = catalogo.buscarPorId(id);
                            if (!producto) {
                                alert("ID inválido.");
                                break;
                            }

                            const cantidadIngresada = prompt(`¿Cuántas unidades de "${producto.nombre}" desea agregar? (Máximo: ${producto.cantidad})`);
                            if (cantidadIngresada === null) break;

                            const cantidad = Number(cantidadIngresada);
                            const resultado = carrito.agregarProducto(id, cantidad);
                            alert(resultado.mensaje);
                            break;

                        case "3":
                            const productos = carrito.obtenerCarrito();
                            if (productos.length === 0) {
                                alert("El carrito está vacío.");
                                break;
                            }

                            let carritoMsg = "Carrito:\n";
                            productos.forEach((item, i) => {
                                carritoMsg += `${i + 1}. ${item.nombre} (${item.marca}) x ${item.cantidad} = $${item.subtotal}\n`;
                            });
                            carritoMsg += `\nTotal: $${carrito.calcularTotal()}`;
                            alert(carritoMsg);
                            break;

                        case "4":
                            break;

                        default:
                            alert("Opción no válida.");
                    }
                } while (opcionTienda !== "4");
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

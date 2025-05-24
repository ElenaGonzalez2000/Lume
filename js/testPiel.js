import { preguntas } from "./preguntas.js";

export function ejecutarTestPorPrompt() {
    const contadorTipoPiel = {
        grasa: 0,
        seca: 0,
        mixta: 0,
        normal: 0,
        sensible: 0,
    };

    for (const pregunta of preguntas) {
        let mensaje = `${pregunta.texto}\n`;
        for (let i = 0; i < pregunta.opciones.length; i++) {
            mensaje += `${i + 1}. ${pregunta.opciones[i].texto}\n`;
        }

        let respuesta = prompt(mensaje);

        // Repite hasta que la respuesta sea válida o el usuario cancele
        while (respuesta !== null) {
            // Limpia la respuesta de espacios y controla que no sea vacío
            respuesta = respuesta.trim();
            const indice = Number(respuesta) - 1;
            if (
                respuesta !== "" &&
                !isNaN(indice) &&
                indice >= 0 &&
                indice < pregunta.opciones.length
            ) {
                const tipo = pregunta.opciones[indice].valor;
                contadorTipoPiel[tipo]++;
                break; // Sale del while y pasa a la siguiente pregunta
            } else {
                respuesta = prompt(
                    "Opción no válida. Por favor, ingresa el número de una opción:\n" + mensaje
                );
            }
        }

        // Si el usuario cancela el prompt sigue con la siguiente pregunta
    }

    // Calcula el tipo de piel con mayor puntaje
    let tipoDePielFinal = null;
    let maximo = 0;

    for (const tipo in contadorTipoPiel) {
        if (contadorTipoPiel[tipo] > maximo) {
            maximo = contadorTipoPiel[tipo];
            tipoDePielFinal = tipo;
        }
    }

    alert(`✨ Tu tipo de piel es: ${tipoDePielFinal ? tipoDePielFinal.toUpperCase() : "NO DEFINIDO"}`);
}
export class Test {
    constructor(preguntas) {
        this.preguntas = preguntas;
        this.contadorTipoPiel = {
            grasa: 0,
            seca: 0,
            mixta: 0,
            normal: 0,
            sensible: 0,
        };
    }

    ejecutar() {
        for (let i = 0; i < this.preguntas.length; i++) {
            let pregunta = this.preguntas[i];
            let mensaje = `${pregunta.texto}\n`;
            for (let j = 0; j < pregunta.opciones.length; j++) {
                mensaje += `${j + 1}. ${pregunta.opciones[j].texto}\n`;
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
                    this.contadorTipoPiel[tipo]++;
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
        for (const tipo in this.contadorTipoPiel) {
            if (this.contadorTipoPiel[tipo] > maximo) {
                maximo = this.contadorTipoPiel[tipo];
                tipoDePielFinal = tipo;
            }
        }

        alert(`✨ Tu tipo de piel es: ${tipoDePielFinal ? tipoDePielFinal.toUpperCase() : "NO DEFINIDO"}`);
    }
}

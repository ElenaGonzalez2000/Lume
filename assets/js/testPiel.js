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

    procesarRespuesta(indicePregunta, indiceOpcion) {
        const pregunta = this.preguntas[indicePregunta];
        const tipo = pregunta.opciones[indiceOpcion].valor;
        this.contadorTipoPiel[tipo]++;
    }

    obtenerResultadoFinal() {
        let tipoDePielFinal = null;
        let maximo = 0;
        for (const tipo in this.contadorTipoPiel) {
            if (this.contadorTipoPiel[tipo] > maximo) {
                maximo = this.contadorTipoPiel[tipo];
                tipoDePielFinal = tipo;
            }
        }
        return tipoDePielFinal;
    }

    obtenerPreguntas() {
        return this.preguntas;
    }
}

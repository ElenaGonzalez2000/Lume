export class Pregunta {
    constructor(id, texto, opciones) {
        this.id = id;
        this.texto = texto;
        this.opciones = opciones;
    }
}

export const preguntas = [
    new Pregunta(1, "¿Cómo se ve tu piel al final del día?", [
        {texto: "Brillante en toda la cara", valor: "grasa"},
        {texto: "Brillante en la zona T, seca en mejillas", valor: "mixta"},
        {texto: "Opaca y seca", valor: "seca"},
        {texto: "Equilibrada, sin brillo excesivo ni resequedad", valor: "normal"}
    ]),
    new Pregunta(2, "¿Cómo se siente tu piel al tacto después de lavarla?", [
        {texto: "Tirante y áspera", valor: "seca"},
        {texto: "Suave y cómoda", valor: "normal"},
        {texto: "Grasa o pegajosa", valor: "grasa"},
        {texto: "Tirante en algunas áreas y grasa en otras", valor: "mixta"}
    ]),
    new Pregunta(3, "¿Cómo describirías tus poros?", [
        {texto: "Pequeños y poco visibles", valor: "normal"},
        {texto: "Grandes y visibles en toda la cara", valor: "grasa"},
        {texto: "Grandes en la zona T, pequeños en mejillas", valor: "mixta"},
        {texto: "Pequeños pero con tendencia a enrojecerse o irritarse", valor: "sensible"}
    ]),
    new Pregunta(4, "¿Cómo reacciona tu piel a nuevos productos o cambios climáticos?", [
        {texto: "Se irrita fácilmente", valor: "sensible"},
        {texto: "No presenta cambios notables", valor: "normal"},
        {texto: "Se reseca o se engrasa dependiendo del clima", valor: "mixta"},
        {texto: "Se pone más brillante con el calor y más seca con el frío", valor: "grasa"}
    ]),
    new Pregunta(5, "¿Con qué frecuencia sientes la necesidad de hidratar tu piel?", [
        {texto: "Varias veces al día", valor: "seca"},
        {texto: "Una vez al día es suficiente", valor: "normal"},
        {texto: "Rara vez necesito hidratarla", valor: "grasa"},
        {texto: "Depende de la zona del rostro", valor: "mixta"}
    ]),
];
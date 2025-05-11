/* Esta funcion simula el test de tipo de piel de la pagina. En lugar de usar checkboxes, el usuario responde preguntas (si/no). Se mantiene la logica del test original, pero adaptada a entrada/salida por promt y alert */

// funcion para el test de tipo de piel
function iniciarTest() {
    // lista de preguntas con su tipo asociado
    const preguntas = [
        {
            texto: "Tu piel se siente tirante despues de lavarla?",
            tipo: "seca"
        },
        {
            texto: "Tu piel se siente aceitosa al tacto?",
            tipo: "grasa"
        },
        {
            texto: "Tenez zonas grasas (nariz, frente) y otras secas (mejillas)?",
            tipo: "mixta"
        },
        {
            texto: "Tu piel birlla pocas horas despues de lavarla?",
            tipo: "grasa"
        },
        {
            texto: "Tu piel se ve opaca o apagada?",
            tipo: "seca"
        },
        {
            texto: "Te tenes que aplicar crema humectante varias veces al dia?",
            tipo: "seca"
        },
        {
            texto: "Tu piel se seinte comoda sin resequedad ni grasitud?",
            tipo: "normal"
        },
        {
            texto: "Tu piel se enrojece facilmente o reacciona mal a productos?",
            tipo: "sensible"
        },
    ];

    // objeto para contar las respuestas afirmativas por tipo
    let conteo = {
        seca: 0,
        grasa: 0,
        mixta: 0,
        normal: 0,
        sensible: 0
    }

    // pregunta al usuario y acumula las respuestas
    alert("Bienvenido al Test para saber su tipo de piel, a continuacion respondera algunas preguntas");
    for (let i = 0; i < preguntas.length; i++) {
        let respuesta = prompt(preguntas[i].texto + " (si/no)").toLowerCase();
        if (respuesta === "si") {
            conteo[preguntas[i].tipo]++;
        }
    }

    // determina el tipo de piel con las respuestas
    let tipoFinal = "";
    let mayorCantidad = 0;

    for(let tipo in conteo){
        if(conteo[tipo] > mayorCantidad){
            mayorCantidad = conteo[tipo];
            tipoFinal = tipo;
        }
    }

    // mostrar resultado final al usuario:
    alert("Resultado del test: Tu tipo de piel es " + tipoFinal);
}
iniciarTest()

// funcion para agregar productos al carrito y calcular el valor total para devolverlo al usuario

const productos = [
    { id: 1 , nombre: "Serum hidratante" , precio: 5900},
    { id: 2 , nombre: "Limpiador facial" , precio: 6500},
    { id: 3 , nombre: "Protector solar" , precio: 9550},
    { id: 4 , nombre: "Marcarilla de Arcilla" , precio: 7300},
    { id: 5 , nombre: "Contorno de ojos" , precio: 6900}
]

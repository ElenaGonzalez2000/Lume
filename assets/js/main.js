import { Catalogo } from "./catalogo.js";

const catalogo = new Catalogo();
await catalogo.cargarCatalogo();

// Traigo el contenedor del html
const contenedorProductos = document.querySelector(".productos-box");
const filtros = document.querySelectorAll(".productos-filtros button");
const btnBuscar = document.querySelector(".btn-buscar");
const inputBuscar = document.querySelector(".input-busqueda");
const ordenarAsc = document.querySelector(".menor-mayor");
const ordenarDesc = document.querySelector(".mayor-menor");
const btnLimpiar = document.querySelector(".btn-limpiar-filtros");

// funcion para renderizar la card
function crearCard(producto) {
    const card = document.createElement("div");
    card.classList.add("producto-card");

    card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen" />
        <div class="producto-info">
            <h5 class="producto-titulo">${producto.nombre}</h5>
            <p class="producto-descripcion">${producto.descripcion}</p>
            <div class="producto-precio">
                <p>$${producto.precio}</p>
                <button class="btn-agregar-carrito" data-id="${producto.id}">Agregar</button>
            </div>
        </div>
    `;
    return card;
}

// funcion para renderizar todos los productos 
function renderizarCatalogo(lista) {
    contenedorProductos.innerHTML = "";

    if (lista.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-vacio", "text-center", "mt-4");
        mensaje.textContent = "No se encontraron resultados. Probá con otro filtro o busqueda.";
        contenedorProductos.appendChild(mensaje);
        return;
    }

    lista.forEach((producto) => {
        const card = crearCard(producto);
        contenedorProductos.appendChild(card);
    });
}

renderizarCatalogo(catalogo.mostrarCatalogo());

// filtros por tipo de piel, aategoria y precio
filtros.forEach(boton => {
    boton.addEventListener("click", () => {
        const texto = boton.textContent.toLowerCase();
        let resultados = catalogo.mostrarCatalogo();

        if (texto.includes("piel")) {
            resultados = catalogo.filtrarPorTipoPiel(texto.replace("piel ", ""));
        } else if (["limpiadores", "hidratantes", "protectores solares", "exfoliantes", "serums", "mascarillas", "tonicos"].some(cat => texto.includes(cat))) {
            const mapeo = {
                "limpiadores": "limpiador",
                "hidratantes": "crema",
                "protectores solares": "protectorsolar",
                "exfoliantes": "exfoliante",
                "serums": "serum",
                "mascarillas": "mascarilla",
                "tonicos": "tonico"
            };
            const categoria = mapeo[texto];
            resultados = catalogo.filtrarPorCategoria(categoria);
        } else if (texto.includes("menor")) {
            resultados = catalogo.filtrarPorRangoPrecio(0, 9999);
        } else if (texto.includes("mayor")) {
            resultados = catalogo.filtrarPorRangoPrecio(20001, Infinity);
        } else if (texto.includes("$10.000")) {
            resultados = catalogo.filtrarPorRangoPrecio(10000, 20000)
        }
        renderizarCatalogo(resultados);
    });
});

// busqueda por input
btnBuscar.addEventListener("click", () => {
    const texto = inputBuscar.value.trim();
    if (texto !== "") {
        const resultados = catalogo.buscarPorInput(texto);
        renderizarCatalogo(resultados)
    }
})

// ordenar
ordenarAsc.addEventListener("click", () => {
    const resultados = catalogo.ordenarPorPrecio(true);
    renderizarCatalogo(resultados);
});

ordenarDesc.addEventListener("click", () => {
    const resultados = catalogo.ordenarPorPrecio(false);
    renderizarCatalogo(resultados);
});

// limpiar filtros o busqueda
btnLimpiar.addEventListener("click", () => {
    inputBuscar.value = "";
    renderizarCatalogo(catalogo.mostrarCatalogo());
});
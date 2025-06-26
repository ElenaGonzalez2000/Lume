import { Catalogo } from "./catalogo.js";
import { Carrito } from "./carrito.js";

const catalogo = new Catalogo();
await catalogo.cargarCatalogo();
const carrito = new Carrito(catalogo);

// Traigo los elementos de los productos y filtros
const contenedorProductos = document.querySelector(".productos-box");
const filtros = document.querySelectorAll(".productos-filtros button");
const btnBuscar = document.querySelector(".btn-buscar");
const inputBuscar = document.querySelector(".input-busqueda");
const ordenarAsc = document.querySelector(".menor-mayor");
const ordenarDesc = document.querySelector(".mayor-menor");
const btnLimpiar = document.querySelector(".btn-limpiar-filtros");

// funcion para renderizar la card de los productos
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
    mensaje.textContent =
      "No se encontraron resultados. Probá con otro filtro o busqueda.";
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
filtros.forEach((boton) => {
  boton.addEventListener("click", () => {
    const texto = boton.textContent.toLowerCase();
    let resultados = catalogo.mostrarCatalogo();

    if (texto.includes("piel")) {
      resultados = catalogo.filtrarPorTipoPiel(texto.replace("piel ", ""));
    } else if (
      [
        "limpiadores",
        "hidratantes",
        "protectores solares",
        "exfoliantes",
        "serums",
        "mascarillas",
        "tonicos",
      ].some((cat) => texto.includes(cat))
    ) {
      const mapeo = {
        limpiadores: "limpiador",
        hidratantes: "crema",
        "protectores solares": "protectorsolar",
        exfoliantes: "exfoliante",
        serums: "serum",
        mascarillas: "mascarilla",
        tonicos: "tonico",
      };
      const categoria = mapeo[texto];
      resultados = catalogo.filtrarPorCategoria(categoria);
    } else if (texto.includes("menor")) {
      resultados = catalogo.filtrarPorRangoPrecio(0, 9999);
    } else if (texto.includes("mayor")) {
      resultados = catalogo.filtrarPorRangoPrecio(20001, Infinity);
    } else if (texto.includes("$10.000")) {
      resultados = catalogo.filtrarPorRangoPrecio(10000, 20000);
    }
    renderizarCatalogo(resultados);
  });
});

// busqueda por input
btnBuscar.addEventListener("click", () => {
  const texto = inputBuscar.value.trim();
  if (texto !== "") {
    const resultados = catalogo.buscarPorInput(texto);
    renderizarCatalogo(resultados);
  }
});

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

// Toastify
function mostrarToast(texto, color = "#2d6ed0") {
  Toastify({
    text: texto,
    duration: 2000,
    gravity: "bottom",
    position: "right",
    backgroundColor: color,
  }).showToast();
}

// Carrito

// Traigo los elementos del carrito
const contenedorCarrito = document.querySelector(".contenedorCarrito");
const btnVaciarCarrito = document.querySelector(".btn-vaciarCarrito");
const inputCP = document.querySelector("input[placeholder='Ingresa tu CP']");
const btnCalcularEnvio = document.querySelector(".btn-calcularEnvio");
const spanSubtotal = document.querySelector("#carrito-subtotal");
const spanEnvio = document.querySelector("#carrito-envio");
const spanTotal = document.querySelector("#carrito-total");

function renderizarCarrito() {
    const resumen = carrito.obtenerResumen();
    const itemsContainer = contenedorCarrito.querySelector(".carrito-items");
    itemsContainer.innerHTML = "";

    resumen.forEach((item) => {
    const div = document.createElement("div");
    div.className = "d-flex align-items-stretch justify-content-between p-3 border rounded mb-3 carrito-item";
    div.innerHTML = `
            <!-- Columna de información del producto -->
            <div class="d-flex flex-column justify-content-between">
                <div>
                    <h6 class="mb-1">${item.nombre}</h6>
                    <p class="text-muted small">$${item.precio}</p>
                    <button class="btn text-danger p-1 btn-eliminar" data-id="${item.id}"> 
                    <i class="bi bi-trash"></i> Eliminar
                    </button>
                </div>

                <!-- Control de cantidad -->
                <div class="input-group mt-2" style="max-width: 140px">
                    <button class="btn btn-outline-secondary btn-disminuir" data-id="${item.id}" type="button">−</button>
                    <input type="text" class="form-control text-center" value="${item.cantidad}" readonly />
                    <button class="btn btn-outline-secondary btn-aumentar" data-id="${item.id}" type="button">+</button>
                </div>
            </div>

            <!-- Imagen del producto -->
            <div class="carrito-img-wrapper ms-3">
                <img src="${item.imagen}" alt="${item.nombre}" class="carrito-img"/>
            </div>
        </div>
        `;
        itemsContainer.appendChild(div);
    });

    spanSubtotal.textContent = `$${carrito.calcularSubtotal()}`;
    spanEnvio.textContent = `$${carrito.envio}`;
    spanTotal.textContent = `$${carrito.calcularTotal()}`;
}

contenedorProductos.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-agregar-carrito")) {
        const id = Number(e.target.dataset.id);
        carrito.agregarProducto(id, 1);
        renderizarCarrito();
        mostrarToast("Producto agregado al carrito");
    }
});

contenedorCarrito.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id);

    if(e.target.classList.contains("btn-eliminar")) {
        carrito.eliminarProdcuto(id);
        renderizarCarrito();
        mostrarToast("Producto eliminado");
    } else if (e.target.classList.contains("btn-aumentar")) {
        const item = carrito.buscarEnCarrito(id);
        if (item) carrito.cambiarCantidad(id, item.cantidad + 1);
        renderizarCarrito();
    } else if (e.target.classList.contains("btn-disminuir")) {
        const item = carrito.buscarEnCarrito(id);
        if (item && item.cantidad > 1) carrito.cambiarCantidad(id, item.cantidad - 1);
        renderizarCarrito();
    }
});

btnVaciarCarrito.addEventListener("click", () => {
    carrito.vaciar();
    carrito.envio = 0;
    inputCP.value = "";
    renderizarCarrito();
    mostrarToast("Carrito vaciado");
});

btnCalcularEnvio.addEventListener("click", () => {
    const cp = inputCP.value.trim();
    const resultado = carrito.calcularEnvio(cp);

    if (!/^[1-9]\d{3}$/.test(cp)){
        mostrarToast("Codigo postal invalido", "#cd3545");
        return;
    }
    carrito.calcularEnvio(cp);
    renderizarCarrito();
    mostrarToast("Envío calculado");
});

renderizarCarrito();
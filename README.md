# Lumé

Proyecto Universitario para la materia: **Programación Web I**.
  
**Lumé** es una tienda interactiva que permite a los usuarios explorar y comprar artículos de cuidado facial de forma intuitiva y eficiente.

---

## Objetivos del Proyecto

- Desarrollar una tienda online con un diseño limpio y accesible.
- Implementar funcionalidades interactivas para mejorar la experiencia del usuario.

---

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Toastify.js

---

## Funciones Previstas

- Filtros dinámicos por tipo de piel, categoría y rango de precio.
- Ordenar productos por precio ascendente y descendente.
- Limpieza de filtros y búsqueda personalizada.
- **Test de tipo de piel**: se determina el tipo según selección múltiple y se muestra un resultado.
- Carga de productos desde archivo JSON mediante `fetch()`.
- Carrito de compras completo:
  - Agregar, eliminar y modificar cantidades de productos.
  - Cálculo automático de subtotal, envío y total.
  - Validación del código postal (4 dígitos, sin ceros iniciales).
  - Persistencia del carrito usando `localStorage`.

---

## Estructura del Proyecto

```
📁 api
  └── catalogo.json
  └── preguntas.json
📁 assets
  ├── 📁 images
  ├── 📁 js
  │   ├── carrito.js
  │   ├── catalogo.js
  │   ├── main.js
  │   ├── pregunta.js
  │   ├── producto.js
  │   └── testPiel.js
  └── 📁 styles
📁 pages
  ├── contacto.html
  └── nosotros.html
index.html
README.md
CHANGELOG.md
```

### Diseño del Proyecto

[Enlace a prototipo en Figma](https://www.figma.com/proto/1DMyZEDTDHlGbTCQqbJ9tt/Untitled?node-id=1-2&t=brRzXRsrkXOl9VWp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2)

### Diagrama de Flujo

El siguiente diagrama representa el algoritmo principal de la logica de compra.

[Ver Diagrama de Flujo](https://drive.google.com/file/d/18EVYc1isjKDNEOUAS6Cz8ckFBEgCS3dh/view?usp=sharing)

### Diagrama de Clases

[Ver Diagrama](./assets/images/uml.png)

---

## Anexos

- [Anexo - Framekowrs y Node JS](./docs/anexos.md)
# 📦 CHANGELOG

Este archivo documenta todos los cambios significativos del proyecto.

---

## 26/06/2025

### ✨ Nuevas funcionalidades

- Integración de archivo JSON para cargar productos mediante `fetch()`.
- Renderizado dinámico de productos en el DOM usando Bootstrap.
- Sistema de carrito completamente funcional:
  - Agregar, eliminar y modificar cantidades de productos.
  - Cálculo de subtotal, envío y total.
  - Persistencia de datos con `localStorage`.

- Filtros dinámicos por tipo de piel, categoría y rango de precio.
- Ordenar productos por precio ascendente y descendente.
- Limpieza de filtros y búsqueda personalizada por nombre.
- **Test de tipo de piel** interactivo:
  - Preguntas del test generadas dinámicamente desde un archivo JS.
  - Evaluación automática por puntaje según las opciones seleccionadas.
  - Resultado personalizado basado en las respuestas del usuario.
  - Modal de Bootstrap con diseño accesible y responsivo para realizar el test.

### 🛠 Mejoras técnicas

- Separación del DOM y la lógica del negocio en distintas clases.
- Almacenamiento en `localStorage` del carrito.
- Modularización en archivos: `main.js`, `carrito.js`, `catalogo.js`, `producto.js`, `testPiel.js`.
- Uso de librería externa **Toastify** para notificaciones.
- Validaciones extra:
  - Código postal de 4 dígitos válidos (sin ceros iniciales).

### 📁 Organización del repositorio

- Rama: `release/segundo*parcial`
- [Pull Request](https://github.com/ElenaGonzalez2000/Lume/pull/7)
- [GitHub Pages](https://elenagonzalez2000.github.io/Lume/)

---

## 12/05/2025

### 🚧 Proyecto inicial

- Primer versión con lógica de catálogo y renderizado de productos por consola.
- Estructura base con clases `Producto` y `Carrito`.

# Changelog

## 2.0.2 - 27/07/2025 (Correcciones Segundo Parcial)

### Sprint learnings

* Reforzamos la importancia de seguir el flujo de ramas establecido y la gestión de correcciones post-entrega.
* **Aprendimos la importancia de mantener la rama `develop` actualizada con todas las entregas previas antes de crear ramas de `release` para parciales, para asegurar un flujo de revisión adecuado.**

### Added

* Implementación de correcciones solicitadas para el Segundo Parcial.
* **Creación de una plantilla (template) de Pull Request en el repositorio para estandarizar las solicitudes de revisión.**

### Changed

* N/A

### Fixed

* Errores y observaciones identificadas en la entrega inicial del Segundo Parcial, incluyendo:

  * **Corrección del formato y contenido del archivo `CHANGELOG.md` según las observaciones.**
  * **Resolución de la falta de presentación de la cuarta entrega para revisión previa.**
  * **Revisión de la carga asíncrona de datos para asegurar que la información estática (preguntas) también pueda cargarse desde un JSON.**

## 1.1.1 - 26/07/2025 (Corrección de Flujo - Creación tardía de feature/cuarta-entrega)

### Sprint learnings

* Se comprendió la importancia de adherirse al flujo de trabajo de ramas desde el inicio para evitar inconsistencias.

### Added

* Creación de la rama `feature/cuarta-entrega` y su Pull Request asociada (PR #8) para simular el flujo de entrega correcto de la Unidad 4.
* **Nota:** La funcionalidad de la Unidad 4 ya había sido implementada y entregada como parte del Segundo Parcial (v2.0.0). Esta entrada refleja la intencion de corregir el flujo de trabajo de Git, **debido a la observación del profesor de que `develop` no tenía los últimos cambios de la cuarta entrega mergeados al momento de crear la rama `release/segundo-parcial`**, no se hicieron modificaciones extra en esa rama.

### Changed

* N/A

### Fixed

* N/A

## 2.0.0 - 26/06/2025 (Segundo Parcial)

### Sprint learnings

* Aprendimos a integrar librerías JavaScript externas para funcionalidades específicas.
* Profundizamos en el manejo asíncrono de datos con AJAX, JSON, promises y fetch.
* Implementamos el uso de funciones de orden superior para el recorrido de colecciones.
* **Se abordaron los requisitos de la Unidad 4 (JSON, Storage, DOM y Eventos) directamente en esta entrega, sin una entrega previa dedicada para la "Cuarta Entrega", lo que generó observaciones en el flujo de Git.**

### Added

* Implementación de funcionalidad asíncrona para la obtención y uso de datos (AJAX, JSON, promises, fetch).
* Consumo de APIs externas o uso de archivos JSON estáticos para cargar información.
* Recorrido óptimo de colecciones con funciones de orden superior (map, filter, reduce).
* Captura de entradas de usuario mediante inputs y eventos adecuados.
* Salidas coherentes con las entradas presentadas de forma asíncrona en el HTML.
* Incorporación de al menos una librería JavaScript externa para una funcionalidad específica.
* **Funcionalidad de la Unidad 4 (JSON, Storage, DOM y Eventos) integrada:**
  * Implementación de flujos de trabajo con entrada, proceso y salida interactiva.
  * Captura de entradas de usuario mediante eventos (evitando `prompt()` y `alert()`).
  * Modificación del DOM para salidas en HTML.
  * Control de ingreso de entradas y coherencia en las salidas.
  * Almacenamiento y recuperación de datos relevantes en `localStorage` o `sessionStorage`.
  * Diagrama de clases para representar la estructura de objetos del simulador.

### Changed

* Correcciones y mejoras basadas en la retroalimentación del Primer Parcial.
* Adaptación de la funcionalidad para el manejo de datos asíncronos.

### Fixed

* Correcciones de errores identificados en las pre-entregas de la unidad 3.

## 1.0.3 - 2025-05-12 (Tercera Entrega)

### Sprint learnings

- Aprendimos a estructurar el proyecto con JavaScript.
- Implementamos algoritmos condicionales y ciclos.
- Desarrollamos funciones y/o métodos para operaciones específicas.
- Utilizamos `prompt()` y `alert()` para interactividad básica.
- Aplicamos principios de escalabilidad y legibilidad en el código JavaScript.

### Added

- Implementación de algoritmos condicionales y ciclos (IF, bucles for).
- Creación de funciones y/o métodos para operaciones (suma, resta, concatenación, etc.).
- Simulación de un flujo de trabajo (entrada, proceso, salida).
- Captura de entradas con `prompt()` y salidas con `alert()`.
- Declaración de funciones con parámetros, uso de arrays y objetos.
- Definición del código JavaScript en un archivo `.js` externo.
- Diagrama de flujo del algoritmo principal de la aplicación.

### Changed

- Traslado de los cambios del Primer Parcial a la rama `develop` (backport).

### Fixed

- Resolución de conflictos de merge durante el backport.

## 1.0.2 - 2025-04-23 (Primer Parcial)

### Sprint learnings

- Aprendimos a incorporar componentes avanzados de HTML.
- Implementamos Bootstrap para diseño responsivo.
- Configuramos reglas de protección de ramas en GitHub.

### Added

- Incorporación de al menos un componente avanzado de HTML (mapa de Google Maps).
- Instalación de la biblioteca Bootstrap en el proyecto.
- Utilización del sistema de columnas de Bootstrap para diseño responsivo.
- Inclusión de al menos un componente avanzado de Bootstrap.
- Configuración de reglas en GitHub para bloquear `push` directos a `develop` y `master`.
- Requerimiento de al menos un revisor aprobado para `merges` en el repositorio.

### Changed

- Integración de las pre-entregas de las Unidades 1 y 2.
- Aplicación de correcciones recibidas en las pre-entregas.

### Fixed

- Correcciones de errores identificados en las pre-entregas.

## 1.0.1 - 2025-04-14 (Segunda Entrega)

### Sprint learnings

- Aprendimos a mejorar la maquetación CSS.
- Implementamos diseño de columnas y layouts responsive con media queries.

### Added

- Uso de hojas de estilo en cascada (CSS) para mejorar el diseño visual.
- Aplicación de estilos con diferentes tipos de selectores y herencia.
- Implementación de formatos y fuentes para legibilidad y estética.
- Uso de modelos de caja (box model) para control de elementos.
- Diferenciación entre elementos en línea y en bloque.
- Implementación de columnas con elementos flotantes, `display: flex` y `display: grid`.
- Uso de media queries para diseño responsive.
- Estructuración de layouts con contenedores, filas y columnas.

### Changed

- Mejoras visuales y estructurales de la página web.

### Fixed

- Correcciones de errores identificados en la primera entrega.

## 1.0.0 - 2025-03-31 (Primera Entrega)

### Sprint learnings

- Aprendimos a estructurar una página web con HTML5.
- Creamos y gestionamos ramas en GitHub (`master`, `develop`, `feature`).
- Habilitamos GitHub Pages para visualización del proyecto.
- Documentamos el proyecto en el archivo `README.md`.

### Added

- Estructura básica de la página web utilizando HTML5.
- Inclusión de elementos básicos de HTML (título, párrafos, imágenes, enlaces, listas, formularios, tablas).
- Uso de etiquetas semánticas para accesibilidad y SEO.
- Creación de ramas `master` y `develop` en el repositorio.
- Creación de la rama `feature/primera-entrega` y habilitación de GitHub Pages.
- Descripción detallada del proyecto en `README.md` (título, descripción, objetivos, tecnologías, funcionalidades, maqueta de diseño).

### Changed

- N/A

### Fixed

- N/A
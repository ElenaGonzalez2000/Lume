# Framework - React JS

React es una biblioteca de JavaScript creada por Meta (Facebook) para construir interfaces de usuario. Se basa en componentes reutilizables y utiliza un DOM virtual para actualizar la interfaz de forma eficiente

## Motivación y Justificación

Elegí React porque permite estructurar mejor la interfaz de la tienda. Facilita el renderizado de productos, el manejo del carrito usando componentes y estado.
Permite dividir la logica en pequeñas partes y son reutilizables, lo que mejora el mantenimiento del código.

## Nivel de dificultad de adaptación

Media, es necesario aprender JSX (mezcla de HTML y JS) y el manejo de estado, pero tiene una gran comunidad y documentación que lo hace accesible para quienes ya tienen experiencia en JavaScript.

## Ejemplo de código - Antes y Despues:

### Con JavaScript puro:

```js
funtion crearCard(producto) {
    const card = document.createElement("div");
    card.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>${producto.precio}</p>
    `
    return card;
}
```

### Con React JS:

```jsx
function ProductoCard({ producto }) {
  return (
    <div>
      <h5>{producto.nombre}</h5>
      <p>{producto.precio}</p>
    </div>
  );
}
```

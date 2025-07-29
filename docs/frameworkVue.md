# Framework - Vue

Vue.js es un framework progresivo para construir interfaces de usuario, se puede integrar facilmente a proyectos existentes o usarse para construir SPA completas. Utiliza una sintaxis clara basada en HTML y conceptos de reactividad

## Motivación y Justificación

Elegi Vue porque es muy sencillo de aprender, tiene una curva de aprendizaje liviana y permite organizar el codigo de forma reactiva, es ideal para mostrar dinamicamente resultados ya que actualiza automaticamente la vista cuando cambia el estado.

## Nivel de dificultad de adaptación 

Baja, se puede incorporar directamente en un archivo HTML, y su sintaxis es parecida a HTML con atributos especiales. Puede ser muy util para personas que vienen de trabajar con HTML y JavaScript sin frameworks.

## Ejemplo de código - Antes y Despues:

### Con JavaScript puro:

```js
const mensaje = document.querySelector("#envio-gratis");
const total = carrito.calcularTotal();

if (total >= 20000){
    mensaje.textContent = "Tenes envio gratis!";
    mensaje.style.display = "block";
} else {
    mensaje.style.display = "none";
}
```

### Con Vue JS:

```html 
<template>
    <p v-if="carrito.calcularTotal() >= 20000"> Tenes envio gratis! </p>
</template>

<script>
    export default {
        props: ['carrito']
    }
</script>
```

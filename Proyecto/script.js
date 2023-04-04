// Obtener el elemento del contador
const contador = document.querySelector(".counter");

// Obtener el botón de "Comprar"
const botonComprar = document.querySelector(".incrementButton");

// Agregar un event listener al botón que escucha el evento "click"
botonComprar.addEventListener("click", function() {
  // Obtener el valor actual del contador y convertirlo a número
  let valorActual = parseInt(contador.textContent);
  
  // Agregar 1 al valor actual
  valorActual++;
  
  // Actualizar el contenido del contador con el nuevo valor
  contador.textContent = valorActual;
});
// Obtener todos los botones de "Comprar"
const botonesComprar = document.querySelectorAll('.incrementButton');

// Obtener el contador de productos
const contadorProductos = document.querySelector('.counter');

// Inicializar el valor del contador en 0
let contador = 0;

// Agregar un evento click a cada botón de "Comprar"
botonesComprar.forEach((boton) => {
  boton.addEventListener('click', () => {
    // Incrementar el contador
    contador++;
    // Actualizar el valor del contador
    contadorProductos.textContent = contador;
  });
});
// Obtener los elementos del DOM necesarios
const elementosContainer = document.querySelector('.elementos');
const counterElement = document.querySelector('.counter');
const precioTotalElement = document.querySelector('.precio-total');

// Definir variables de estado
let contador = 0;
let precioTotal = 0;

// Función para agregar un producto
function agregarProducto(event) {
  // Obtener el producto y su precio
  const producto = event.target.parentNode;
  const precio = parseInt(producto.querySelector('p').innerText);

  // Actualizar el contador y precio total
  contador++;
  precioTotal += precio;

  // Actualizar los elementos del DOM
  counterElement.innerText = contador;
  precioTotalElement.innerText = precioTotal;

  // Crear el elemento para el producto en la bolsa
  const elementoProducto = document.createElement('div');
  elementoProducto.classList.add('elemento-producto');

  const nombreProducto = producto.querySelector('.titulo').innerText;

  // Agregar el contenido del elemento
  elementoProducto.innerHTML = `
    <span class="nombre-producto">${nombreProducto}</span>
    <span class="precio-producto">$${precio}</span>
    <button class="eliminar-producto" onclick="eliminarProducto(event)">Eliminar</button>
  `;

  // Agregar el elemento a la bolsa
  elementosContainer.appendChild(elementoProducto);
}

// Función para eliminar un producto
function eliminarProducto(event) {
  // Obtener el elemento del producto y su precio
  const elementoProducto = event.target.parentNode;
  const precio = parseInt(elementoProducto.querySelector('.precio-producto').innerText.slice(1));

  // Actualizar el contador y precio total
  contador--;
  precioTotal -= precio;

  // Actualizar los elementos del DOM
  counterElement.innerText = contador;
  precioTotalElement.innerText = precioTotal;

  // Eliminar el elemento del producto de la bolsa
  elementosContainer.removeChild(elementoProducto);
}

// Agregar el listener para los botones de comprar
const botonesComprar = document.querySelectorAll('.incrementButton');
botonesComprar.forEach((boton) => {
  boton.addEventListener('click', agregarProducto);
});

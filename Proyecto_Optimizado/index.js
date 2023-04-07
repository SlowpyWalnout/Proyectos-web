// Obtener todos los botones de incremento
const incrementButtons = document.querySelectorAll('.incrementButton');

// Agregar un evento de clic a cada botón de incremento
incrementButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Función para agregar un producto al carrito
function addToCart(event) {
  // Obtener el producto seleccionado
  const producto = event.target.parentNode.parentNode;
  
  // Crear un nuevo elemento para el carrito
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  
  // Agregar el título del producto al elemento del carrito
  const cartItemTitle = document.createElement('h3');
  cartItemTitle.innerText = producto.querySelector('.titulo').innerText;
  cartItem.appendChild(cartItemTitle);
  
  // Agregar el precio del producto al elemento del carrito
  const cartItemPrice = document.createElement('h4');
  cartItemPrice.innerText = producto.querySelector('hr').nextSibling.textContent.trim();
  cartItem.appendChild(cartItemPrice);
  
  // Agregar el elemento del carrito a la lista de elementos
  const cartItemsList = document.querySelector('.elementos');
  cartItemsList.appendChild(cartItem);
  
  // Actualizar el contador de elementos en el carrito
  const cartCounter = document.querySelector('.counter');
  cartCounter.innerText = parseInt(cartCounter.innerText) + 1;
  
  // Actualizar el precio total
  const precioTotal = document.querySelector('.precio-total');
  precioTotal.innerText = parseInt(precioTotal.innerText) + parseInt(cartItemPrice.innerText);
}

const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra');
const carrito = document.getElementById('carrito');

cargarEventos();

function cargarEventos(){

    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e)});

    compra.calcularTotal();


}
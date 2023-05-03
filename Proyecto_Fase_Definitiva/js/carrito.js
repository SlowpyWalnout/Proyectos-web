class Carrito{

leerDatosProducto(producto){
    const infoProducto = {
        titulo : producto.querySelector('h1').src,
        precio : producto.querySelector('p').textContent,
        id : producto.querySelector('button').getAttribute('id'),
    }
    this.insertCarrito
}

eliminarProducto(){
    e.preventDefault();
    let producto, productoID;
    if(e.target.classList.contains('borrar-producto')){
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement;
        producto = producto.querySelector('button').getAttribute('id');
    }
}

leerLocalStorage(){
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function(producto){
        const elementoProducto = document.createElement('tr');
        elementoProducto.innerHTML = `
            <span class="nombre-producto">${nombreProducto}</span>
            <span class="precio-producto">$${precio}</span>
            <button class="eliminar-producto" onclick="eliminarProducto(event)">Eliminar</button>
        `;
    listaProductos.appendChild(elementoProducto);
    });
}

guardarProductosLocalStorage(producto){
    let productos;
    productos = this.obtenerProductosLocalStorage();
    productos.push(producto);
    localStorage.setItem('producto', JSON.stringify(productos));

}

obtenerProductosLocalStorage(){
    let productoLS;

    if(localStorage.getItem('producto') === null){
        productoLS=[];
    }
    else{
        productoLS = JSON.parse(localStorage.getItem('producto'));
    }
    return productoLS;

}

eliminarProductoLocalStorage(productoID){

    let productoLS;
    productoLS = this.obtenerProductosLocalStorage();
    productoLS.forEach(function(productoLS, index){
        if(productoLS.id === productoID){

            productoLS.splice(index, 1);

        }
    });

    localStorage.setItem('producto', JSON.stringify(productoLS));

}

calcularTotal(){
    let productoLS;
    let total = 0;
    productoLS = this.obtenerProductosLocalStorage();
    for(let i =0; i<productoLS.length; i++){
        total=total+productoLS.precio;
    }

    document.getElementById.apply('total').innerHTML = "S/. " + total;

}
}
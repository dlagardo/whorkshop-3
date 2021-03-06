// == selectores ==
const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const carrito = []



// const mostrarProductos = (array) => {
//     contenedorProductos.innerHTML = ''

//     array.forEach((producto) => {
//         const div = document.createElement('div')
//         div.classList.add('producto')
//         div.innerHTML = `
//                     <img src=${producto.img} alt="">
//                     <h3>${producto.nombre}</h3>
//                     <p>${producto.desc}</p>
//                     <p>Talle: ${producto.talle}</p>
//                     <p class="precioProducto">Precio: $${producto.precio}</p>
//                     <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
//         `

//         contenedorProductos.appendChild(div)
//     })
// }

// ************* prueba ************
const mostrarProductos = (array) => {
    contenedorProductos.innerHTML = ''
    array.forEach((producto) => {
        const div = document.createElement('div')
        div.className = "card-img-top text-center"
        div.classList.add('producto')
        div.style = "width: 18rem"
        div.innerHTML = `
                    <img src=${producto.img} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title grande">${producto.nombre}</h5>
                        <p>${producto.desc}</p>
                        <p class="card-text rojo">Precio: $${producto.precio}</p>
                        <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-dark boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                    </div>
                `
        contenedorProductos.appendChild(div)

    })

}







//usage:
// readTextFile("/db/catalago.json", function(text){
//     var data = JSON.parse(text);
//     // console.log(data);
//     mostrarProductos(data)
// });

// let array1 = []
// console

// let a = traerDatos()
// console.log (a)
// mostrarProductos(a)
// console.log (traerDatos)


// function traerDatos() {
const xhttp = new XMLHttpRequest();
xhttp.open('GET', './db/catalago.json', true);
xhttp.send();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        stockProductos = JSON.parse(this.responseText);
        // mostrarProductos(stockProductos2)
        // console.log("stockproductos2",stockProductos2)
        // juan = Object.assign({},stockProductos2)
        // // dd = stockProductos2;
        // console.log("juan",juan)
        mostrarProductos(stockProductos)
    }

}

// }
// let stockProductos3 = traerDatos()


// traerDatos();
// console.log(typeof (stockProductos3))
// mostrarProductos(juan)




// === AGREGAR AL CARRITO ===


const agregarAlCarrito = (itemId) => {

    const productoEnCarrito = carrito.find((prod) => prod.id === itemId)

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++
    } else {

        const producto = stockProductos.find((prod) => prod.id === itemId)

        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        })
    }


    console.log(carrito)
    actualizarCarrito()
}

// === RENDER CARRITO ===

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                <p>${prod.nombre}</p>
                <p>Precio: $${prod.precio}</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button onclick="eliminarProducto(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
             `

        contenedorCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
}

// === ELIMINAR PRODUCTO ===

const eliminarProducto = (itemId) => {
    const producto = carrito.find((prod) => prod.id === itemId)

    producto.cantidad--

    if (producto.cantidad === 0) {
        const index = carrito.indexOf(producto)
        carrito.splice(index, 1)
    }

    actualizarCarrito()
}


// == FILTROS == 

// const selectFiltro = document.getElementById('talles')
// const selectPrecios = document.getElementById('precios')


// const filtrar = () => {
//     let valorFiltroTalles = selectFiltro.value
//     let valorFiltroPrecios = selectPrecios.value

//     let arrayFiltrado = []

//     if (valorFiltroTalles == 'all') {
//         arrayFiltrado = stockProductos
//     } else {
//         arrayFiltrado = stockProductos.filter(el => el.talle == selectFiltro.value)
//     }

//     if (valorFiltroPrecios == 1) {
//         arrayFiltrado = arrayFiltrado.filter(el => el.precio <= 5000)
//     } else if (valorFiltroPrecios == 2) {
//         arrayFiltrado = arrayFiltrado.filter(el => el.precio >= 5000)
//     }

//     mostrarProductos(arrayFiltrado)

// }

// selectFiltro.addEventListener('change', () => {
//     filtrar()
// })
// selectPrecios.addEventListener('change', () => {
//     filtrar()
// })


// === buscador ===

// const buscador = document.getElementById('buscador')

// const buscar = (search) => {
//     return stockProductos.filter((prod) => prod.nombre.toLowerCase().includes(search))
// }


// buscador.addEventListener('input', () => {
//     const search = buscador.value.trim().toLowerCase()
//     mostrarProductos(buscar(search))
// })
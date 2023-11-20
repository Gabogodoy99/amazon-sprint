const productos = [
    {
        id: 1,
        nombre: "Mac",
        precio: 10000,
    },{
        id: 2,
        nombre: "Mac laptop",
        precio: 10000,
    },
    {
        id: 3,
        nombre: "samsung notebook",
        precio: 8000,
    },
    {
        id: 4,
        nombre: "Samsung galaxy book3",
        precio: 8000,
    },
];
let contadorCarrito = 0;
const carrito = [];

const productoCatalogoHTML = (producto) => {
    return
    const text = `                 
    <div class="col">
    <div class="card">
        <img src="../imagenes/mac1.jpeg ${producto.nombre}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>  
            <button id "btn-catalogo-${producto.id}" href="#" class="btn btn-primary">Agregar al Carrito</button>
        </div>
        </div>
</div>
<div class="col">
    <div class="card">
        <img src="../imagenes/mac 2.jpeg $" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <button id "btn-catalogo-" href="#" class="btn btn-primary">Agregar al Carrito</button>
        </div>
        </div>
</div>
<div class="col">
    <div class="card">
        <img src="../imagenes/samsung.jpeg " class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <button id "btn-catalogo-" href="#" class="btn btn-primary">Agregar al Carrito</button>
        </div>
</div>
<div class="col">
    <div class="card">
        <img src="../imagenes/samsung galaxy book3.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <button id "btn-catalogo-" href="#" class="btn btn-primary">Agregar al Carrito</button>
        </div>
        </div>
</div> `
};
const productoCarritoHTML = (producto) => "";

const mostrarCatalogo = () => {};
const mostrarCarrito = () => {};

const botonesCatalogo = () => {};
const botonesCarrito = () => {};

mostrarCatalogo();

console.log(productoCatalogoHTML(productos))









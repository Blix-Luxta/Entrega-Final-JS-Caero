//======== funcion constructora ==========
function productoNuevo(id, nombre, precio, img, cantidad) {
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.img = img;
    this.cantidad = parseInt(cantidad);
}
function cargarProdructo(arr, product) {
    arr.push(product);
}

//======= creacion del modal =========
const pintarCarrito = () => {
    //======= header =======
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div")
    console.log("funca")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1> 
    `;
    modalContainer.append(modalHeader);

    //====== boton salir ======
    const modalbutton = document.createElement("div");
    modalbutton.innerHTML = `<img src="./imagenes/icono/cerrar-rojo.jpg">`
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    })
    modalHeader.append(modalbutton);

    //======= body ========
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}" class="img-modal">
        <div class="product_name">
            <h3>${product.nombre}</h3>
        </div>
        <p>${product.precio} $</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio} $</p>
        <img src="./imagenes/icono/eliminar.jpg" class="delete-product">
        `;

        modalContainer.append(carritoContent)

        let sumar = carritoContent.querySelector(".sumar")
        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", () => {
            if (product.cantidad !== 1) {
                product.cantidad--
                guardadoLocal()
                pintarCarrito()
            }
        })

        sumar.addEventListener("click", () => {
            product.cantidad++
            guardadoLocal()
            pintarCarrito()
        })

        //====== boton eliminar =====
        let eliminar = carritoContent.querySelector(".delete-product")

        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id)
        })
    });


    //======= acumulador de total =======
    const total = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar ${total} $`
    modalContainer.append(totalBuying);


}

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    })
    guardadoLocal()
    carritoCounter()
    pintarCarrito()
}

const carritoCounter = () => {
    cantidadesCarrito.style.display = "block"

    const carritoLength = carrito.length

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadesCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
}

//=============  creacion de cards / Fetch  ==============

fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
        crearCards(data)
    })
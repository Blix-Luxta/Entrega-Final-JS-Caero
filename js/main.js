
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById ("verCarrito")
const modalContainer = document.getElementById("modalContainer");
const cantidadesCarrito = document.getElementById("cantidadesCarrito")


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//=============  creacion de cards  ==============
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "cards";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);
    //======== boton comprar ==========


    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    // ====== funcionalidad del boton ======
    comprar.addEventListener("click", () =>{
        const repeat = carrito.some((repeatProcuct) => repeatProcuct.id === product.id)
        
        if (repeat){
            carrito.map((prod) => {
                if (prod.id === product.id){
                    prod.cantidad++
                } 
            })
        }else{
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            })
        }
        // ===== LocalStorage =====
        guardadoLocal()
        //====== contador ======
        carritoCounter()
    })
});
//============== Local Storage ==================
const guardadoLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

carritoCounter();


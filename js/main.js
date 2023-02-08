
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer");
const cantidadesCarrito = document.getElementById("cantidadesCarrito")

window.addEventListener("load", () => {
    document.getElementById("loader").classList.toggle("loader2")

    setTimeout(() => {
        termsConfirm()
    }, 2000);

})

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//=============  creacion de cards con array  ==============
function crearCards(arr) {
    arr.map((product) => {
        let content = document.createElement("div");
        content.className = "cards";
        content.innerHTML = `
        <img src="${product.img}">
        <div class="product_name">
            <h3>${product.nombre}</h3>
        </div>
        <p class="price">${product.precio} $</p>
    `;

        shopContent.append(content);
        //======== boton comprar ==========


        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        content.append(comprar);

        // ====== funcionalidad del boton ======
        comprar.addEventListener("click", () => {
            const repeat = carrito.some((repeatProcuct) => repeatProcuct.id === product.id)

            if (repeat) {
                carrito.map((prod) => {
                    if (prod.id === product.id) {
                        prod.cantidad++
                    }
                })
            } else {
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
}

function pintandoCards() {
    return new Promise((resolve, reject) => {
        console.log("cargando...")

        setTimeout(() => {
            resolve(crearCards(productos))
            reject(Error("A ocurrido un error"))
        }, 500)
    })
}

async function cargaDeCards() {
    let cargandoCards = await pintandoCards()
}

cargaDeCards()

//============== Local Storage ==================
const guardadoLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

carritoCounter();
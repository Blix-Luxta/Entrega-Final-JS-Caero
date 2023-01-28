const productos = [
    {id: 1,nombre: "Remera Lisa", precio: 700, img: "./imagenes/remera-lisa-negra.jpg", cantidad: 1,},
    {id: 2,nombre: "Remera Estampada", precio: 900, img: "./imagenes/remera-bordada.jpg", cantidad: 1,},
    {id: 3,nombre: "Buso Liso", precio: 2900, img: "./imagenes/buso-liso.jpg", cantidad: 1,},
    {id: 4,nombre: "Buso Estampado", precio: 3200, img: './imagenes/buso-estampado.jpg', cantidad: 1,},
    {id: 5,nombre: "jean Liso", precio: 3500, img: './imagenes/jean-liso.jpg', cantidad: 1,},
    {id: 6,nombre: "jean Estampado", precio: 4000, img: './imagenes/jean-estampado.jpg', cantidad: 1,},
    {id: 7,nombre: "Campera Lisa", precio: 3500,img: './imagenes/campera-lisa.jpg', cantidad: 1,},
    {id: 8,nombre: "Campera Estampada", precio: 3900, img: './imagenes/campera-estampada.jpg', cantidad: 1,},
    {id: 9,nombre: "Gorra Bordada", precio: 3500, img: './imagenes/gorra-estampada.jpg', cantidad: 1,},
    {id: 10,nombre: "Gorra de la Selección", precio: 4500, img: "./imagenes/gorra-seleccion.jpg", cantidad: 1,},
    {id: 11,nombre: "Camiseta de la Selección", precio: 6000, img: './imagenes/camiseta-arg.jpg', cantidad: 1,}
]

cargarProdructo(productos, new productoNuevo(12, "Campera de la Selección", 12000, "./imagenes/campera-seleccion.jpg",1)) 
cargarProdructo(productos, new productoNuevo(13, "Camiseta Suplente", 6000, "./imagenes/camiseta-seleccion-suplente.jpg",1)) 
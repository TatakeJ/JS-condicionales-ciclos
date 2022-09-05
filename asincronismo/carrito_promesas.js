class Carrito {
    constructor(nombre, precio, cantidad) {
        this._nombre = nombre
        this._precio = precio
        this._cantidad = cantidad
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio) {
        this._precio = precio;
    }
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
}

var carrito = []

const p1 = new Carrito("Azucar", 20000, 4)
const p2 = new Carrito("Arroz", 70000, 2)
const p3 = new Carrito("Sal", 10000, 2)
const p4 = new Carrito("Yuca", 5000, 7)

carrito.push(p1, p2, p3, p4)

console.log("Productos añadidos al carrito: ")
console.log(carrito)

var suma = 0
var plata = 400000;


// function actCantidad(cod, cant) {
//     cod.cantidad = cant
// }
// actCantidad(p4, 5)

// function ingresarProductos(codigo, nombre, precio, cantidad) {
//     carrito.push(codigo = new Carrito(nombre, precio, cantidad))
// }
// ingresarProductos("p5", "Arepas", 15000, 1)
// console.log(carrito)

console.log("Su presupuesto es de: " + plata);


function subTotal() {
    for (let i = 0; i < carrito.length; i++) {
        total = carrito[i].precio * carrito[i].cantidad
        suma += total
    }
    console.log("El total del carrito es: " + suma)
}

function mostrarPlata() {
    return new Promise((resolve, reject) => {
        if (suma < plata) {
            resolve(console.log("Su sobrante es de: " + (plata - suma)))
        } else {
            reject(console.log("Su carrito exedió su presupuesto."))
        }
    })
}

async function traer() {
    try {
        const h1 = await subTotal();
        const h2 = await mostrarPlata();
    } catch (error) {

    }
}
traer();
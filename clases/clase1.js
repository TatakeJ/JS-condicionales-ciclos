class Producto {
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
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
}

//INSTANCIACION DE OBJETOS - operador new
//let x=10; similar a declarar variables
let prod1 = new Producto('computador', 4000000);
console.log(prod1.nombre);
console.log(prod1.precio);

//cambio datos
prod1.nombre = "computador portatil";
console.log(prod1.nombre);
prod1.precio = 3800000;
console.log(prod1.precio);

let prod2 = new Producto('Celular', 3000000);
console.log(prod2.nombre);
console.log(prod2.precio);

let prod3 = new Producto('Teclado', 150000);
console.log(prod3.nombre);
console.log(prod3.precio);

console.log(prod1);
console.log(typeof(prod1));
console.log(prod2);
console.log(typeof(prod2));
console.log(prod3);
console.log(typeof(prod3));
class Productos {
    constructor(nombre, precio, stock) {
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    set precio(precio) {
        this._precio = precio;
    }
    set stock(stock) {
        this._stock = stock;
    }
    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }
    get stock() {
        return this._stock;
    }
}

var tienda = [];
const prod1 = new Productos('gucci', 600000, 15)
const prod2 = new Productos('moschino', 450000, 60)
const prod3 = new Productos('ray ban', 150000, 21)
const prod4 = new Productos('acliclas', 110000, 63)
const prod5 = new Productos('dolcce gabbana', 320000, 25)
const prod6=new Productos('acliclas', 320000, 26)
tienda.push(prod1 , prod2, prod3, prod4, prod5, prod6);

function gestionProductos(callback1,callback2,callback3) {
    console.log("Gestionando productos....");
    callback1();
    callback2();
    callback3();
    setTimeout(() => {
        console.log('--------------------------------------------------------------')
        console.log("Productos gestionados 😎👌");
    }, 5000);
}

function calcularPromedio() {
    setTimeout(() => {
    let suma = 0;
    let prom = 0;
    for (let i = 0; i < tienda.length; i++) {
        suma += tienda[i]._precio;
        prom = suma/tienda.length;
    }
    console.log(`El promedio de precio es: ${prom}`);
    }, 2000);
}


function ordenamiento() {
    setTimeout(() => {
    var aux = 0;
    for (let i = 0; i < tienda.length /*- 1*/; i++) {
        for (let j = i /*+ 1*/; j < tienda.length; j++) {
            if (tienda[i]._stock < tienda[j]._stock) {
                aux = tienda[j];
                tienda[j] = tienda[i];
                tienda[i] = aux;
            }

        }
    }
    console.log('Productos ordenados: ');
    console.log(tienda);
    }, 3000);
}

function ganancias() {
    let sumas = [];
    setTimeout(() => {
    let suma1 = 0;
    let multi=0;
    for (let i = 0; i < tienda.length; i++) {
        multi = tienda[i]._precio * tienda[i]._stock
        sumas.push(multi)
        suma1 += sumas[i];
    }
    console.log(`Ganancia: ${suma1} 💸💸`);
    }, 4000);
}

gestionProductos(calcularPromedio, ordenamiento, ganancias);
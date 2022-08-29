// class Productos {
//     constructor(nombre, precio, stock) {
//         this._nombre = nombre;
//         this._precio = precio;
//         this._stock = stock;
//     }

//     get nombre() {
//         return this._nombre;
//     }

//     set nombre(nombre) {
//         this._nombre = nombre;
//     }

//     get precio() {
//         return this._precio;
//     }

//     set precio(precio) {
//         this._precio = precio;
//     }

//     get stock() {
//         return this._stock;
//     }

//     set stock(stock) {
//         this._stock = stock;
//     }

//     insertarStock() {
//         this._stock.push(stock)
//     }
// }

// var stock = [];
// const prod1 = new Productos('gafas', 600000, 15)
// const prod2 = new Productos('gafas', 750000, 60)
// console.log(prod1)
// prod1.insertarStock()
// console.log(stock)

function arraystock(callback1) {
    var stock = [];
    setTimeout(() => {
        callback1();
    }, 2000);
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            stock[i] = Math.round(Math.random() * 100);
        }
        console.log(stock);

        var aux = 0;
        for (let i = 0; i < stock.length - 1; i++) {
            for (let j = i + 1; j < stock.length; j++) {
                if (stock[i] < stock[j]) {
                    aux = stock[j];
                    stock[j] = stock[i];
                    stock[i] = aux;
                }

            }
        }
        console.log(stock);

    }, 3000);
}

function media() {
    var precios = [600000, 500000, 545000, 400000, 650000];
    var suma = precios[0] + precios[1] + precios[2] + precios[3] + precios[4]
    var div = suma / 5;
    console.log(div);
}

arraystock(media);
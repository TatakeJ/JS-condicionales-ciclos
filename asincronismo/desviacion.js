var stock = [];

function arraystock(callback1, callback2) {
    setTimeout(() => {
        callback1();
    }, 1000);
    setTimeout(() => {
        callback2();
    }, 1000);
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

    }, 1000);
}

function media() {
    var suma = 0;
    for (let i = 0; i < stock.length; i++) {
        suma += stock[i];
        var div = suma / stock.length;
    }
    console.log(Math.floor(div))
    return div;
}

function expo() {
    for (let j = 0; j < stock.length; j++) {
        var rest = media().div - stock[j]
        var expo = rest ** 2
    }
    console.log(Math.floor(expo))
    return expo;
}
arraystock(media, expo);
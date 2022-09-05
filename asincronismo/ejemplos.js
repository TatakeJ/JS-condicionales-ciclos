//promesa
var num = 0;
var time = 1000
const counter = new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Start Counting");
            }, time);
        } else {
            reject('Fail')
        }
    })
    .then(value => {
        setTimeout(() => {
            console.log(value);
        }, time += 1000);
        return ++num;
    })
    .then(value => {
        setTimeout(() => {
            console.log(value);
        }, time += 1000);
        return ++num;
    })
    .then(value => {
        setTimeout(() => {
            console.log(value);
        }, time += 1000);
        return ++num;
    })
    .then(value => {
        setTimeout(() => {
            console.log(value);
        }, time += 1000);
    })
    .catch(value => {
        console.log(value);
    })

//Async y Await
const impresion = () => {
    return new Promise(resolve => {
        setTimeout(() => { resolve('hola') }, 2000);
    })
}
impresion().then((value) => {
    console.log(value);
})

//funcion flecha async
const mostrarImp = async() => {
    var data1 = await impresion('hola')
    var data2 = await impresion('mundo') //depende del async
    console.log(data1);
    console.log(data2);
}
mostrarImp()

//funcion clasica async
async function mostrarImp2() {
    var data1 = impresion('josepe') //pendiente
    return data1;
}

mostrarImp2()

//try
const obtener = (texto, err) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(texto) }, 2000);
        setTimeout(() => { reject(err) }, 2000);
    })
}
const mostrarObtener = async() => {
    try {
        const obt = await obtener("Un objeto")
        let obt2 = await obtener("Un objeto")
        console.log(obt);
        console.log(obt2);
    } catch (err) {
        console.log('.....');
    }
}
mostrarObtener();
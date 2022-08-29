function pruebaCallback(callback, name) {
    callback(name);
    setTimeout(() => {
        console.log('Dentro de pruebaCallback')
    }, 2000);
}

function saludo(nombre) {
    console.log(`hola ${nombre}`)
}

pruebaCallback(saludo, 'Ana');

//----------------------------------------------------------------------------------
function pruebaCallback(callback1,callback2, name) {
    callback1(name);
    setTimeout(() => {
        console.log('Dentro de pruebaCallback')
    }, 2000);
    callback2(name);
}

function saludo(nombre) {
    console.log(`hola ${nombre}`)
}

function cuentaLetras(nombre) {
    console.log(nombre.length)
}

pruebaCallback(cuentaLetras,saludo, 'Ana');
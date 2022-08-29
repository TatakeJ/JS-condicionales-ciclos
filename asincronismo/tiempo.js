console.log('hola')

setTimeout(() => {
    console.log('interrupción por settimeout')
}, 2000);

setTimeout(function() {
    console.log('settimeout con función clasica')
}, 1000);

function externa() {
    console.log('soy externa al settimeout')
}
setTimeout(externa, 500);

console.log('mundo');

function saludos() {
    console.log('hola mundo');
}
setTimeout(saludos);

console.log('debo ejecutarme antes del settimeout');

function saludos(nombre, rol) {
    console.log(`Hola, mi nombre es ${nombre}`);
    console.log(`yo soy ${rol}`);
}

saludos('pepe', 'bombero');
settimeout(saludos, 3000, 'Nathan', 'Programer')

//funcion para llenar un arreglo con numeros aleatorios, esa funcion se la van a pasar a un settimeout que dure 3 segundos, mientras transcurren esos 3 segundos, llenar un vector de numeros 1 a traves de una funcion.

function numaleatorio() {
    var cnum = []
    for (let i = 0; i < 25; i++) {
        cnum[i] = Math.round(Math.random() * (100 - 50) + 50);
    }
    console.log(cnum)
}

function vector2(veces, numero) {
    var v2 = []
    for (let i = 0; i < veces; i++) {
        v2[i] = numero
    }
    console.log(v2)
}

setTimeout(numaleatorio, 3000)
vector2(12, 1)

//por que cambia con let y var
for (let j = 0; j < 10; j++) {
    setTimeout(() => {
        console.log(j);
    }, (1000 * j));
}

setInterval(() => {
    console.log('amo el sena')
}, 1000);

//repetir con el intervalo de 2 segundos
let timeid = setInterval(() => {
    console.log('tick')
}, 2000);

//despues de 5 segundos parar
setTimeout(() => {
    clearInterval(timeid)
    console.log('stop')
}, 5000);

//arreblo llenado aletoriamente con 15 elementos se imprima infinitamente

var vec = []
for (let i = 0; i < 15; i++) {
    vec[i] = Math.round(Math.random() * (50 - 5) + 5);
}

var k = 0;
setInterval(() => {
    console.log(vec[k])
    k++;
    k == 15 ? k = 0 : k = km
}, 1000);
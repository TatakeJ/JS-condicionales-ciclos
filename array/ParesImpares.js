var numero = 12;
var aelementos = [];
for (let rango = 0; rango < 20; rango++) {
    aelementos[rango] = Math.round(Math.random() * 100);
}
console.log(aelementos);

//funcion suma
function suma() {
    let sum = 0;
    let aelementos = [];
    for (let rango = 0; rango < 20; rango++) {
        aelementos[rango] = Math.round(Math.random() * 100);
    }
    for (let i = 0; i < aelementos.length; i++) {
        return sum += aelementos[i];
    }
}
suma();
console.log(aelementos);
console.log(suma);

//suma
let sum = 0;

for (let i = 0; i < aelementos.length; i++) {
    sum += aelementos[i];
}
console.log(`Suma: ${sum}`);

//promedio
function ArrayAvg() {
    var i = 0,
        summ = 0,
        ArrayLen = aelementos.length;
    while (i < ArrayLen) {
        summ = summ + aelementos[i++];
    }
    return summ / ArrayLen;
}
console.log(`Promedio: ${ArrayAvg()}`);

//maximo
console.log(`Maximo: ${Math.max(...aelementos)}`)

//minimo
console.log(`Minimo: ${Math.min(...aelementos)}`)

//moda
console.log(aelementos.sort())

//----------------------------------------------------------------------------------------------------------------------

//pares e impares

var elementos = [];
var pares = [];
var impares = [];
for (let i = 0; i < 20; i++) {
    elementos[i] = Math.round(Math.random() * 100);
}
console.log(elementos);

var suma = 0;
for (let i = 0; i < elementos.length; i++) {
    let par = elementos[i] % 2
    if (par == 0) {
        pares.push(i);
        console.log(suma = suma + elementos[i])
    } else if (par == 1 || par > 0) {
        impares.push(i);
    }
}
console.log(`Es par: ${pares}`);
console.log(`Es impar: ${impares}`)

// sumar pares e impares por separado
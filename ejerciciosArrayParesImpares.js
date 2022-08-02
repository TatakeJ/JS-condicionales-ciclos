var numero = 12;
var aelementos = [];
for (let rango = 0; rango < 20; rango++) {
    aelementos[rango] = Math.round(Math.random() * 100);
}
console.log(aelementos);

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
        pares.push(pares[i]);
        console.log(`Es par: ${elementos[i]}`);
        console.log(suma = suma + elementos[i])
    } else if (par === 1 || par > 0) {
        console.log(`Es impar: ${elementos[i]}`)
    }
}
// sumar pares e impares por separado
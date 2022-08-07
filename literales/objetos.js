var fracciones = {
    numerador1: 7,
    denominador1: 3,
    numerador2: 1,
    denominador2: 3
}
console.log(fracciones);

//suma
if (fracciones.denominador1 === fracciones.denominador2) {
    suma = fracciones.numerador1 + fracciones.numerador2;
    console.log(`Resultado suma: ${suma}/${fracciones.denominador1}`)
} else {
    let mul1 = fracciones.numerador1 * fracciones.denominador2;
    let mul2 = fracciones.denominador1 * fracciones.numerador2;
    let mul3 = fracciones.denominador1 * fracciones.denominador2;
    let sum1 = mul1 += mul2 
    console.log(`Resultado suma: ${sum1}/${mul3}`);
    
}


//resta
var mul1 = fracciones.numerador1 * fracciones.denominador2;
var mul2 = fracciones.denominador1 * fracciones.numerador2;
var rest = mul1 -= mul2;
var mul3 = fracciones.denominador1 * fracciones.denominador2;
console.log(`Resultado resta: ${rest}/${mul3}`);

//multiplicacion
var mul1 = fracciones.numerador1 * fracciones.numerador2;
var mul2 = fracciones.denominador1 * fracciones.denominador2;
console.log(`Resultado multiplicación: ${mul1}/${mul2}`);

//dividir
var mul1 = fracciones.numerador1 * fracciones.denominador2;
var mul2 = fracciones.denominador1 * fracciones.numerador2;
console.log(`Resultado división: ${mul1}/${mul2}`)
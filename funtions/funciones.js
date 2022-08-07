function impresora() {
    console.log('que desea imprimir?')
}

impresora();
//ecuacion cuadratica
function ecuacion(a, b, c) {
    e1 = (b * -1 + (Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    e2 = (b * -1 - (Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    console.log(e1)
    console.log(e2)
}
ecuacion(4, 3, 6);
function hamburgueza(callback1, callback2, callback3, callback4, callback5, callback6, ing1, ing2, ing3, ing4, ing5, ing6) {
    callback1(ing1);
    callback2(ing1, ing2, ing3);
    callback3(ing1);
    callback4(ing4);
    callback5(ing5);
    callback6(ing6);
    setTimeout(() => {
        console.log('Se arma la hamburgueza');
    }, 7000);
    setTimeout(() => {
        console.log('Hamburgueza lista')
    }, 8000);
}

function molerCarne(ingrediente1) {
    setTimeout(() => {
        console.log(`Se muele la ${ingrediente1}`)
    }, 1000);
}

function sasonarCarne(ingrediente1, ingrediente2, ingrediente3) {
    setTimeout(() => {
        console.log(`Se sasona la ${ingrediente1} con ${ingrediente2} y ${ingrediente3}`)
    }, 2000);
}

function freirCarne(ingrediente1) {
    setTimeout(() => {
        console.log(`Se frie la ${ingrediente1}`)
    }, 3000);
}

function cortarTomate(ingrediente4) {
    setTimeout(() => {
        console.log(`Se corta el ${ingrediente4}`)
    }, 4000);
}

function deshacerLechuga(ingrediente5) {
    setTimeout(() => {
        console.log(`Se deshace la ${ingrediente5}`)
    }, 5000);
}

function cortarCebolla(ingrediente6) {
    setTimeout(() => {
        console.log(`Se corta el ${ingrediente6}`)
    }, 6000);
}

hamburgueza(molerCarne, sasonarCarne, freirCarne, cortarTomate, deshacerLechuga, cortarCebolla, 'carne', 'perejil', 'sal', 'tomate', 'lechuga', 'cebolla')
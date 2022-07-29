//1. Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el valor del medio es 11. No use operadores lógicos.

var a = 3;
var b = 2;
var c = 4;

if (a < b > c) {
    console.log(`el numero de la mitad es ${a}`)
} else if (a > b > c) {
    console.log(`el numero de la mitad es ${b}`)
} else if (a > b < c) {
    console.log(`el numero de la mitad es ${c}`)
}

//2. Escribe un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos.

var n1 = 4;
var n2 = 3;
var n3 = 4;
if (n1 === n2 && n2 === n3) {
    console.log('los tres numeros son iguales')
} else if (n1 === n2 || n2 === n3 || n1 === n3) {
    console.log('hay dos iguales')
} else {
    console.log('los tres son distintos')
}

//3. Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número exceda los límites emita un mensaje y finalice el programa.

var num = 0;
console.log(num);
while (num < 9.999) {
    num = Math.round(Math.random() * 20);
    console.log(num);
    if (num > 9.999) {
        console.log('finalizo el programa')
    }
}

//4. Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores.

var nota = 8.5;
if (nota >= 0 && nota < 5) {
    console.log(`su nota es ${nota}, Insuficiente!`)
} else if (nota >= 5 && nota <= 7) {
    console.log(`su nota es ${nota}, Suficiente :/`)
} else {
    if (nota > 7 && nota <= 10) {
        console.log(`su nota es ${nota}, Bien ;)`)
    }
}

/*5. En un juego de preguntas a las que se responde “Si” o “No” gana quien responda correctamente las tres preguntas. Si se responde mal a cualquiera de ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
1. Colon descubrió América?
2. La independencia de Colombia fue en el año 1810?
3. The Doors fue un grupo de rock Americano?*/

var respuesta1;
console.log('1=Si');
console.log('2=No');
console.log("1. Colon descubrió América?");
respuesta1 = 1;

switch (respuesta1) {
    case 1:
        console.log('Bien');
        break;
    case 2:
        console.log('Mal');
        break;
    default:
        console.log("ERROR");
        break;
}

var respuesta2;
console.log("2. La independencia de Colombia fue en el año 1810?");
respuesta2 = 1;
switch (respuesta2) {
    case 1:
        console.log('Bien');
        break;
    case 2:
        console.log('Mal');
        break;
    default:
        console.log("ERROR");
        break;
}

var respuesta3;
console.log("3. The Doors fue un grupo de rock Americano?");
respuesta3 = 1;
switch (respuesta3) {
    case 1:
        console.log('Bien');
        break;
    case 2:
        console.log('Mal');
        break;
    default:
        console.log("ERROR");
        break;
}

//6. Pida un numero al usuario que representa días del año. Diga a que mes del año corresponde así. Si el número es menor o igual a 31 indica que esta en enero, Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.

var dia = 65;
if (dia <= 31) {
    console.log('El día corresponde a ENERO')
} else if (dia >= 32 || dia <= 59) {
    console.log('El día corresponde a FREBRERO')
} else if (dia >= 60 && dia <= 90) {
    console.log('El día corresponde a Marzo')
}

/*7. Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.manera:
Si trabaja 40 horas o menos se le paga $2600 por hora
Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40 horas y $5000 por cada hora extra*/

var HT = 45;
var pagoE = 5000;

function salario() {
    let mulS = 40 * 2600;
    return mulS;
}

function extras() {
    let resta = HT - 40;
    let mul = resta * pagoE;
    return mul + salario();
}
if (HT <= 40) {
    console.log(`Su salario es de ${salario()}`);
} else if (extras) {
    console.log(`Su salario es de ${extras()}`);
}
console.log(`Horas extra: ${extras().resta}`)

/*8. Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo los cálculos así:
Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan 200 pesos y cada minuto adicional cuesta 50 pesos. Escriba un programa que permita calcular el costo de una llamada dados los minutos de duración.*/

var minutos = 5;
var CB = 200;
var CM = 50;

function Cllamada() {
    let resta = minutos - 3;
    let mul = resta * CM;
    return mul + CB;
}
console.log(`Costo de la llamada ${Cllamada()}`)

//9. Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es posterior

var dia = 12;
var mes = 3;
var año = 2022;

console.log(`${dia}/${mes}/${año}`)

function fdia() {
    return 28 - dia;
}

function fmes() {
    return 7 - mes;
}

function faño() {
    return 2022 - año;
}
console.log(`Han pasado, ${fdia()} dias, ${fmes()} meses, ${faño()} años desde esa fecha. `)

//10. Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas). El programa debe responder que hora será un segundo después. Ej: ingreso 11:59:59, el programa responde 12:00:00.



//11. Escribir un algoritmo que pida un valor entero que equivale a una cantidad de DINERO y calcule a cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000, y 1.000 equivalen. Si el usuario digita 282000 el programa debe responder cinco billetes de 50.000, un billete de veinte mil, un billete de diez mil, un billete de dos mil.



//12. Solicite la hora en formato horas, minutos y segundos. Imprima en pantalla la hora que será dentro de 1 segundo



//13. Solicite al usuario una cantidad numérica que expresa segundos (medida de tiempo). Exprésela (conviértala) en horas minutos y segundos. Según el caso



//14. Solicite un Angulo al usuario en grados. Diga en que cuadrante está. Diga además en que vuelta está sabiendo que cada 360 grados se completa una vuelta a la circunferencia. Además diga el resultado en radianes.



/*15. La fecha de Pascua corresponde al primer domingo después de la primera luna llena que sigue al equinoccio de primavera, y se calcula con las siguientes expresiones:
A= año MOD 19
B= año MOD 4
C= año MOD 7
D= (19*A+24) MOD 30
E= (2*B+4*C+6*D+5) MOD 7
N= (22+D+E)
En el que N indica el número de día del mes de marzo (o abril si N es superior a 31) correspondiente al domingo de Pascua. Realizar un programa que determine esta fecha para un año ingresado por teclado.*/
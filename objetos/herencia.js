class Persona {
    constructor(nombre, documento) {
        this._nombre = nombre;
        this._documento = documento;
    }

    get nombre() {
        return this._nombre;
    }

    get documento() {
        return this._documento;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set documento(documento) {
        this._documento = documento;
    }

    datosCompletos() {
        return `${this._nombre} ${this._documento}`
    }
}
const ob = new Persona();
console.log(typeof(ob));

class Aprendiz extends Persona {
    constructor(nombre, documento, ficha, programa) {
        super(nombre, documento)
        this._ficha = ficha;
        this._programa = programa;
    }
    get ficha() {
        return this._ficha;
    }

    get programa() {
        return this._programa;
    }

    set ficha(ficha) {
        this._ficha = ficha;
    }

    set programa(programa) {
        this._programa = programa;
    }

    datosCompletos() {
        return `${this._ficha} ${this._documento} ${this._nombre} ${this._programa}`
    }
}
const ap1 = new Aprendiz('Juanito Alimaña', 1634223, 2453232, 'ADSI');
console.log(ap1.nombre);
console.log(ap1.programa);
console.log(ap1.datosCompletos());
class Cuenta {
    constructor(numcuenta, nombre, apellido, saldo, interesanual) {
        this._numcuenta = numcuenta;
        this._nombre = nombre;
        this._apellido = apellido;
        this._saldo = saldo;
        this._interesanual = interesanual;
    }

    get numcuenta() {
        return this._numcuenta;
    }

    get nombre() {
        return this._nombre;
    }

    get apellido() {
        return this._apellido;
    }

    get saldo() {
        return this._saldo;
    }

    get interesanual() {
        return this._interesanual;
    }

    set numcuenta(numcuenta) {
        this._numcuenta = numcuenta;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }

    set interesanual(interesanual) {
        this._interesanual = interesanual;
    }
}

class CuentaAhorros extends Cuenta {
    constructor(numcuenta, nombre, apellido, saldo, interesanual, tasainteres) {
        super(numcuenta, nombre, apellido, saldo, interesanual);
        this._tasainteres = tasainteres;
    }

    get tasainteres() {
        return this._tasainteres;
    }

    set tasainteres(tasainteres) {
        this._tasainteres = tasainteres;
    }
}

const ca1 = new CuentaAhorros(56244875666, 'Joseph', 'Barreto', 5000000, '5%', '12%');
console.log(typeof(ca1));
console.log(ca1);
ca1.saldo = 10000000;
console.log(ca1.saldo);

class CuentaCheques extends Cuenta {
    constructor(numcuenta, nombre, apellido, saldo, interesanual, nombeneficiario) {
        super(numcuenta, nombre, apellido, saldo, interesanual);
        this._nombeneficiario = nombeneficiario;
    }

    get nombeneficiario() {
        return this._nombeneficiario;
    }

    set nombeneficiario(nombeneficiario) {
        this._nombeneficiario = nombeneficiario;
    }
}

const cc1 = new CuentaCheques(652145874445, 'Joseph', 'Barreto', 1500000, '5%', 'Diego Barreto');
console.log(typeof(cc1));
console.log(cc1);
cc1.nombeneficiario = 'Camilo Torres';
console.log(cc1.nombeneficiario);
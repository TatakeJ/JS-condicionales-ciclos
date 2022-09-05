const Inventario = require("./inventario");

class Gafas extends Inventario {
    constructor(diametrolente, tipoinventario) {
        super(tipoinventario)
        this._diametrolente = diametrolente;
    }

    get diametrolente() {
        return this._diametrolente;
    }

    set diametrolente(diametrolente) {
        this._diametrolente = diametrolente;
    }
}
const Inventario = require("./inventario");

class Estuches extends Inventario {
    constructor(tamaño, tipoinventario) {
        super(tipoinventario)
        this._tamaño = tamaño;
    }

    get tamaño() {
        return this._tamaño;
    }

    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }
}
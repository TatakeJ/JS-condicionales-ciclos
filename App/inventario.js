const Producto = require('./producto.js')

class Inventario extends Producto {
    constructor(tipoinventario, sku, nombre, precio, decripcion, lente, proveedor, cantidad) {
        super(sku, nombre, precio, decripcion, lente, proveedor, cantidad)
        this._tipoinventario = tipoinventario;
    }

    get tipoinventario() {
        return this._tipoinventario;
    }

    set tipoinventario(tipoinventario) {
        this._tipoinventario = tipoinventario;
    }

    filtro(busqueda) {
        if (busqueda == this.sku || busqueda == this.nombre) {
            console.log( /*array o lo que sea*/ ``);
        }
    }
}

var prod = [];

console.log(Producto.filtro("Gafa prada"))

module.exports = Inventario;
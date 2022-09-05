const Producto = require("./producto");

class Existencias extends Producto {
    constructor(sku, nombre, precio, descripcion, proveedor, cantidad) {
        super(sku, nombre, precio, descripcion, proveedor, cantidad)
    }
}
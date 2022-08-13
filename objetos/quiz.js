//Libros
class Publicacion {
    constructor(titulo, precio) {
        this._titulo = titulo;
        this._precio = precio;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(titulo) {
        this._titulo = titulo;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        return this._precio = precio;
    }

    datosPublicacion() {
        return `${this._titulo} ${this._precio}`
    }
}

class Libro extends Publicacion {
    constructor(titulo, precio, numpag) {
        super(titulo, precio);
        this._numpag = numpag;
    }

    get numpag() {
        return this._numpag;
    }

    set numpag(numpag) {
        this._numpag = numpag;
    }

    datosPublicacion() {
        return `Titulo: ${this._titulo} 
Precio: $${this._precio} 
Numero ded paginas: ${this._numpag}`
    }
}

const libro1 = new Libro('IT(1989)', 80000, 720);
console.log(libro1.datosPublicacion());

class DsicoCompacto extends Publicacion {
    constructor(titulo, precio, tiempoRepro) {
        super(titulo, precio);
        this._tiempoRepro = tiempoRepro;
    }

    get tiempoRepro() {
        return this._tiempoRepro;
    }

    set tiempoRepro(tiempoRepro) {
        this._tiempoRepro = tiempoRepro;
    }

    datosPublicacion() {
        return `Titulo: ${this._titulo} 
Precio: $${this._precio} 
Tiempo de reproduccion: ${this._tiempoRepro} min`
    }
}

const cd1 = new DsicoCompacto('El arte de ser maestro', 50000, 500);
console.log(cd1.datosPublicacion());



//Autos
class Vehiculo {
    constructor(numseriemotor, marca, anio, precio) {
        this._numseriemotor = numseriemotor;
        this._marca = marca;
        this._anio = anio;
        this._precio = precio;
    }

    get numseriemotor() {
        return this._numseriemotor;
    }

    set numseriemotor(numseriemotor) {
        this._numseriemotor = numseriemotor;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get anio() {
        return this._anio;
    }

    set anio(anio) {
        this._anio = anio;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }
}

//----------------------------------------------------------------
class AutosCompactos extends Vehiculo {
    constructor(numseriemotor, marca, anio, precio, cantpasajeros) {
        super(numseriemotor, marca, anio, precio)
        this._cantpasajeros = cantpasajeros;
    }

    get cantpasajeros() {
        return this._cantpasajeros;
    }

    set cantpasajeros(cantpasajeros) {
        this._cantpasajeros = cantpasajeros;
    }

    datosAutos() {
        return `Serie: ${this.numseriemotor}
Marca: ${this.marca} 
Año: ${this.anio} 
Precio: $${this.precio} 
Cantidad pasajeros: ${this.cantpasajeros}`
    }
}

const ac1 = new AutosCompactos(46587, 'Chebrolect', 2018, 2000000, 5);
console.log(ac1.datosAutos());

//----------------------------------------------------------------
class AutosLujosos extends Vehiculo {
    constructor(numseriemotor, marca, anio, precio, cantpasajeros) {
        super(numseriemotor, marca, anio, precio)
        this._cantpasajeros = cantpasajeros;
    }

    get cantpasajeros() {
        return this._cantpasajeros;
    }

    set cantpasajeros(cantpasajeros) {
        this._cantpasajeros = cantpasajeros;
    }

    datosAutos() {
        return `Serie: ${this.numseriemotor}
Marca: ${this.marca} 
Año: ${this.anio} 
Precio: $${this.precio} 
Cantidad pasajeros: ${this.cantpasajeros}`
    }
}

const al1 = new AutosLujosos(46584, 'Lamborgini', 2021, 10000000, 2);
console.log(al1.datosAutos());

//----------------------------------------------------------------
class Camionetas extends Vehiculo {
    constructor(numseriemotor, marca, anio, precio, carga) {
        super(numseriemotor, marca, anio, precio)
        this._carga = carga;
    }

    get carga() {
        return this._carga;
    }

    set carga(carga) {
        this._carga = carga;
    }

    datosAutos() {
        return `Serie: ${this.numseriemotor}
Marca: ${this.marca} 
Año: ${this.anio} 
Precio: $${this.precio} 
Carga: ${this.carga}`
    }
}

const cam1 = new Camionetas(55687, 'MercedesBens', 2017, 5000000, 4675);
console.log(cam1.datosAutos());

//------------------------------------------------------------------
class Vagones extends Vehiculo {
    constructor(numseriemotor, marca, anio, precio, cantpasajeros) {
        super(numseriemotor, marca, anio, precio)
        this._cantpasajeros = cantpasajeros;
    }

    get cantpasajeros() {
        return this._cantpasajeros;
    }

    set cantpasajeros(cantpasajeros) {
        this._cantpasajeros = cantpasajeros;
    }

    datosAutos() {
        return `Serie: ${this.numseriemotor}
Marca: ${this.marca} 
Año: ${this.anio} 
Precio: $${this.precio} 
Cantidad pasajeros: ${this.cantpasajeros}`
    }
}

const vag1 = new Vagones(66215, 'Brawa', 2015, 20000000, 40);
console.log(vag1.datosAutos());
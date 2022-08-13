class Poligono {
    constructor(lados, base, altura) {
        this._lados = lados;
        this._base = base;
        this._altura = altura;
    }

    get lados() {
        return this._lados;
    }

    get base() {
        return this._base;
    }

    get altura() {
        return this._altura;
    }

    set lados(lados) {
        this._lados = lados;
    }

    set base(base) {
        this._base = base;
    }

    set altura(altura) {
        this._altura = altura;
    }

    area() {
        return this._base * this._altura;
    }

    perimetro() {
        return 2 * (this._base += this._altura);
    }
}

//----------------------------------------------------------------
class Cuadrado extends Poligono {
    constructor(lados, base, altura) {
        super(lados, base, altura)
    }
}

const cua1 = new Cuadrado(null, 5, 5);
console.log(cua1);
console.log(cua1.area());
console.log(cua1.perimetro());

//----------------------------------------------------------------
class Triangulo extends Poligono {
    constructor(lados, base, altura) {
        super(lados, base, altura)
    }

    triArea() {
        let mul = this.base * this._altura;
        return mul / 2;
    }

    triPerimetro() {
        let mul = this._lados * 2;
        return mul += this._base;
    }
}

const tri1 = new Triangulo(16, 12, 15);
console.log(tri1);
console.log(tri1.triArea());
console.log(tri1.triPerimetro());

//---------------------------------------------------------------
class Rectangulo extends Poligono {
    constructor(lados, base, altura) {
        super(lados, base, altura)
    }

    rectPerimetro() {
        return 2 * (this._base += this._altura);
    }
}

const rect1 = new Rectangulo(null, 2, 4);
console.log(rect1);
console.log(rect1.area());
console.log(rect1.perimetro());
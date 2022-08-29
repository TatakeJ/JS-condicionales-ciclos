class Usuario {
    constructor(id, nombre, edad){
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
    }
}

class Estudiante extends Usuario {
    constructor(id, nombre, edad,ficha,programa){
        super(id, nombre, edad)
        this._ficha = ficha;
        this._programa = programa;
    }
}

var e1 = new Estudiante(123548795,'Juanito Alimaña','17',245163,'ADSI');
var e2 = new Estudiante(546121348,'Pepe Perez','17',245163,'ADSI');

class Moto{
    constructor(placa, estudiante){
        this._placa = placa;
        this._estudiante = estudiante;
    }
}

//tiene un - sencillo
var m1 = new Moto('FPS-165', e1);
console.log(m1);

//tiene un - compuesto
class Grupo {
    constructor(codGrupo, estudiantes){
        this._codGrupo = codGrupo;
        this._estudiantes = estudiantes;
    }

    incorporarEstudiantes(estudiante){
        this._estudiantes.push(estudiante)
    }
}

var g1= [];
var grupo1 = new Grupo(909, g1);
console.log(grupo1);
grupo1.incorporarEstudiantes(e1);
grupo1.incorporarEstudiantes(e2);
console.log(g1);  
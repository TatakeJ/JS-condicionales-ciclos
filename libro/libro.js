//Exercise 7.1

class Person {
    constructor(firstname, lastname) {
        this._firstmane = firstname;
        this._lastmane = lastname;
    }

    get firstname() {
        return this._firstmane;
    }

    set firstname(firstname) {
        this._firstname = firstname;
    }

    get lastname() {
        return this._lastmane;
    }

    set lastname(lastname) {
        this._lastmane = lastname;
    }

    fullName() {
        return `${this.firstname} ${this.lastname}`
    }
}

const friend1 = new Person('Juan', 'Contreras');
const friend2 = new Person('Laura', 'Saenz');

console.log('Hi', friend1.firstname, friend1.lastname)
console.log('Hi', friend2.firstname, friend2.lastname)

console.log(friend1.fullName());
console.log(friend2.fullName());
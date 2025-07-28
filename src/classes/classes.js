// const person = {
//     name: "Carlos",
//     age: 16,
//     intro() {
//         return `meu nome é ${this.name}`
//     }
// }
// console.log(person.intro())

// as classes servem para não criar, várias vezes, objetos para o seu código. Com ela, você não precisa criar 20 objetos e ficar repetindo ele

class Person {
    #name
    #age; // isso se torna privado e não pode ser alterado
    #money
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    intro() {
        return `meu nome é ${this.name} e tenho ${this.#age} anos`
    }
    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
    getMoney() {
        return this.#money;
    }
    setMoney(value) { // para alterar o valor 
        this.#money = value
    }
}

const person = new Person("Carlos", 16)

person.name = "Eduardo"; // foi alterado para Eduardo. Com # ele não ia mudar, ia continuar Carlos
person.setMoney(100)
console.log(person.intro())
console.log(person.getMoney())



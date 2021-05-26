// -= ООП =-

// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;

//     this.fullName = function() {
//         console.log(this);
//         return `${this.lastName} ${this.firstName}`;
//     };
// }

// let person = new Person('Vasya', 'Pupkin', 20);
// console.log(person);
// console.log(person.fullName());

// console.log(typeof Person);  // function

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this._age = age;
//     }

//     get fullName() {
//         return `${this.lastName} ${this.firstName}`;
//     }

//     set fullName(value) {
//         console.log(value);
//         [this.firstName, this.lastName] = value.split(' ');
//     }

//     get age() {
//         return this._age;
//     }

//     set age(value) {
//         if (value < 0) return;
//         this._age = value;
//     }
// }


// let person = new Person('Vasya', 'Pupkin', 20);
// console.log(person);
// console.log(typeof Person);
// console.log(person.fullName);
// console.log(person.age);
// person.age = -30;
// console.log(person.age);

// person.fullName = "Kolya Ivanov Sergeevich";
// console.log(person.fullName);


// деструктуризация

// let arr = ["item1", "item2"]
// let [a, b] = arr;

// console.log(a);
// console.log(b);



class Person {
    static counter = 0;
    #firstName = '';
    #lastName = '';
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        Person.counter++;
    }
}


class Worker extends Person {
    constructor(firstname, lastName, salary) {
        super(firstname, lastName);
        this.salary = salary;
    }
}

console.log(new Person());
console.log(new Person());
console.log(Person.counter);


let obj = {};

let worker = new Worker();

console.log(worker instanceof Person);

// TODO: generate random value
function generateRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

console.log(generateRandomNumber(10, 20));


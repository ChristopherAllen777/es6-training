// Object Literal

// const brad = {
//     name: 'Brad',
//     age: 30
// }

// console.log(brad);
// console.log(brad.age);

// Person constructor
// Constructors should start with a capital letter
// This constructors has one property - name

function Person(name, age, dob) {
    this.name = name;
    this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// this in the global scope is the window object
// console.log(this); // window object
// this.alert(1);

// const brad = new Person('Brad', 36);
// const john = new Person('John', 34);

// console.log(brad); // Person {name: "Brad"}
// console.log(john); // Person {name: "John"}

const chris = new Person('Chris', 26, '1-15-1993');
console.log(chris.calculateAge());

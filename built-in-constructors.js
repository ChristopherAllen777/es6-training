// String

const name1 = 'Jeff'; // primitive value
const name2 = new String('Jeff'); // object

// name2.foo = 'bar';

console.log(name1);
console.log(name2);

console.log(typeof name1); // string
console.log(typeof name2); // object

if(name1 === 'Jeff'){
    console.log('Yes'); 
} else {
    console.log('No');
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num2);
console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Functions
const getSum1 = function(x,y) {
    return x + y;
}
const getSum2 = new Function('x', 'y', 'return 1 + 1');

console.log(getSum1(1,1)); // 2

// Objects
const john1 = {name: "John"};
const john2 = new Object({name: "John"});

console.log(john1);
console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);
console.log(arr2);

// Regualar Expressions
const re1 = /\w+/; // looking for a word character that happens 1 or more times
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);
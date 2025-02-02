//Closure
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript,
// closures are created every time a function is created, at function creation time.

// function outer(){
//     let counter = 0;
//     function inner(){
//         counter++;
//         console.log(`Counter: ${counter}`);
//     }
//     return inner;
// }
// const fn = outer();
// for(var i = 1; i <= 10; i++){
//     const fn = (_i) => {
//         function a() {
//             setTimeout( () => console.log(_i), 1000 * i);
//         }
//         return a;
//     }
//     fn(i)();
// }

//Function Currying
//Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting function with multiple arguments into a sequence
//of nesting functions that take a one argument at a time.

//function f(a,b,c) is transformed to f(a)(b)(c)

// function sum(a,b,c){
//     return a + b + c;
// }

// function curry(fn){
//     return function(a) {
//         return function(b) {
//             return function(c) {
//                 return fn(a,b,c);
//             }
//         }
//     }
// }

// console.log(sum(2,3,5));

// const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(5));

// const add2 = curriedSum(2);
// const add3 = add2(3);
// const add5 = add3(5)
// console.log(add5);

//this
// function sayMyName(name) {
//     console.log(`My name is  ${name}`);
// }

// sayMyName("Walter white");
// sayMyName('Heisanberg');

//implicit binding
// const person = {
//     name: 'Shubham',
//     sayMyName: function() {
//         console.log(`My name is  ${this.name}`);
//     }
// }

// person.sayMyName();

//explicit binding
// globalThis.name = 'Superman';
// function sayMyName() {
//     console.log(`My name is  ${this.name}`);
// }
// sayMyName.call(person);

// function person(name)
// {
//     //this = {}
//     this.name = name;
// }

//constructor function
// const p1 = new person('Shubham');
// const p2 = new person('Superman');

// console.log(p1.name, p2.name);
// sayMyName();

//protoype
// function person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const p1 = new person('Bruce', 'Wayne');
// const p2 = new person('Clark', 'Kent');

// person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName;
// }

// console.log(p1.getFullName());
// console.log(p2.getFullName());

// function SuperHero(fName, lName) {
//     person.call(this, fName,lName)
//     this.isSuperHero = true;
// }

// SuperHero.prototype.fightCrime = function() {
//     console.log('Fighting crime');
// }

// SuperHero.prototype = Object.create(person.prototype);
// SuperHero.prototype.constructor = SuperHero
// const batman = new SuperHero('Bruce','Wayne');
// console.log(batman.getFullName());

//class
// class Person {
//     constructor(fName, lName){
//         this.firstName = fName;
//         this.lastName = lName;
//     }

//     sayMyName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// const classP1 = new Person('Bruce','Wayne');

// console.log(classP1.sayMyName());

// class SuperHero extends Person {
//     constructor(fName, lName){
//         super(fName,lName);
//         this.isSuperHero = true;
//     }

//     fightCrime(){
//         console.log('fighting crime');
//     }
// }

// const batman = new SuperHero('Bruce','Wayne');
// console.log(batman.sayMyName());
// batman.fightCrime();

//iteration

const obj = {
    [Symbol.iterator]: function() {
        let step = 0;
        const iterator = {
            next: function() {
                step++;
                if(step === 1){
                    return {value:'Hello',done:false}
                }else if(step === 2) {
                    return {value:'World', done: false}
                }
                return {value:undefined, done: true};
            },
        };
        return iterator;
    }
};

for(const word of obj){
    console.log(word);
}
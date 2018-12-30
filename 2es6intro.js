/* 1 Arrow functions */
const multiply = (num1, num2) => {
  return(num1*num2);
}

const multiply2 = (num1, num2) => (num1*num2);


console.log(multiply(3,4));
console.log(multiply2(3,4));

/* 2 Exports & Imports */
// person.js
const person = {
  name: 'Venkata'
}
export default person;

// utility.js
export const clean = () => {}
export const baseDate = 10;

// app.js
import person from ./person.js;
import {clean, baseDate} from './utility.js';
import {clean as Cls} from './utility.js';
impport * as utl from './utility.js';

/* 3 Classes . */
class person{
  name='Venkata'; //property
  call = () => { //method
     return this.name;
  }
//basic example
class Person {
  constructor(){
    this.author='Venkata'
  }
  printName(){
    console.log(this.author);
  }
}

const person = new Person();
person.printName();

//inheritance example
class Human{
  constructor(){
    this.type='mamal';
  }
  printType(){
    return this.type;
  }
}

class Person extends Human{
  constructor(){
    super();//to execute parent constructor
    this.author='Venkata'
  }
  printName(){
    console.log(this.author);
  }
}

const person = new Person();
person.printName();
person.printType();

// In ES7 we can do a class as

class Person {
  this.author='Venkata';
  printName = (){
    console.log(this.author);
  }
}

// 3.Spread & Rest operator
//spread in arrays usage
const oldarray = ['a','b','c'];
const newarray = [...oldarray, 'd','e'];
//spread in objects usage
const oldobj = {name:'venky', age:'28'};
const newobj = {...oldobj, 'newprop':5};

//rest
const fil = (...args) => { 
  return args.filter(el => el===6); 
}

console.log(fil(6,1,5,2,6));

//4. Destructuring
//Array destructuring
names = ['venky','sravi','kittu'];
[a,b] = names;
[a,,c] = names;
console.log(a);
console.log(b);

console.log(c);

//Object destructuring
{name1} = {name1:'venkata', name2:'sravi'};
console.log(name1);


//5. Primitive types & Reference types
let a = 5;
let b = a;
a=6;
console.log(b); //observe b value didnt change because its actual copy not a referential copy
//reference types => objects & arrays

let per = {name:'venky'};
let per2 = per;

console.log(per2);
per.name='sravi'; // we only changed per
console.log(per2);
// to rescue this we can use spread operator
let per3 = {...per};
per.name='kittu';
console.log(per3); //but this will have sravi not kittu as it copied all elements into new object


//Array functions
/*
map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/

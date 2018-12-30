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

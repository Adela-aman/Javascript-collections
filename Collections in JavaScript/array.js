// empty array
const mylist = [];

// array of numbers
const numberarray = [10, 11, 12, 13];
console.log(numberarray);

// array of strings 
const stringarray = ['computer', 'javascript', 'programing'];
console.log(stringarray);

// array with mixed data types
const mixeddata = ['university', 'faculty', '6066', '22', true];
console.log(mixeddata);

//access elements of an array
const myarray = ['student', 'teacher', 'doctor', 'Enginer'];
console.log(myarray);
console.log(myarray[0]);
console.log(myarray[3]);

// add an element to an array
let fruits = ['apple', 'orange', 'banana', 'grapes'];
console.log(fruits);
fruits.push('watermelon');
console.log(fruits);
//add an element at the begining
fruits.unshift('cherry');
console.log(fruits);
// changing the element of an array
fruits[2]='appricot';
console.log(fruits);
// Remove the last element from an array
fruits.pop();
console.log(fruits);
//Remove the first element from an array
fruits.shift();
console.log(fruits);
// find array lenght
console.log( +fruits.length+ ' = is array lenght ');

//sorting elements in the alphabetical order
let letter = ['c', 'e','d','a','b'];
console.log(letter);
letter.sort();
console.log(letter);
// finding the index position
const position = letter.indexOf('b');
console.log( 'position of letter b = '+position);
// slicing the array elements
const newletter = letter.slice(2);
console.log(newletter);
// concating two arrays 
const alpha = letter.concat(newletter);
console.log(alpha);






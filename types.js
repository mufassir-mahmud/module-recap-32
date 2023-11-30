/**
 * Strongly Type
 * */ 
// int a= 5;
// string b = 'alim halim';
// bool c = true;

// dynamic type language
// Primitive
const a = 5;
const b = 'Sams uddin';
const isFat = true;
// Non Primitive
const ages = [11,22,33];
const studet = {id: 1, name: 'Mufassir', age: 21,};
console.log(typeof a, typeof b, typeof ages, typeof studet);

let x = 5;
let y = x;
console.log(x,y);
y = 7;
console.log(x,y);

let num1 = [11,22,33];
let num2 = num1;
console.log(num1, num2);


num2[2] = 44,
console.log(num1, num2);
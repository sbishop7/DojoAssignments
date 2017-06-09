let mathlib = require('./mathlib');

let math = mathlib()


let a = 7;
let b = 5;

console.log("The sum of", a, "and", b, "is:", math.add(a,b));
console.log(a.toString(), 'times', b, 'is:',math.multiply(a,b));
console.log("The square of", a, "is:",math.square(a));
console.log("A random number between", a, "and", b, "is :",math.random(a,b));
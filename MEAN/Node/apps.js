var math = require('./mathlib');

let a = 7;
let b = 42;

console.log("The sum of", a, "and", b, "is:", math.add(a,b));
console.log(a,"times", b, " is: ",math.multiply(a,b));
console.log("The square of", a, "is:",math.square(a));
console.log("A random number between", a, "and", b, "is :",math.random(a,b));
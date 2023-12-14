var variable = 10;

(() => {
    console.log(variable);
    variable = 20;
    console.log(variable);
})(); //IIFE

console.log(variable);
var varibale = 30;

//output
// 10
// 20
// 20
// Simple hoisting. Treat iife as normal line by line single line of code.
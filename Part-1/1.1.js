age = 100;

console.log("Value of age is: ",age);

let age=20;

//output
// ReferenceError: Cannot access 'age' before initialization
// because=> let age=20; is not hoisted since let does not support hoisting. Temporal dead zone is created for let and const variables where they are not accessible before initialization which is not the case with var variables.
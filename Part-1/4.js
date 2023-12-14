variable = 10;

(()=>{
    foo = 100;
    console.log(variable);
    var foo=100;
    variable=20;
    console.log(variable);
})(); //IIFE

console.log(foo);
console.log(variable);
var variable = 30;

//output
// error: foo is not defined
// Reason: foo is inside the function scope of iife. So inside the code phase a seperate local execution context gets created for the iife and everything related to foo happens in the local context and the moment the iife gets over, the local context gets deleted and in the global context, there is no foo and only variable is present. So when we try to access foo in the global context, it throws an error.
//note: Only global scope or root level variable are created in the memory phase and is initialised with undefined.
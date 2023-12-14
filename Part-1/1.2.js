myFun();

var myFun = function () {
    console.log("First");
}

myFun();

function myFun() {
    console.log("Second");
}

myFun();

//output
// Second
// First
// First
// In the memory phase, the first muFun() refers to the function declared. The second myFun() gives output as first because by this time the memory phase is updated with the variable function declaration. The third myFun() gives output as first because the function declaration is already updated in the memory phase. 
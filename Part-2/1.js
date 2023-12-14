function a(){
    console.log("A");
}

setTimeout(()=>console.log("B"),0); // task queue

a();

console.log("C");

Promise.resolve().then(()=>console.log("D")); //micrtask queue

//output
// A
// C
// D
// B
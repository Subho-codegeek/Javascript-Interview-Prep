for(let i=0; i<10; i++){
    setTimeout(()=>console.log(i),0);
} // 0 1 2 3 4 5 6 7 8 9 reason: let is block scoped and it creates a scope everytime it runs and so every value of i is printed from 0 to 9.

for (var i=0; i<10; i++){
    setTimeout(()=>console.log(i),0);
} // 10 10 10 10 10 10 10 10 10 10 reason: var is global scoped. The setTimeout is registered by the webAPI and the for loop runs and the value of i is incremented to 10 and then the setTimeout callback is executed and the value of i is printed which is 10. This happens 10 times.
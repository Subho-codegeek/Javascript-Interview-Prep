const obj = {
    height: 30,
};

console.log(obj.height); //30
 
delete obj.height; // deletes the height

console.log(obj.height); // undefined

//another way
const obj1 = Object.create({ //when we create an object using Object.create, it creates a prototype chain and height will be created inside the prototype chain and not inside the obj1.
    height: 30,
});

console.log(obj1.height); //30
 
delete obj1.height; // does not delete height because height is not inside the obj1 but inside the prototype chain.

console.log(obj1.height); // 30 since height is not deleted
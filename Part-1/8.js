const subho = {
    name: "Subhamay Paul",
    sayNmae: function () {
        console.log(this.name);
    }
}

setTimeout(subho.sayNmae, 3 * 1000); // undefined because setTimeout is a part of webAPI and it gets executed differently. By the time it executes, the context execution inside the call stack changes and it does not know "this" is pointing to which object

//one way to fix this is to bind the object to it,
setTimeout(subho.sayNmae.bind(subho), 3 * 1000);

//another way
setTimeout(() => subho.sayNmae(), 3 * 1000); //applying closure
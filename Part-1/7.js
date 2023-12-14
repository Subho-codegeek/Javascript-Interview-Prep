const subho = {
    name: "Subhamay Paul",
    sayNmae: function () {
        console.log(this.name);
    }
}

const jhon = {
    name: "Jhon Doe",
    sayName: function () {
        console.log(this.name);
    }
}

jhon.sayName.call(subho) //Subhamay Paul
// .call(subho) is giving the context of object piyush to the function of john
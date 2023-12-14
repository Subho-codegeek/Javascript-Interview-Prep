var fullname = "Subhamay Paul";

var obj = {
    fullname: "Hacked full name",

    prop: {
        fullnamne: "Inside Prop",
        getFullname: function () {
            return this.fullnamne;
        },
    },

    getFullname: function () {
        return this.fullname;
    },

    getFullnameV2: () => this.fullname, // arrow function does not have this keyword and when it does it refers to the global object which is window in case of browser.

    getFullnameV3: (function () {
        return this.fullname;
    })() //iife also doesn't support 'this' 
}

console.log(obj.prop.getFullname()); //refers to inside the prop object
console.log(obj.getFullname()); // refers to the fullname inside the object
console.log(obj.getFullnameV2()); // arrow function does not have this keyword and when it does it refers to the global object which is window in case of browser.
console.log(obj.getFullnameV3); // getFullnameV3 is not a function. It's a property. Jo vi iife ke andar execute hoga woh getFullnameV3 me assign ho jayega




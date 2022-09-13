var arr  =[];  // an array
var obj = {}; // an object
function abc(){     // a function
    console.log("you only live once");
}

console.log(arr.__proto__);
console.log(Array.prototype); // these two will print the methods and properties of "Array".

console.log(arr.__proto__.__proto__); // this will print the object of array so we can say that array is also object in javascript.


console.log(obj.__proto__); // will also print object of object.

console.log(obj.__proto__.__proto__);// print null because there is nothing above object.


console.log(abc.__proto__); // this will print the methods and properties of function

console.log(abc.__proto__.__proto__);// this will print the object so we can say function is also an object in javascript.



let user = {
    name: "Ain",
    sayHi: function(){
        console.log(this.name)
}
}
undefined
let admin = {
    role: admin,
    age:30
}

admin.__proto__=user

let admin = {
    role: "admin",
    age:30
}
undefined
admin.__proto__=user // admin ke andar user ka proto aa jayega yani property and methods.

{name: 'Ain', sayHi: ƒ}
admin.name
'Ain'
admin.name="Afreen"
'Afreen'
admin.name
'Afreen'
user.name  // bcz users properties 
'Ain'
admin.sayHi
ƒ (){
        console.log(this.name)
}
admin.sayHi()
VM328:4 Afreen
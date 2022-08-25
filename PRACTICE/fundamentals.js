
//alert
alert ("hello")
[1,2].foreach(alert);
VM202:2 Uncaught TypeError: Cannot read properties of undefined (reading '2')
    at <anonymous>:2:1
(anonymous) @ VM202:2
alert("Hello");
[1,2].forEach(alert);
undefined
alert("AIN")
undefined
alert("AIN")
[1,2].forEach(alert);
VM490:2 Uncaught TypeError: Cannot read properties of undefined (reading '2')
    at <anonymous>:2:1
(anonymous) @ VM490:2
alert(1/0);
undefined
alert(Not a number /2);
VM606:1 Uncaught SyntaxError: missing ) after argument list
alert("not a number" / 2);
undefined
console.log(12345678964212345555543+1);
VM863:1 1.2345678964212346e+22
undefined
console.log(9007199254740991 +1);
VM922:1 9007199254740992
undefined
const bigInt = (121323313131323244423244343424243545242424+2324242424242424);
alert(BigInt);
undefined
let name = "AINN";
alert(`Hello, ${name}`);
undefined
alert(`The result is ${1+3}`);
undefined
let isGreater = 3>2;
alert(isGreater);
undefined
isGreater = 2>5;
alert(isGreater);
undefined


//typeof
typeof true
'boolean'
typeof false
'boolean'
typeof 4
'number'
typeof Number
'function'
typeof Object
'function'
typeof 0
'number'
typeof name
'string'
typeof "ain"
'string'
typeof Math
'object'
typeof Object
'function'
typeof function
    8
VM1915:2 Uncaught SyntaxError: Unexpected number
let name = "Afreen"
alert(`hello , ${1}`);
alert(`hello,${"name"}`);
alert(`hello,${name}`);
undefined


//prompt
let age = prompt("How old are you?", 100);
alert(`you are ${age} years old`);
undefined


undefined
alert(age);
undefined
prompt(age);
alert(age);
undefined
let myAge = prompt("How old are you?", 500);
alert(`your age is ${myAge}`);
undefined

//confirm
let isGirl = confirm("Are you a girl?");
alert(isGirl);

undefined
let ask = confirm("What is your name?");
alert(ask);
undefined
let ask = prompt("What is your name?");
alert(ask);
undefined
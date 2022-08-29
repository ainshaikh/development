
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





// conversion type

// Summary
// The three most widely used type conversions are to string, to number, and to boolean.

// String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

// Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

// The conversion follows the rules:

// Value	Becomes…
// undefined	NaN
// null	0
// true / false	1 / 0
// string	The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.
// Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

// Follows the rules:

// Value	Becomes…
// 0, null, undefined, NaN, ""	false
// any other value	true

let value = true;
alert(typeof value);
undefined
value = string(value);
alert(typeof value);
VM275:1 Uncaught ReferenceError: string is not defined
    at <anonymous>:1:1
(anonymous) @ VM275:1
value = String(value);
'true'
alert(typeof value);
undefined
// numeric conversion
undefined
let str = "6" / "2";
undefined
alert("6" / "2");
undefined
let str = "123";
alert(typeof str);
undefined
let num = Number(str);
alert(typeof num);
undefined
let age = Number("My name is AIN");
alert(typeof age);
undefined
let age = Number("My name is AIN");
alert(age);
undefined
alert(Number ("123"));
undefined
alert(Number("123a"));
undefined
alert(Number(1));
undefined
alert(Number("true"));
undefined
alert(Number(true));
undefined
alert(Number(false));
undefined
// boolean
undefined
alert(Boolean(1));
undefined
alert(Boolean(0));
undefined
alert(Boolean(""));
undefined
alert(Boolean(ain));
VM1845:1 Uncaught ReferenceError: ain is not defined
    at <anonymous>:1:15
(anonymous) @ VM1845:1
alert(Boolean("ain"));
undefined
alert(Boolean(" "));
undefined
alert(Boolean(0));
undefined
alert(Boolean("0"));
undefined



// BASIC OPERATOR MATHS

// UNARY
// the unary negation - reverses the sign of a number
let x = 1;
x = -x;
// alert(x); unary negation applies


let x = 1;
x = -x;
alert(x);
undefined
let x = 3, y = 5;
alert(x-y);
undefined
alert(y-x);
undefined
alert(5 % 2);
undefined
alert(10 %2);
undefined
// exponentiation
undefined
alert(2**3);
undefined
// This raise to the power
undefined
alert(10**5);
undefined
alert(3**(1/2));
undefined
alert(4**(1/2));
undefined
// concatenation
undefined
let ain = "my whole name is" + "MOHD AIN";
alert(ain);
undefined
let ain = "my whole name is" + "MOHD AIN";
alert(ain);
undefined
alert("1"+2);
undefined
alert(2+"1")
undefined
alert(2+2+"1");
undefined
alert("1"+2+2);
undefined
// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.
undefined
alert(6-"2");
undefined
alert("6" /"3"):
VM1108:1 Uncaught SyntaxError: Unexpected token ':'
alert("6" / "3");
undefined
let x = 1;

alert(-x);
undefined
let a = ain;
undefined
alert(-ain);
undefined
let apple = "3";
let oranges = "5";
alert(apple+oranges);
undefined
alert(+apple++oranges);
VM1564:1 Uncaught SyntaxError: missing ) after argument list
alert(+apple + +oranges);
undefined
// chaining assignment 
undefined
let a=b=c=2+4;
alert(a);
alert(b);
alert(c);
undefined

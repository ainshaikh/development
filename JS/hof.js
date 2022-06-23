// calculate the perimetr of square
const arr = [2,3,4,5,6,7,8,9];
let perimeterOfSquare = function (arr){
    let res = [];
    for(let i = 0; i<arr.length; i++){
        res.push(4*arr[i]);
    }
    return res;
};
console.log(perimeterOfSquare(arr));

//calculate area of square

let areaSquare = function (arr){
    let res = [];
    for(let i = 0; i<arr.length; i++){
        res.push(arr[i]*arr[i]);
    }
    return res;
};
console.log(areaSquare(arr));

//diagnol
let diagnol = function (arr){
    let res = [];
    for(let i = 0; i<arr.length; i++){
        res.push(Math.sqrt(2)*arr[i]);
    }
    return res;
};
console.log(diagnol(arr));



// better way

let area = function (a){
    return a * a;
}

let perimeter = function (a){
    return 4*a;
}

let diagnolSquare = function(a){
    return Math.sqrt(2)*a;
}

let calculate = function (arr, logic){
    let res = [];
    for (let i=0; i<arr.length;i++){
        res.push(logic(arr[i]));
    }

   return res;
    

};
console.log(calculate(arr,area));
console.log(calculate(arr,perimeter));
console.log(calculate(arr,diagnolSquare));



// map

//write a code to calculate area of square

let res = arr.map((a)=>{
    return a*a;
});
console.log(res);

//filter

let evenNumber = arr.filter((nums)=>{
    return (nums%2==0);
    //can also be written as !(nums%2)
});

console.log(evenNumber);

//reduce--> reduces array in a single value

// write code to get sum of code

let sumOfArr = arr.reduce((acc, num)=>{
    return acc + num;
},1);
console.log(sumOfArr);


// write a code to calculate largest elements in arr
const arr = [2,5,8,6,78];
// output 78

function maximumNumber (max, cur) {
    if(cur> max){
        max = cur;
    }
    return max;
}
var ans = arr.reduce(maximumNumber, -Infinity);
console.log(ans);




var users = [
    { firstName: "Mayank", lastName: "Singh", age: 55 },
    { firstName: "Jyoti", lastName: "Jauhari", age: 25 },
    { firstName: "Saket", lastName: "Bharti", age: 15 },
  ];
  


console.log(users.map((obj)=>obj.firstname+""+obj.lastname));




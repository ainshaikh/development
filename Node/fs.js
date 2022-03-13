// // fs-> file system module -> it helps us to make files/folders append data in them , delete data , read data 
// const fs = require("fs");//require("path_of_the_file");
// // console.log(fs);
// // const f1 = require("./f1.txt");
// const abc = require("../JS/temp");
// console.log(abc);
// const obj = require("../JS/temp");
// //require method , goes to the file that is needed to be required. executes that file. and if there is something that is exported we get that in variable 'abc'
// console.log(obj);
// let ans = obj.add(45, 4);
// console.log(ans);








// const fs=require("fs");
//  fs.appendFileSync("f1.txt","Hello I am AIN");
// // // console.log(res);

// let data =fs.readFileSync("f1.txt");
// console.log(data);
//  console.log(typeof data);
//  console.log(data+"");

let data=fs.readFileSync("os.js");
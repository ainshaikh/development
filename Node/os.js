const os=require("os");
let mySystemArch=os.arch();
console.log(mySystemArch);

//returns the information on the cpus
let myCpuInfo=os.cpus();
console.log(myCpuInfo);

console.log(os.hostname());



console.log(os.networkInterfaces());




console.log(os.release());

console.log(os.totalmem());


console.log(os.userInfo());

console.log(os.platform());



console.log(os.uptime());
let upTimeinHour=os.uptime()/3600;
console.log(upTimeinHour);

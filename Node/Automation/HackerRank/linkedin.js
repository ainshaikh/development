const puppeteer = require("puppeteer");
let email="ainsaikhx7@gmail.com";
let password="craze@123AIN";

let tab;
let browserPromiseToOpen=puppeteer.launch({
    headless: false,
    DefaultViewport:null,
    args: ["--start-maximized"]

})

browserPromiseToOpen  //if fullfilled then use .then

.then(function(browser){
    console.log("Browser is Open");
    // console.log(browser);

    let allTabsPromised=browser.pages();
    return allTabsPromised;
})
.then(function(allTabsArr){
    curTab=allTabsArr[0];
    console.log("new tab");
    let visitingLoginPagePromise=curTab.goto("https://www.linkedin.com/uas/login?fromSignIn=true&trk=cold_join_sign_in");
    return visitingLoginPagePromise;
})

.then(function(){
    console.log("LinkedIn page is opened");
    let emailType=curTab.type("input[name='session_key']",email);
    return emailType;

})
.then(function(){
    console.log("email is typed");
    let passwordtype=curTab.type("input[name='session_password']",password);
    return passwordtype;
})

.then(function(){
    console.log("password is typed");
    let logInbuttonClick = curTab.click(".btn__primary--large from__button--floating");
    return logInbuttonClick;

})
.then(function(){
    console.log("logged in successfully");
})
.catch(function (err){
    console.log(err);
});


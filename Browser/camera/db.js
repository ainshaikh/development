// Connect(open) to  database

let db;
let openRequest = indexedDB.open('myDatabse');
openRequest.addEventListener('success',()=>{
    console.log('db connected');
    db = openRequest.result;
});


openRequest.addEventListener('upgradeneeded',()=>{
    console.log('db upgrade or initialised db');
    db = openRequest.result;


    db.createObjectStore('video',{keyPath: "id"});
    db.createObjectStore('Image',{keypath:"id"});

});

openRequest.addEventListener('error',()=>{
    console.log('db error');
});
// A callback function is a function that is passed as an argument to another function, and then called by the latter function at a later time. Callback functions are often used to handle events, such as when a user clicks a button or when a network request completes.

//javascript is a single thread synchronous programming langague
// JavaScript is a single-threaded language, which means that it can only execute one task at a time. This is in contrast to multi-threaded languages, which can execute multiple tasks at the same time.
// JavaScript is synchronous by default, which means that the execution of one task will block the execution of other tasks. This means that if one task takes a long time to complete, it will prevent other tasks from executing.

//synchronous

console.log('1');
console.log('2');
console.log('3');


//asynchronous by using call back

console.log('1');
setTimeout(() => {
    console.log('2');
}, 0);
console.log('3');

//example
console.log("start");

function fectData(callback) {
   setTimeout(() => {
    callback("data")
   }, 2000);
}
fectData((data)=>{
    console.log(data);
})

console.log('end');

//example 2


function fectData1(callback) {
    setTimeout(() => {
        callback(5)
    }, 2000);
}
function fectData2(callback) {
    setTimeout(() => {
        callback(5)
    }, 2000);
}
function fectData3(callback) {
    setTimeout(() => {
        callback(5)
    }, 2000);
}

fectData1((value1)=>{
   fectData2((value2)=>{
    fectData3((value3)=>{
        console.log(value3+value2+value1);
    })
   })
})

//this  is like call back hell
//Callback hell is a situation in JavaScript where multiple callbacks are nested within each other, resulting in code that is difficult to read and understand. Callbacks are functions that are passed as arguments to other functions, and they are called by the latter function at a later time.

//to correct this we use promise or async await



//A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation. It is a more modern way of handling asynchronous tasks than callbacks. Promises allow you to chain together multiple asynchronous operations without nesting callbacks.


const promises=new Promise((res,rej)=>{
  res('success!')
})

promises.then((res)=>{
    console.log(res);
})

//example


function fectData1() {
   return new Promise((resolve, reject) => {
    resolve(5)
   })
}

function fectData2(num) {
  return new Promise((resolve, reject) => {
    resolve(5+num)
  })
}
function fectData3(num) {
  return new Promise((resolve, reject) => {
    resolve(5+num)
  })
}

fectData1().then((res)=>{
   return fectData2(res)
}).then((res)=>{
    return fectData3(res)
}).then((res)=>{
    console.log(res);
})



const promise1=new Promise((resolve, reject) => {
    resolve(['java','javascript'])
})
const promise2=new Promise((resolve, reject) => {
    resolve(['react','angular'])
})

promise1.then((res)=>{
    console.log(res);
})

promise2.then((res)=>{
    console.log(res);
})

const result=Promise.all((re))
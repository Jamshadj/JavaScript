// // forEach() that allows you to iterate over each element of the array and perform a specific action on it.

// // The forEach() method is called on the array object. It takes a callback function as an argument, which is executed for each element of the array. 

// // The callback function receives the current element as its parameter, and you can perform any desired action within the function.

// //In JavaScript, the forEach() method accepts a callback function with up to three parameters: the current element, the index of the current element, and the array being traversed.

// //Example One

// const a=[1,2,3,4,6]

// a.forEach(callback)

// function callback(element,index,array) {
//     console.log(element)
// }
// //using arrow function

// a.forEach(element => {
//     console.log(element)
// });
// //output of the two methods are same
// /*
// 1
// 2
// 3
// 4
// 6
// */

// a.forEach(callback)

// function callback(element,index,array) {
//     console.log(`a[${index}]=${element}`)
// }

// //output

// /*
// a[0]=1
// a[1]=2
// a[2]=3
// a[3]=4
// a[4]=6
// */

// //to find the sum of numbers in the array 

// let sum=0;
// a.forEach(element=>{
//     sum+=element})
// console.log(sum);

// //out put
// //sum=16

// //example two how many times letters reapeat in an array

// const letters=['a','b','d','a','d','c']

// const count={}

// letters.forEach((element)=>{
//     if (count[element]) {
//         count[element]++
//     }else{
//         count[element]=1
//     }
// })
// console.log(count)
// output
// {a: 2, b: 1, d: 2, c: 1}

//1 Print the square of each number in an array.

const number=[1,2,3,4,5]
let squareOfEachNumber={}
number.forEach((num)=>{
    const sqnum=num*num;
  squareOfEachNumber[`square[${num}]`]=sqnum
})
console.log(squareOfEachNumber);

//output
// {
//     'square[1]': 1,
//     'square[2]': 4,
//     'square[3]': 9,
//     'square[4]': 16,
//     'square[5]': 25
//   }

//Find and print the maximum value in an array.

const maximumValue=[1,2,3,4,5,32,43,4232,32,323]
let maximum=null;
maximumValue.forEach((value)=>{
  if (value>maximum) {
    maximum=value
  }
})
console.log(maximum);

//Filter out all the even numbers from an array and print the resulting array.

const Numbers=[1,2,3,4,5,32,43,4232,32,323]
let evenNumber=[]

Numbers.forEach((Element)=>{
    if (Element%2==0) {
        evenNumber.push(Element)
    }
})
console.log(evenNumber);

//Given an array of names, create a new array that contains the names with their lengths.

const names=['john','mike','joe','peter']

const namesLength=[]

names.forEach((ele)=>{
    const eleLength=ele.length
    namesLength.push(ele+'='+eleLength)
})

console.log(namesLength);

//Given an array of strings, convert each string to uppercase and print the updated array.
const updatedName=[]
names.forEach((ele)=>{
   const updatedele=ele.toUpperCase()
   updatedName.push(updatedele)
})

console.log(updatedName);

//Find and print the average of all the numbers in an array.
const avg=[]
number.forEach((ele)=>{

    const average=ele/number.length
    avg.push(average)
})
console.log(avg);
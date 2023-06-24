// The reduce() method in JavaScript allows you to reduce an array to a single value by applying a function to each element of the array.

// Syntax:
// The syntax for using reduce() is as follows:


// result = array.reduce(callback(accumulator, currentValue, index, array) {
//     // return the updated accumulator value
// }, initialValue);
// array: The original array on which the reduce() method is called.
// callback: A function that is executed on each element of the array.
// accumulator: A value that accumulates the results of the callback function on each iteration.
// currentValue: The current element being processed.
// index (optional): The index of the current element being processed.
// array (optional): The original array on which the reduce() method is called.
// initialValue (optional): An initial value for the accumulator.

//Given an array of numbers, find the sum of all the numbers.

const number=[1,2,3,4,5,6]
const numberResult=number.reduce((total,ele)=>{
    return total+=ele
})
console.log(numberResult);


//Given an array of objects representing students, calculate the average score of all the students.

const students = [
    { name: 'John', score: 80 },
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 70 },
  ];
const sumScore=students.reduce((acc,ele)=>{
  return acc+=ele.score;
},0)
const avg=sumScore/students.length
console.log(avg);

// Given an array of strings, find the longest string in the array.

const strings=['john','joe','varun','vinu']
const stringsResult=strings.reduce((result,ele)=>{
    if (result.length<ele.length) {
        return ele;
    }else{
        return result
    }
})
console.log(stringsResult);

// Given an array of numbers, find the maximum number in the array.

const Number=[1,2,3,23,4,5,6]
const maxNumber=Number.reduce((acc,ele)=>{
    if (ele>acc) {
        return ele
    }else{
        return acc
    }
})

console.log(maxNumber);
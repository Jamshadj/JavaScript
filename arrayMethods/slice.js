//The slice() method in JavaScript is used to extract a portion of an array and returns a new array containing the selected elements.
// It does not modify the original array. Here is the syntax for using slice():

//output
//array.slice(startIndex, endIndex)

// startIndex: The index at which the extraction should begin (inclusive). If omitted, it starts from index 0. Negative values can be used to count positions from the end of the array.
// endIndex: The index at which the extraction should end (exclusive). If omitted, it extracts until the end of the array. Negative values can be used to count positions from the end of the array.
// The slice() method returns a new array containing the extracted elements. The original array remains unchanged.

// Given an array fruits containing the names of different fruits, use the slice() method to create a new array containing the first three fruits.

const fruits=['Apple','Orange','Banana','Blueberry']
const result=fruits.slice(0,3)
console.log(result);

// Write a function that takes an array numbers as input and returns a new array containing the last two elements of the input array using the slice() method.

const number=[1,2,3,4,5]
const numberResult=number.slice(-2)
console.log(numberResult);

// Given an array colors containing color names, create a new array that contains a subset of colors starting from the second element to the end of the array using the slice() method.

const colors=['black','blue','red','black','yellow']
const colorsResult=colors.slice(1)
console.log(colorsResult);
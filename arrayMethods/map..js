// The map() method is a higher-order function available in many programming languages, including JavaScript. It is used to iterate over an array and perform a 
// transformation or operation on each element, returning a new array with the updated values. The map() method does not modify the original array; instead, it creates and returns a new array based on the transformation performed.


// newArray = array.map(callback(element, index, array) {
//     // return transformed value
// });


// 1 Given an array of numbers, create a new array where each number is multiplied by 2.

const numbers=[1,2,3,5,4,34]
const newArray=numbers.map((ele)=>{
    return ele*2
 })
console.log(newArray);

//Given an array of objects representing products, create a new array containing only the names of the products.

const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];
const updatedProduts=products.map((obj)=>{
    return obj.name
})
console.log(updatedProduts);

//Convert an array of strings to uppercase and store the results in a new array.

const names=['john','mark','joe','jamshad']
const updatedNames=names.map((ele)=>{
    return ele.toUpperCase()
})
console.log(updatedNames);

//Given an array of strings, create a new array where each string is reversed.

const strings = ['john', 'mark', 'joe', 'jamshad'];
const reversedStrings = strings.map((ele) => {
  let reversed = '';
  for (let i = ele.length - 1; i >= 0; i--) {
    reversed += ele[i];
  }
  return reversed;
});

console.log(reversedStrings);



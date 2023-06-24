// The filter() method is another array method in JavaScript that allows you to create a new array containing elements that pass a certain condition or criteria.
//  It iterates over each element of the array and returns a new array with only the elements that satisfy the condition specified in the callback function.

//syntax
// newArray = array.filter(callback(element, index, array) {
//     // return true or false
// });

//Given an array of numbers, create a new array containing only the even numbers.

const number=[1,2,3,4,5,6,34,23]
const evenNumbers=number.filter((ele)=>{
    return ele%2==0
})
console.log(evenNumbers);

//Given an array of strings, create a new array containing only the strings that have a length greater than 5.

const strings=['john', 'mark', 'joe', 'jamshad','santhosh','sarath']
const resultsStrings=strings.filter((ele)=>{
    return ele.length>5
})
console.log(resultsStrings);

//Given an array of objects representing products, create a new array containing only the products with a price less than $50.

const products = [
  { id: 1, name: 'Product 1', price: 25 },
  { id: 2, name: 'Product 2', price: 60 },
  { id: 3, name: 'Product 3', price: 35 },
  { id: 3, name: 'Product 4', price: 55 },
  { id: 3, name: 'Product 5', price: 34 },
];

const productsResult=products.filter((ele)=>{
    if (ele.price<50) {
        return ele
    }
})
console.log(productsResult);

// Given an array of numbers, create a new array containing only the numbers that are divisible by 3.

const Number=[1,2,3,4,5,7,7,6]
const NumberResult=Number.filter((ele)=>{
    return ele%3==0
})
console.log(NumberResult);


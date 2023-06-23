// forEach() that allows you to iterate over each element of the array and perform a specific action on it.

// The forEach() method is called on the array object. It takes a callback function as an argument, which is executed for each element of the array. 

// The callback function receives the current element as its parameter, and you can perform any desired action within the function.

//In JavaScript, the forEach() method accepts a callback function with up to three parameters: the current element, the index of the current element, and the array being traversed.

//Example One

const a=[1,2,3,4,6]

a.forEach(callback)

function callback(element,index,array) {
    console.log(element)
}
//using arrow function

a.forEach(element => {
    console.log(element)
});
//output of the two methods are same
/*
1
2
3
4
6
*/

a.forEach(callback)

function callback(element,index,array) {
    console.log(`a[${index}]=${element}`)
}

//output

/*
a[0]=1
a[1]=2
a[2]=3
a[3]=4
a[4]=6
*/

//to find the sum of numbers in the array 

let sum=0;
a.forEach(element=>{
    sum+=element})
console.log(sum);

//out put
//sum=16

//example two how many times letters reapeat in an array

const letters=['a','b','d','a','d','c']

const count={}

letters.forEach((element)=>{
    if (count[element]) {
        count[element]++
    }else{
        count[element]=1
    }
})
console.log(count)
// output
// {a: 2, b: 1, d: 2, c: 1}

//using forEach and reduce method 
// find total mark of each and every one
const students=[{ 
    name:"john",
    mark:[12,32,12,13,15]
},{
    name:"mark",
    mark:[23,12,21,32,21]
}]
       
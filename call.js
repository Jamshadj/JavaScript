//Call takes a function and a list of arguments as input, and it returns the value of the function call. The this keyword in the function call will be set to the first argument in the list.


const fullname=function(hello,initial){
   return  hello+' '+ this.firstName+' '+this.lastName+' '+initial
}
const obj={    
    firstName:"jamshad",
    lastName:"ali"
}
const display=fullname.call(obj,'Hello','j')
console.log(display);
